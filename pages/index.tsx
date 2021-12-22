import { MDXRemote } from 'next-mdx-remote'
import { IconType } from 'react-icons'
import {
  FaLastfm,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaRegEnvelope
} from 'react-icons/fa'

import { getFileBySlug } from '../lib/mdx'
import type { MDXRemoteSerializeResult } from '../lib/types'
import HomeLayout from '../components/HomeLayout'
import Prose from '../components/Prose'

interface Props {
  mdxSource: MDXRemoteSerializeResult
}

const Home: React.FC<Props> = ({ mdxSource }) => {
  return (
    <HomeLayout>
      <div className="mb-12 md:mb-20">
        <Prose>
          <MDXRemote {...mdxSource} />
        </Prose>
      </div>
      <div className="flex justify-center space-x-8">
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

const SocialLink = ({ Icon, href }: { Icon: IconType; href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-gray-700 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400 transition-colors"
    >
      <Icon className="w-4 md:w-5 h-4 md:h-5" />
    </a>
  )
}

export async function getStaticProps() {
  const post = await getFileBySlug('index')

  return { props: post }
}

export default Home
