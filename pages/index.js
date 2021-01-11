import hydrate from 'next-mdx-remote/hydrate'
import {
  FaLastfm,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaRegEnvelope,
} from 'react-icons/fa'

import HomeLayout from '@/components/HomeLayout'
import { getFileBySlug } from '@/lib/mdx'

const Home = ({ mdxSource }) => {
  const content = hydrate(mdxSource, {})

  return (
    <HomeLayout>
      <div className="prose md:prose-lg dark:prose-dark mb-12 md:mb-20">
        {content}
      </div>
      <div className="flex justify-center text-gray-700 dark:text-gray-300 social-links">
        <SocialLink Icon={FaGithub} href="https://github.com/matiasleidemer" />
        <SocialLink
          Icon={FaTwitter}
          href="https://twitter.com/matiasleidemer"
        />
        <SocialLink
          Icon={FaLinkedinIn}
          href="https://linkedin.com/matiasleidemer"
        />
        <SocialLink
          Icon={FaLastfm}
          href="https://www.last.fm/user/sergiovalente"
        />
        <SocialLink
          Icon={FaRegEnvelope}
          href="mailto:matiasleidemer@gmail.com"
        />
      </div>
    </HomeLayout>
  )
}

const SocialLink = ({ Icon, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Icon className="w-4 h-4 md:w-5 md:h-5" />
    </a>
  )
}

export async function getStaticProps() {
  const post = await getFileBySlug('index')

  return { props: post }
}

export default Home
