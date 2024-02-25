<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref } from 'vue'

import EmployeeView from './views/EmployeeView.vue'
import { Http } from './lib/Http'

const enabled = ref(false)

const onSave = (employee: any) => {
  console.log('Saving...')
  console.dir(employee, {depth: null, colors: true})

  const http = new Http("localhost", "api")
  http.post("employee", employee)
}
</script>

<!--

<template>
  <div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>  
    <div class="w-full px-4 pt-16">
    <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
      <disclosure v-slot="{ open }">
        <disclosure-button
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
        >
          <span>What is your refund policy?</span>
          <chevron-up-icon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </disclosure-button>
        <disclosure-panel class="px-4 pb-2 pt-4 text-sm text-gray-500">
          If you're unhappy with your purchase for any reason, email us within
          90 days and we'll refund you in full, no questions asked.
        </disclosure-panel>
      </disclosure>
      <disclosure as="div" class="mt-2" v-slot="{ open }">
        <disclosure-button
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
        >
          <span>Do you offer technical support?</span>
          <chevron-up-icon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </disclosure-button>
        <disclosure-panel class="px-4 pb-2 pt-4 text-sm text-gray-500">
          No.
        </disclosure-panel>
      </Disclosure>
    </div>
  </div>

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
    <employee-view @save="onSave"></employee-view>
  <!-- <form class="md:ml-64 mt-8 md:mr-24 m-8">
    <div class="space-y-2 bg-bkg">
      <div class="border-b border-gray-900/10 pb-12">

        <h2 class="text-base font-semibold leading-7 text-gray-900">Employee Details</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you
          share.</p>

        <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">

          <div class="sm:col-span-full mt-4">
            <title-selector class="mt-0" label="Title" />
          </div>

          <div class="sm:col-span-2">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Middle name(s)</label>
            <div class="mt-2">
              <input type="text" name="middle-names" id="middle-names" autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <span class="block mt-1 text-sm leading-1 text-gray-600 justify-self-stretch text-right">Optional</span>
          </div>

          <div class="sm:col-span-2">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-full mt-0">
            <label for="gender" class="block text-sm font-medium leading-6 text-gray-900">Gender</label>
            <Switch v-model="enabled" id="gender"
              :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
              <span class="sr-only">Use setting</span>
              <span aria-hidden="true"
                :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
            </Switch>
          </div>

          <div>
            <gender-toggle top-label="Gender" left-label="Male" right-label="Female"></gender-toggle>
          </div>

          <div class="sm:col-span-full">
            <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
            <div class="mt-2">
              <input type="text" name="address" id="address" autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Employment Details</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick
          what else you want to hear about.</p>

        <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">

          <div class="sm:col-span-2 mt-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Payroll ID</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <span class="block mt-1 text-sm leading-1 text-gray-600 justify-self-stretch text-right">Leave blank to
              automatically fill</span>
          </div>

          <div class="sm:col-span-4"></div>

          <div class="sm:col-span-2">
            <label for="start-date" class="block text-sm font-medium leading-6 text-gray-900">Start date</label>
            <div class="mt-2">
              <input id="start-date" name="start-date" type="date" autocomplete="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-4"></div>

        </div>
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 border rounded p-4">

          <span class="sm:col-span-full text-sm font-bold leading-6 text-gray-900 -mt-6 px-2 bg-white">HMRC Settings</span>

          <div class="sm:col-span-1 col-start-1 mt-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Tax code</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <span class="block mt-1 text-sm leading-1 text-gray-600 justify-self-stretch text-right">Leave blank if
              unknown</span>
          </div>

          <div class="sm:col-span-2 relative flex gap-x-3 mt-14">
            <div class="flex h-6 items-center">
              <input id="comments" name="comments" type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            </div>
            <div class="text-sm leading-6">
              <label for="comments" class="font-medium text-gray-900">No-cumulative</label>
              <p class="text-gray-500 mt-1">Tax code ends in X, or W1/M1 or similar.</p>
            </div>
          </div>

          <div class="sm:col-span-2"></div>

          <div class="sm:col-span-2 mt-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">NI number</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <span class="block mt-1 text-sm leading-1 text-gray-600 justify-self-stretch text-right">Leave blank if
              unknown</span>
          </div>

          <div class="sm:col-span-1 mt-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">NI category</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <span class="block mt-1 text-sm leading-1 text-gray-600 justify-self-stretch text-right">Leave blank if
              unknown</span>
          </div>

          <div class="sm:col-span-3"></div>

          <div class="col-span-1 mt-0">
            <label for="gender" class="block text-sm font-medium leading-6 text-gray-900">Employee is a director</label>
            <Switch v-model="enabled" id="gender"
              :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
              <span class="sr-only">Use setting</span>
              <span aria-hidden="true"
                :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
            </Switch>
          </div>

          <div class="sm:col-span-1 mt-4">
            <title-selector class="mt-0 w-12" label="Director's NI calculation method" />
          </div>

        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form> -->
</template>


<style scoped></style>