import hydrate from 'next-mdx-remote/hydrate'

import Headline from '@/components/Headline'
import HomeLayout from '@/components/HomeLayout'

import { getFileBySlug } from '@/lib/mdx'

const Home = ({ mdxSource }) => {
  const content = hydrate(mdxSource, {})

  return (
    <HomeLayout>
      <Headline />
      <article className="prose lg:prose-lg">{content}</article>
    </HomeLayout>
  )
}

export async function getStaticProps() {
  const post = await getFileBySlug('index')

  return { props: post }
}

export default Home
