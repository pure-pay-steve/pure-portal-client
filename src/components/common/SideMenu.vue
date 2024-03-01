<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import { vAutoAnimate } from '@formkit/auto-animate'
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from "@heroicons/vue/24/outline";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const props = defineProps({
    navigation: {
        required: true,
    },
});

const accept = (event: any) => {
    //open()
    //close();
    //return false
    //event.preventDefault()
};
const open = ref(false);

</script>

<template>
    <div class="flex flex-col gap-y-5 overflow-y-auto bg-slate-200 px-6 mt-8 w-2/12 rounded-md ml-1 py-4">
        <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                            <a v-if="!item.children" :href="item.href" :class="[
                                item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700',
                            ]">
                                <component :is="item.icon" class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                                {{ item.name }}
                            </a>

                            <div style>
                                <button @click="open = !open" aria-expanded="open.toString()">
                                    Trigger
                                </button>
                                <div class="ml-4 transition-item" :class="open ? 'h-6' : 'h-0 overflow-y-hidden'">
                                    Content1
                                </div>
                                <div class="ml-4 transition-item" :class="open ? 'h-6' : 'h-0 overflow-y-hidden'">Content1
                                </div>
                                <div class="ml-4 transition-item" :class="open ? 'h-6' : 'h-0 overflow-y-hidden'">Content1
                                </div>
                            </div>

                            <!-- <Disclosure as="div" v-else v-slot="{ open }" >
                                <DisclosureButton @click="accept" :class="[
                                    item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                    'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700',
                                ]">
                                    <component :is="item.icon" class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                                    {{ item.name }}
                                    <ChevronRightIcon :class="[
                                        open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                        'ml-auto h-5 w-5 shrink-0',
                                    ]" aria-hidden="true" />
                                </DisclosureButton>
                                <DisclosurePanel as="ul" class="mt-1 px-2">
                        <li v-for="subItem in item.children" :key="subItem.name">

                            <DisclosureButton as="button" :href="subItem.href" :class="[
                                subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700',
                            ]" @click="accept(open)">
                                {{ subItem.name }}</DisclosureButton>
                        </li>
                        </DisclosurePanel>
                    </Disclosure> -->
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
                        <span aria-hidden="true">Tom Cook</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.transition-item {
    -webkit-transition: height 0.25s linear 0s;
    -moz-transition: height 0.25s linear 0s;
    -ms-transition: height 0.25s linear 0s;
    -o-transition: height 0.25s linear 0s;
    transition: height 0.25s linear 0s;
}
</style>
