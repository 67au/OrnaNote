import { type Post } from './types'
import theme from '../config.theme'
import { contentLoader } from './utils'

declare const data: Post[]
export { data }

export default contentLoader(theme.eventFilePatterns)
