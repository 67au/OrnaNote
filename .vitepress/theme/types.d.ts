import { DefaultTheme } from "vitepress";

export interface ThemeConfig extends DefaultTheme.Config {
  avatar: string,
  author: string,
  bio: string,
  eventFilePatterns: Array<string>,
  noteFilePatterns: Array<string>,
  pageSize: number,
}

export interface Post {
  title: string
  subtitle: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
}