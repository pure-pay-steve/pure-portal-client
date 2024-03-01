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
        <title-selector v-model="employee.descriptor.title" label="Title" test-id="title"></title-selector>
        <flex-break />
        <labelled-input v-model="employee.descriptor.firstName" label="First name" case-treatment="proper-name"
            test-id="first-name" />
        <labelled-input v-model="employee.descriptor.middleNames" label="Middle name(s)" case-treatment="proper-name"
            test-id="middle-names" />
        <labelled-input v-model="employee.descriptor.lastName" label="Surname" class="flex-grow"
            case-treatment="proper-name" test-id="last-name" />
        <flex-break />
        <labelled-input v-model="employee.descriptor.preferredName" label="Preferred name" case-treatment="proper-name"
            test-id="preferred-name" />
        <flex-break />
        <date-selector v-model="employee.dateOfBirth" label="Date of birth" test-id="date-of-birth" />
        <gender-toggle v-model="employee.gender" class="sm:ml-8" top-label="Gender" left-label="Male" right-label="Female"
            test-id="gender" />
        <flex-break />
        <address-finder v-model="employee.address" label="Address" size="full" @resolved="onAddressResolved"
            test-id="address" placeholder="Start typing address..." />
        <labelled-input v-model="employee.emailAddress" size="long" label="Email" ref="emailControl" test-id="email"
            case-treatment="all-lower" />
        <flex-break />
        <date-selector v-model="employee.employmentStartDate" label="Employment start date" test-id="start-date" />
        <labelled-input v-model="employee.descriptor.payrollId" label="Payroll Id"
            placeholder="Leave blank to auto-populate" test-id="payroll-id" />
        <flex-break />
        <tax-code v-model="employee.taxCode" test-id="tax-code" />
        <flex-break />
        <ni-details v-model="employee.niDetails" test-id="ni-details" />
        <flex-break />
        <directors-ni-selector v-model="employee.directorSettings" test-id="directors-ni" />
        <student-loan-selector v-model="employee.studentLoanSettings" test-id="student-loan" />
        <flex-break />
    </div>
</template>

<style scoped></style>