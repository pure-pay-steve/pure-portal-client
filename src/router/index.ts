//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.

import { createRouter, createWebHashHistory } from "vue-router"

import TestView from "../views/TestView.vue"
import EmployeeView from "../views/EmployeeView.vue"
import PayCategoryAndDeductionView from "../views/PayCategoryAndDeductionView.vue"
import PayRunView from "../views/PayRunView.vue"
import EmployeePayAndDeductionsView from "../views/EmployeePayAndDeductionsView.vue"

const routes = [
  { path: "/test", component: TestView },
  { path: "/employee", component: EmployeeView },
  { path: "/pay-category-and-deduction", component: PayCategoryAndDeductionView },
  { path: "/pay-run", component: PayRunView },
  { path: "/employee-pay-and-deductions", component: EmployeePayAndDeductionsView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router