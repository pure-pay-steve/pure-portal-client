<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { computed, ref } from 'vue'
import { CheckIcon, ChevronDownIcon, XCircleIcon } from '@heroicons/vue/20/solid'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput, 
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'

const props = defineProps<{
  label: string
  testId: string
}>()

const inputControl = ref<null | HTMLElement>(null)
const otherInput = ref<null | { focus: () => null }>(null)
const emptyComboOption = ref<null | HTMLElement>(null)
const standardTitles = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr.', 'Other']
const query = ref('')
const showDownIcon = ref(true)
const selectedTitle = ref<string | null | undefined>()

const model = defineModel<string | null | undefined>()

const filteredTitles = computed(() => {
  return query.value === ''
    ? standardTitles
    : standardTitles.filter((title) => {
      return title.toLowerCase().includes(query.value.toLowerCase())
    })
})

const showOther = computed(() => {
  return selectedTitle.value === 'Other'
})

const onLeaveFocus = () => {
  query.value = ''
  showDownIcon.value = selectedTitle.value == null || selectedTitle.value === ''
}

const onUpdated = (value: string) => {
  if (value === 'Other') {
    setTimeout(() => {
      if (otherInput.value)
        otherInput.value.focus()
    }, 0)
  } else {
    model.value = value
  }
}

const onCrossClick = () => {
  if (inputControl.value) {
    inputControl.value.textContent = null
    query.value = ''    
  }
  selectedTitle.value = null
  if (emptyComboOption.value) {
    emptyComboOption.value.setAttribute('disabled', 'false')
  }
  showDownIcon.value = true
  setTimeout(() => {
      if (inputControl.value)
        (inputControl.value as any).el.focus()
    }, 0)
}

const onOtherInputChange = (e: any) => {
  if (e.target.value === '') {
    model.value = null
  } else {
    model.value = e.target.value
  }
}

</script>

<template>
  <div class="flex items-end space-x-1">
    <combobox as="div"  v-model="selectedTitle" @update:model-value="onUpdated" @focusout="onLeaveFocus" class="w-28">
      <combobox-label class="block text-sm font-medium leading-3 text-inputlabel">{{ label }}</combobox-label>
      <div class="relative mt-2">
        <combobox-input ref="inputControl"
          class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          @change="query = $event.target.value" :data-testid="testId" />
        <combobox-button class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <chevron-down-icon v-if="showDownIcon" class="h-5 w-5 text-gray-400" aria-hidden="true" />
          <x-circle-icon v-if="!showDownIcon" class="h-5 w-5 text-gray-400" aria-hidden="true" @click.stop="onCrossClick" />
        </combobox-button>
        <combobox-options v-if="filteredTitles.length > 0"
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <combobox-option ref="emptyComboOption" disabled selected value="" key="null"/>
          <combobox-option v-for="title in filteredTitles" :key="title" :value="title" as="template"
            v-slot="{ active, selected }">
            <li
              :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
              <span :class="['block truncate', selected && 'font-semibold']">
                {{ title }}
              </span>
              <span v-if="selected"
                :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                <check-icon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </combobox-option>
        </combobox-options>
      </div>
    </combobox>
    <input v-if="showOther" type="text" ref="otherInput" role="input" :data-testid="testId" @change="onOtherInputChange"
      class="h-8 mb-[2px] w-44 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="e.g., Lady, Sir, Rt Hon." />
  </div>
</template>

<style scoped></style>
