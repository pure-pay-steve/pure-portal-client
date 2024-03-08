<script lang="ts" setup>

import { ref } from "vue"
import LabelledInput from "./LabelledInput.vue"

const props = defineProps({
    open: Boolean
})

const value = ref('')

</script>

<template>
    <div class="outer border border-feint rounded-xl rounded-r-none" :class="open ? 'is-open' : ''"
        style="z-index: 100; position: fixed; top: 7vh; background-color: white; height: 90vh;">
        <div class="flex flex-col">
            <div class="basis-full bg-slate-200 pl-4 py-2 rounded-tl-xl">Add earnings</div>
            <div class="flex flex-col pl-6 mt-6 gap-x-4">
                <label for="earnings" class="block text-sm font-medium leading-3 text-inputlabel mb-2">Earnings
                    type</label>
                <select id="earnings" class="w-40 h-10 rounded-md border border-feint">
                    <option disabled selected value>-- select --</option>
                    <option value="1">Salary</option>
                    <option value="2">Hourly pay</option>
                    <option value="3">First aider allowance</option>
                    <option value="4">Season ticket loan</option>
                    <option value="5">Sick pay</option>
                </select>
            </div>
            <div class="flex flex-col pl-6 mt-6 gap-y-6">
                <div>
                    <label for="pay-rate-units" class="block text-sm font-medium leading-3 text-inputlabel mb-2">When to
                        pay</label>
                    <select id="pay-rate-units" class="w-40 h-10 rounded-md border border-feint">
                        <option disabled selected value>-- select --</option>
                        <option value="1">Per hour</option>
                        <option value="2">Per day</option>
                        <option value="3">Per week</option>
                        <option value="4">Per month</option>
                        <option value="5">Per annum</option>
                        <option value="5">Per pay period</option>
                    </select>
                </div>
                <labelled-input v-model="value" label="Rate/amount" class="" id="pay-rate" size="short"
                    caseTreatment="all-upper" test-id="a" />
            </div>
        </div>
        <!-- <div style="; width: 20vw; height: 90vh"
        class="inner "></div> -->
    </div>
</template>

<style scoped>
.outer {
    display: block;
    width: 0vw;
    left: 100vw;
    transition: width 0.25s ease-out, left 0.25s ease-out;
}

.outer.is-open {
    width: 20vw;
    left: 80vw;
}

.inner {
    overflow: hidden;
}
</style>