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
import { DirectorSettings } from '../model/DirectorSettings';

const isDirector = ref(false)
const directorNIMethod = ref<'StandardAnnualisedEarningsMethod' | 'AlternativeMethod' | null>(null)
const directorNIMethodControl = ref<null | { focus: () => null, reset: () => void }>(null)

const model = defineModel<DirectorSettings>()

watch(() => isDirector.value, (value) => {
    if (!value) {
        directorNIMethod.value = null
    }
    model.value = {
        isDirector: value,
        niCalculationMethod: directorNIMethod.value 
    }
    setTimeout(() => {
        if (value && directorNIMethodControl.value) {
            directorNIMethodControl.value.reset()
            directorNIMethodControl.value.focus()
        }
    })
})

watch(() => directorNIMethod.value, (value) => {
    model.value = {
        isDirector: isDirector.value,
        niCalculationMethod: value
    }
})

</script>

<template>
    <div class="basis-full flex flex-row gap-1 items-center flex-wrap">

        <toggle v-model="isDirector" label="Employee is a director" label-position="right" class="" />
        <dropdown v-model="directorNIMethod" class="sm:ml-8 max-sm:basis-full" ref="directorNIMethodControl" label="Director's NI calculation method"
            label-position="left" :options="[['StandardAnnualisedEarningsMethod', 'Standard annual earnings period method'], ['AlternativeMethod','Alternative method (per pay period)']]"
            :class="isDirector ? 'opacity-100 transition-opacity ease-in-out delay-150 duration-300' : 'opacity-0 invisible h-0'" />

        </div>
</template>

<style scoped></style>


