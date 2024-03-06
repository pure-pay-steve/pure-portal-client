<script lang="ts" setup>

import { onMounted, onUnmounted, ref } from "vue"

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
        <div id="payslip-preview" class="scale-75 page absolute">
            <img src="../../assets/hmrc-logo.png" alt="HM Revenue and Customs"
                style="position: absolute; height: 12mm; width: auto; top: 13.408mm; left: 16mm" />
            <span style="position: absolute; top: 8.25mm; left: 167mm; font-size: 14pt; font-weight: bold;">P45 Part
                1A</span>
            <span style="position: absolute; top: 14.5mm; left: 117.5mm; font-size: 14pt; font-weight: bold;">Details of
                employee leaving work</span>
            <span style="position: absolute; top: 21.25mm; left: 152mm; font-size: 12pt;">Copy for new employer</span>
            <div style="position: absolute; height: 3.5mm; width: 184mm; top: 28.391mm; background-color: black;"></div>

            <div class="numbered-box" style="top: 38.876mm;">1</div>
            <span class="form-text" style="top: 38mm; left:22mm">Employer PAYE reference</span>
            <span class="form-text" style="top: 43mm; left:22mm">Office number</span>
            <span class="form-text" style="top: 43mm; left:44.5mm">Reference number</span>
            <div class="field-box" style="top: 49.039mm; left: 22mm; width: 16mm;"></div>
            <span style="font-size: 18pt; top: 47.039mm; left: 40mm; position: absolute;">/</span>
            <div class="field-box" style="top: 49.039mm; left: 44.5mm; width: 54mm;"></div>

            <div class="numbered-box" style="top: 60.376mm;">2</div>
            <span class="form-text" style="top: 59.5mm; left:22mm">Employee's National Insurance number</span>
            <div class="field-box" style="top: 65.981mm; left: 22mm; width: 76.5mm;"></div>

            <div class="numbered-box" style="top: 77.376mm;">3</div>
            <span class="form-text" style="top: 76.8mm; left:22mm">Title - enter MR, MRS, MISS, MS or other title</span>
            <div class="field-box" style="top: 82.897mm; left: 22mm; width: 76.5mm;"></div>
            <span class="form-text" style="top: 89.6mm; left:22mm">Surname or family name</span>
            <div class="field-box" style="top: 95.597mm; left: 22mm; width: 76.5mm;"></div>
            <span class="form-text" style="top: 102.3mm; left:22mm">First name(s)</span>
            <div class="field-box" style="top: 108.297mm; left: 22mm; width: 76.5mm;"></div>
            
            <div class="numbered-box" style="top: 119.876mm;">4</div>
            <span class="form-text" style="top: 119.3mm; left:22mm">Leaving date DD MM YYYY</span>
            <div class="field-box" style="top: 125.239mm; left: 22mm; width: 10mm;"></div>
            <div class="field-box" style="top: 125.239mm; left: 35.5mm; width: 10mm;"></div>
            <div class="field-box" style="top: 125.239mm; left: 49mm; width: 20mm;"></div>

            <div class="numbered-box" style="top: 38.876mm; left: 107.48mm;">5</div>
            <span class="form-text" style="top: 38.2mm; left:116.5mm">Student Loan deductions</span>
            <div class="field-box" style="top: 44.239mm; left: 116.5mm; width: 5mm;"></div>
            <span class="form-text" style="top: 46mm; left:123.5mm">Student Loan deductions to continue</span>

            <div class="numbered-box" style="top: 55.876mm; left: 107.48mm;">6</div>
            <span class="form-text" style="top: 55mm; left:116.5mm">Tax code at leaving date</span>
            <div class="field-box" style="top: 61.739mm; left: 116.5mm; width: 43mm;"></div>
            <span class="form-text" style="top: 69mm; left:116.5mm">If week 1 or month 1 applies, enter 'X' in the box below.</span>
            <span class="form-text" style="top: 75.5mm; left:116.5mm">Week 1/month 1</span>
            <div class="field-box" style="top: 74.439mm; left: 142.38mm; width: 5mm;"></div>

            <div class="numbered-box" style="top: 85.376mm; left: 107.48mm;">7</div>
            <span class="form-text" style="top: 84.7mm; left:116.5mm">Last entries on Payroll record/Deductions Working Sheet<br/><b>Complete only if tax code is cumulative.</b> If there is an 'X'<br/>at box 6 there will be no entries here.</span>
            
            <div class="field-box" style="top: 99.839mm; left: 136.45mm; width: 10mm;"></div>
            <div class="field-box" style="top: 99.839mm; left: 172.1mm; width: 10mm;"></div>


            <!-- Second half of page starts here -->
            <div style="position: absolute; height: 1px; width: 210mm; top: 140mm; left: 0; background-color: black;"></div>

            <div class="numbered-box" style="top: 144.771mm;">8</div>
            <div class="numbered-box" style="top: 181.787mm;">9</div>
            <div class="numbered-box" style="top: 208.139mm;">10</div>
            <div class="numbered-box" style="top: 225.639mm;">11</div>

            <div class="numbered-box" style="top: 144.771mm; left: 107.48mm;">12</div>
            <div class="numbered-box" style="top: 185.597mm; left: 107.48mm;">13</div>
        </div>
    </div>

</template>

<style scoped>
.page {
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    width: 210mm;
    min-height: 297mm;
    padding-left: 13mm;
    margin: 0;
    border: 1px #D3D3D3 solid;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.subpage {
    border: 5px red solid;
    height: 237mm;
    outline: 2cm #FFEAEA solid;
}

.numbered-box {
    position: absolute;
    height: 4.233mm;
    width: 7mm;
    font-size: 7pt;
    font-weight: bold;
    border: 0.03rem solid rgba(32, 32, 32, 0.5);
    text-align: right;
    padding-right: 1.5mm;
    padding-top: 0.3mm;
}

.form-text {
    position: absolute;
    font-size: 8.5pt;
    font-weight: regular;
}

.field-box {
    position: absolute;
    height: 6mm;
    border: 0.03rem solid rgba(32, 32, 32, 0.5);
}

@page {
    size: A4;
    margin: 0;
}

@media print {
    .page {
        margin: 0;
        border: initial;
        border-radius: initial;
        width: initial;
        min-height: initial;
        box-shadow: initial;
        background: initial;
        page-break-after: always;
    }
}
</style>
