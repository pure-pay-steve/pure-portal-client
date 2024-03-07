<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->


<script lang="ts" setup>

import { PencilIcon, TrashIcon } from '@heroicons/vue/20/solid'
import { ref } from "vue";
import PopoutPanel from "../common/PopoutPanel.vue";
import P45Preview from "./P45Preview.vue";

const onEdit = () => editMode.value = true

const editMode = ref(false)

const showPreview = ref(false)
const showP60 = ref(false)

const onShowPreview = () => showPreview.value = true

const onShowP60 = () => showP60.value = true

const onClose = () => showPreview.value = false


</script>

<template>
    <p45-preview v-if="showPreview" @close="onClose" />
    <button class="ml-8 font-normal text-xs text-blue-700" @click="onShowPreview">View
        P45</button>
    <button class="ml-8 font-normal text-xs text-blue-700" @click="onShowP60">View
        P60</button>

    <div v-if="showP60">
        <object data="http://localhost:5173/p60.pdf#toolbar=0" type="application/pdf" width="600" height="800">
            <a href="https://sumanbogati.github.io/tiny.pdf">test.pdf</a>
        </object>
    </div>

</template>

<style scoped></style>