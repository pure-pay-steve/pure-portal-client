<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref } from 'vue'

import NiNumber from './NiNumber.vue'
import Dropdown from './Dropdown.vue'

const niLetters = [['A', 'A'], ['B', 'B'], ['C', 'C'], ['F', 'F'], ['H', 'H'], ['I', 'I'], ['J', 'J'], ['L', 'L'], ['M', 'M'], ['S', 'S'], ['V', 'V'], ['X', 'X'], ['Z', 'Z']] as [string, string][]

// defineProps({
// })

// defineEmits([])

</script>

<template>
    <div class="flex flex-row gap-x-4">
        <ni-number class="" label="National Insurance number" />
        <dropdown class="-mt-2" label="NI category letter"
            label-position="top" :options="niLetters"/>
    </div>

</template>

<style scoped>

</style>
