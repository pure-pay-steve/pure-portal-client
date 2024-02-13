<script setup lang="ts">

import { ref, watch } from 'vue'

import Collapsible from '../components/Collapsible.vue'
import LabelledInput from '../components/LabelledInput.vue'
import FlexBreak from '../components/FlexBreak.vue'
import DirectorsNiSelector from '../components/DirectorsNiSelector.vue'
import TaxCode from '../components/TaxCode.vue'
import NiDetails from './NiDetails.vue'
import DateSelector from './DateSelector.vue'
import StudentLoanSelector from './StudentLoanSelector.vue'


</script>

<template>
    <div class="mt-6">
        <div class="flex flex-wrap gap-x-4 gap-y-2">
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
    </div>
</template>

<style scoped></style>
