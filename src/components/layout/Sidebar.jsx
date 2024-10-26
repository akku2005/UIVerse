// src/components/layout/Sidebar.jsx
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Sidebar = ({
  open,
  onClose,
  categories = [],
  selectedCategory,
  onCategoryChange,
}) => {
  const { darkMode } = useTheme();

  const handleCategoryClick = (categoryId) => {
    onCategoryChange(categoryId);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Categories
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close sidebar"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleCategoryClick(null)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === null
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : `hover:bg-gray-100 dark:hover:bg-gray-700 
                         text-gray-700 dark:text-gray-200`
                  }`}
                >
                  All Categories
                </button>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : `hover:bg-gray-100 dark:hover:bg-gray-700 
                           text-gray-700 dark:text-gray-200`
                    }`}
                  >
                    <span className="flex items-center">
                      <span>{category.name}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t dark:border-gray-700">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            Close Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
