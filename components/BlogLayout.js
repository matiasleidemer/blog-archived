import { format } from 'date-fns'

import Container from './Container'
import Head from './Head'

const BlogLayout = ({ frontMatter, children }) => {
  const { title, readingTime } = frontMatter

  return (
    <Container>
      <Head title={title}></Head>
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          {title}
        </h1>
        <div className="flex items-center font-extralight text-gray-600 text-sm">
          <span className="mr-2">
            {format(new Date(frontMatter.date), 'd MMM, yyyy')}
          </span>
          •<p className="ml-2">{readingTime.text}</p>
        </div>
      </div>
      <article className="prose mb-8">{children}</article>
    </Container>
  )
}

export default BlogLayout
