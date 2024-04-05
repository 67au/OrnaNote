// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import Layout from './layouts/Layout.vue'
import Home from './layouts/Home.vue'
import Posts from './layouts/Posts.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
const vuetify = createVuetify({
  ssr: true,
});

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.component("Home", Home);
    app.component("Posts", Posts);
    app.use(vuetify);
  }
} satisfies Theme
