<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { Ref, ref } from "vue"

import { Employee } from "../model/Employee"

import EmployeePayPanel from "../components/payroll/EmployeePayPanel.vue"
import FlexBreak from "../components/common/FlexBreak.vue"

import { toEmployeeDto } from "../dto/EmployeeDto"
import { Http } from "../lib/Http"

const employee = ref({ descriptor: {}}) as Ref<Employee>

const emit = defineEmits(["save"])

const onSave = () => {
    emit("save", toEmployeeDto(employee.value))
    console.dir(employee.value, {depth: null, colors: true})
    const http = new Http("localhost", "api")
    http.post("employee", toEmployeeDto(employee.value))
}

</script>

<template>
    <div class="xl:ml-48 xl:mr-96 mx-3">
        <h1 className="text-3xl font-bold my-4">
            Employee pay and deductions
        </h1>
        <div class="flex flex-col">
            <employee-pay-panel name=""/>
            <flex-break />
            <button @click="onSave" data-testid='submit'
                class="grow-0 self-end rounded-md bg-indigo-500 mt-5 px-3.5 py-2.5 mr-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>

        </div>
    </div>
</template>

<style scoped></style>
