<script lang="ts" setup>

import { onMounted, onUnmounted, ref } from "vue"

const emit = defineEmits(["close"])

onMounted(() => {
    const el = document.querySelector("#preview-background")
    el?.addEventListener("click", (event) => onClick(event))
    document.addEventListener("keydown", (event) => onKeydown(event))
})

onUnmounted(() => {
    const el = document.querySelector("#preview-background")
    el?.removeEventListener("click", (event) => onClick(event))
    document.removeEventListener("keydown", (event) => onKeydown(event))
})

const onClick = (event: Event) => {
    const el = document.querySelector("#payslip-preview")
    if (!(el?.contains(event.target as Node)))
        emit("close")
}

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
        emit("close")
    }
}

</script>

<template>
    <div id="preview-background"
        class="flex overflow-x-hidden overflow-y-scroll fixed h-full top-0 left-0 right-0 z-50 justify-center bg-slate-300/50">
        <div id="payslip-preview" class="scale-90 page absolute">

            <img src="../../assets/hmrc-logo.png" alt="HM Revenue and Customs"
                style="position: absolute; height: 12mm; width: auto; top: 13.408mm; left: 16mm" />
            <span style="position: absolute; top: 8.25mm; left: 167mm; font-size: 14pt; font-weight: bold;">P45 Part
                1A</span>
            <span style="position: absolute; top: 14.5mm; left: 117.5mm; font-size: 14pt; font-weight: bold;">Details of
                employee leaving work</span>
            <span style="position: absolute; top: 21.25mm; left: 159mm; font-size: 12pt;">Copy for employee</span>

            <div style="position: absolute; height: 3.2mm; width: 184mm; top: 29.391mm; background-color: black;"></div>

            <div class="numbered-box" style="top: 38.876mm;">1</div>
            <span class="form-text" style="top: 38mm; left:22mm">Employer PAYE reference</span>
            <span class="form-text" style="top: 43mm; left:22mm">Office number</span>
            <span class="form-text" style="top: 43mm; left:44.5mm">Reference number</span>
            <div class="field-box" style="top: 49.039mm; left: 22mm; width: 16mm;">475</div>
            <span style="font-size: 18pt; top: 47.039mm; left: 40mm; position: absolute;">/</span>
            <div class="field-box" style="top: 49.039mm; left: 44.5mm; width: 54mm;">UA77375</div>

            <div class="numbered-box" style="top: 60.376mm;">2</div>
            <span class="form-text" style="top: 59.5mm; left:22mm">Employee's National Insurance number</span>
            <div class="field-box" style="top: 65.981mm; left: 22mm;">NA183716C</div>

            <div class="numbered-box" style="top: 77.376mm;">3</div>
            <span class="form-text" style="top: 76.8mm; left:22mm">Title - enter MR, MRS, MISS, MS or other title</span>
            <div class="field-box" style="top: 82.897mm; left: 22mm;">MR</div>
            <span class="form-text" style="top: 89.6mm; left:22mm">Surname or family name</span>
            <div class="field-box" style="top: 95.597mm; left: 22mm;">WILKINSON</div>
            <span class="form-text" style="top: 102.3mm; left:22mm">First name(s)</span>
            <div class="field-box" style="top: 108.297mm; left: 22mm;">Stephen Charles</div>

            <div class="numbered-box" style="top: 119.876mm;">4</div>
            <span class="form-text" style="top: 119mm; left:22mm">Leaving date DD MM YYYY</span>
            <div class="field-box" style="top: 125.239mm; left: 22mm; width: 10mm;">31</div>
            <div class="field-box" style="top: 125.239mm; left: 35.5mm; width: 10mm;">10</div>
            <div class="field-box" style="top: 125.239mm; left: 49mm; width: 20mm;">2022</div>

            <div class="numbered-box" style="top: 38.876mm; left: 107.48mm;">5</div>
            <span class="form-text" style="top: 38.2mm; left:116.5mm">Student Loan deductions</span>
            <div class="field-box" style="top: 44.239mm; left: 116.5mm; width: 5mm;"></div>
            <span class="form-text" style="top: 46mm; left:123.5mm">Student Loan deductions to continue</span>

            <div class="numbered-box" style="top: 55.876mm; left: 107.48mm;">6</div>
            <span class="form-text" style="top: 55mm; left:116.5mm">Tax code at leaving date</span>
            <div class="field-box" style="top: 61.739mm; left: 116.5mm; width: 43mm;">1296L</div>
            <span class="form-text" style="top: 69mm; left:116.5mm">If week 1 or month 1 applies, enter 'X' in the box
                below.</span>
            <span class="form-text" style="top: 75.5mm; left:116.5mm">Week 1/month 1</span>
            <div class="tick-field-box" style="top: 74.439mm; left: 142.38mm;"></div>

            <div class="numbered-box" style="top: 85.376mm; left: 107.48mm;">7</div>
            <span class="form-text" style="top: 84.4mm; left:116.5mm">Last entries on Payroll record/Deductions Working
                Sheet<br /><b>Complete only if tax code is cumulative.</b> If there is an 'X'<br />at box 6 there will
                be no entries here.</span>
            <span class="form-text" style="top: 101mm; left:116.5mm">Week number</span>
            <div class="field-box" style="top: 99.839mm; left: 136.45mm; width: 10mm;"></div>
            <span class="form-text" style="top: 101mm; left:150mm">Month number</span>
            <div class="field-box" style="top: 99.839mm; left: 172.1mm; width: 10mm;">9</div>
            <span class="form-text" style="top: 111mm; left:116.5mm">Total pay to date</span>
            <span class="currency-box" style="top: 116.755mm; left: 116.5mm;">£</span>
            <div class="number-field-box" style="top: 116.755mm; left: 122.353mm; width: 62.58mm; ">50,556.41</div>
            <span class="currency-box" style="top: 116.755mm; left: 185.932mm;">p</span>
            <span class="form-text" style="top: 124mm; left:116.5mm">Total tax to date</span>
            <span class="currency-box" style="top: 129.455mm; left: 116.5mm;">£</span>
            <div class="number-field-box" style="top: 129.455mm; left: 122.353mm; width: 62.58mm; ">10,676.60</div>
            <span class="currency-box" style="top: 129.455mm; left: 185.932mm;">p</span>


            <!-- Second half of page starts here -->
            <div style="position: absolute; height: 1px; width: 210mm; top: 140mm; left: 0; background-color: black;">
            </div>

            <div class="numbered-box" style="top: 144.771mm;">8</div>
            <span class="form-text" style="top: 144mm; left:22mm">This employment pay and tax. If no entry here, the
                amounts<br />are those shown at box 7.</span>
            <span class="form-text" style="top: 153.5mm; left:22mm">Total pay in this employment</span>
            <span class="currency-box" style="top: 159.097mm; left: 22mm;">£</span>
            <div class="number-field-box" style="top: 159.097mm; left: 27.853mm; width: 62.58mm; "></div>
            <span class="currency-box" style="top: 159.097mm; left: 91.432mm;">p</span>
            <span class="form-text" style="top: 166.5mm; left:22mm">Total tax in this employment</span>
            <span class="currency-box" style="top: 171.797mm; left: 22mm;">£</span>
            <div class="number-field-box" style="top: 171.79755mm; left: 27.853mm; width: 62.58mm; "></div>
            <span class="currency-box" style="top: 171.797mm; left: 91.432mm;">p</span>

            <div class="numbered-box" style="top: 181.787mm;">9</div>
            <span class="form-text" style="top: 180.7mm; left:22mm">
                Works number/Payroll number and Department or branch<br />(if any)
            </span>
            <div class="field-box" style="top: 191.203mm; left: 22mm; height: 12mm; padding-top: 3mm;">10</div>

            <div class="numbered-box" style="top: 208.139mm;">10</div>
            <span class="form-text" style="top: 207.5mm; left:22mm">
                Gender. Enter 'X' in the appropriate box
            </span>
            <span class="form-text" style="top: 215mm; left:22mm">Male</span>
            <div class="tick-field-box" style="top: 214.139mm; left: 32.994mm;">X</div>
            <span class="form-text" style="top: 215mm; left:44mm">Female</span>
            <div class="tick-field-box" style="top: 214.139mm; left: 56.994mm;"></div>

            <div class="numbered-box" style="top: 225.639mm;">11</div>
            <span class="form-text" style="top: 225mm; left:22mm">Date of birth DD MM YYYY</span>
            <div class="field-box" style="top: 231.055mm; left: 22mm; width: 10mm;">22</div>
            <div class="field-box" style="top: 231.055mm; left: 35.5mm; width: 10mm;">06</div>
            <div class="field-box" style="top: 231.055mm; left: 49mm; width: 20mm;">1963</div>

            <div class="numbered-box" style="top: 144.771mm; left: 107.48mm;">12</div>
            <span class="form-text" style="top: 145mm; left:116.5mm">Employee's private address</span>
            <div class="field-box"
                style="top: 151.325mm; left: 116.5mm; height: 18mm; line-height: 11pt; padding-top: 2pt;">3 Osborne
                Road,<br />Pilgrims
                Hatch,<br />Brentwood,<br />Essex
            </div>
            <span class="form-text" style="top: 170.5mm; left:116.5mm">Postcode</span>
            <div class="field-box" style="top: 176.039mm; left: 116.5mm;">CM15 9LE</div>

            <div class="numbered-box" style="top: 185.597mm; left: 107.48mm;">13</div>
            <span class="form-text" style="top: 185mm; left:116.5mm">I certify that the details entered in items 1 to 11
                on<br />this form are correct.<br />Employers name and address</span>
            <div class="field-box"
                style="top: 200.347mm; left: 116.5mm; height: 24mm; line-height: 11pt; padding-top: 2pt;">FINANCIAL
                SATNAV LTD<br />85 Great Portland Street,<br />LONDON</div>
            <span class="form-text" style="top: 226mm; left:116.5mm">Postcode</span>
            <div class="field-box" style="top: 231.055mm; left: 116.5mm;">W1W 7LT</div>
            <span class="form-text" style="top: 239mm; left:116.5mm">Date DD MM YYYY</span>
            <div class="field-box" style="top: 243.755mm; left: 116.5mm; width: 10mm;">31</div>
            <div class="field-box" style="top: 243.755mm; left: 130mm; width: 10mm;">10</div>
            <div class="field-box" style="top: 243.755mm; left: 143.5mm; width: 20mm;">2022</div>

            <div style="width: 85mm;">
                <span class="form-text" style="top: 251.6mm; font-size: 10.5pt; font-weight: bold;">To the
                    employee</span>
                <span class="form-text" style="top: 256.6mm; ">
                    The P45 is in 3 parts. Please keep this part (Part 1A) safe.<br />
                    Copies are not available. You might need the information in<br />
                    Part 1A to fill in a tax return if you are sent one.<br />
                    Please read the notes in Part 2 that accompany Part 1A.<br />
                    The notes give some important information about what you<br />
                    should do next and what you should do with Parts 2 and 3 of<br />
                    this form.
                </span>
            </div>
            <div style="width: 85mm;">
                <span class="form-text" style="top: 251.6mm; left: 107.48mm; font-size: 9pt; font-weight: bold;">Tax
                    credits and Universal credit</span>
                <span class="form-text" style="top: 256.6mm;  left: 107.48mm">
                    Tax credits and Universal Credit are flexible. They adapt to changes<br />
                    in your life, such as leaving a job. If you need to let us know about a<br />
                    change in your income, phone <b>0345 300 3900</b>.
                </span>
                <span class="form-text" style="top: 270.5mm; left: 107.48mm; font-size: 10.5pt; font-weight: bold;">To
                    the new employer</span>
                <span class="form-text" style="top: 275.5mm;  left: 107.48mm">
                    If your new employee gives you this Part 1A, please return it to<br />
                    them. Check the information on Parts 2 and 3 of this form is correct<br />
                    and transfer the information onto the Payroll record/Deductions<br />
                    Working Sheet.
                </span>
            </div>

            <span class="form-text" style="font-weight: bold; top: 292mm">P45(Online) Part 1A</span>
            <span class="form-text" style="top: 292mm; left: 180mm">HMRC 03/15</span>
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

.currency-box {
    position: absolute;
    height: 6mm;
    width: 5mm;
    font-size: 12pt;
    color: gray;
    border: 0.03rem solid rgba(32, 32, 32, 0.5);
    text-align: center;
    line-height: 17pt;
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
    font-family: "Space Mono", monospace;
    font-size: 10pt;
    letter-spacing: 0.7pt;
    padding-left: 2mm;
    width: 76.5mm;
}

.tick-field-box {
    position: absolute;
    height: 6mm;
    width: 5mm;
    border: 0.03rem solid rgba(32, 32, 32, 0.5);
    font-family: "Space Mono", monospace;
    font-size: 10pt;
    letter-spacing: 0.7pt;
    padding-left: 1mm;
}

.number-field-box {
    position: absolute;
    height: 6mm;
    border: 0.03rem solid rgba(32, 32, 32, 0.5);
    font-family: "Space Mono", monospace;
    font-size: 10pt;
    letter-spacing: 0.75pt;
    padding-right: 2mm;
    text-align: right;
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
