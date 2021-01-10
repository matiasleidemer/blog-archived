import { useTheme } from 'next-themes'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="rounded-full"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <RiSunLine color="white" className="w-6 h-6" />
      ) : (
        <RiMoonLine color="black" className="w-6 h-6" />
      )}
    </button>
  )
}

export default ThemeSwitcher
