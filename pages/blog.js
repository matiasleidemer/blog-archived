import Link from 'next/link'
import { format } from 'date-fns'

import { getAllFilesFrontMatter } from '@/lib/mdx'

const Blog = ({ posts }) => {
  const sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-gray-900 dark:text-gray-100">
        Blog
      </h1>
      <ul>
        {sortedPosts.map((post) => {
          return (
            <li className="mb-8" key={post.slug}>
              <span className="text-gray-600 dark:text-gray-400 text-sm tracking-tight font-extralight">
                {format(new Date(post.date), 'd MMM, yyyy')}
              </span>
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
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

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default Blog
