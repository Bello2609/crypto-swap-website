<!-- eslint-disable vue/multi-word-component-names
<script setup>
    import { defineProps } from "vue";
    import * as images from "../../images";
    const props = defineProps({
        isNav: {
            type: Boolean,
            required: true
        }
    })
    
</script>
<template>
    <div class="bg-[#38384D] w-[20vw] h-full p-10 sm:hidden">
        <img :src="images.pursuit" alt="pursuit" />
        <div class="bg-[#38384D] w-full h-[1px] my-7"></div>
        <div class="w-full">
            <h4 class="text-[#CACADA] text-sm font-bold">DASHBOARD</h4>
            <nav class="flex flex-col w-full">
                <RouterLink to="/dashboard" class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold my-5 w-full h-full">
                    <img :src="images.earning" alt="earning" class="mr-2" />Your Earnings
                </RouterLink>
                <RouterLink to="/dashboard-payment-history" class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold w-full h-full">
                    <img :src="images.payout" alt="earning" class="mr-2" />Payout History
                </RouterLink>
                <RouterLink to="/dashboard-payout-setting" class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold my-5 w-full h-full">
                    <img :src="images.wallet" alt="earning" class="mr-2" />Payout Settings
                </RouterLink>
                <RouterLink to="/" class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold w-full h-full">
                    <img :src="images.logout" alt="earning" class="mr-2" />Logout
                </RouterLink>
            </nav>
        </div>
    </div>
    <div v-if="isNav" class=" relative top-0 left-0 bg-[#38384D] w-[20vw] h-full p-10">
        <img :src="images.pursuit" alt="pursuit" />
        <div class="bg-[#38384D] w-full h-[1px] my-7"></div>
        <div class="w-full">
            <h4 class="text-[#CACADA] text-sm font-bold">DASHBOARD</h4>
            <nav class="flex flex-col w-full">
                <RouterLink to="/dashboard" class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold my-5 w-full h-full">
                    <img :src="images.earning" alt="earning" class="mr-2" />Your Earnings
                </RouterLink>
                <RouterLink to="/dashboard-payment-history" class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold w-full h-full">
                    <img :src="images.payout" alt="earning" class="mr-2" />Payout History
                </RouterLink>
                <RouterLink to="/dashboard-payout-setting" class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold my-5 w-full h-full">
                    <img :src="images.wallet" alt="earning" class="mr-2" />Payout Settings
                </RouterLink>
                <RouterLink to="/" class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold w-full h-full">
                    <img :src="images.logout" alt="earning" class="mr-2" />Logout
                </RouterLink>
            </nav>
        </div>
    </div>
</template> -->

<!-- SidebarComponent.vue -->
<template>
    <div class="flex flex-col">
        <div class="sm:block sm:absolute bg-[#38384D] hidden">
            <button
                class="p-2 m-4 bg-[#38384D] text-[#CACADA] rounded-md md:hidden"
                @click="toggleSidebar"
            >
            <CloseIcon v-if="isSidebarOpen" class="text-white cursor-pointer" :size="35" />
            <MenuIcon v-else="!nav" class="text-white cursor-pointer" :size="35" />
            </button>
        </div>
        <div
            class="bg-[#38384D] sm:hidden h-full p-5 md:p-10 transition-all duration-300 ease-in-out md:static"
            @click.stop
        >
            <img :src="images.pursuit" alt="pursuit" class="mb-5 sm:hidden" />
            <div class="bg-[#38384D] w-full h-[1px] my-7"></div>
            <div class="w-full">
                <h4 class="text-[#CACADA] text-sm font-bold">DASHBOARD</h4>
                <nav class="flex flex-col w-full">
                    <RouterLink
                    to="/dashboard"
                    class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold my-5 w-full h-full"
                    >
                    <img :src="images.earning" alt="earning" class="mr-2" />Your
                    Earnings
                    </RouterLink>
                    <RouterLink
                    to="/dashboard-payment-history"
                    class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold w-full h-full"
                    >
                    <img :src="images.payout" alt="earning" class="mr-2" />Payout
                    History
                    </RouterLink>
                    <RouterLink
                    to="/dashboard-payout-setting"
                    class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold my-5 w-full h-full"
                    >
                    <img :src="images.wallet" alt="earning" class="mr-2" />Payout
                    Settings
                    </RouterLink>
                    <RouterLink
                    to="/"
                    class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold w-full h-full"
                    >
                    <img :src="images.logout" alt="earning" class="mr-2" />Logout
                    </RouterLink>
                </nav>
            </div>
        </div>

        <!-- mobile responsiveness -->
        <div v-if="isSidebarOpen"
            class="bg-[#38384D]  h-full p-5 md:p-10 transition-all duration-300 ease-in-out sm:fixed md:static"
            @click.stop
        >
            <div class="sm:flex sm:absolute hidden">
                <button
                    class="p-2 m-4 bg-[#38384D] text-[#CACADA] rounded-md md:hidden"
                    @click="toggleSidebar"
                >
                <CloseIcon v-if="isSidebarOpen" class="text-white cursor-pointer" :size="35" />
                <MenuIcon v-else="!nav" class="text-white cursor-pointer" :size="35" />
                </button>
            </div>
            <img :src="images.pursuit" alt="pursuit" class="mb-5 sm:hidden" />
            <div class="bg-[#38384D] w-full h-[1px] my-7"></div>
            <div class="w-full">
                <h4 class="text-[#CACADA] text-sm font-bold">DASHBOARD</h4>
                <nav class="flex flex-col w-full">
                    <RouterLink
                    to="/dashboard"
                    class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold my-5 w-full h-full"
                    >
                    <img :src="images.earning" alt="earning" class="mr-2" />Your
                    Earnings
                    </RouterLink>
                    <RouterLink
                    to="/dashboard-payment-history"
                    class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold w-full h-full"
                    >
                    <img :src="images.payout" alt="earning" class="mr-2" />Payout
                    History
                    </RouterLink>
                    <RouterLink
                    to="/dashboard-payout-setting"
                    class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold my-5 w-full h-full"
                    >
                    <img :src="images.wallet" alt="earning" class="mr-2" />Payout
                    Settings
                    </RouterLink>
                    <RouterLink
                    to="/"
                    class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold w-full h-full"
                    >
                    <img :src="images.logout" alt="earning" class="mr-2" />Logout
                    </RouterLink>
                </nav>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
    import { defineProps, ref } from "vue";
    import * as images from "../../images";
    import MenuIcon from "vue-material-design-icons/Menu.vue";
    import CloseIcon from "vue-material-design-icons/Close.vue";
    import 'vue-material-design-icons/styles.css';

  
  // State to control sidebar visibility
  const isSidebarOpen = ref(false);
  
  // Method to toggle sidebar visibility
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };
  </script>
  
  <style scoped>
  /* Ensure smooth transitions for sidebar */
  @media (min-width: 768px) {
    .sidebar-open {
      width: 20vw;
    }
    .sidebar-closed {
      width: 0;
    }
  }
  </style>