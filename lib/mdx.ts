import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import rehypePrism from 'rehype-prism-plus'

import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd()

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'data', type))
}

export async function getFileBySlug(type: string, slug?: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism]
    },
    scope: data
  })

  return {
    mdxSource,
    frontMatter: {
      readingTime: readingTime(content),
      slug: slug || null,
      ...data
    }
  }
}

type Post = {
  [key: string]: string
  slug: string
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, 'data', type))

  return files.reduce((allPosts: Post[], postSlug: string) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    )

    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ]
  }, [])
}
