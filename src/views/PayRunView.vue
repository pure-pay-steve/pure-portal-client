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
import EmployeePayRunDetails from "../components/payroll/EmployeePayRunDetails.vue"
import PayslipPreview from "../components/payroll/PayslipPreview.vue"

const previewModel = ref({}) as Ref<EmployeePayRunEntry>
const model = ref([]) as Ref<EmployeePayRunEntry[]>
const showPreview = ref(false)

model.value = [
    { descriptor: { id: "1", title: "Mr", firstName: "Steve", lastName: "Smith" }, totalGrossPay: 1000.00, totalTaxableEarnings: 800.00, incomeTax: 200.00, totalNetPay: 678.00, employeePension: 0.00, employeesNi: 122.00, employerPension: 0.00, employersNi: 100.00, studentLoanDeductions: 0.00, postTaxDeductions: 0.00, totalNicableEarnings: 1000.00, preTaxDeductions: 0.00 },
    { descriptor: { id: "2", title: "Mr", firstName: "John", lastName: "Smith" }, totalGrossPay: 1000.00, totalTaxableEarnings: 800.00, incomeTax: 200.00, totalNetPay: 678.00, employeePension: 0.00, employeesNi: 122.00, employerPension: 0.00, employersNi: 100.00, studentLoanDeductions: 0.00, postTaxDeductions: 0.00, totalNicableEarnings: 1000.00, preTaxDeductions: 0.00 },
    { descriptor: { id: "3", title: "Mr", firstName: "Jane", lastName: "Smith" }, totalGrossPay: 1000.00, totalTaxableEarnings: 800.00, incomeTax: 200.00, totalNetPay: 678.00, employeePension: 0.00, employeesNi: 122.00, employerPension: 0.00, employersNi: 100.00, studentLoanDeductions: 0.00, postTaxDeductions: 0.00, totalNicableEarnings: 1000.00, preTaxDeductions: 0.00 },
    { descriptor: { id: "4", title: "Mr", firstName: "Sally", lastName: "Smith" }, totalGrossPay: 1000.00, totalTaxableEarnings: 800.00, incomeTax: 200.00, totalNetPay: 678.00, employeePension: 0.00, employeesNi: 122.00, employerPension: 0.00, employersNi: 100.00, studentLoanDeductions: 0.00, postTaxDeductions: 0.00, totalNicableEarnings: 1000.00, preTaxDeductions: 0.00 },
]

const emit = defineEmits(["save"])

const onSave = () => {
    emit("save", model.value)
    // console.log('Saving...')

    // if (employee.value) {
    //     console.dir(JSON.stringify(toEmployeeDto(employee.value)), {depth: null, colors: true})
    // }
}

const onShowPreview = () => showPreview.value = true

const onClose = () => showPreview.value = false

const onSelectionChange = (selected: EmployeePayRunEntry) => {
    console.log('selected' + selected?.descriptor?.id)
    if (selected)
        previewModel.value = selected
}

</script>

<template>
    <div class="mx-3">
        <!-- <h1 className="text-3xl font-bold my-4">
            Pay Run
        </h1> -->
        <payslip-preview v-if="showPreview" @close="onClose" />
        <div class="flex flex-col">
            <div class="flex flex-row gap-x-8 rounded py-2 mb-2 border border-none pl-4 font-semibold bg-slate-300">
                <span class="grow justify-self-left text-slate-700">Weekly Pay Run</span><span
                    class="grow justify-self-center text-center">
                    01/01/2024 - 31/01/2024 (M10)</span><span
                    class="grow justify-self-end content-end text-right mr-5">Pay
                    Day: 20/01/2024</span>
            </div>
            <pay-run-panel v-model="model" class="m-1" @on-selection-changed="onSelectionChange" />
            <flex-break />
            <employee-pay-run-details v-if="previewModel?.descriptor != undefined" class="mt-2"
                @show-preview="onShowPreview" v-model="previewModel" />

        </div>
    </div>
</template>

<style scoped></style>
