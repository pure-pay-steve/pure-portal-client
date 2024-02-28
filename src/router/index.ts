//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.

import { createRouter, createWebHashHistory } from "vue-router"

import EmployeeView from "../views/EmployeeView.vue"
import PayCategoryView from "../views/PayCategoryView.vue"
import PayRunView from "../views/PayRunView.vue"

const routes = [
    { path: '/employee', component: EmployeeView },
    { path: '/pay-category', component: PayCategoryView },
    { path: '/pay-run', component: PayRunView }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router