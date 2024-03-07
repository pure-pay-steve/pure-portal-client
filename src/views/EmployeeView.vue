<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script lang="ts" setup>

import { Ref, ref } from "vue"

import { Employee } from "../model/Employee"

const showPreview = ref(false)

const onShowPreview = () => showPreview.value = true

const onClose = () => showPreview.value = false

import EmployeeEditor from "../components/payroll/EmployeePanel.vue"
import FlexBreak from "../components/common/FlexBreak.vue"
import P45Preview from "../components/payroll/P45Preview.vue"

import { toEmployeeDto } from "../dto/EmployeeDto"
import { Http } from "../lib/Http"

const employee = ref({ descriptor: {} }) as Ref<Employee>

const emit = defineEmits(["save"])

const onSave = () => {
    emit("save", toEmployeeDto(employee.value))
    console.dir(employee.value, { depth: null, colors: true })
    const http = new Http("localhost", "api")
    http.post("employee", toEmployeeDto(employee.value))
}

const tabs = [
    { name: 'Personal Details', href: '/#/employee/1/overview', current: true },
    { name: 'Earnings & Deductions', href: '/#/employee/1/earnings-and-deductions', current: false },
    { name: 'Pension', href: '#', current: false },
    { name: 'Statutory', href: '#', current: false },
    { name: 'Documents', href: '#/employee/1/documents', current: false },
    { name: 'Onboarding', href: '/#/employee/1/onboarding', current: false }
]

const onClick = (event: PointerEvent) => {
    const target = event.target as any
    console.dir(event)
    const selectedTab = tabs.find(tab => tab.name === target.text)
    tabs.forEach(tab => tab.current = tab === selectedTab)
}

</script>

<template>
    <!-- <div class="xl:ml-48 xl:mr-96 mx-3"> -->
    <div class="mx-2">
        <div class="rounded py-2 mb-2 border border-none pl-4 font-semibold bg-slate-100"><span>Steve
                Wilkinson</span>
        </div>

        <div class="border border-feint rounded-md">

            <!-- <div> class="pc-4 py-b s2:px-6 lg:pl-4 font-semibold"> -->
            <div class="px-2">
                <div class="max-w-7xl">
                    <div class="sm:hidden">
                        <label for="tabs" class="sr-only">Select a tab</label>
                        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                        <select id="tabs" name="tabs"
                            class="block w-full rounded-md border-none bg-white/5 py-2 pl-3 pr-10 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm">
                            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
                        </select>
                    </div>
                    <div class="hidden sm:block">
                        <nav class="flex border-b border-white/10 py-4">
                            <ul role="list"
                                class="flex min-w-full flex-none gap-x-6 px-2 text-sm font-semibold leading-6 text-gray-400">
                                <li v-for="tab in tabs" :key="tab.name">
                                    <a :href="tab.href" :class="tab.current ? 'text-indigo-400' : ''"
                                        @click="onClick">{{
                                tab.name }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <RouterView v-slot="{ Component }">
                <component :is="Component" :modelValue="employee" />
            </RouterView>

        </div>
        <!-- <h1 className="text-3xl font-bold my-4">
            Employee
        </h1>
        <div class="flex flex-col">
            <employee-editor v-model="employee" v-for="emp in [{ name: 'Steve'}]" :name="emp.name" class="m-1"></employee-editor>
            <flex-break />
            <button @click="onSave" data-testid='submit'
                class="grow-0 self-end rounded-md bg-indigo-500 mt-5 px-3.5 py-2.5 mr-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>

        </div>  -->
    </div>
</template>

<style scoped></style>
