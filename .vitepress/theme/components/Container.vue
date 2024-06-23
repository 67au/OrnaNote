<script setup lang="ts">
const classArray = [
  "mx-auto",
  "justify-center",
  "align-center",

  "px-4",
  "pt-2",
  "px-sm-6",
  "px-md-16",
  "px-lg-16",
  "px-xl-16",
  "px-xxl-16",
];
</script>

<template>
  <div :class="classArray.concat($style.container)">
    <slot />
  </div>
</template>

<style module scoped>
@media screen and (min-width: 768px) {
  .container {
    width: 600px;
  }
}
</style>
