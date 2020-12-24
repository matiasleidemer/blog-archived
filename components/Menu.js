import NextLink from 'next/link'

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

const Menu = () => (
  <div className="mt-2 mb-16">
    <nav className="flex justify-between items-baseline">
      <div>
        <button className="bg-gray-700 w-8 h-8 rounded-full">🌙</button>
      </div>
      <div className="flex justify-end">
        <Link href="/blog" text="Blog" />
        <Link href="/projects" text="Projects" />
        <Link href="/" text="Home" />
      </div>
    </nav>
  </div>
)

export default Menu
