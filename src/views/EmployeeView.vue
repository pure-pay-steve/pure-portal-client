<script setup lang="ts">

import { Ref, ref } from 'vue'

import { Employee } from '../model/Employee';
import { DateOnly } from '../lib/DateOnly'

import EmployeeEditor from '../components/EmployeeEditor.vue'
import FlexBreak from '../components/FlexBreak.vue';

const employee = ref({}) as Ref<Employee>

employee.value = {
    // title: 'Mrs',
    // firstName: 'Steve',
    // middleName: 'John',
    // lastName: 'Wilkinson',
    // preferredName: 'Steve',
    // dateOfBirth: new DateOnly(1980, 1, 1),
    // gender: 'Female'
} as Employee

console.log(employee.value)
// defineProps({
// })

// defineEmits([])

const people = ref([
    { name: 'Steve Wilkinson' }
])

const onSave = () => {
    console.log('Saving...')

    if (employee.value) {
        console.log(JSON.stringify(employee.value))
    }
}

</script>

<template>
    <div class="xl:ml-48 xl:mr-96">
        <h1 className="text-3xl font-bold my-4">
            Employee
        </h1>
        <div class="flex flex-col">
            <employee-editor v-model="employee" v-for="emp in people" :name="emp.name" class="m-1"></employee-editor>
            <flex-break />
            <button @click="onSave"
                class="grow-0 self-end rounded-md bg-indigo-500 mt-5 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>

        </div>
    </div>
</template>

<style scoped></style>
