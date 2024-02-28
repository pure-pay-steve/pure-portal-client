<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { Ref, ref } from "vue"

import { EmployeePayRunEntry } from "../model/EmployeePayRunEntry"

import PayRunPanel from "../components/payroll/PayRunPanel.vue"
import FlexBreak from "../components/common/FlexBreak.vue"

const model = ref([]) as Ref<EmployeePayRunEntry[]>

model.value = [
    { descriptor: { id:"1", title: "Mr", firstName: "Steve", lastName: "Smith" }, totalGrossPay: 1000.00, totalTaxableEarnings: 800.00, incomeTax: 200.00, totalNetPay: 678.00, employeePension: 0.00, employeesNi: 122.00, employerPension: 0.00, employersNi: 100.00, studentLoanDeductions: 0.00, postTaxDeductions: 0.00, totalNicableEarnings: 1000.00, preTaxDeductions: 0.00},
    { descriptor: { id:"2", title: "Mr", firstName: "John", lastName: "Smith" }, totalGrossPay: 1000.00, totalTaxableEarnings: 800.00, incomeTax: 200.00, totalNetPay: 678.00, employeePension: 0.00, employeesNi: 122.00, employerPension: 0.00, employersNi: 100.00, studentLoanDeductions: 0.00, postTaxDeductions: 0.00, totalNicableEarnings: 1000.00, preTaxDeductions: 0.00},
    { descriptor: { id:"3", title: "Mr", firstName: "Jane", lastName: "Smith" }, totalGrossPay: 1000.00, totalTaxableEarnings: 800.00, incomeTax: 200.00, totalNetPay: 678.00, employeePension: 0.00, employeesNi: 122.00, employerPension: 0.00, employersNi: 100.00, studentLoanDeductions: 0.00, postTaxDeductions: 0.00, totalNicableEarnings: 1000.00, preTaxDeductions: 0.00},
    { descriptor: { id:"4", title: "Mr", firstName: "Sally", lastName: "Smith" }, totalGrossPay: 1000.00, totalTaxableEarnings: 800.00, incomeTax: 200.00, totalNetPay: 678.00, employeePension: 0.00, employeesNi: 122.00, employerPension: 0.00, employersNi: 100.00, studentLoanDeductions: 0.00, postTaxDeductions: 0.00, totalNicableEarnings: 1000.00, preTaxDeductions: 0.00},
]

const emit = defineEmits(["save"])

const onSave = () => {
    emit("save", model.value)
    // console.log('Saving...')

    // if (employee.value) {
    //     console.dir(JSON.stringify(toEmployeeDto(employee.value)), {depth: null, colors: true})
    // }
}

</script>

<template>
    <div class="xl:ml-48 xl:mr-96 mx-3">
        <h1 className="text-3xl font-bold my-4">
            Pay Run
        </h1>
        <div class="flex flex-col">
            <pay-run-panel v-model="model" class="m-1" />
            <flex-break />
            <button @click="onSave" data-testid='submit'
                class="grow-0 self-end rounded-md bg-indigo-500 mt-5 px-3.5 py-2.5 mr-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>

        </div>
    </div>
</template>

<style scoped></style>
