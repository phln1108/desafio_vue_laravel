<script lang="ts" setup>

</script>

<template>
    <div class="wrapper">
      <RouterView></RouterView>
    </div>
</template>

<style lang="css" scoped>
.wrapper {
  min-height: 10rem;
  min-width: 10rem;

  width: auto;
  height: auto;
  background-color: rgb(245, 250, 255);

  border-radius: 8px;

  align-self: center;
  justify-self: center;

  margin: auto 0;
  padding: 1rem .5rem;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

}
</style>
