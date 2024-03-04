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
import { EmployeeDescriptorRenderer } from "../../grid/EmployeeDescriptorRenderer"

const currencyFormatter = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })

const gridApi = ref({} as GridApi)

defineProps({
  name: String
})

defineEmits([])

const payRunEntries = defineModel<EmployeePayRunEntry[]>({ required: true })

const formatNumber = (params: any): string => currencyFormatter.format(params.value)

const makeHeader = (header: string, field: string) => ({
  headerName: header,
  field: field,
  valueFormatter: formatNumber,
  wrapHeaderText: true,
  autoHeaderHeight: true,
  type: "rightAligned",
  resizable: false,
  sortable: false,
  headerclass: "break-word",
})

const columnDefs: ColDef<any, any>[] = [
  {
    headerName: "Name",
    field: "descriptor",
    valueFormatter: formatNumber,
    cellRenderer: EmployeeDescriptorRenderer,
    valueGetter: (params: any) => params.data.descriptor,
    minWidth: 175
  },
  makeHeader("Gross Pay", "totalGrossPay"),
  makeHeader("Pre-tax Deductions", "preTaxDeductions"),
  makeHeader("Taxable Pay", "totalTaxableEarnings"),
  makeHeader("Post-tax Deductions", "postTaxDeductions"),
  makeHeader("Tax", "incomeTax"),
  makeHeader("Employers NI", "employersNi"),
  makeHeader("Employees NI", "employeesNi"),
  makeHeader("Employer Pension", "employerPension"),
  makeHeader("Employee Pension", "employeePension"),
  makeHeader("Student   Loan", "studentLoanDeductions"),
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
}

</script>

<template>
  <div class="ag-theme-quartz-auto-dark">
    <ag-grid-vue
      :gridOptions="{ suppressCellFocus: true, ensureDomOrder: true, tooltipShowDelay: 1000, paginationPageSize: 2 }"
      :onGridReady="onGridReady" rowSelection="single" style="height: 30vh;" :columnDefs="columnDefs"
      :rowData="payRunEntries" :getRowStyle="getRowStyle" /> <!-- pagination-->
    <button @click="onClick">Click</button>
  </div>
</template>

<style>
.ag-theme-quartz,
.ag-theme-quartz-dark,
.ag-theme-quartz-auto-dark {
  --ag-cell-horizontal-padding: 0.2rem;
}

.ag-header-cell-text {
  word-wrap: break-word;
  white-space: normal;
  display: block;
}

/* .ag-row-even {
    background-color: #ffffff;
  }

  .ag-row-odd {
    background-color: #dddddd;
  } */
</style>

<style scoped></style>