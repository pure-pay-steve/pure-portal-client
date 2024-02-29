//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.

export type PayRateUnits = "PerHour" | "PerDay" | "PerWeek" | "PerAnnum" | "PerPayPeriod"

export const payRateUnitsOptions = [
    ["PerAnnum", "Per Annum"],
    ["PerHour", "Per Hour"],
    ["PerDay", "Per Day"],
    ["PerWeek", "Per Week"],
    ["PerPayPeriod", "Per Pay Period"]
]