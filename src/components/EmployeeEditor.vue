<script setup lang="ts">

import { ref, defineModel } from 'vue'

import { Employee } from '../model/Employee'

import Collapsible from '../components/Collapsible.vue'
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

const title = ref('')
const emailControl = ref<null | { focus: () => void }>(null)

defineProps({
    name: String
})

defineEmits([])

const employee = defineModel<Employee>({required: true});

const onAddressResolved = (address: string) => {
    console.log('Address resolved:', address)

    setTimeout(() => {
        if (emailControl.value) {
            console.log('Focusing email control')
            emailControl.value.focus()            
        }
    })
}

const onDateChange = (date: string) => {
    console.log('Date changed:', date)
}

const onTaxCodeChange = (taxCode: string) => {
    console.log('Tax code changed:', taxCode)
}

const onNiDetailsChange = (niDetails: string) => {
    console.log('NI details changed:', niDetails)
}

</script>

<template>
    <div class="border border-feint rounded-md">
        <div class="flex flex-wrap gap-x-4 gap-y-2 p-4">
            <title-selector v-model="employee.title" label="Title"></title-selector>
            <flex-break />
            <labelled-input v-model="employee.firstName" label="First name" case-treatment="proper-name"></labelled-input>
            <labelled-input v-model="employee.middleName" label="Middle name(s)" case-treatment="proper-name"></labelled-input>
            <labelled-input v-model="employee.lastName" label="Surname" class="flex-grow" case-treatment="proper-name"></labelled-input>
            <flex-break />
            <labelled-input v-model="employee.preferredName" label="Preferred name" case-treatment="proper-name"></labelled-input>
            <flex-break />
            <date-selector v-model="employee.dateOfBirth" label="Date of birth" @change="onDateChange"/>
            <gender-toggle v-model="employee.gender" class="ml-8" top-label="Gender" left-label="Male" right-label="Female"></gender-toggle>
            <flex-break />
            <address-finder v-model="employee.address" label="Address" size="full" @resolved="onAddressResolved"/>
            <flex-break />
            <labelled-input v-model="employee.email" size="long" label="Email" ref="emailControl"></labelled-input>
            <flex-break />
            <date-selector v-model="employee.employmentStartDate" label="Employment start date" />
            <labelled-input v-model="employee.payrollId" label="Payroll Id" placeholder="Leave blank to auto-populate" />
            <flex-break />
            <tax-code v-model="employee.taxCode" @change="onTaxCodeChange"/>
            <flex-break />
            <ni-details v-model="employee.niDetails" @change="onNiDetailsChange" />
            <flex-break />
            <directors-ni-selector v-model="employee.directorSettings" class="flex-wrap" />
            <flex-break />
            <student-loan-selector />
            <flex-break />
        </div>
    </div>
</template>

<style scoped></style>
