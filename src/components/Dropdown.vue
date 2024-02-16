<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref, onMounted, watch } from 'vue'
import { v4 as uuid } from 'uuid'

const id = ref(uuid())
const selectControl = ref<null | HTMLInputElement>(null)
const selectedValue = ref('')

const props = defineProps<{
    label: string,
    labelPosition: 'left' | 'right' | 'top'
    omitSelectOptionOption?: boolean
    options: [string, string][]
}>()

const model = defineModel<string>()

watch (() => selectedValue.value, (value) => {
    model.value = value
    console.log('Dropdown.model:', value)
})

const focus = () => {
    if (selectControl.value)
        selectControl.value.focus()
}

const emit = defineEmits([
    "keypress"
])

defineExpose({
  focus
})

const onKeypress = (event: KeyboardEvent) => {
    const result = ref(false)
    emit('keypress', event, selectControl, result)
    if (result.value) {
        event.preventDefault()
    }
}

const onUnload = () => {
    if (selectControl.value) {
        selectControl.value.removeEventListener("keypress", onKeypress, false);
        selectControl.value.removeEventListener('beforeunload', onUnload);
    }
}

onMounted(() => {
    if (selectControl.value) {
        selectControl.value.addEventListener("keypress", onKeypress, false);
        selectControl.value.addEventListener('beforeunload', onUnload);
    }
})

</script>

<template>
    <div class="flex-col">
        <label v-if="labelPosition === 'top'" :for="id" class="text-inputlabel text-sm font-medium leading-3">{{ label
        }}</label>
        <div class="flex flex-row">
            <label v-if="labelPosition === 'left'" :for="id" class="inline-block mr-3 mt-4 select-none ">{{ label
            }}</label>
            <div class="block mt-2">
                <select v-model="selectedValue" :id="id" ref="selectControl"
                    class="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 mt-6 sm:mt-0">
                    <option v-if="!omitSelectOptionOption" disabled selected value> -- select -- </option>
                    <option v-for="option in options"  value="option[0]">{{ option[1] }}</option>
                </select>
            </div>
            <label v-if="labelPosition === 'right'" :for="id" class="inline-block mx-1 select-none">{{ label
            }}</label>
        </div>
    </div>
</template>

<style scoped></style>
