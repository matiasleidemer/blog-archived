import Head from './Head'
import Menu from './Menu'

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <div className="container mx-auto max-w-2xl p-4 md:p-8">
        <Menu />
        {children}
      </div>
    </>
  )
}

export default Layout
