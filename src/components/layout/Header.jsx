import { useState } from "react";
import DarkModeToggle from "../shared/DarkModeToggle";
import { useTheme } from "../contexts/ThemeContext";

const Header = ({ onMenuClick, ThemePickerComponent }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex items-center">
            <div className="sm:hidden lg:hidden">
              <button
                onClick={onMenuClick}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Open sidebar"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white ml-2 sm:ml-0">
              UIVerse
            </h1>
          </div>

          {/* Right side */}
          <div className="hidden sm:flex items-center space-x-4">
            {ThemePickerComponent}
            <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4 items-center">
              {ThemePickerComponent}
              <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
