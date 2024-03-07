<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script lang="ts" setup>

import { ref } from "vue"
import { ChevronRightIcon } from "@heroicons/vue/20/solid"

import Collapsible from "./Collapsible.vue"

const props = defineProps({
    navigation: {
        required: true,
    },
})

const open = ref(false);

</script>

<template>
    <div class="flex flex-col gap-y-5 overflow-y-auto bg-sidemenubkg px-6 mt-1 w-2/12 rounded-md ml-1 py-4 max-h-full">
        <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7 text-sidemenufore">
                <li>
                    <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name" class="">
                            <a v-if="!item.children" :href="item.href" :class="[
                            item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold bg-sidemenuback ',
                        ]">
                                <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                                {{ item.name }}
                            </a>
                            <collapsible v-if="item.children">
                                <template #header="{ toggleOpen }">
                                    <div class="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                        <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                                        <button class="text-sm leading-6 font-semibold"
                                            @click="() => open = toggleOpen()">{{ item.name }}</button>
                                        <ChevronRightIcon :class="[
                            open ? 'rotate-90' : '',
                            'ml-auto h-5 w-5 shrink-0',
                        ]" aria-hidden="true" />
                                    </div>
                                </template>
                                <a v-for="subItem in item.children" :key="subItem.name" :href="subItem.href"
                                    :class="[subItem.current ? '' : 'hover:bg-gray-50', 'bg-sidemenubkg block rounded-md py-2 pr-2 pl-9 text-sm leading-6']">
                                    {{ subItem.name }}</a>
                            </collapsible>
                        </li>
                    </ul>
                </li>
                <li class="-mx-6 mt-auto">
                    <a href="#"
                        class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                        <img class="h-8 w-8 rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="" />
                        <span class="sr-only">Your profile</span>
                        <span aria-hidden="true">A N Payroller</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped></style>