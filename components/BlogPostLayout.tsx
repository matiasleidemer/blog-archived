import { format } from 'date-fns'
import { FrontMatter } from '../lib/types'

import FooterCard from './FooterCard'
import Head from './Head'
import MetaTags from './MetaTags'

interface Props {
  frontMatter: FrontMatter
}

const BlogPostLayout: React.FC<Props> = ({ frontMatter, children }) => {
  const { title, description, readingTime, slug } = frontMatter

  return (
    <>
      <MetaTags
        title={title}
        description={description}
        url={`https://matiasleidemer.dev/blog/${slug}`}
      />
      <Head title={title}></Head>
      <div className="mb-8">
        <h1 className="mb-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h1>
        <div className="flex items-center text-sm font-light text-gray-600 dark:text-gray-400">
          <span className="mr-2">
            {format(new Date(frontMatter.date), 'd MMM, yyyy')}
          </span>
          •<p className="ml-2">{readingTime.text}</p>
        </div>
      </div>
      <hr className="my-12 mx-auto w-20 border-t-2" />
      <article className="my-8">{children}</article>
      <hr className="my-12 mx-auto w-20 border-t-2" />
      <FooterCard />
    </>
  )
}

export default BlogPostLayout
