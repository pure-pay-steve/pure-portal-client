//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.                                          

import { type ICellRendererComp, type ICellRendererParams } from "ag-grid-community"
import { EmployeeDescriptor } from "../../model/EmployeeDescriptor"

export class EmployeeDescriptorRenderer implements ICellRendererComp {
    eGui: any

    getHtml(params: any) {
        const value = params.column ? params.data[params.column.getColId()] : ""
        return `<span>${this.getDescriptor(params, value)}</span>`
    }

    init(params: ICellRendererParams) {
        this.eGui = document.createElement('div')
        this.eGui.innerHTML = this.getHtml(params)
    }

    getGui() {
        return this.eGui;
    }


    refresh(params: ICellRendererParams) {
        this.eGui.innerHTML = this.getHtml(params);
        return true;
    }

    destroy() {
    }

    private getDescriptor(params: any, value: EmployeeDescriptor) {
        if (params.node.rowPinned === "bottom")
            return "TOTALS"
        return `${value.firstName} ${value.lastName}`
    }
}
