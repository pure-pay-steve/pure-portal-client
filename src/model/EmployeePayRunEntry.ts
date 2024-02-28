//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.                                          

import { EmployeeDescriptor } from "./EmployeeDescriptor"

export type EmployeePayRunEntry = {
    descriptor: EmployeeDescriptor,
    totalHours?: number,
    totalGrossPay: number,
    totalTaxableEarnings: number,
    totalNicableEarnings: number,
    totalNetPay: number,
    incomeTax: number,
    employeesNi: number,
    employersNi: number,
    employeePension: number,
    employerPension: number,
    studentLoanDeductions: number,
    preTaxDeductions: number,
    postTaxDeductions: number
}