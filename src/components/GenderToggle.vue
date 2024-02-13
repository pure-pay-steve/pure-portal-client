<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { Switch } from '@headlessui/vue'
import { v4 as uuid } from 'uuid'

const thisControl = ref(null) as any
const switchContainer = ref(null) as any
const inputCheckbox = ref(null) as any
const id = ref(uuid())
const checked = ref(false)
const focusClasses = ref('')


const props = defineProps<{
    topLabel: string,
    leftLabel: string,
    rightLabel: string
}>()

const emit = defineEmits(['change'])

const toggle = () => checked.value = !checked.value

const setState = (value: boolean) => checked.value = value

const onLeftLabelClick = () => {
    setFocus()
    setState(false)
}

const onRightLabelClick = () => {
    setFocus()
    setState(true)
}

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
}

const onTopLabelClick = () => {
    setFocus()
}

const setFocus = () => {
    //thisControl.value.focus()
    //    setTimeout(() => thisControl.value.focus())
    focusClasses.value = "border-2 border-blue-700 rounded outline-none transition"
}

const onUpdate = (value: boolean) => {
    //setFocus()
    checked.value = value
    emit('change', value)
}

const onFocus = () => {
    setFocus()
}

const onLostFocus = () => {
    focusClasses.value = ""
}

onMounted(() => {
    // if (switchContainer.value)
    //     switchContainer.value.tabIndex = -1;//('click', toggle)

    if (thisControl) {
        thisControl.value.addEventListener("keypress", onKeypressDoc, false);
        thisControl.value.addEventListener("focus", onFocus);
        thisControl.value.addEventListener("focusout", onLostFocus);
    }

    if (switchContainer) {
        switchContainer.value.addEventListener("focus", onFocus);
        switchContainer.value.addEventListener("focusout", onLostFocus);
    }
})

</script>

<template>
    <div ref="thisControl" class="group flex-col outline-none my-2" tabIndex="0">
        <label :for="id" class="text-inputlabel text-sm font-medium leading-6 " @click="onTopLabelClick">{{ topLabel }}</label>
        <div class=" flex-row" :class="focusClasses" >

            <span class="inline-block first-letter:underline group-focus:ml-1 mr-1" @click.stop="onLeftLabelClick">{{ leftLabel }}</span>

            <div ref="switchContainer" class="inline-block rounded-2xl border-2 bg-blue-700 w-12 h-6" @click="toggle">
                <input ref="inputCheckbox" type="checkbox" v-model="checked" class="hidden" tabindex="-1" />
                <span :class="checked ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-3 w-3 transform rounded-full bg-white transition" />
            </div>

            <span class="inline-block first-letter:underline mx-1" @click.stop="onRightLabelClick">{{ rightLabel }}</span>

        </div>
    </div>
</template>

<style scoped></style>