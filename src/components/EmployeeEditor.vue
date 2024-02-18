<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref, defineModel } from 'vue'

import { Employee } from '../model/Employee'

import LabelledInput from '../components/LabelledInput.vue'
import FlexBreak from '../components/FlexBreak.vue'
import TitleSelector from '../components/TitleSelector.vue'
import GenderToggle from './GenderToggle.vue'
import DateSelector from './DateSelector.vue'
import TaxCode from './TaxCode.vue'
import NiDetails from './NiDetails.vue'
import DirectorsNiSelector from './DirectorsNiSelector.vue'
import StudentLoanSelector from './StudentLoanSelector.vue'
import AddressFinder from './AddressFinder.vue'

const emailControl = ref<null | { focus: () => void }>(null)

defineProps({
    name: String
})

defineEmits([])

const employee = defineModel<Employee>({required: true});

const onAddressResolved = () => {
    setTimeout(() => {
        if (emailControl.value) {
            emailControl.value.focus()            
        }
    })
}

</script>

<template>
    <div class="border border-feint rounded-md">
        <div class="flex flex-row flex-wrap gap-x-3 gap-y-3 p-4">
            <title-selector v-model="employee.title" label="Title"></title-selector>
            <flex-break />
            <labelled-input v-model="employee.firstName" label="First name" case-treatment="proper-name"></labelled-input>
            <labelled-input v-model="employee.middleNames" label="Middle name(s)" case-treatment="proper-name"></labelled-input>
            <labelled-input v-model="employee.lastName" label="Surname" class="flex-grow" case-treatment="proper-name"></labelled-input>
            <flex-break />
            <labelled-input v-model="employee.preferredName" label="Preferred name" case-treatment="proper-name"></labelled-input>
            <flex-break />
            <date-selector v-model="employee.dateOfBirth" label="Date of birth" />
            <gender-toggle v-model="employee.gender" class="sm:ml-8" top-label="Gender" left-label="Male" right-label="Female"></gender-toggle>
            <flex-break />
            <address-finder v-model="employee.address" label="Address" size="full" @resolved="onAddressResolved"/>
            <labelled-input v-model="employee.emailAddress" size="long" label="Email" ref="emailControl"></labelled-input>
            <flex-break />
            <date-selector v-model="employee.employmentStartDate" label="Employment start date" />
            <labelled-input v-model="employee.payrollId" label="Payroll Id" placeholder="Leave blank to auto-populate" />
            <flex-break />
            <tax-code v-model="employee.taxCode"/>
            <flex-break />
            <ni-details v-model="employee.niDetails"/>
            <flex-break />
            <directors-ni-selector v-model="employee.directorSettings" />
            <student-loan-selector v-model="employee.studentLoanSettings" />
            <flex-break />
        </div>
    </div>
</template>

<style scoped></style>
