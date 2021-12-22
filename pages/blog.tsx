import Link from 'next/link'
import { format } from 'date-fns'

import { getAllFilesFrontMatter } from '../lib/mdx'
import { Post, GetStaticProps } from '../lib/types'

interface Props {
  posts: Post[]
}

const Blog: React.FC<Props> = ({ posts }) => {
  const sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )

  return (
    <>
      <h1 className="mb-12 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        Blog
      </h1>
      <ul>
        {sortedPosts.map((post) => {
          return (
            <li className="mb-8" key={post.slug}>
              <span className="text-sm font-extralight tracking-tight text-gray-600 dark:text-gray-400">
                {format(new Date(post.date), 'd MMM, yyyy')}
              </span>
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <h2 className="text-xl font-bold leading-tight text-gray-800 dark:text-gray-200">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {post.description}
                  </p>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default Blog
