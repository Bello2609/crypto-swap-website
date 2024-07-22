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
            alert("You have succesfully created your account");
            window.location.href = "/sign-in"
         }catch(error){
            this.isLoading = false;
            const errorMessage = err.data?.email.map(msg=> { return msg });
            alert(errorMessage.toString());
         }
        }
     }
})
