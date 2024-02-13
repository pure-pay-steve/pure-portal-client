<script setup>

import { ref } from 'vue'
import EmployeeEditor from '../components/EmployeeEditor.vue'

defineProps({
})

defineEmits([])


const people = ref([
    { name: 'Steve Wilkinson' },
    { name: 'Chris Deeson' },
    { name: 'Harry Hawk' },
    { name: 'Dennis Dubois' }
])
</script>

<template>
    <div class="xl:ml-48 xl:mr-96">
        <h1 className="text-3xl font-bold">
            Employees
        </h1>
        <div class="flex-col flex-1">
            <employee-editor v-for="employee in people" :name="employee.name" class="m-1"></employee-editor>
        </div>
    </div>
</template>

<style scoped></style>
