<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { onMounted, ref, watch } from 'vue'
import { v4 as uuid } from 'uuid'

const id = ref(uuid())
const thisControl = ref<null | HTMLElement>(null)
const focusClasses = ref("border-transparent")

const model = defineModel()

defineProps<{
    label: string,
    labelPosition: 'left' | 'right'
}>()

const emit = defineEmits(['change'])

watch(() => model.value, (value) => {
    emit('change', value)
})

const toggle = () => model.value = !model.value

const setState = (value: boolean) => model.value = value

const showFocus = () => focusClasses.value = "border-blue-700 rounded outline-none transition"

const removeFocus = () => focusClasses.value = "border-transparent"

const onFocus = () => showFocus()

const onLostFocus = () => removeFocus()

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
        setState(false)
    } else if (event.key === 'ArrowRight') {
        setState(true)
    }
}

const onKeypressDoc = (event: any) => {
    switch (event.key.toUpperCase()) {
        case 'ENTER':
        case ' ':
            toggle()
            break
    }
    event.preventDefault()
}

const onUnload = () => {
    if (thisControl && thisControl.value) {
        thisControl.value.removeEventListener("keypress", onKeypressDoc, false)
        thisControl.value.removeEventListener("keydown", onKeydown, false)
        thisControl.value.removeEventListener("focus", onFocus)
        thisControl.value.removeEventListener("focusout", onLostFocus)
        thisControl.value.removeEventListener('beforeunload', onUnload)
    }
}

onMounted(() => {
    if (thisControl && thisControl.value) {
        thisControl.value.addEventListener("keypress", onKeypressDoc, false)
        thisControl.value.addEventListener("keydown", onKeydown, false)
        thisControl.value.addEventListener("focus", onFocus)
        thisControl.value.addEventListener("focusout", onLostFocus)
        thisControl.value.addEventListener('beforeunload', onUnload)
    }
})

</script>

<template> 
    <div ref="thisControl" class="flex flex-row items-center border-2 p-0.5" tabIndex="0" :class="focusClasses">

        <span v-if="labelPosition === 'left'" :for="id"
            class="mr-1 select-none text-sm " @click.stop="toggle">{{ label
            }}</span>

        <div class="rounded-2xl bg-blue-700 w-10 h-[1.2rem]" @click="toggle"
            :class="model ? 'bg-blue-700' : 'bg-slate-300'">

            <input type="checkbox" v-model="model" class="opacity-0 w-0" tabindex="-1" />
            <span :class="model ? 'translate-x-[1.25rem]' : 'translate-x-[0.1rem]'"
                class="inline-block h-[0.95rem] w-[0.95rem] transform rounded-full bg-white transition -translate-y-[0.065rem]" />

        </div>

        <span v-if="labelPosition === 'right'" :for="id" class="ml-1 select-none text-sm" @click.stop="toggle">{{ label
        }}</span>

    </div>
</template>

<style scoped></style>