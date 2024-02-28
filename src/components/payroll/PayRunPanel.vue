<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref, defineModel } from "vue"

import { EmployeePayRunEntry } from "../../model/EmployeePayRunEntry"

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

const payRunEntries = defineModel<EmployeePayRunEntry[]>({ required: true });

</script>

<template>
    <div class="border border-feint rounded-md">
        <div class="pay-run-grid grid-flow-row auto-cols-max gap-x-6 gap-y-4 p-4">
            <div>
                
            </div>
            <div v-for="payRunEntry in payRunEntries">
                
            </div>
        </div>
    </div></template>

<style scoped>

.pay-run-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
}

</style>
