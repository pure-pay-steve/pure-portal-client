//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.                                          

export type DeductionDefinition = {
    name: string,
    shortName?: string,
    units: "PerHour" | "PerDay" | "PerAnnum" | "PerPayPeriod",
    reducesGrossPay: boolean,
    reducesTaxablePay: boolean,
    reducesNicablePay: boolean,
    reducesPensionablePay: boolean,
    isUnderSalaryExchangeArrangement: boolean
}