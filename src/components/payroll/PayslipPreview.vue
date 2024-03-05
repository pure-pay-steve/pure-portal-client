<script lang="ts" setup>

import { onMounted, onUnmounted } from "vue"

const emit = defineEmits(["close"])

onMounted(() => {
    const el = document.querySelector("#preview-background")
    el?.addEventListener("click", (event) => onClick(event))
})

onUnmounted(() => {
    const el = document.querySelector("#preview-background")
    el?.removeEventListener("click", (event) => onClick(event))
})

const onClick = (event: Event) => {
    const el = document.querySelector("#payslip-preview")
    if (!(el?.contains(event.target as Node)))
        emit("close")
}
</script>

<template>
    <div id="preview-background"
        class="flex overflow-x-hidden overflow-y-auto fixed h-full top-0 left-0 right-0 z-50 justify-center items-center bg-slate-300/50">
        <div id="payslip-preview"
            class="h-[1122px] w-[794px] bg-white shrink-0 grow-0 border border-gray-400 shadow-lg scale-75 pl-12 pt-12">

            <div class="grid grid-cols-[1fr,1.2fr] gap-x-6 gap-y-4 h-auto">
                <div class="text-xl text-red-600">*** DRAFT ***</div>
                <div>
                    <div class="font-bold mb-4">CODEFACTORS LTD</div>
                    <div class="grid grid-cols-[1fr,1.6fr] text-sm">
                        <div>Pay date:</div>
                        <div class="font-bold">31/12/2023</div>
                        <div>Pay period:</div>
                        <div class="font-bold">1/12/2023 - 31/12/2023</div>
                    </div>
                </div>
                <div class="ml-12">
                    <div>Stephen Wilkinson</div>
                    <div>113 Coxtie Green Road<br />Brentwood<br />Essex CM14 5PT</div>
                    <div></div>
                </div>
                <div class="grid grid-cols-[1fr,1.6fr] text-sm">
                    <div>Payroll number:</div>
                    <div>1</div>
                    <div>NI number:</div>
                    <div>NA1234567A</div>
                    <div>NI category:</div>
                    <div>A</div>
                    <div>Tax code:</div>
                    <div class="font-bold">1257L</div>
                </div>
                <div></div>
                <div class="grid grid-cols-2 mt-2 main-figure">
                    <div>Gross earnings:</div>
                    <div class="font-bold">£&thinsp;1,234.56</div>
                    <div>Taxable earnings:</div>
                    <div class="font-bold">£&thinsp;1,1205.54</div>
                    <div>Net pay:</div>
                    <div class="font-bold">£&thinsp;891.76</div>
                </div>
            </div>
            <div class="mt-8 grid grid-cols-[1fr,auto,auto] mr-12 gap-x-16">
                <div class="">
                    <span class="mt-16 text-lg font-bold border-b border-feint">Breakdown</span>
                </div>
                <div class="font-bold number border rounded-lg px-2 bg-slate-400 text-white">This Pay</div>
                <div class="font-bold number border rounded-lg px-2 bg-slate-400 text-white">Year To Date</div>

                <div class="col-span-3 border-b font-bold mt-2">Income</div>
                <div class="item">Directors Remuneration</div>
                <div class="number">£&thinsp;1,000.00</div>
                <div class="number">£&thinsp;5,500.00</div>
                <div class="item">Hourly Pay: 10 hours @ £&thinsp;16.70 per hour</div>
                <div class="number">£&thinsp;167.00</div>
                <div class="number">£&thinsp;1,500.00</div>
                <div class="item">Car Allowance</div>
                <div class="number">£&thinsp;1,500.00</div>
                <div class="number">£&thinsp;2,500.00</div>
                <div></div>
                <div class="number font-semibold border-t">£&thinsp;5,232.00</div>
                <div class="number font-semibold border-t">£&thinsp;5,232.00</div>

                <div class="col-span-3 border-b font-bold mt-2">Taxable Benefits</div>
                <div class="item">Private Medical Cover</div>
                <div class="number">£&thinsp;1,000.00</div>
                <div class="number">£&thinsp;5,500.00</div>
                <div></div>
                <div class="number font-semibold border-t">£&thinsp;5,232.00</div>
                <div class="number font-semibold border-t">£&thinsp;5,232.00</div>

                <div class="col-span-3 border-b font-bold mt-2">Deductions</div>
                <div class="item">Income Tax</div>
                <div class="number">£&thinsp;1,000.00</div>
                <div class="number">£&thinsp;5,500.00</div>
                <div class="item">Employee National Insurance</div>
                <div class="number">£&thinsp;167.00</div>
                <div class="number">£&thinsp;1,500.00</div>
                <div class="item">Student Loan Repayment</div>
                <div class="number">£&thinsp;167.00</div>
                <div class="number">£&thinsp;1,500.00</div>
                <div class="item">Employee Pension Contribution</div>
                <div class="number">£&thinsp;1,500.00</div>
                <div class="number">£&thinsp;2,500.00</div>
                <div></div>
                <div class="number font-semibold border-t">£&thinsp;5,232.00</div>
                <div class="number font-semibold border-t">£&thinsp;5,232.00</div>

                <div class="col-span-3 border-b font-bold mt-2">Employer</div>
                <div class="item">Employer National Insurance</div>
                <div class="number">£&thinsp;1,000.00</div>
                <div class="number">£&thinsp;5,500.00</div>
                <div class="item">Employer Pension Contribution</div>
                <div class="number">£&thinsp;167.00</div>
                <div class="number">£&thinsp;1,500.00</div>
                <div></div>
                <div class="number font-semibold border-t">£&thinsp;5,232.00</div>
                <div class="number font-semibold border-t">£&thinsp;5,232.00</div>

            </div>
        </div>
    </div>

</template>

<style scoped>
.number {
    @apply justify-self-end text-[0.9375rem]/7
}

.item {
    @apply text-[0.9375rem]/7
}

.main-figure {
    @apply text-[1.0625rem]
}
</style>
