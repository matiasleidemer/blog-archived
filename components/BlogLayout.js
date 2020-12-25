import { format } from 'date-fns'

import Head from './Head'
import Menu from './Menu'

const BlogLayout = ({ frontMatter, children }) => {
  const { title, readingTime } = frontMatter

  return (
    <>
      <Head title={title}></Head>
      <div className="container mx-auto max-w-2xl p-8">
        <Menu />
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {title}
          </h1>
          <div className="flex items-center font-extralight text-gray-600 text-sm md:text-base">
            <span className="mr-2">
              {format(new Date(frontMatter.date), 'd MMM, yyyy')}
            </span>
            •<p className="ml-2">{readingTime.text}</p>
          </div>
        </div>
        <article className="prose mb-8">{children}</article>
      </div>
    </>
  )
}

export default BlogLayout
