import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home/Home.vue";
import Signin from "./pages/Signin/Signin.vue";
import Register from "./pages/Register/Register.vue";
import GetInTouch from "./pages/GetInTouch/GetInTouch.vue";
import AboutUs from "./pages/AboutUs/AboutUs.vue";
import Dashboard from "./pages/Dashboard/Dashboard.vue";
import DashboardPayoutSetting from "./pages/DashboardPayoutSetting/DashboardPayoutSetting.vue";

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
        component: Dashboard
    },
    {
        path: "/dashboard-payout-setting",
        name: "Dashboard Payout Setting",
        component: DashboardPayoutSetting
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

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;