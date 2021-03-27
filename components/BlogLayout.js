import { format } from 'date-fns'

import FooterCard from './FooterCard'
import Head from './Head'
import MetaTags from './MetaTags'

const BlogLayout = ({ frontMatter, children }) => {
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
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h1>
        <div className="flex items-center font-extralight text-gray-600 dark:text-gray-400 text-sm">
          <span className="mr-2">
            {format(new Date(frontMatter.date), 'd MMM, yyyy')}
          </span>
          •<p className="ml-2">{readingTime.text}</p>
        </div>
      </div>
      <hr className="my-12 border-t-2 w-20 mx-auto" />
      <article className="prose my-8 dark:prose-dark">{children}</article>
      <hr className="my-12 border-t-2 w-20 mx-auto" />
      <FooterCard />
    </>
  )
}

export default BlogLayout
