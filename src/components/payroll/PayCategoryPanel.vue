<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref, defineModel } from "vue"

import { PayCategory } from "../../model/PayCategory"

import LabelledInput from "../common/LabelledInput.vue"
import FlexBreak from "../common/FlexBreak.vue"
import Dropdown from "../common/Dropdown.vue"
import YesNoToggle from "../common/YesNoToggle.vue"

const unitsOptions = [
    ["PerAnnum", "Per Annum"],
    ["PerHour", "Per Hour"],
    ["PerDay", "Per Day"],
    ["PerPayPeriod", "Per Pay Period"]
]

defineProps({
    name: String
})

defineEmits([])

const payCategory = defineModel<PayCategory>({ required: true });

</script>

<template>
    <div class="border border-feint rounded-md">
        <div class="flex flex-row flex-wrap gap-x-6 gap-y-4 p-4">
            <labelled-input v-model="payCategory.name" label="Pay category name" test-id="pay-category-name" />
            <labelled-input v-model="payCategory.shortName" label="Short name" placeholder="Optional"
                test-id="short-name" />
            <dropdown v-model="payCategory.units" label="Units" label-position="top"
                :options="unitsOptions as [string, string][]" test-id="units" />
            <flex-break />
            <yes-no-toggle v-model="payCategory.isSubjectToTax" top-label="Subject to tax" left-label="No" right-label="Yes"
                test-id="subject-to-tax" />
            <yes-no-toggle v-model="payCategory.isSubjectToNi" top-label="Subject to NI" left-label="No" right-label="Yes"
                test-id="subject-to-ni" />
            <yes-no-toggle v-model="payCategory.isPensionable" top-label="Pensionable" left-label="No" right-label="Yes"
                test-id="is-pensionable" />
            <yes-no-toggle v-model="payCategory.isNetToGross" top-label="Net to gross payment" left-label="No"
                right-label="Yes" test-id="is-net-to-gross" />
            <yes-no-toggle v-model="payCategory.isTreatedAsOvertime" top-label="Treat as overtime" left-label="No"
                right-label="Yes" test-id="treat-as-overtime" />
        </div>
    </div></template>

<style scoped></style>
