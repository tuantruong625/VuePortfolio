<template>
<div class="landing-container">
    <div class="landing-content">
        <h1 class="landing-content__text reset">a website about things</h1>
        <button class="landing-content__button"><router-link :to="{ path: 'Index' }">Enter</router-link></button>
    </div>
</div>

</template>

<script>
export default {
    name: 'Landing',
    data() {
        return {}
    }
}
</script>

<style>
</style>
