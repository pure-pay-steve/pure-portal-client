//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.                                          

export type Address = {
    postcode: string,
    formatted_address: string[],
    thoroughfare: string,
    building_name: string,
    sub_building_name: string,
    sub_building_number: string,
    building_number: string,
    line_1: string,
    line_2: string,
    line_3: string,
    line_4: string,
    locality: string,
    town_or_city: string,
    county: string,
    district: string,
    country: string,
    residential: boolean,
    displayValue: string
  }