<script setup>
    import { ref, onMounted, watch, defineProps } from "vue";
    import { useLogin } from "@/Store/loginStore";
    import * as images from "../../images"


    const props = defineProps({
        isNav: {
            type: Boolean,
            required: true
        }
    })
    const path = ref("");
    const nav = ref("");
    const login = useLogin();
    // const handleNav = ()=>{
    //     nav.value = !nav.value;
    // }
    const pathName  = ()=> {
        let path_url = window.location.pathname;
        // console.log(path);
        
        if(path_url == "/dashboard"){
            path.value = `welcome ${login.user_name}`;
        }else if(path_url == "/dashboard-payout-setting"){
            path.value = "Payout Settings."
        }else if(path_url == "/dashboard-payment-history"){
            path.value = "Payout History."
        }
    }
    watch(()=> login.email, (newEmail) =>{
        if(window.location.pathname === "/dashboard"){
            path.value;
        }
    })
    
    onMounted(()=>{
        pathName();
    })
</script>
<template>
    <div class="flex items-center bg-[#181826] w-[80vw] h-[13vh] px-16">
        <div class="flex items-center justify-between w-full">
            <h4 class="text-xl text-[#fff]">{{ path }}</h4>
            <div class="flex items-center">
                <div class="flex bg-[#2C2C3A] w-[50px] h-[50px] rounded-full">
                    <img :src="images.dollar" alt="bitcoin" />
                </div>
                <p class="text-[#fff] font-base ml-2">{{ login.first_name }}</p>
            </div>
        </div>
    </div>
</template>