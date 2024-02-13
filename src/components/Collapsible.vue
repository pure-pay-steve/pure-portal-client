<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Switch } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'


defineProps({
    header: String,
    defaultOpen: Boolean
})

defineEmits([])

onMounted(() => {
})

</script>

<template>
    <div class="p-1 bg-inherit">
        <disclosure v-slot="{ open }" :default-open="defaultOpen">
            <disclosure-button class="flex w-full" :class="open ? 'border-b border-b-slate-400' : ''">
                <span class="font-bold">{{ header }}</span>
                <chevron-up-icon :class="open ? 'rotate-180 transform' : 'rotate-90 transform'"
                    class="h-5 w-5 text-purple-500 justify-self-start" />
            </disclosure-button>
            <disclosure-panel class="px-4 pb-2 pt-4 text-sm text-gray-500 border-1">
                <slot></slot>
            </disclosure-panel>
        </disclosure>
    </div>
</template>

<style scoped></style>
