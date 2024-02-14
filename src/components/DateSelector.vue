<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref, watch } from 'vue'
import { v4 as uuid } from 'uuid'

import { DateOnly } from '../lib/DateOnly';

const id = ref(uuid())
const date = ref<string | null>(null)

defineProps({
    modelValue: DateOnly,
    label: String
})

const emit = defineEmits(['update:modelValue'])

watch(() => date.value, (value) => {
    console.log('date.value', value)
    const dateOnly = DateOnly.fromIso(value as string)
    emit('update:modelValue', dateOnly)
})


</script>

<template>
    <div class="sm:col-span-2 w-48">
        <label :for="id" class="block text-sm font-medium leading-3 text-inputlabel">{{ label }}</label>
        <div class="mt-2">
            <input v-model="date" type="date" name="first-name" :id="id" autocomplete="off" data-1p-ignore data-lp-ignore
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
    </div>
</template>

<style scoped></style>
