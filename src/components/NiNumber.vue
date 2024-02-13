<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref } from 'vue'
import LabelledInput from './LabelledInput.vue'

defineProps({
    label: String
})

defineEmits([])

</script>

<template>
    <labelled-input class="w-48" label="NI number" case-treatment="all-upper"/>
</template>

<style scoped></style>
