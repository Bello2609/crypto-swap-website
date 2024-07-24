<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import * as images from "../../images";
    import { ref } from "vue";
    import Input from "../../components/Input/Input.vue"
    import { useRegister } from "../../Store/registerStore"
   

    const register = useRegister();
    const email = ref("");
    const username = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const onSubmit = ()=>{
        if(password.value !== confirmPassword.value){
            alert("Password does not match");
            return false
        }else{
            const data = {
            email: email.value,
            user_name: username.value,
            password: password.value,
            password2: confirmPassword.value,
            client_type: windows.location.origin
        }
            return register.register(data);
        }
    }
</script>
<template>
    <div class="flex w-screen h-screen">
        <div class="flex items-center justify-center w-[50%] bg-[#141422]">
            <div  class="bg-[#fff] w-[430px] h-auto rounded-md p-5 font-sans">
                <h4 class="w-[400px] md:w-fit sm:w-[243px] text-xl font-bold text-[#181826]">
                    Register
                </h4>
                <h6 class="text-[#181826] text-xs">Register a new account here.</h6>
                <form @submit.prevent="onSubmit">
                    <Input type="email" label="Email Address" v-model="email" placeholder="johndoe@emailaddress.com" />
                    <Input type="text" label="Username" v-model="username" placeholder="john doe" />
                    <Input type="password"  label="Password" v-model="password" placeholder="Password" />
                    <Input type="password"  label="Confirm Password" v-model="confirmPassword" placeholder="Password" />
                    <button v-if="register.isLoading" type="submit" class="w-[370px] h-[55px] bg-[#23A9D0] rounded-md my-3 text-[#fff]"> 
                        Loading...
                    </button>
                    <button v-else type="submit" class="w-[370px] h-[55px] bg-[#23A9D0] rounded-md my-3 text-[#fff]"> 
                        Register
                    </button>
                </form>
            </div>
        </div>
        <div class=" flex items-center justify-center w-[50%] bg-[#181826]">
            <img :src="images.Illustration2" alt="illustration" />
        </div>
    </div>
</template>