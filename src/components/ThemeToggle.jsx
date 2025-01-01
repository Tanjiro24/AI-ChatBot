import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
     {isDark ? (
  <Sun size={20} className="text-yellow-300" />
) : (
  <Moon size={20} className="text-gray-500" />
)}
    </button>
  );
}

export default ThemeToggle;