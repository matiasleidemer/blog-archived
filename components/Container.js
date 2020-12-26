import Menu from './Menu'

const Container = ({ children }) => {
  return (
    <div className="container mx-auto max-w-2xl p-8">
      <Menu />
      {children}
    </div>
  )
}

export default Container
