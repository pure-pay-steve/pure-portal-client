<script setup lang="ts">

import { ref } from 'vue'
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

defineProps({
    name: String
})

defineEmits([])

</script>

<template>
    <div class="border border-feint rounded-md">
        <collapsible :header="name" class="pb-4">
            <div class="flex flex-wrap gap-x-4 gap-y-2">
            <title-selector label="Title"></title-selector>
            <flex-break />
            <labelled-input label="First name" case-treatment="proper-name"></labelled-input>
            <labelled-input label="Middle name(s)" case-treatment="proper-name"></labelled-input>
            <labelled-input label="Surname" class="flex-grow" case-treatment="proper-name"></labelled-input>
            <flex-break />
            <labelled-input label="Preferred name" case-treatment="proper-name"></labelled-input>
            <flex-break />
            <date-selector label="Date of birth" />
            <gender-toggle class="ml-8" top-label="Gender" left-label="Male" right-label="Female"></gender-toggle>
            <flex-break />
            <labelled-input label="Address" class="w-full"></labelled-input>
            <flex-break />
            <labelled-input size="long" label="Email"></labelled-input>
            <flex-break />
            <date-selector label="Employment start date" />
            <labelled-input label="Payroll Id" placeholder="Leave blank to auto-populate"/>
            <flex-break />
            <tax-code />
            <flex-break />
            <ni-details />
            <flex-break />
            <directors-ni-selector class="flex-wrap" />
            <flex-break />
            <student-loan-selector />
        </div>
        </collapsible>
    </div>
</template>

<style scoped></style>
