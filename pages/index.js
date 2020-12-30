import hydrate from 'next-mdx-remote/hydrate'

import HomeLayout from '@/components/HomeLayout'
import { getFileBySlug } from '@/lib/mdx'

const Home = ({ mdxSource }) => {
  const content = hydrate(mdxSource, {})

  return (
    <HomeLayout>
      <div className="prose md:prose-lg dark:prose-dark">{content}</div>
    </HomeLayout>
  )
}

export async function getStaticProps() {
  const post = await getFileBySlug('index')

  return { props: post }
}

export default Home
