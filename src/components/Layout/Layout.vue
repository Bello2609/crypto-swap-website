<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import Header from '../Header/Header.vue';
    import Footer from "../Footer/Footer.vue"
</script>
<template>
    <div>
        <Header />
        <slot></slot>
        <Footer />
    </div>
</template>