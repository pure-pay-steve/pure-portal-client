<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import LabelledInput from '../common/LabelledInput.vue'

defineProps<{
    label: string
    testId: string
}>()

defineEmits([])

const model = defineModel<string>()

</script>

<template>
    <labelled-input v-model="model" class="w-48" label="NI number" case-treatment="all-upper" :test-id="testId"/>
</template>

<style scoped></style>
