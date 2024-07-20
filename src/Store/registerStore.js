import { defineStore } from "pinia"

export const useRegister = defineStore("register", {
    state: ()=> ({ 
        count: 0,
        name: "nyaya"
     }),
     actions: {
        register(data){

        }
     }
})
