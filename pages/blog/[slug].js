import hydrate from 'next-mdx-remote/hydrate'

import { getFiles, getFileBySlug } from '@/lib/mdx'

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {})

  // wrap with blog layout
  return <article class="prose lg:prose-lg">{content}</article>
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug)

  return { props: post }
}
