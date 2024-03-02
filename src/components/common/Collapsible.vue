<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script lang="ts" setup>

import { ref } from "vue"

const outer = ref<HTMLElement>()

const onToggle = (): boolean => {
    if (outer.value) {
        const classes = outer.value.classList
        classes.toggle('is-open')
        return classes.contains('is-open')
    } else
        return false
}


</script>

<template>
    <slot name="header" :toggleOpen="onToggle"></slot>
    <div ref="outer" class="outer">
        <div class="inner">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.outer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.25s ease-out;
}

.outer.is-open {
    grid-template-rows: 1fr;
}

.inner {
    overflow: hidden;
}
</style>