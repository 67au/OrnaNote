<script setup lang="ts">
import Posts from "../components/Posts.vue";
import { data } from "../events.data";
</script>

<template>
  <Posts :posts="data" />
</template>
