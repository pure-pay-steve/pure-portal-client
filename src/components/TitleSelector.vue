<script setup>

import { computed, ref } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'

defineProps({
  label: String
})

defineEmits([])

const standardTitles = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr.', 'Rev.', 'Prof.', 'Other']
const query = ref('')
const selectedTitle = ref(null)

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

</script>

<template>
  <div class="flex items-end space-x-1">
    <combobox as="div" v-model="selectedTitle" class="w-28">
      <combobox-label class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</combobox-label>
      <div class="relative mt-2">
        <combobox-input
          class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          @change="query = $event.target.value" :display-value="(person) => person" />
        <combobox-button class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <chevron-up-down-icon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </combobox-button>
        <combobox-options v-if="filteredTitles.length > 0"
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <combobox-option v-for="person in filteredTitles" :key="person" :value="person" as="template"
            v-slot="{ active, selected }">
            <li
              :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
              <span :class="['block truncate', selected && 'font-semibold']">
                {{ person }}
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
    <input v-if="showOther" type="email" name="email" id="email"
      class="h-8 mb-[2px] w-28 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="you@example.com" />
  </div>
</template>

<style scoped></style>
