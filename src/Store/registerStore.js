import { defineStore } from "pinia"
import axios from "axios";

export const useRegister = defineStore("register", {
    state: ()=> ({ 
        isLoading: false
     }),
     actions: {
        async register(data){
         try{
            this.isLoading = true
            const data_data = await axios.post("https://enterprisehubs.onrender.com/accounts/auth/register/", data);
            this.isLoading = false;
            alert("You have succesfully created your account. Check your mail so as to verify your account");
            // window.location.href = "/sign-in"
         }catch(error){
            this.isLoading = false;
            console.log(error)
            const errorMessage = error.data?.email.map(msg=> { return msg });
            console.log(errorMessage);
            alert(errorMessage.toString());
         }
        }
     }
})
