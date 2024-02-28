<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import { ref } from 'vue'

const enabled = ref(false)

// const onSave = (employee: any) => {
//   console.log('Saving...')
//   console.dir(employee, {depth: null, colors: true})

//   const http = new Http("localhost", "api")
//   http.post("employee", employee)
// }
</script>

<template>

  <div class="flex flex-row gap-8">
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with -->
    <!-- the correct `href` attribute -->
    <router-link to="/employee">Employee</router-link>
    <router-link to="/pay-category">Pay Category</router-link>
    <router-link to="/pay-run">Pay Run</router-link>
  </div>

  <router-view></router-view>

</template>


<style scoped></style>