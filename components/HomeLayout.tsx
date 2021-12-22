import Headline from './Headline'

const Layout: React.FC = ({ children }) => (
  <>
    <Headline />
    {children}
  </>
)

export default Layout
