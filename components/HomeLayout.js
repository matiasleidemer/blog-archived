import Container from './Container'
import Headline from './Headline'

const Layout = ({ children }) => (
  <Container>
    <Headline />
    {children}
  </Container>
)

export default Layout
