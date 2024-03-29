<!--                                                                      -->
<!-- Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.     -->
<!--                                                                      -->
<!-- This source code is the intellectual property of Pure Software       -->
<!-- Ltd and for information security purposes is classified as           -->
<!-- COMPANY CONFIDENTIAL.                                                -->

<script setup lang="ts">

import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"

import { ref, defineModel } from "vue"
import { AgGridVue } from "ag-grid-vue3"
import type { GridApi, GetRowIdFunc, GetRowIdParams, IRowNode, CellClickedEvent, ColDef, DateStringAdvancedFilterModel } from "ag-grid-community"

import { EmployeePayRunEntry } from "../../model/EmployeePayRunEntry"
import { EmployeeDescriptorRenderer } from "../grid/EmployeeDescriptorRenderer"
import { WordBreakHeaderComponent } from "../grid/WordBreakHeaderComponent"
import PopoutPanel from "../common/PopoutPanel.vue"

const currencyFormatter = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })

const gridApi = ref({} as GridApi)

defineProps({
  name: String
})

const emit = defineEmits(['onSelectionChanged', 'onActivity'])


const payRunEntries = defineModel<EmployeePayRunEntry[]>({ required: true })

const formatNumber = (params: any): string => currencyFormatter.format(params.value)

const makeHeader = (header: string, field: string) => ({
  headerName: header,
  field: field,
  valueFormatter: formatNumber,
  autoHeaderHeight: true,
  resizable: false,
  sortable: false,
  headerComponent: WordBreakHeaderComponent,
  type: "rightAligned",
  headerClass: "ag-right-aligned-header"
})

const columnDefs: ColDef<any, any>[] = [
  {
    headerName: "Name",
    field: "descriptor",
    valueFormatter: formatNumber,
    cellRenderer: EmployeeDescriptorRenderer,
    valueGetter: (params: any) => params.data.descriptor,
    minWidth: 175,
    sortable: true
  },
  makeHeader("Hours", "totalGrossPay"),
  makeHeader("Gross Pay", "totalGrossPay"),
  makeHeader("Pre-tax Deductions", "preTaxDeductions"),
  makeHeader("Taxable Pay", "totalTaxableEarnings"),
  makeHeader("Post-tax Deductions", "postTaxDeductions"),
  makeHeader(" Tax", "incomeTax"),
  makeHeader("Employers NI", "employersNi"),
  makeHeader("Employees NI", "employeesNi"),
  makeHeader("Employer Pension", "employerPension"),
  makeHeader("Employee Pension", "employeePension"),
  makeHeader("Student Loan", "studentLoanDeductions"),
  makeHeader("Net Pay", "totalNetPay")
]

const onGridReady = (params: any) => {
  gridApi.value = params.api
  gridApi.value.setGridOption('pinnedBottomRowData', [
    {
      descriptor: "Total",
      totalGrossPay: 4000.00,
      totalTaxableEarnings: 3200.00,
      incomeTax: 800.00,
      totalNetPay: 2712.00,
      employeePension: 0.00,
      employeesNi: 488.00,
      employerPension: 0.00,
      employersNi: 400.00,
      studentLoanDeductions: 0.00,
      postTaxDeductions: 0.00,
      totalNicableEarnings: 4000.00,
      preTaxDeductions: 0.00
    }
  ]
  )
  setTimeout(() => {
    gridApi.value.sizeColumnsToFit()
  }, 100)
}

const getRowStyle = (params: any) => {
  if (params.node.rowPinned === 'bottom') {
    return { "font-weight": "500" }
  }
  return {}
}

const onClick = () => {
  gridApi.value.sizeColumnsToFit()
  console.log("Clicked")
  open.value = !open.value
}

const open = ref(false)

const onRowSelected = (event: any) => {
  var selected = null as IRowNode<any> | null
  const selectedRows = event.api.getSelectedRows() as IRowNode<any>[]
  if (selectedRows && selectedRows.length > 0) {
    selected = selectedRows[0]
  }
  emit('onSelectionChanged', selected)
}

</script>

<template>
  <popout-panel :open="open" />
  <div class="ag-theme-quartz-auto-dark pay-run-table">
    <ag-grid-vue
      :gridOptions="{ suppressCellFocus: true, ensureDomOrder: true, tooltipShowDelay: 1000, paginationPageSize: 2 }"
      :onGridReady="onGridReady" rowSelection="single" style="height: 30vh;" :columnDefs="columnDefs"
      :onSelectionChanged="onRowSelected" :rowData="payRunEntries" :getRowStyle="getRowStyle" /> <!-- pagination-->
    <button @click="onClick">Click</button>
  </div>
</template>

<style>
@media (width <=1500px) {

  .ag-theme-quartz.pay-run-table,
  .ag-theme-quartz-dark.pay-run-table,
  .ag-theme-quartz-auto-dark.pay-run-table {
    --ag-cell-horizontal-padding: 0.25rem;
    --ag-font-size: 0.75rem;
  }
}

@media only screen and (width <=1800px) and (width >1500px) {

  .ag-theme-quartz.pay-run-table,
  .ag-theme-quartz-dark.pay-run-table,
  .ag-theme-quartz-auto-dark.pay-run-table {
    --ag-cell-horizontal-padding: 0.3rem;
  }
}

/* .ag-row-even {
    background-color: #ffffff;
  }

  .ag-row-odd {
    background-color: #dddddd;
  } */
</style>

<style scoped></style>../grid/EmployeeDescriptorRenderer