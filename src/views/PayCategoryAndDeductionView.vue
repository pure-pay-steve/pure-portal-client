<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { Ref, ref } from "vue"

import { PayCategoryDefinition } from "../model/PayCategoryDefinition"
import { DeductionDefinition } from "../model/DeductionDefinition"

import PayCategoryEditor from "../components/payroll/PayCategoryPanel.vue"
import DeductionEditor from "../components/payroll/DeductionPanel.vue"
import FlexBreak from "../components/common/FlexBreak.vue"

const payCategory = ref({}) as Ref<PayCategoryDefinition>
const deduction = ref({}) as Ref<DeductionDefinition>

const emit = defineEmits(["save"])

const onSave = () => {
    emit("save", payCategory.value)
    // console.log('Saving...')

    // if (employee.value) {
    //     console.dir(JSON.stringify(toEmployeeDto(employee.value)), {depth: null, colors: true})
    // }
}

</script>

<template>
    <div class="xl:ml-48 xl:mr-96 mx-3">
        <div class="flex flex-col">
            <h1 className="text-3xl font-bold my-4">
                Pay Category
            </h1>
            <pay-category-editor v-model="payCategory" class="m-1" />
            <h1 className="text-3xl font-bold my-4">
                Deduction
            </h1>
            <deduction-editor v-model="deduction" class="m-1" />
            <flex-break />
            <button @click="onSave" data-testid='submit'
                class="grow-0 self-end rounded-md bg-indigo-500 mt-5 px-3.5 py-2.5 mr-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>

        </div>
    </div>
</template>../model/PayCategoryDefinition

<style scoped></style>
