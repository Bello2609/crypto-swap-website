<script setup>
    import DashboardLayout from "../DashboardLayout/DashboardLayout.vue";
    import { ref, onMounted } from "vue";
    const amount = ref("");
    const crypto = ref("");
    const tableData = ref([]);
    const saveToLocalStorage = ()=>{
        localStorage.setItem("tableData", JSON.stringify(tableData.value));
    }
    const generateId = ()=>{
        return Math.floor(Math.random() * 100000000);
    }
    console.log(generateId());
    const save = ()=>{
        const nd = new Date().toDateString();
        const data = {
            id: generateId(),
            crypto_amount: `${amount.value} ${crypto.value}`,
            date: nd,
            column: "--"
        }
        tableData.value.push(data);
        saveToLocalStorage();
    }
    const deleteTableData = (id)=>{
        tableData.value = tableData.value.filter(data=> data.id !== id);
        saveToLocalStorage();

    }
    onMounted(()=>{
        const savedTableData = JSON.parse(localStorage.getItem("tableData")) || [];
        if(savedTableData){
            tableData.value = savedTableData;
        }
    })
</script>
<template>
    <DashboardLayout>
        <div class="grid grid-cols-2 gap-3 px-10">
            <div class="bg-[#38384D] w-[528px] sm:w-[300px] h-[338px] p-5 rounded-md">
                <div class="flex items-center">
                    <h5 class="text-lg text-[#fff] font-bold ml-2">Request Payouts</h5>
                </div>
                <form @submit.prevent="save">
                    <div class="my-5">
                        <label class="text-[#fff]">Select Coin</label>
                        <select v-model="crypto" id="countries" class="mt-3 bg-[#2C2C3A] border border-[#38384D] text-[#fff] text-sm rounded-lg  focus:border-[#38384D] block w-full p-2.5">
                            <option selected>Choose a coin</option>
                            <option value="BTC">Bitcoin</option>
                            <option value="ETH">Ethereum</option>
                            <option value="LTC">Litecoin</option>
                            <option value="USDT">Tether (USDT)</option>
                    </select>
                    </div>
                    <div class="my-5">
                        <label class="text-[#fff]">Enter Amount</label>
                        <input 
                            type="type" 
                            placeholder="$0.00" 
                            v-model="amount"
                            class="mt-2 w-full h-full text-[#fff] bg-[#2C2C3A] p-2 outline-none border-2 border-[#38384D] rounded-md" 
                        />
                    </div>
                    <button class="w-full h-[55px] bg-[#23A9D0] rounded-md my-3 text-[#fff]">Save</button>
                </form>
            </div>
            <div class="bg-[#38384D] col-span-2 w-full h-auto rounded-md p-5">
                <h5 class="text-sm text-[#fff] font-bold">Current Coin</h5>
                <table class="border-collapse w-full mt-5">
                    <thead>
                        <tr class="text-[#CACADA] text-base p-5">
                            <th>Amount IN</th>
                            <th>Date</th>
                            <th>3rd Colmn</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-[#fff] font-bold">
                        <tr v-for="data in tableData" class="text-center">
                            <td class="p-5">{{ data.crypto_amount }}</td>
                            <td>{{ data.date }}</td>
                            <td>{{ data.column }}</td>
                            <td @click="deleteTableData(data.id)" class="text-red-500 cursor-pointer">delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </DashboardLayout>
</template>