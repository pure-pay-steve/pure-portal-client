<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->


<script lang="ts" setup>

import { PencilIcon, TrashIcon } from '@heroicons/vue/20/solid'
import { ref } from "vue";
import PopoutPanel from "../common/PopoutPanel.vue";

const onEdit = () => editMode.value = true

const editMode = ref(false)

</script>

<template>
    <div>
        <popout-panel :open="editMode" />

        <div class="flex flex-col grow gap-y-4p-4 w-[60vw]">
            <div class="flex flex-col grow gap-x-16 p-4"
                style='font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;'>
                <div class="flex flex-col basis-6/12"><span class="border-b pb-1 mb-4 font-bold">Earnings</span>
                    <div class="grid grid-cols-[1fr,auto,auto,auto,auto,auto] gap-x-4 gap-y-2 text-sm">
                        <div class="">Salary</div>
                        <div>-</div>
                        <div>-</div>
                        <div>£1666.67</div>
                        <button class="border rounded h-5 w-5 p-[0.2rem] border-blue-500"><pencil-icon
                                class="text-blue-400" @click="onEdit" /></button>
                        <button class="border rounded h-5 w-5 p-[0.2rem] border-blue-500"><trash-icon
                                class="text-blue-400" /></button>
                        <div>Hourly Pay (weekends)</div>
                        <div>16.5 hours</div>
                        <div>£8.72</div>
                        <div>£501.40</div>
                        <button class="border rounded h-5 w-5 p-[0.2rem] border-blue-500"><pencil-icon
                                class="text-blue-400" /></button>
                        <button class="border rounded h-5 w-5 p-[0.2rem] border-blue-500"><trash-icon
                                class="text-blue-400" /></button>
                        <div class="col-span-6 text-blue-700 underline underline-offset-4" tabindex="0" @click="onEdit">Add earnings</div>
                    </div>
                </div>
                <div class="flex flex-col basis-6/12"><span class="border-b pb-1 mb-4 font-bold mt-8">Deductions</span>
                    <div class="grid grid-cols-[1fr,auto,auto,auto,auto,auto] gap-x-4 gap-y-2 text-sm">
                        <div class="">Loan repayment</div>
                        <div>Per month</div>
                        <div>-</div>
                        <div>£100.00</div>
                        <button class="border rounded h-5 w-5 p-[0.2rem] border-blue-500"><pencil-icon
                                class="text-blue-400" /></button>
                        <button class="border rounded h-5 w-5 p-[0.2rem] border-blue-500"><trash-icon
                                class="text-blue-400" /></button>
                        <div>Company savings scheme</div>
                        <div>Per month</div>
                        <div>-</div>
                        <div>£50.00</div>
                        <button class="border rounded h-5 w-5 p-[0.2rem] border-blue-500"><pencil-icon
                                class="text-blue-400" /></button>
                        <button class="border rounded h-5 w-5 p-[0.2rem] border-blue-500"><trash-icon
                                class="text-blue-400" /></button>
                        <div class="col-span-6 text-blue-700 underline underline-offset-4">Add deduction</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>