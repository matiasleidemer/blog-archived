interface Props {
  children: JSX.Element[]
  className: string
}

const CodeSnippet: React.FC<Props> = ({ children, className }) => {
  const language = className.split('-')[1]

  return (
    <div className="relative">
      <span className="absolute h-6 w-8 right-0 top-0 bg-cyan-200 rounded text-sm text-center font-semibold">
        {language}
      </span>
      <pre className={className}>{children}</pre>
    </div>
  )
}

export default CodeSnippet
