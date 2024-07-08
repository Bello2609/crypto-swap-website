import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home/Home.vue";
import Signin from "./pages/Signin/Signin.vue";
import Register from "./pages/Register/Register.vue";

const routes = [
    {
        path: "/", 
        name: "Home",
        component: Home
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