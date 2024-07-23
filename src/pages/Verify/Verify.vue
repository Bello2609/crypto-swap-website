<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from "axios";
import { useRoute } from 'vue-router';

const statusMessage = ref("");

const route = useRoute();
const tokens = {
    token: route.query.token
} 

    onBeforeMount(async ()=>{
        if(!tokens.token){
            alert("Token not found");
            return false;
        }
        try{
            const dd = await axios.post("https://enterprisehubs.onrender.com/accounts/auth/verify_account/", tokens);
            console.log(dd);
            // statusMessage.value = dd.response.message;
            
            window.location.href = "/sign-in"
           
        }catch(err){
            console.log(err);
            statusMessage.value = err.response.data?.message;
            if(statusMessage.value == "Account is already verified"){
                window.location.href = "/sign-in";
            }
        }
        
    })
        
</script>
<template>
    <div class="w-full h-screen flex flex-col items-center justify-center">
        <h5>{{ statusMessage }}</h5>
    </div>
</template>