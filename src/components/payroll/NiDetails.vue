<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { Ref, ref, watch } from 'vue'

import NiNumber from './NiNumber.vue'
import Dropdown from '../common/Dropdown.vue'
import { NiDetails } from '../../model/NiDetails'

const niNumber = ref('')
const niCategory = ref('')

const emit = defineEmits(["update:modelValue"])

const model = defineModel<NiDetails>()

defineProps<{
    testId: string
}>()

const niLetters = [['A', 'A'], ['B', 'B'], ['C', 'C'], ['F', 'F'], ['H', 'H'], ['I', 'I'], ['J', 'J'], ['L', 'L'], ['M', 'M'], ['S', 'S'], ['V', 'V'], ['X', 'X'], ['Z', 'Z']] as [string, string][]

watch(() => niNumber.value, (value) => {
    model.value = {
        niNumber: value,
        niCategory: niCategory.value
    }
})

watch(() => niCategory.value, (value) => {
    model.value = {
        niNumber: niNumber.value,
        niCategory: value
    }
})

// Invoked by the Dropdown component when a key is pressed
const onDropdownKeypress = (key: KeyboardEvent, result: Ref<{ processed: boolean, value: string }>) => {
    const targetLetter = key.key.toUpperCase()
    for (let i = 0; i < niLetters.length; i++) {
        if (niLetters[i][0].includes(targetLetter)) {
            result.value.processed = true
            result.value.value = niLetters[i][0]
            return
        }
    }
}

</script>

<template>
    <div class="flex flex-row gap-x-4">
        <ni-number v-model="niNumber" class="" label="National Insurance number" :test-id="testId"/>
        <dropdown v-model="niCategory" class="" label="NI category letter" label-position="top" :options="niLetters" :test-id="testId"
            @keypress="onDropdownKeypress" />
    </div>
</template>

<style scoped></style>
