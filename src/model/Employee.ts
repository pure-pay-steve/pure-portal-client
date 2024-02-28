//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.                                          

import type { DateOnly } from "../lib/DateOnly"
import type { Address } from "./Address"
import type { TaxCode } from "./TaxCode"
import type { NiDetails } from "./NiDetails"
import type { DirectorSettings } from "./DirectorSettings"
import type { StudentLoanSettings } from "./StudentLoanSettings"
import { EmployeeDescriptor } from "./EmployeeDescriptor"

export type Employee = {
    descriptor: EmployeeDescriptor,
    dateOfBirth?: DateOnly,
    gender?: 'Male' | 'Female' | null,
    address?: Address,
    emailAddress: string,
    employmentStartDate?: DateOnly,
    taxCode?: TaxCode,
    niDetails?: NiDetails,
    directorSettings: DirectorSettings,
    studentLoanSettings: StudentLoanSettings
}