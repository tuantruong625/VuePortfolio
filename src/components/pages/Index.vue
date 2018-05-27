<template>
<div class="index-container">
    <Navbar></Navbar>
    <Hero></Hero>
</div>

</template>

<script>
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
export default {
    name: 'Index',
    components: { Navbar, Hero },
    data() {
        return {}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
