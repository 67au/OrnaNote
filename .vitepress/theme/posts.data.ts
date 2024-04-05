import { createContentLoader } from 'vitepress'
import { type Post } from './types'
import theme from '../config.theme'

declare const data: Post[]
export { data }

export default createContentLoader(theme.mdFilePatterns, {
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

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw);
  date.setUTCHours(8);
  return {
    time: +date,
    string: date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
    })
  } 
}