<script setup lang="ts">
import { watch } from "vue";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useTheme } from "vuetify";

const { isDark } = useData();
const { Layout } = DefaultTheme;
const theme = useTheme();

watch(
  isDark,
  () => {
    theme.global.name.value = isDark.value ? "dark" : "light";
  },
  { immediate: true }
);
</script>

<template>
  <Layout> </Layout>
</template>
