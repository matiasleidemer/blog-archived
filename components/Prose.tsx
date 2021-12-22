const Prose: React.FC = ({ children }) => {
  return (
    <div className="prose-a:font-normal hover:prose-a:text-gray-600 hover:dark:prose-a:text-gray-400 prose-a:transition-colors prose prose-lg dark:prose-invert">
      {children}
    </div>
  )
}

export default Prose
