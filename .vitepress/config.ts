import { DefaultTheme, defineConfigWithTheme } from 'vitepress';
import { ThemeConfig } from './theme/types';

import themeConfig from "./config.theme";

import vuetify from 'vite-plugin-vuetify';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  title: "OrnaRPG 记录",
  base: '/',
  description: 'OrnaPRG Record by FQEGG',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: [
    "README.md",
  ],
  appearance: 'dark',
  themeConfig,
  vite: {
    plugins: [
      vuetify(),
      AutoSidebar({
        path: '/posts/',
        titleFromFile: true,
        ignoreList: [
          '.git',
          'node_modules',
          'pages'
        ],
        sideBarResolved: (data) => {
          const eventRoot = data['/events/'] as DefaultTheme.SidebarItem[] || [];
          eventRoot.map((e) => {
            return e.items?.map((years) => {
              years.text = `${years.text?.slice(0,-2)}/${years.text?.slice(-2)}`
              return years.items?.map((event) => {
                if (event.items !== undefined) {
                  event.link = event.items.find((elem) => {
                    return event.text === elem.text
                  })?.link?.replace('/index.html', '/');
                  delete event.items;
                  delete event.collapsed;
                }
                event.link = event.link?.replace('events', 'posts/events');
              })
            })
          });
          const noteRoot = data['/notes/'] as DefaultTheme.SidebarItem[] || [];
          noteRoot.map((e) => {
            return e.items?.map((categories) => {
              return categories.items?.map((note) => {
                if (note.items !== undefined) {
                  note.link = note.items.find((elem) => {
                    return note.text === elem.text
                  })?.link?.replace('/index.html', '/');
                  delete note.items;
                  delete note.collapsed;
                }
                note.link = note.link?.replace('notes', 'posts/notes');
              })
            })
          });
          return { '/posts/events/': eventRoot, '/posts/notes': noteRoot }
        }
      })
    ],
    ssr: {
      noExternal: true,
    },
  },
  rewrites: {
    "pages/:title.md": ":title.md",
  },
  head: [
    [
      'meta',
      { name: 'referrer', content: 'same-origin' }
    ]
  ]
})
