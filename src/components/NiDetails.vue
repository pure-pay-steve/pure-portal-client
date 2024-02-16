<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { Ref, ref, watch } from 'vue'

import NiNumber from './NiNumber.vue'
import Dropdown from './Dropdown.vue'
import { NiDetails } from '../model/NiDetails'

const niNumber = ref('')
const niCategory = ref('')

const emit = defineEmits(["change"])

const model = ref<NiDetails>()

const niLetters = [['A', 'A'], ['B', 'B'], ['C', 'C'], ['F', 'F'], ['H', 'H'], ['I', 'I'], ['J', 'J'], ['L', 'L'], ['M', 'M'], ['S', 'S'], ['V', 'V'], ['X', 'X'], ['Z', 'Z']] as [string, string][]

watch(() => niNumber.value, (value) => {
    var changed = model.value?.niNumber !== value
    model.value = {
        niNumber: value,
        niCategory: niCategory.value
    }
    console.log('niNumber.value:', model.value)
    if (changed) {
        emit('change', model.value)
    }
})

watch(() => niCategory.value, (value) => {
    var changed = model.value?.niCategory !== value
    model.value = {
        niNumber: niNumber.value,
        niCategory: value
    }
    console.log('niNumber.value:', model.value)
    if (changed) {
        emit('change', model.value)
    }
})

const onDropdownKeypress = (key: KeyboardEvent, control: Ref<HTMLSelectElement | null>, result: Ref<boolean>) => {
    if (control) {
        const targetLetter = key.key.toUpperCase().charAt(0)
        for (let i = 0; i < niLetters.length; i++) {
            if (niLetters[i][0].includes(targetLetter)) {
                if (control.value) {
                    control.value.selectedIndex = i + 1
                }
                result.value = true
                return
            }
        }
    }
}

</script>

<template>
    <div class="flex flex-row gap-x-4">
        <ni-number v-model="niNumber" class="" label="National Insurance number" />
        <dropdown v-model="niCategory" class="-mt-2" label="NI category letter" label-position="top" :options="niLetters" @keypress="onDropdownKeypress" />
    </div>
</template>

<style scoped></style>
