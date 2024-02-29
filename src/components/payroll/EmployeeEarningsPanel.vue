<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref, defineModel } from "vue"

import { DeductionDefinition } from "../../model/DeductionDefinition"

defineProps({
    name: String
})

defineEmits([])

// const deduction = defineModel<DeductionDefinition>({ required: true });
const earnings = [
{ id: "1", name: "Salary", details: "£50,000.00 per annum" },
{ id: "2", name: "Statutory Maternity Pay", details: "£172.48 per week" },
{ id: "3", name: "Statutory Sickness Pay", details: " £109.40 per week" },
{ id: "4", name: "Bonus", details: "fixed amount" },
{ id: "5", name: "Fire Marshall Allowance", details: "£1.50 per day" }
]

</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
                <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title,
                    email and role.</p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button type="button"
                    class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
                    user</button>
            </div>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col"
                                    class="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Earnings</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr v-for="person in earnings" :key="person.id">
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 ml-4"><strong>{{
                                    person.name }}:</strong>&nbsp;{{ person.details }}</td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"><a href="#">Edit</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped></style>
