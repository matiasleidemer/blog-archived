import { format } from 'date-fns'

import Container from './Container'
import FooterCard from './FooterCard'
import Head from './Head'

const BlogLayout = ({ frontMatter, children }) => {
  const { title, readingTime } = frontMatter

  return (
    <Container>
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
      <article className="prose mb-8 dark:prose-dark">{children}</article>
      <hr className="mb-8" />
      <FooterCard />
    </Container>
  )
}

export default BlogLayout
