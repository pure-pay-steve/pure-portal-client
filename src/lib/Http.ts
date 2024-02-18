//
// Copyright (c) 2023 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.

import type { ITokenProvider } from "./TokenProvider"

export type HttpParam = {
    name: string
    value: string
}

export class Http {

    private server: string
    private baseUrl: string
    private tokenProvider?: ITokenProvider
    private activityCallback?: (activity: string) => void

    constructor(server: string, baseUrl: string, tokenProvider?: ITokenProvider, activityCallback?: (activity: string) => void) {
        this.server = server
        this.baseUrl = baseUrl
        this.tokenProvider = tokenProvider
        this.activityCallback = activityCallback
    }

    async get<T>(endpoint: string, params?: HttpParam[]): Promise<T> {
        if (this?.activityCallback != null) this.activityCallback(endpoint)

        const fetchResult = await fetch(this.buildUrl(endpoint, params), {
            method: 'get',
            headers: await this.buildHeaders()
        })

        if (fetchResult.ok) {
            return await fetchResult.json() as T
        } else {
            return Promise.reject(fetchResult)
        }
    }

    async post<TRequest, TResponse>(endpoint: string, body: TRequest): Promise<TResponse> {
        if (this?.activityCallback != null) this.activityCallback(endpoint)

        const fetchResult = await fetch(this.buildUrl(endpoint), {
            method: 'post',
            body: JSON.stringify(body),
            headers: await this.buildHeaders(true)
        })

        if (fetchResult.ok) {
            if (fetchResult.status == 204) {
                return Promise.resolve({} as TResponse)
            }
            return await fetchResult.json() as TResponse
        } else {
            return Promise.reject(fetchResult)
        }
    }

    private async buildHeaders(hasBody: boolean = false): Promise<Headers> {
        const headers: HeadersInit = {}

        if (hasBody) {
            headers['Content-Type'] = 'application/json'
        }

        if (!(this.tokenProvider == null)) {
            headers['Authorization'] = `Bearer ${await this.tokenProvider.getToken()}`
        }

        return new Headers(headers)
    }

    private buildUrl(endpoint: string, params?: HttpParam[]): string {
        if (this.baseUrl?.length > 0) {
            return `${this.server}/${this.baseUrl}/${endpoint}${this.paramsToString(params)}`
        } else
            return `${this.server}/${endpoint}${this.paramsToString(params)}`
    }

    private paramsToString(params?: HttpParam[]): string {
        if (params == null || params == undefined) {
            return ''
        }

        let paramResult = ''

        params.forEach((param, index) => {
            paramResult += index == 0 ? '?' : '&'
            paramResult += `${param.name}=${param.value}`
        })

        return paramResult
    }
}