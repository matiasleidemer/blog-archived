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
          <h1>{title}</h1>
          <p>{readingTime.text}</p>
        </div>
        <article className="prose mb-8">{children}</article>
      </div>
    </>
  )
}

export default BlogLayout
