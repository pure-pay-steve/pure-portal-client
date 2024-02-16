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
const focusClasses = ref('')

const model = defineModel()

defineProps<{
    label: string,
    labelPosition: 'left' | 'right'
}>()

const emit = defineEmits(['change'])

const toggle = () => model.value = !model.value

const showFocus = () => focusClasses.value = "border-2 border-blue-700 rounded outline-none transition pr-2"

const removeFocus = () => focusClasses.value = ""

const onFocus = () => showFocus()

const onLostFocus = () => removeFocus()

const onKeypressDoc = (event: any) => {
    switch (event.key.toUpperCase()) {
        case 'ENTER':
        case ' ':
            toggle()
            break
    }
    event.preventDefault()
}

watch(() => model.value, (value) => {
    emit('change', value)
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
    <div ref="thisControl" class="flex flex-row group" tabIndex="0" :class="focusClasses">

        <span v-if="labelPosition === 'left'" :for="id"
            class="inline-block group-focus:ml-1 mr-1 select-none my-2" @click.stop="toggle">{{ label
            }}</span>

        <div class="inline-block rounded-2xl bg-blue-700 w-10 h-[1.2rem] mx-2 my-1" @click="toggle"
            :class="model ? 'bg-blue-700' : 'bg-slate-300'">

            <input type="checkbox" v-model="model" class="opacity-0 w-0" tabindex="-1" />
            <span :class="model ? 'translate-x-5' : 'translate-x-1'"
                class="inline-block h-[0.95rem] w-[0.95rem] transform rounded-full bg-white transition" />

        </div>

        <span v-if="labelPosition === 'right'" :for="id" class="inline-block ml-1 select-none" @click.stop="toggle">{{ label
        }}</span>

    </div>
</template>

<style scoped></style>