<script setup lang="ts">

import { ref } from 'vue'
import Collapsible from '../components/Collapsible.vue'
import EmployeeDetails from '../components/EmployeeDetails.vue'
import EmploymentDetails from '../components/EmploymentDetails.vue'

defineProps({
    name: String
})

defineEmits([])

</script>

<template>
    <div class="bg-cardcontainer">
        <collapsible :header="name" class="pb-4">
            <employee-details class="mb-2"></employee-details>
            <employment-details></employment-details>
        </collapsible>
    </div>
</template>

<style scoped></style>
