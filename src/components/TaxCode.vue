<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref } from 'vue'

import LabelledInput from './LabelledInput.vue'
import Toggle from './Toggle.vue'

const isNonCumulative = ref(false)
// defineProps({
// })

// defineEmits([])

const model = defineModel()

const onLeftTaxCodeField = () => {
    var modelValue = model.value as string

    if (modelValue) {
        isNonCumulative.value = modelValue.toUpperCase().endsWith('X')
    }
}

</script>

<template>
    <div class="flex flex-row gap-x-4 mt-2">
        <labelled-input class="w-28" label="Tax code" case-treatment="all-upper" @leave="onLeftTaxCodeField" v-model="model"/>
        <toggle class="mt-5" label="Non-cumulative" v-model="isNonCumulative"
            label-position="right" />
    </div>

</template>

<style scoped>

</style>
