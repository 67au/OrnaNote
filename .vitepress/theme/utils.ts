import { createContentLoader } from "vitepress";
import { Post } from "./types";

export function formatDate(raw: string): Post["date"] {
  const date = new Date(raw);
  date.setUTCHours(8);
  return {
    time: +date,
    string: date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
    }),
  };
}

export function contentLoader(filePatterns: Array<string>) {
	return createContentLoader(filePatterns, {
  excerpt: true,
  transform(raw): Array<Post> {
    return raw
    .filter(({frontmatter}) => {
      return frontmatter.draft !== true
    })
    .map(({ url, frontmatter, excerpt }) => ({
      title: frontmatter.title,
      subtitle: frontmatter.subtitle,
      url,
      excerpt,
      date: formatDate(frontmatter.date),
    } as Post))
    .sort((a, b) => {
      return a.url.localeCompare(b.url)
    })
    .sort((a, b) => {
      return b.date.time - a.date.time
    })
  }
})
}