<script setup>
    import Sidebar from '../../components/Sidebar/Sidebar.vue';
    import DashboardHeader from '../../components/DashboardHeader/DashboardHeader.vue';
</script>
<template>
    <div class="w-full h-[1000px] flex">
        <!-- sidebar -->
        <Sidebar />
        <!-- dashboard content -->
        <div class="bg-[#181826] ">
            <DashboardHeader />
            <slot></slot>
        </div>
    </div>
</template>