import NextLink from 'next/link'

const Link = ({ href, text }) => {
  return (
    <div className="ml-2 md:ml-4 text-gray-900 dark:text-gray-100">
      <NextLink href={href}>
        <a className="hover:text-gray-600 dark:hover:text-gray-400">{text}</a>
      </NextLink>
    </div>
  )
}

const Menu = () => (
  <nav className="flex justify-between items-baseline my-2">
    <div>
      <button className="bg-gray-700 w-8 h-8 rounded-full">🌙</button>
    </div>
    <div className="flex justify-end">
      <Link href="/blog" text="Blog" />
      <Link href="/projects" text="Projects" />
      <Link href="/" text="Home" />
    </div>
  </nav>
)

export default Menu
