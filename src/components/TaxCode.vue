<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref, watch } from 'vue'

import LabelledInput from './LabelledInput.vue'
import Toggle from './Toggle.vue'
import { TaxCode } from '../model/TaxCode'

const taxCode = ref('')
const isNonCumulative = ref(false)

const emit = defineEmits(["change"])

const model = defineModel<TaxCode>()

watch (() => taxCode.value, (value) => {
    if (isTaxCodeNonCumulative(value)) {
        isNonCumulative.value = true
    }
    setModel(true)
})

watch (() => isNonCumulative.value, (value) => {
    if (value) {
        updateTaxCode()
    }
    setModel(true)
})

const onLeftTaxCodeField = () => {
    var changed = false
    if (isTaxCodeNonCumulative(taxCode.value)) {
        isNonCumulative.value = true
        changed = updateTaxCode()
    }
    setModel(changed)
}

const setModel = (changed: boolean) => {
    console.log('TaxCode.setModel:', taxCode.value, isNonCumulative.value)
    model.value = {
        taxCode: taxCode.value,
        isNonCumulative: isNonCumulative.value
    }
    if (changed) {
        emit('change', model.value)
    }
}

const isTaxCodeNonCumulative = (taxCode: string): boolean => {
    const code = taxCode.toUpperCase()
    return code.endsWith('X') || code.endsWith('M1') || code.endsWith('W1')
}

const updateTaxCode = () : boolean => {
    taxCode.value = taxCode.value.toUpperCase()
    if (taxCode.value.endsWith("X")) {
        taxCode.value = taxCode.value.toUpperCase().slice(0, -1)
        return true
    } else if (taxCode.value.endsWith("M1") || taxCode.value.endsWith("W1")) {
        taxCode.value = taxCode.value.toUpperCase().slice(0, -2)
        return true
    }
    return false
}

</script>

<template>
    <div class="flex flex-row gap-x-4 mt-2">
        <labelled-input v-model="taxCode" class="w-28" label="Tax code" case-treatment="all-upper" @leave="onLeftTaxCodeField" />
        <toggle class="mt-7" label="Non-cumulative" v-model="isNonCumulative" label-position="right" />
    </div>
</template>

<style scoped></style>
