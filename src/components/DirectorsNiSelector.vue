<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref, watch } from 'vue'

import Toggle from '../components/Toggle.vue'
import Dropdown from '../components/Dropdown.vue'

const isDirector = ref(false)
const directorNIMethodControl = ref<null | { focus: () => null }>(null)

watch(() => isDirector.value, (value) => {
    console.log('Director status updated', value)

    setTimeout(() => {
        if (directorNIMethodControl.value)
            directorNIMethodControl.value.focus()
    })
})

const test = (value: boolean) => {
    console.log('test', value)
}
</script>

<template>
    <div class="flex flex-row gap-1">

        <toggle label="Employee is a director" label-position="right" v-model="isDirector" class="self-center"
            @update:model-value="test" />
        <dropdown class="sm:ml-6 -mt-[0.6rem] flex-wrap" ref="directorNIMethodControl" label="Director's NI calculation method"
            label-position="left" :options="[['StandardAnnualisedEarningsMethod', 'Standard annual earnings period method'], ['AlternativeMethod','Alternative method (per pay period)']]"
            :class="isDirector ? 'opacity-100 transition-opacity ease-in-out delay-150 duration-300' : 'h-0 opacity-0 invisible'" />

        </div>
</template>

<style scoped></style>


