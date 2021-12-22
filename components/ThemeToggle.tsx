import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { BiMoon, BiSun } from 'react-icons/bi'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const isDark = () => theme === 'dark'

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      className="hover:text-gray-600 dark:hover:text-yellow-300 transition-colors focus:outline-none"
      onClick={() => setTheme(isDark() ? 'light' : 'dark')}
      aria-label="Theme toggle"
    >
      {isDark() ? <BiSun size={24} /> : <BiMoon size={24} />}
    </button>
  )
}
