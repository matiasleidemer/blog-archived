import { ReadTimeResults } from 'reading-time'

export type { MDXRemoteSerializeResult } from 'next-mdx-remote'
export type { GetStaticProps } from 'next'

export type FrontMatter = {
  title: string
  description: string
  slug: string
  date: string
  readingTime: ReadTimeResults
}

export type Post = Pick<FrontMatter, 'title' | 'description' | 'slug' | 'date'>
