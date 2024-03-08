<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

import NavBar from './components/common/NavBar.vue'
import SideMenu from './components/common/SideMenu.vue'
import ModalDialog from "./components/common/ModalDialog.vue"

import { Ref, h, ref, render } from "vue"


const navigation = [
  { name: 'Business', href: '#/business/1/overview', icon: HomeIcon, current: false },
  { name: 'Payroll', href: '#/business/1/overview', icon: HomeIcon, current: false },
  {
    name: 'Employees',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'Steve Wilkinson', id: "1", href: '#/employee/1/overview', current: true },
      { name: 'Chris Deeson', id: "2", href: '#/employee/2/overview' },
      { name: 'Freddie Fox', id: "3", href: '#' },
      { name: 'Danny Dog', id: "4", href: '#' },
      { name: 'Delphin Donkey', id: "5", href: '#' },
    ],
  },
  {
    name: 'Pay Runs',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Weekly', href: '#/pay-run' },
      { name: 'Monthly', href: '#' },
    ],
  },
  { name: 'Reports', href: '#/reports', icon: CalendarIcon, current: false },
  { name: 'Notes', href: '#', icon: DocumentDuplicateIcon, current: false },
]


//const mainPanel = ref({}) as Ref<HTMLDivElement>

const open = ref(false)
const showModal = () => {
  open.value = true
  // console.log('showModal')
  // const dialog = h(ModalDialog)
  // render(dialog, mainPanel.value)
  //mainPanel.value.appendChild(document.createElement('modal-dialog'))
}

const onClose = () => {
  open.value = false
  // console.log('onClose')
  // const dialog = h(ModalDialog)
  // render(dialog, mainPanel.value)
  //mainPanel.value.appendChild(document.createElement('modal-dialog'))
}

</script>


<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->

<template>
  <div class="h-max-full">
    <nav-bar @bell-click="showModal" />

    <div class="flex flex-row h-max-full">
      <modal-dialog v-if="open" @close="onClose" />
      <side-menu :navigation="navigation" class="shrink-0" style="min-height: 100%;" />
      <div class="mt-1 grow min-h-[90vh] bg-bkg">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
