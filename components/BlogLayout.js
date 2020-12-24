import Menu from './Menu'

const Layout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto max-w-2xl p-8">
        <Menu />
        <article className="mt-16 mb-8">{children}</article>
      </div>
    </>
  )
}

export default Layout
