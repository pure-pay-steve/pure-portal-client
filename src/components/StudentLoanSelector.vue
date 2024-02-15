<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { Ref, ref } from 'vue'

import Dropdown from './Dropdown.vue'
import YesNoToggle from './YesNoToggle.vue'

const studentLoanTypes = [['', 'None'], ['Plan1', 'Plan 1'], ['Plan2', 'Plan 2'], ['Plan4', 'Plan 4']] as [string, string][]

const onDropdownKeypress = (key: KeyboardEvent, control: Ref<HTMLSelectElement | null>, result: Ref<boolean>) => {
    for (let i = 0; i < studentLoanTypes.length; i++) {
        if (studentLoanTypes[i][0].includes(key.key)) {
            if (control.value) {
                control.value.selectedIndex = i
            }
            result.value = true
            return
        }
    }
}

</script>

<template>
    <div class="flex flex-row gap-x-6 items-start">
        <dropdown class="" label="Student loan type" label-position="top" omit-select-option-option
            :options="studentLoanTypes" @keypress="onDropdownKeypress" />
        <yes-no-toggle class="" top-label="Postgraduate loan" left-label="No" right-label="Yes" />
    </div>
</template>

<style scoped></style>
