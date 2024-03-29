<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref } from 'vue'
import { v4 as uuid } from 'uuid'
import { toLowerCase, toProperCase, toUpperCase } from '../../lib/String'

const id = ref(uuid())
const inputControl = ref<null | { focus: () => void }>(null)

const props = defineProps<{
    label: string
    placeholder?: string
    caseTreatment?: string
    size?: string
    testId: string
}>()

const emit = defineEmits(["leave"])

const model = defineModel()

const focus = () => {
    if (inputControl.value)
        inputControl.value.focus()
}

defineExpose({
  focus,
})

const getWidth = () => {
    switch (props.size) {
        case 'short':
            return 'w-28'
        case 'medium':
            return 'w-36'
        case 'long':
            return 'w-72'
        default:
            return ''
    }
}

const onLeaveFocus = () => {
    var value = model.value as string

    if (value) {
        switch (props.caseTreatment) {

            case 'proper-name':
                if (value === toLowerCase(value)) {
                    model.value = toProperCase(value)
                } else if (value === toUpperCase(value)) {
                    model.value = toProperCase(toLowerCase(value))
                }
                break

            case 'all-upper':
                model.value = toUpperCase(value)
                break

            case 'all-lower':
                model.value = toLowerCase(value)
                break
        }
    }
    
    emit('leave')
}

</script>

<template>
    <div class="" :class="getWidth()">
        <label :for="id" class="block text-sm font-medium leading-3 text-inputlabel">{{ label }}</label>
        <div class="mt-2">
            <input type="text" name="first-name" :id="id" autocomplete="off" ref="inputControl" data-1p-ignore data-lp-ignore
                @blur="onLeaveFocus" v-model="model" :placeholder="placeholder" :data-testid="testId"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
    </div>
</template>

<style scoped></style>
