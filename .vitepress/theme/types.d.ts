import { DefaultTheme } from "vitepress";

export interface ThemeConfig extends DefaultTheme.Config {
  avatar: string,
  author: string,
  bio: string,
  mdFilePatterns: Array<string>,
  pageSize: number,
}

export interface Post {
  title: string
  subtitle: string,
  url: string
  date: {
    time: Date,
    string: string
  }
  excerpt: string | undefined
}