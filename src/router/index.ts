//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.

import { createRouter, createWebHashHistory } from "vue-router"

// Views
import EmployeeView from "../views/EmployeeView.vue"
import PayCategoryAndDeductionView from "../views/PayCategoryAndDeductionView.vue"
import PayRunView from "../views/PayRunView.vue"
import EmployeePayAndDeductionsView from "../views/EmployeeEarningsAndDeductionsView.vue"
import BusinessView from "../views/BusinessView.vue"

// Components
import EmployeeDetails from "../components/payroll/EmployeeDetails.vue"
import EmployeeEarningsAndDeductionsPanel from "../components/payroll/EmployeeEarningsAndDeductionsPanel.vue"
import EmployeeOnboarding from "../components/payroll/EmployeeOnboarding.vue"
import ReportsView from "../views/ReportsView.vue"
import EmployeeDocumentsPanel from "../components/payroll/EmployeeDocumentsPanel.vue"
import BusinessOverview from "../components/payroll/BusinessOverview.vue"

const routes = [
  {
    path: "/business/:id",
    component: BusinessView,
    children: [
      {
        path: "overview",
        component: BusinessOverview
      },
      {
        path: "pay-category-and-deductions",
        component: PayCategoryAndDeductionView
      },
    ]
  },
  {
    path: "/employee/:id",
    component: EmployeeView,
    children: [
      {
        path: "overview",
        component: EmployeeDetails
      },
      {
        path: "earnings-and-deductions",
        component: EmployeeEarningsAndDeductionsPanel
      },
      {
        path: "onboarding",
        component: EmployeeOnboarding
      },
      {
        path: "documents",
        component: EmployeeDocumentsPanel
      }
    ]
  },
  { path: "/pay-category-and-deduction", component: PayCategoryAndDeductionView },
  { path: "/pay-run", component: PayRunView },
  { path: "/employee-pay-and-deductions", component: EmployeePayAndDeductionsView },
  { path: "/reports", component: ReportsView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router