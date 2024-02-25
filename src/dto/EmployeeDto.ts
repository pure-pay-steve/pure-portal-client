//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.                                          

import { DateOnly } from "../lib/DateOnly"
import { Address } from "../model/Address"
import { Employee } from "../model/Employee"

export type EmployeeDto = {
    id?: string
    title?: string
    firstName?: string
    middleNames?: string
    lastName?: string
    preferredName?: string
    dateOfBirth?: string
    gender?: string
    address?: Address
    emailAddress?: string
    employmentStartDate?: string
    payrollId?: string
    taxCode?: string
    taxCodeIsNonCumulative?: boolean
    niNumber?: string
    niCategory?: string
    studentLoanInfo?: {
        studentLoanType?: string,
        hasPostGradLoan: boolean
    },
    isDirector: boolean
    directorsNiCalculationMethod?: string
}

export function toEmployee(dto: EmployeeDto): Employee {
    return {
        id: dto.id || '',
        title: dto.title,
        firstName: dto.firstName || '',
        middleNames: dto.middleNames,
        lastName: dto.lastName || '',
        preferredName: dto.preferredName,
        dateOfBirth: dto.dateOfBirth ? DateOnly.fromIso(dto.dateOfBirth) : undefined,
        gender: dto.gender === 'Male' || dto.gender === 'Female' ? dto.gender : null,
        address: dto.address,
        emailAddress: dto.emailAddress || '',
        employmentStartDate: dto.employmentStartDate ? DateOnly.fromIso(dto.employmentStartDate) : undefined,
        payrollId: dto.payrollId,
        taxCode: {
            taxCode: dto.taxCode || '',
            isNonCumulative: dto.taxCodeIsNonCumulative ?? false
        },
        niDetails: dto.niNumber || dto.niCategory ? {
            niNumber: dto.niNumber,
            niCategory: dto.niCategory
        } : undefined,
        directorSettings: {
            isDirector: dto.isDirector,
            niCalculationMethod: dto.directorsNiCalculationMethod as 'StandardAnnualisedEarningsMethod' | 'AlternativeMethod' | null
        },
        studentLoanSettings: {
            studentLoanPlanType: dto.studentLoanInfo?.studentLoanType as 'Plan1' | 'Plan2' | 'Plan4' | null,
            hasPostGraduateLoan: dto.studentLoanInfo?.hasPostGradLoan || false
        }
    };
}

export function toEmployeeDto(employee: Employee): EmployeeDto {
    return {
        id: employee.id,
        title: employee.title,
        firstName: employee.firstName,
        middleNames: employee.middleNames,
        lastName: employee.lastName,
        preferredName: employee.preferredName,
        dateOfBirth: employee.dateOfBirth?.getIsoString(),
        gender: employee.gender ?? undefined,
        address: employee.address,
        emailAddress: employee.emailAddress,
        employmentStartDate: employee.employmentStartDate?.getIsoString(),
        payrollId: employee.payrollId,
        taxCode: employee.taxCode?.taxCode,
        taxCodeIsNonCumulative: employee.taxCode?.isNonCumulative,
        niNumber: employee.niDetails?.niNumber,
        niCategory: employee.niDetails?.niCategory,
        studentLoanInfo: employee.studentLoanSettings ? {
            studentLoanType: employee.studentLoanSettings.studentLoanPlanType ?? undefined,
            hasPostGradLoan: employee.studentLoanSettings.hasPostGraduateLoan
        } :  {
            studentLoanType: undefined,
            hasPostGradLoan: false 
        },
        isDirector: employee.directorSettings ? employee.directorSettings.isDirector : false,
        directorsNiCalculationMethod: employee.directorSettings?.niCalculationMethod ?? undefined
    };
}