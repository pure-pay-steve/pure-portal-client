<script lang="ts" setup>

import { Employee } from "../../model/Employee";

// Common components
import LabelledInput from "../common/LabelledInput.vue";
import FlexBreak from "../common/FlexBreak.vue";
import TitleSelector from "../common/TitleSelector.vue";
import GenderToggle from "../common/GenderToggle.vue";
import DateSelector from "../common/DateSelector.vue";
import AddressFinder from "../common/AddressFinder.vue";

// Domain specific components
import TaxCode from "./TaxCode.vue";
import NiDetails from "./NiDetails.vue";
import DirectorsNiSelector from "./DirectorsNiSelector.vue";
import StudentLoanSelector from "./StudentLoanSelector.vue";

const employee = defineModel<Employee>({ required: true });

</script>

<template>
    <div class="flex flex-row flex-wrap gap-x-3 gap-y-4 p-4 max-h-[80vh] overflow-y-auto">
        <div class="flex flex-row gap-x-4">
            <labelled-input v-model="employee.descriptor.firstName" label="Official business name" test-id="first-name"
                size="long" />
            <button
                class="grow-0 mt-5 rounded-md bg-indigo-500 h-8 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Search
                Companies House</button>
        </div>
        <flex-break />
        <labelled-input v-model="employee.descriptor.lastName" label="Company registration number"
            case-treatment="proper-name" size="long" test-id="last-name" />
        <flex-break />
        <labelled-input v-model="employee.descriptor.middleNames" label="Known as name" test-id="middle-names"
            size="long" />
        <flex-break />
        <labelled-input v-model="employee.descriptor.preferredName" label="Preferred name" case-treatment="proper-name"
            test-id="preferred-name" />
        <flex-break />
        <address-finder v-model="employee.address" label="Address" size="full" @resolved="onAddressResolved"
            test-id="address" placeholder="Start typing address..." />
        <labelled-input v-model="employee.emailAddress" size="long" label="Email" ref="emailControl" test-id="email"
            case-treatment="all-lower" />
    </div>
</template>


<style scoped></style>