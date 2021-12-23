import NextLink from 'next/link'
import ThemeToggle from './ThemeToggle'

const Container: React.FC = ({ children }) => {
  return (
    <div className="container p-8 mx-auto max-w-3xl">
      <div className="mt-2 mb-16">
        <nav className="flex justify-between items-start">
          <div className="flex justify-end space-x-4 md:space-x-8">
            <Link href="/" caption="Home" />
            <Link href="/blog" caption="Blog" />
            <Link href="/projects" caption="Projects" />
          </div>
          <ThemeToggle />
        </nav>
      </div>
      {children}
    </div>
  )
}

interface LinkProps {
  href: string
  caption: string
}

const Link: React.FC<LinkProps> = ({ href, caption }) => {
  return (
    <div className="text-gray-900 dark:text-gray-100">
      <NextLink href={href}>
        <a className="font-medium tracking-wide uppercase">{caption}</a>
      </NextLink>
    </div>
  )
}

export default Container
