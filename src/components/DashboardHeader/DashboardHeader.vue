<script setup>
    import { ref, onMounted, watch } from "vue";
    import { useLogin } from "@/Store/loginStore";
    const path = ref(""); 
    const login = useLogin();
    const pathName  = ()=> {
        let path_url = window.location.pathname;
        console.log(path);
        
        if(path_url == "/dashboard"){
            path.value = login.user_name;
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
            <h4 class="text-xl text-[#fff]">Welcome&nbsp;{{ path }},</h4>
            <div class="flex items-center">
                <div class="bg-[#2C2C3A] w-[50px] h-[50px] rounded-full"></div>
                <p class="text-[#fff] font-base ml-2">{{ login.first_name }}</p>
            </div>
        </div>
    </div>
</template>