<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">
import { ref, defineModel } from "vue";

import { Employee } from "../../model/Employee";

import LabelledInput from "../common/LabelledInput.vue";
import FlexBreak from "../common/FlexBreak.vue";
import TitleSelector from "../common/TitleSelector.vue";
import GenderToggle from "../common/GenderToggle.vue";
import DateSelector from "../common/DateSelector.vue";
import TaxCode from "./TaxCode.vue";
import NiDetails from "./NiDetails.vue";
import DirectorsNiSelector from "./DirectorsNiSelector.vue";
import StudentLoanSelector from "./StudentLoanSelector.vue";
import AddressFinder from "../common/AddressFinder.vue";

const emailControl = ref<null | { focus: () => void }>(null);

defineProps({
    name: String,
});

defineEmits([]);

const employee = defineModel<Employee>({ required: true });

const onAddressResolved = () => {
    setTimeout(() => {
        if (emailControl.value) {
            emailControl.value.focus();
        }
    });
}

</script>

<template>
    <div class="flex flex-row flex-wrap gap-x-3 gap-y-4 p-4 max-h-[80vh] overflow-y-auto">
        <date-selector v-model="employee.employmentStartDate" label="Employment start date" test-id="start-date" />
        <labelled-input v-model="employee.descriptor.payrollId" label="Payroll Id"
            placeholder="Leave blank to auto-populate" test-id="payroll-id" />
    </div>
</template>

<style scoped></style>