import axios from "axios";
import { defineStore } from "pinia";

export const useMarket = defineStore("marketData", {
    state: ()=>({
        btc: "",
        eth: "",
    }),
    actions: {
        async getMarketData(){
            try{
                const [ btcResponse, ethResponse ] = await Promise.all([
                    axios.get("https://rest.coinapi.io/v1/exchangerate/btc", {
                        headers: {
                            "X-CoinAPI-Key": import.meta.env.VITE_API_KEYS
                        }
                    }),
                    axios.get("https://rest.coinapi.io/v1/exchangerate/eth", {
                        headers: {
                            "X-CoinAPI-Key": import.meta.env.VITE_API_KEYS
                        }
                    }),
                    // axios.get("https://rest.coinapi.io/v1/exchangerate/usdt?asset_id_quote=USD", {
                    //     headers: {
                    //         "X-CoinAPI-Key": import.meta.env.VITE_API_KEYS
                    //     }
                    // })
                ]);
                console.log(btcResponse.data.rates);
                btcResponse?.data.rates.map(dat=> {
                    if(dat.asset_id_quote === "USD"){
                        this.btc = dat.rate;
                    }
                })
                ethResponse?.data.rates.map(dat=> {
                    if(dat.asset_id_quote === "USD"){
                        this.eth = dat.rate;
                    }
                })
               
            }catch(err){
                console.log(err);
            }
        }
    }
});