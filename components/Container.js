import NextLink from 'next/link'
import { useTheme } from 'next-themes'

const Container = ({ children }) => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container mx-auto max-w-2xl p-8">
      <div className="mt-2 mb-16">
        <nav className="flex justify-between items-baseline">
          <div>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="bg-gray-800 w-8 h-8 rounded-full"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
          <div className="flex justify-end">
            <Link href="/blog" text="Blog" />
            <Link href="/projects" text="Projects" />
            <Link href="/" text="Home" />
          </div>
        </nav>
      </div>
      {children}
    </div>
  )
}

const Link = ({ href, text }) => {
  return (
    <div className="ml-4 md:ml-8 text-gray-900 dark:text-gray-100">
      <NextLink href={href}>
        <a className="hover:text-gray-600 dark:hover:text-gray-400 transition">
          {text}
        </a>
      </NextLink>
    </div>
  )
}

export default Container
