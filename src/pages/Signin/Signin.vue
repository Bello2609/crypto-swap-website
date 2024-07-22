<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import { ref } from "vue";
    import * as images from "../../images";
    import Input from "../../components/Input/Input.vue"
    import { useLogin } from "@/Store/loginStore";


    const login = useLogin();

    const email = ref("");
    const password = ref("");

    const onSubmit = ()=>{
        const data = {
            email: email.value,
            password: password.value
        }
        login.login(data);
    }
</script>
<template>
    <div class="flex w-screen h-screen">
        <div class=" flex items-center justify-center w-[50%] bg-[#181826]">
            <img :src="images.Illustration" alt="illustration" />
        </div>
        <div class="flex items-center justify-center w-[50%] bg-[#141422]">
            <div  class="bg-[#fff] w-[430px] h-[400px] rounded-md p-5 font-sans">
                 <h4 className="w-[400px] md:w-fit sm:w-[243px] text-xl font-bold text-[#181826]">
                    Welcome Back!
                </h4>
                <h6 class="text-[#181826] text-xs">Login to your account here.</h6>
                <form @submit.prevent="onSubmit">
                    <Input type="text" label="Email Address" v-model="email" placeholder="johndoe@emailaddress.com" />
                    <Input type="password" label="Password" v-model="password" placeholder="Password" />
                    <span class="text-[#141422] text-sm font-bold">Forgot your password? <RouterLink to="/">Reset it here.</RouterLink></span>
                    <button v-if="login.isLoading" class="w-[370px] h-[55px] bg-[#23A9D0] rounded-md my-3 text-[#fff]">
                        Loggin in...
                    </button>
                    <button v-else class="w-[370px] h-[55px] bg-[#23A9D0] rounded-md my-3 text-[#fff]">
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>