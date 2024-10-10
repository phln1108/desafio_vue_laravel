<script lang="ts" setup>
import NavBarButton from './NavBarButton.vue';


</script>

<template>
  <header >
    <NavBarButton to="/" label="Home" />
  </header>
</template>

<style lang="css" scoped>
  header {
    height: 5rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid #D1D1D1;
    /* box-shadow: -4px 6px 8px 0px rgba(95, 125, 233, 0.10); */
}
</style>
