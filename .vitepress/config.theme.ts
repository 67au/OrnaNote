import { DefaultTheme } from "vitepress";
import { type ThemeConfig } from "./theme/types";

export default {
  avatar: 'https://playorna.com/static/img/packs/community/translator/FQEGG.png',
  author: 'FQEGG',
  bio: '如需要获得更多帮助，请加 QQ 群：140784377',
  mdFilePatterns: ["posts/events/**/*.md"],
  pageSize: 5,

  docFooter: {
    prev: '上一页',
    next: '下一页'
  },
  lastUpdated: {
    text: '最后更新时间',
    formatOptions: {
      dateStyle: 'full',
      timeStyle: 'medium'
    }
  },
  footer: {
    message: 'All original contents are licensed under <a href="http://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.',
    copyright: `© 2023-${new Date().getFullYear()} <a href="https://github.com/67au">FQEGG</a> / Powered by <a href="https://vitepress.dev">VitePress</a> & <a href="https://vuetifyjs.com/">Vuetify</a>`,
  },
  nav: [
    {
      text: "存档",
      link: "/posts",
    },
    {
      text: "FQEGG 工具合集",
      link: "/sites",
    },
  ],
  search: {
    provider: 'local',
  },
  socialLinks: [
    { icon: "github", link: "https://github.com/67au/OrnaNote" },
  ]
} satisfies ThemeConfig;
