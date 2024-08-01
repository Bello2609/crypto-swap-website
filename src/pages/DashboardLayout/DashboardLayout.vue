<script setup>
    import { ref } from 'vue';
    import Sidebar from '../../components/Sidebar/Sidebar.vue';
    import DashboardHeader from '../../components/DashboardHeader/DashboardHeader.vue';
    const isNav = ref(false);
    const nav = ()=>{
        isNav.value = !isNav.value;
    }
</script>


<template>
    <div class="w-full sm:w-full sm:overflow-x-hidden h-[1200px] sm:h-full flex">
        <!-- sidebar -->
        <Sidebar v-bind="isNav" />
        <!-- dashboard content -->
        <div class="bg-[#181826] ">
            <DashboardHeader :handleNav="nav" v-bind="isNav" />
            <slot></slot>
        </div>
    </div>
</template>