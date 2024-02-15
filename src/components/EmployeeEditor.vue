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

defineProps({
    name: String
})

defineEmits([])

const employee = defineModel<Employee>({required: true});

const onSave = () => {
    console.log('Saving...')

    if (employee.value) {
        //employee.value.title = title.value
    }

    console.log(employee.value)
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
            <date-selector v-model="employee.dateOfBirth" label="Date of birth"/>
            <gender-toggle v-model="employee.gender" class="ml-8" top-label="Gender" left-label="Male" right-label="Female"></gender-toggle>
            <flex-break />
            <address-finder v-model="employee.address" label="Address" size="full"/>
            <flex-break />
            <labelled-input size="long" label="Email"></labelled-input>
            <flex-break />
            <date-selector label="Employment start date" />
            <labelled-input label="Payroll Id" placeholder="Leave blank to auto-populate" />
            <flex-break />
            <tax-code />
            <flex-break />
            <ni-details />
            <flex-break />
            <directors-ni-selector class="flex-wrap" />
            <flex-break />
            <student-loan-selector />
            <flex-break />
            <!-- <button @click="onSave"
                class="justify-self-end rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button> -->
        </div>
    </div>
</template>

<style scoped></style>
