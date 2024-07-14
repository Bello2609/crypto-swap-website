<script setup>
    import { ref, onMounted } from "vue";
    const path = ref(""); 
    const pathName  = ()=> {
        let path_url = window.location.pathname;
        console.log(path);
        
        if(path_url == "/dashboard"){
            path.value = "welcome John"
        }else if(path_url == "/dashboard-payout-setting"){
            path.value = "Payout Settings."
        }else if(path_url == "/dashboard-payment-history"){
            path.value = "Payout History."
        }
    }
    onMounted(()=>{
        pathName();
    })
</script>
<template>
    <div class="flex items-center bg-[#181826] w-[80vw] h-[13vh] px-16">
        <div class="flex items-center justify-between w-full">
            <h4 class="text-xl text-[#fff]">{{ path }}</h4>
            <div class="flex items-center">
                <div class="bg-[#2C2C3A] w-[50px] h-[50px] rounded-full"></div>
                <p class="text-[#fff] font-base">Johnathan Doe</p>
            </div>
        </div>
    </div>
</template>