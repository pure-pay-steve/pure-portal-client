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
const checked = ref<null | boolean>(null)
const focusClasses = ref('')

const props = defineProps<{
    modelValue: 'Male' | 'Female' | null | undefined,
    topLabel: string,
    leftLabel: string,
    rightLabel: string
}>()

const emit = defineEmits(['update:modelValue'])

const toggle = () => checked.value = !checked.value

const setState = (value: boolean) => checked.value = value

const showFocus = () => focusClasses.value = "border-2 border-blue-700 rounded outline-none transition"

const removeFocus = () => focusClasses.value = ""

const onFocus = () => showFocus()

const onLostFocus = () => removeFocus()

const onLeftLabelClick = () => setState(false)

const onRightLabelClick = () => setState(true)

const onKeypressDoc = (event: any) => {
    switch (event.key.toUpperCase()) {
        case 'ENTER':
        case ' ':
            toggle()
            break

        case props.leftLabel.charAt(0):
            setState(false)
            break

        case props.rightLabel.charAt(0):
            setState(true)
            break
    }
    event.preventDefault()
}

watch(() => checked.value, (value) => {
    const gender = value === null ? null : value ? 'Female' : 'Male'
    emit('update:modelValue', gender)
})

const onUnload = () => {
    if (thisControl && thisControl.value) {
        thisControl.value.removeEventListener("keypress", onKeypressDoc, false);
        thisControl.value.removeEventListener("focus", onFocus);
        thisControl.value.removeEventListener("focusout", onLostFocus);
        thisControl.value.removeEventListener('beforeunload', onUnload);
    }
}

onMounted(() => {
    if (thisControl && thisControl.value) {
        thisControl.value.addEventListener("keypress", onKeypressDoc, false);
        thisControl.value.addEventListener("focus", onFocus);
        thisControl.value.addEventListener("focusout", onLostFocus);
        thisControl.value.addEventListener('beforeunload', onUnload);
    }
})

</script>

<template>
    <div ref="thisControl" class="group flex flex-col outline-none my-2" tabIndex="0">

        <label :for="id" class="pr-4 text-inputlabel text-sm font-medium leading-3 text-center mb-1">{{ topLabel }}</label>

        <div class="flex-row p0" :class="focusClasses">

            <span class="inline-block first-letter:underline group-focus:ml-1 mr-1 select-none"
                :class="checked ? 'opacity-25' : 'opacity-100'" @click.stop="onLeftLabelClick">{{ leftLabel }}</span>

            <div class="inline-block rounded-2xl bg-blue-700 w-10 h-[1.35rem] mx-2 mt-1 pt-[0.05rem]" @click="toggle"
                :class="checked === null ? 'bg-slate-200' : checked ? 'bg-pink-600' : 'bg-blue-700'">

                <input type="checkbox" v-model="checked" class="opacity-0 w-0" tabindex="-1" />
                <span :class="checked === null ? 'translate-x-3' : checked ? 'translate-x-[1.15rem]' : 'translate-x-[0.15rem]'"
                    class="inline-block h-[0.95rem] w-[0.95rem] transform rounded-full bg-white transition" />

            </div>

            <span class="inline-block first-letter:underline mx-1 select-none mt-1" @click.stop="onRightLabelClick"
                :class="(checked || checked === null) ? 'opacity-100' : 'opacity-25'">{{ rightLabel }}</span>

        </div>

    </div>
</template>

<style scoped></style>