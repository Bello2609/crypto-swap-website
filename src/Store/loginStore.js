import { defineStore } from "pinia";
import axios from "axios";
import { parse, stringify } from 'zipson'

export const useLogin = defineStore("login", {
    state: ()=>({
        access: "",
        refresh: "",
        user_name: "",
        first_name: "",
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
            this.user_name = data_data.data.user_name;
            this.first_name = data_data.data.first_name
            this.access = data_data.data?.tokens?.access;
            this.refresh = data_data.data?.tokens?.refresh;
            this.isAuthenticated = true;
            window.location.href = "/dashboard";
            console.log(data_data);
        }catch(error){
            this.isLoading = false;
            alert(error.response.data.message);
        }
        }
    }
})