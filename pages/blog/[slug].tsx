import { MDXRemote } from 'next-mdx-remote'

import { getFiles, getFileBySlug } from '../../lib/mdx'
import BlogPostLayout from '../../components/BlogPostLayout'
import Prose from '../../components/Prose'

import type {
  FrontMatter,
  MDXRemoteSerializeResult,
  GetStaticProps
} from '../../lib/types'

interface Props {
  mdxSource: MDXRemoteSerializeResult
  frontMatter: FrontMatter
}

const Blog: React.FC<Props> = ({ mdxSource, frontMatter }) => {
  return (
    <BlogPostLayout frontMatter={frontMatter}>
      <Prose>
        <MDXRemote {...mdxSource} />
      </Prose>
    </BlogPostLayout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post = {}

  if (typeof params?.slug === 'string')
    post = await getFileBySlug('blog', params.slug)

  return { props: post }
}

export default Blog
