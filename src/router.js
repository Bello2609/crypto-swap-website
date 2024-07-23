import { createWebHistory, createRouter } from "vue-router";
import { useLogin } from "./Store/loginStore";
import Home from "./pages/Home/Home.vue";
import Signin from "./pages/Signin/Signin.vue";
import Register from "./pages/Register/Register.vue";
import GetInTouch from "./pages/GetInTouch/GetInTouch.vue";
import AboutUs from "./pages/AboutUs/AboutUs.vue";
import Dashboard from "./pages/Dashboard/Dashboard.vue";
import DashboardPayoutSetting from "./pages/DashboardPayoutSetting/DashboardPayoutSetting.vue";
import DashboardPaymentHistory from "./pages/DashboardPaymentHistory/DashboardPaymentHistory.vue";
import Verify from "./pages/Verify/Verify.vue";


const routes = [
    {
        path: "/", 
        name: "Home",
        component: Home
    },
    {
        path: "/about-us",
        name: "About Us",
        component: AboutUs
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: "/dashboard-payout-setting",
        name: "Dashboard Payout Setting",
        component: DashboardPayoutSetting,
        meta: { requiresAuth: true }
    },
    {
        path: "/dashboard-payment-history",
        name: "Dashboard Payment History",
        component: DashboardPaymentHistory,
        meta: { requiresAuth: true }
    },
    {
        path: "/get-in-touch",
        name: "GetInTouch",
        component: GetInTouch
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/sign-in",
        name: "Signin",
        component: Signin
    },
    {
        path: "/accounts/auth/verify_account/", 
        name: "Verify",
        component: Verify
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next)=>{
    const login = useLogin();
    if(to.meta.requiresAuth && !login.isAuthenticated){
        next({ name: "Signin" })
    }else{
        next();
    }
})

export default router;