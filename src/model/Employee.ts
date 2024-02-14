//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.                                          

import type { DateOnly } from "../lib/DateOnly"
import type { Address } from "./Address"
import type { TaxCode } from "./TaxCode"

export type Employee = {
    id: string,
    title?: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    preferredName?: string,
    dateOfBirth?: DateOnly,
    gender?: 'Male' | 'Female' | null,
    address?: Address,
    email: string,
    employmentStartDate?: DateOnly,
    payrollId: string,
    taxCode: TaxCode,
    niNumber: string,
    niCategory: string,
    isDirector: boolean,
    directorsNiCalculationMethod: 'StandardAnnualisedEarningsMethod' | 'AlternativeMethod',
    studentLoanType?: 'Plan1' | 'Plan2' | 'Plan4',
    hasPostGraduateLoan: boolean
}