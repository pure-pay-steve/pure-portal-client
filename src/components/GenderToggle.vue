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
const toggleBackgroundDiv = ref<null | HTMLDivElement>(null)
const checked = ref<null | boolean>(null)
const focusClasses = ref("border-2 border-transparent")

const props = defineProps<{
    topLabel: string
    leftLabel: string
    rightLabel: string
    testId: string
}>()

const model = defineModel<'Male' | 'Female' | null | undefined>()

watch(() => checked.value, (value) => {
    model.value = value === null ? null : value ? 'Female' : 'Male'
})

const toggle = () => checked.value = !checked.value

const setState = (value: boolean) => checked.value = value

const showFocus = () => focusClasses.value = "border-blue-700 rounded outline-none transition"

const removeFocus = () => focusClasses.value = "border-2 border-transparent"

const onFocus = () => showFocus()

const onLostFocus = () => removeFocus()

const onLeftLabelClick = () => setState(false)

const onRightLabelClick = () => setState(true)

const onMouseClick = (event: MouseEvent) => {
    if (toggleBackgroundDiv.value) {
        const rect = toggleBackgroundDiv.value.getBoundingClientRect()
        event.clientX >= rect.x + (rect.width / 2) ? setState(true) : setState(false)
    }
}

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
        setState(false)
    } else if (event.key === 'ArrowRight') {
        setState(true)
    }
}

const onKeypress = (event: any) => {
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

const onUnload = () => {
    if (thisControl && thisControl.value) {
        thisControl.value.removeEventListener("keypress", onKeypress, false)
        thisControl.value.removeEventListener("keydown", onKeydown, false)
        thisControl.value.removeEventListener("focus", onFocus)
        thisControl.value.removeEventListener("focusout", onLostFocus)
        thisControl.value.removeEventListener('beforeunload', onUnload)
    }
}

onMounted(() => {
    if (thisControl && thisControl.value) {
        thisControl.value.addEventListener("keypress", onKeypress, false)
        thisControl.value.addEventListener("keydown", onKeydown, false)
        thisControl.value.addEventListener("focus", onFocus)
        thisControl.value.addEventListener("focusout", onLostFocus)
        thisControl.value.addEventListener('beforeunload', onUnload)
    }
})

</script>

<template>
    <div ref="thisControl" class="group flex flex-col outline-none my-2" tabIndex="0" :data-testid="testId">

        <label :for="id" class="pr-4 text-inputlabel text-sm font-medium leading-3 text-center mb-1">{{ topLabel }}</label>

        <div class="flex flex-row items-center border-2 pb-0.5" :class="focusClasses">

            <span class="first-letter:underline text-sm mx-1 select-none"
                :class="checked ? 'opacity-25' : 'opacity-100'" @click.stop="onLeftLabelClick">{{ leftLabel }}</span>

            <div ref="toggleBackgroundDiv" class="rounded-2xl bg-blue-700 w-10 h-[1.35rem] mx-2 mt-1 pt-[0.05rem]" @click="onMouseClick"
                :class="checked === null ? 'bg-slate-200' : checked ? 'bg-pink-600' : 'bg-blue-700'">

                <input type="checkbox" v-model="checked" class="opacity-0 w-0" tabindex="-1" />
                <span :class="checked === null ? 'translate-x-[0.6rem]' : checked ? 'translate-x-[1.15rem]' : 'translate-x-[0.15rem]'"
                    class="inline-block h-[0.95rem] w-[0.95rem] transform rounded-full bg-white transition" />

            </div>

            <span class="first-letter:underline text-sm mx-1 select-none" @click.stop="onRightLabelClick"
                :class="(checked || checked === null) ? 'opacity-100' : 'opacity-25'">{{ rightLabel }}</span>

        </div>

    </div>
</template>

<style scoped></style>