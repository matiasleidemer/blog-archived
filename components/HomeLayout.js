import Headline from './Headline'
import Menu from './Menu'

const Layout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto max-w-2xl p-8">
        <Menu />
        <Headline />
        {children}
      </div>
    </>
  )
}

export default Layout
