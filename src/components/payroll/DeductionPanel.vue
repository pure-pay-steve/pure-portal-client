<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref, defineModel } from "vue"

import { payRateUnitsOptions } from "../../model/PayRateUnits"
import { DeductionDefinition } from "../../model/DeductionDefinition"

import LabelledInput from "../common/LabelledInput.vue"
import FlexBreak from "../common/FlexBreak.vue"
import Dropdown from "../common/Dropdown.vue"
import YesNoToggle from "../common/YesNoToggle.vue"

defineProps({
    name: String
})

defineEmits([])

const deduction = defineModel<DeductionDefinition>({ required: true });

</script>

<template>
    <div class="border border-feint rounded-md">
        <div class="flex flex-row flex-wrap gap-x-6 gap-y-4 p-4">
            <labelled-input v-model="deduction.name" label="Deduction name" test-id="pay-category-name" />
            <labelled-input v-model="deduction.shortName" label="Short name" placeholder="Optional" test-id="short-name" />
            <dropdown v-model="deduction.units" label="Units" label-position="top"
                :options="payRateUnitsOptions as [string, string][]" test-id="units" />
            <flex-break />
            <yes-no-toggle v-model="deduction.reducesGrossPay" top-label="Reduces gross pay" left-label="No"
                right-label="Yes" test-id="subject-to-tax" />
            <yes-no-toggle v-model="deduction.reducesTaxablePay" top-label="Reduces taxable pay" left-label="No"
                right-label="Yes" test-id="is-net-to-gross" />
            <yes-no-toggle v-model="deduction.reducesNicablePay" top-label="Reduces Nicable pay" left-label="No"
                right-label="Yes" test-id="subject-to-ni" />
            <yes-no-toggle v-model="deduction.reducesPensionablePay" top-label="Reduces pensionable pay" left-label="No"
                right-label="Yes" test-id="is-pensionable" />
            <yes-no-toggle v-model="deduction.isUnderSalaryExchangeArrangement"
                top-label="Under salary exchange arrangement" left-label="No" right-label="Yes"
                test-id="treat-as-overtime" />
        </div>
    </div>
</template>

<style scoped></style>
