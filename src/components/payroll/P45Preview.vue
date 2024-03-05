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
            <span class="form-text" style="top: 38mm; left:22mm">Employee PAYE reference</span>
            <span class="form-text" style="top: 43mm; left:22mm">Office number</span>
            <span class="form-text" style="top: 43mm; left:44.5mm">Reference number</span>

            <div class="field-box" style="top: 49.039mm; left: 22mm; width: 16mm;"></div>
            <span style="font-size: 18pt; top: 47.039mm; left: 40mm; position: absolute;">/</span>
            <div class="field-box" style="top: 49.039mm; left: 44.5mm; width: 54mm;"></div>

            <div class="numbered-box" style="top: 60.376mm;">2</div>
            <div class="numbered-box" style="top: 77.376mm;">3</div>
            <div class="numbered-box" style="top: 119.876mm;">4</div>

            <div class="numbered-box" style="left: 107.48mm; top: 38.876mm;">5</div>
            <div class="numbered-box" style="left: 107.48mm; top: 55.876mm;">6</div>
            <div class="numbered-box" style="left: 107.48mm; top: 85.376mm;">7</div>

            <div style="position: absolute; height: 1px; width: 210mm; top: 140mm; left: 0; background-color: black;">
            </div>
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
