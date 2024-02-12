<script setup>
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
    <collapsible :header="name" class="bg-cardcontainer pb-4">
        <employee-details class="mb-2"/>
        <employment-details />
    </collapsible>
</template>

<style scoped></style>
