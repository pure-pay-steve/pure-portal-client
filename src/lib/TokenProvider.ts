//
// Copyright (c) 2023 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.

import { acquireToken } from "@/auth/msalAuth"
import type { PublicClientApplication } from "@azure/msal-browser"

export interface ITokenProvider {
    getToken(): Promise<string>
}

export class TokenProvider implements ITokenProvider {

    private msalInstance: PublicClientApplication
    private scopes: string[]

    constructor(instance: PublicClientApplication, scopes: string[]) {
        this.msalInstance = instance
        this.scopes = scopes
    }

    async getToken(): Promise<string> {
        return await acquireToken(this.msalInstance, this.scopes)
    }
}