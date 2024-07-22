import { defineStore } from "pinia";
import axios from "axios";
import { parse, stringify } from 'zipson'

export const useLogin = defineStore("login", {
    state: ()=>({
        access: "",
        refresh: "",
        email: "",
        isLoading: false,
        isAuthenticated: false
    }),
    persist: {
        serializer: {
            deserialize: parse,
            serialize: stringify
          }
    },
    actions: {
       async login(data){
        try{
            this.isLoading = true;
            const data_data = await axios.post("https://enterprisehubs.onrender.com/accounts/auth/login/", data);
            this.isLoading = false;
            this.email = data_data.data.email;
            this.access = data_data.data?.tokens?.access;
            this.refresh = data_data.data?.tokens?.refresh;
            this.isAuthenticated = true;
            window.location.href = "/dashboard";
            console.log(data_data);
        }catch(error){
            this.isLoading = false;
            console.log(error.response.data.message);
        }
        }
    }
})