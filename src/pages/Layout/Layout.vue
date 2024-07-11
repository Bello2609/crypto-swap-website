<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import Header from '../../components/Header/Header.vue';
    import Footer from "../../components/Footer/Footer.vue"
</script>
<template>
    <div>
        <Header />
        <slot></slot>
        <Footer />
    </div>
</template>