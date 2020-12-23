import NextLink from 'next/link'

const Link = ({ href, text }) => {
  return (
    <div className="p-2 md:p-4 text-gray-900 dark:text-gray-100">
      <NextLink href={href}>
        <a className="hover:text-gray-600 dark:hover:text-gray-400">{text}</a>
      </NextLink>
    </div>
  )
}

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto max-w-2xl p-4 md:p-8">
      <nav className="flex justify-end">
        <Link href="/blog" text="Blog" />
        <Link href="/projects" text="Projects" />
        <Link href="/" text="Home" />
      </nav>
      {children}
    </div>
  )
}

export default Layout
