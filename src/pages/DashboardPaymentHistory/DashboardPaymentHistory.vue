<script setup>
    import DashboardLayout from "../DashboardLayout/DashboardLayout.vue";

    const tableData = [
        {
            crypto_amount: "0.009382 BTC" 
        },
        {
            crypto_amount: "0.0241 ETH" 
        },
        {
            crypto_amount: "0.4732 LTC" 
        },
        {
            crypto_amount: "0.009382 BTC" 
        },
        {
            crypto_amount: "0.0241 ETH" 
        },
        {
            crypto_amount: "0.4732 LTC" 
        },
        {
            crypto_amount: "0.009382 BTC" 
        },
        {
            crypto_amount: "0.0241 ETH" 
        },
    ]
</script>
<template>
    <DashboardLayout>
        <div class="grid grid-cols-2 gap-3 px-10">
            <div class="bg-[#38384D] w-[528px] h-[338px] p-5 rounded-md">
                <div class="flex items-center">
                    <h5 class="text-lg text-[#fff] font-bold ml-2">Request Payouts</h5>
                </div>
                <form>
                    <div class="my-5">
                        <label class="text-[#fff]">Select Coin</label>
                        <!-- <input
                            type="type" 
                            placeholder="payout.placeholder1" 
                            class="mt-2 w-full h-full text-[#fff] bg-[#2C2C3A] p-2 outline-none border-2 border-[#38384D] rounded-md" 
                        /> -->
                        <select id="countries" class="mt-3 bg-[#2C2C3A] border border-[#38384D] text-[#fff] text-sm rounded-lg  focus:border-[#38384D] block w-full p-2.5">
                            <option selected>Choose a coin</option>
                            <option value="US">Bitcoin</option>
                            <option value="CA">Ethereum</option>
                            <option value="FR">Litecoin</option>
                            <option value="DE">Tether (USDT)</option>
                    </select>
                    </div>
                    <div class="my-5">
                        <label class="text-[#fff]">Enter Amount</label>
                        <input 
                            type="type" 
                            placeholder="$0.00" 
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
                            <th>Fourth Colmn</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-[#fff] font-bold">
                        <tr v-for="data in tableData" class="text-center">
                            <td class="p-5">{{ data.crypto_amount }}</td>
                            <td>Jan. 15th 2021</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </DashboardLayout>
</template>