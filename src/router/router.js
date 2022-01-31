import {createRouter, createWebHistory} from "vue-router";

import Step1 from "../views/Step1";
import Step2 from "../views/Step2";
import Step3 from "../views/Step3";
import Step4 from "../views/Step4";
import Contract from "../views/Contract";
import PaymentSuccess from "../views/PaymentSuccess";
const routes = [
    {
        path: "/",
        component: Step1
    },
    {
        path: '/Step2',
        component: Step2
    },
    {
        path: "/Step3",
        component: Step3
    },
    {
        path: "/Step4",
        component: Step4
    },
    {
        path: "/Contract",
        component: Contract
    },
    {
        path: "/PaymentSuccess",
        component: PaymentSuccess
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
