//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.   

import { DateTime } from 'luxon'

export type Year = number
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31

export class DateOnly {
    private year: Year
    private month: Month
    private day: Day

    private static readonly minValue = new DateOnly(1, 1, 1)

    constructor(year: Year, month: Month, day: Day) {
        if (year < 1) throw Error('Invalid year')
        if (month < 1 || month > 12) throw Error('Invalid month')
        if (day < 1 || day > 31) throw Error('Invalid day')

        const firstDayOfMonth = DateTime.utc(year, month, 1)

        if (firstDayOfMonth == undefined || firstDayOfMonth.daysInMonth == undefined) throw Error('Invalid date')

        if (firstDayOfMonth.daysInMonth < day) throw Error('Invalid day')

        this.year = year
        this.month = month
        this.day = day
    }

    static today(): DateOnly {
        const today = new Date()
        return new DateOnly(today.getFullYear(), today.getMonth() + 1 as Month, today.getDate() as Day)
    }

    static fromIso(isoDate: string): DateOnly {
        const dateParts = isoDate.split('-')

        if (!dateParts ||
            dateParts.length != 3 ||
            !dateParts.every(d => this.isNumeric(d))) {
            throw Error(`Unrecognised date <<${isoDate}>>`)
        }

        const year = +dateParts[0]

        if (!this.isValidYear(year)) {
            throw Error(`Invalid year in date <<${isoDate}>>`)
        }

        const month = +dateParts[1] as Month

        if (!this.isValidMonth(month)) {
            throw Error(`Invalid month in date <<${isoDate}>>`)
        }

        const day = +dateParts[2] as Day

        if (!this.isValidDay(day)) {
            throw Error(`Invalid month in date <<${isoDate}>>`)
        }

        return new DateOnly(year, month, day)
    }

    static fromDate(date: Date): DateOnly {
        return new DateOnly(date.getFullYear(), date.getMonth() + 1 as Month, date.getDate() as Day)
    }

    addDays(days: number): DateOnly {
        const date = DateTime.utc(this.year, this.month, this.day)
        const newDate = date.plus({ days: days })
        return new DateOnly(newDate.year, newDate.month as Month, newDate.day as Day)
    }

    getDateString(): string {
        return `${this.day.toLocaleString('en-GB', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })}/${this.month.toLocaleString('en-GB', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })}/${this.year.toLocaleString('en-GB', {
            minimumIntegerDigits: 4,
            useGrouping: false
        })}`
    }

    getIsoString(): string {
        return `${this.year.toLocaleString('en-GB', {
            minimumIntegerDigits: 4,
            useGrouping: false
        })}-${this.month.toLocaleString('en-GB', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })}-${this.day.toLocaleString('en-GB', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })}`
    }

    isBetween(startDate: DateOnly, endDate: DateOnly): boolean {
        return startDate != null && endDate != null ?
            startDate.compare(this) >= 0 && endDate.compare(this) <= 0 :
            false
    }

    compare(otherDate: DateOnly, reverse: boolean = false): number {
        if (otherDate == null || otherDate == undefined) {
            return reverse ? 1 : -1
        }

        if (this.year < otherDate.year) {
            return reverse ? -1 : 1
        }

        if (this.year > otherDate.year) {
            return reverse ? 1 : -1
        }

        if (this.month < otherDate.month) {
            return reverse ? -1 : 1
        }

        if (this.month > otherDate.month) {
            return reverse ? 1 : -1
        }

        if (this.day < otherDate.day) {
            return reverse ? -1 : 1
        }

        if (this.day > otherDate.day) {
            return reverse ? 1 : -1
        }

        return 0
    }

    static getMinValue(): DateOnly {
        return this.minValue
    }

    private static isValidDay(day: number): boolean {
        return day > 0 && day <= 31
    }

    private static isValidMonth(month: number): boolean {
        return month > 0 && month <= 12
    }

    private static isValidYear(year: number): boolean {
        return year >= 0 && year <= 2100
    }

    private static isNumeric(value: string) {
        return /^\d+$/.test(value)
    }
}