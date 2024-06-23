// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import Layout from './layouts/Layout.vue'
import Home from './layouts/Home.vue'
import EventPosts from './layouts/EventPosts.vue'
import NotePosts from './layouts/NotePosts.vue'

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
    app.component("EventPosts", EventPosts);
    app.component("NotePosts", NotePosts);
    app.use(vuetify);
  }
} satisfies Theme
