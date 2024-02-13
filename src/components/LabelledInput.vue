<script setup lang="ts">

import { ref } from 'vue'
import { v4 as uuid } from 'uuid'

const id = ref(uuid())

const props = defineProps({
    label: String,
    placeholder: String,
    caseTreatment: String
})

const emit = defineEmits(["leave"])

const model = defineModel()

const onLeaveFocus = () => {
    var modelValue = model.value as string

    if (modelValue) {
        switch (props.caseTreatment) {

            case 'proper-name':
                if (modelValue === modelValue.toLowerCase()) {
                    model.value = modelValue.charAt(0).toUpperCase() + modelValue.slice(1)
                } else if (modelValue === modelValue.toUpperCase()) {
                    model.value = modelValue.charAt(0) + modelValue.slice(1).toLowerCase()
                }
                break

            case 'all-upper':
                model.value = modelValue.toUpperCase()
                break
        }
    }
    
    emit('leave')
}

</script>

<template>
    <div class="sm:col-span-2">
        <label :for="id" class="block text-sm font-medium leading-3 text-inputlabel">{{ label }}</label>
        <div class="mt-2">
            <input type="text" name="first-name" :id="id" autocomplete="off" data-1p-ignore data-lp-ignore
                @blur="onLeaveFocus" v-model="model" :placeholder="placeholder"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
    </div>
</template>

<style scoped></style>
