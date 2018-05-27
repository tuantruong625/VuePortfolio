<template>
    <div class="about-container">
        <Navbar></Navbar>
        <Hero></Hero>
        <div class="about-container__content">
            <h1>Hi i am about</h1>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
export default {
    name: 'About',
    components: { Navbar, Hero },
    data() {
        return {}
    }
}
</script>

<style>
</style>
