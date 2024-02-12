<script setup>
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'

const id = ref(uuid())

defineProps({
    label: String
})

defineEmits([])

</script>

<template>
    <div class="sm:col-span-2 w-72">
        <label :for="id" class="block text-sm font-medium leading-6 text-inputlabel">{{ label }}</label>
        <div class="mt-2">
            <input type="text" name="first-name" :id="id" autocomplete="off" data-1p-ignore data-lp-ignore
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
    </div>
</template>

<style scoped></style>
