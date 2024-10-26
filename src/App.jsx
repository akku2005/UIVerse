// src/App.jsx
import { useEffect, useState } from "react";
import { useTheme } from "./components/contexts/ThemeContext";
import { useNavigation } from "./components/contexts/NavigationContext";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import ComponentGrid from "./components/shared/ComponentGrid";
import ComponentGridAdvanced from "./components/shared/ComponentGridAdvanced";
import CategoriesGrid from "./components/shared/CategoriesGrid";
import ThemePicker from "./components/shared/ThemePicker";
import { categories, components } from "./data";
import "./styles/theme.css";

function App() {
  const { currentTheme, handleThemeChange, darkMode } = useTheme();
  const {
    currentCategory,
    searchTerm,
    isAdvancedView,
    navigate,
    goBack,
    goForward,
    canGoBack,
    canGoForward,
  } = useNavigation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state) {
        navigate(
          event.state.category,
          event.state.search,
          event.state.isAdvanced
        );
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate]);

  // Filter components based on category and search term
  const filteredComponents = components.filter((component) => {
    const matchesCategory = currentCategory
      ? component.category === currentCategory
      : true;

    const matchesSearch = searchTerm
      ? component.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        component.category.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  // Navigation handlers
  const handleCategoryChange = (categoryId) => {
    navigate(categoryId, "", isAdvancedView);
    setSidebarOpen(false);
  };

  const handleBackToCategories = () => {
    navigate(null, "", isAdvancedView);
  };

  const handleSearchChange = (value) => {
    navigate(currentCategory, value, isAdvancedView);
  };

  const handleSearchCategorySelect = (categoryId) => {
    navigate(categoryId, "", isAdvancedView);
  };

  const toggleAdvancedView = () => {
    navigate(currentCategory, searchTerm, !isAdvancedView);
  };

  // Get category title for display
  const getCategoryTitle = () => {
    if (currentCategory) {
      const category = categories.find((cat) => cat.id === currentCategory);
      return category ? category.name : "";
    }
    return "All Components";
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 
      ${darkMode ? "dark bg-gray-900" : "bg-gray-50"} 
      theme-${currentTheme}`}
    >
      <Header
        onMenuClick={() => setSidebarOpen(true)}
        ThemePickerComponent={
          <ThemePicker
            currentTheme={currentTheme}
            onThemeChange={handleThemeChange}
          />
        }
        onSearch={handleSearchChange}
        searchTerm={searchTerm}
        onCategorySelect={handleSearchCategorySelect}
        darkMode={darkMode}
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        onGoBack={goBack}
        onGoForward={goForward}
      />

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        categories={categories}
        selectedCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
        darkMode={darkMode}
      />

      <main className="p-4 sm:p-6 lg:p-8 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          {currentCategory || searchTerm ? (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleBackToCategories}
                    className={`flex items-center gap-2 transition-colors
                      ${
                        darkMode
                          ? "text-gray-200 hover:text-white"
                          : "text-theme-primary hover:text-theme-primary-hover"
                      }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Back to Categories
                  </button>
                  <h2
                    className={`text-xl font-semibold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {getCategoryTitle()}
                  </h2>
                </div>

                <button
                  onClick={toggleAdvancedView}
                  className={`px-4 py-2 rounded-lg transition-colors
                    ${
                      darkMode
                        ? "bg-theme-primary hover:bg-theme-primary-hover text-white"
                        : "bg-theme-primary hover:bg-theme-primary-hover text-white"
                    }`}
                >
                  Switch to {isAdvancedView ? "Basic" : "Advanced"} View
                </button>
              </div>

              {isAdvancedView ? (
                <ComponentGridAdvanced
                  components={filteredComponents}
                  darkMode={darkMode}
                />
              ) : (
                <ComponentGrid
                  components={filteredComponents}
                  darkMode={darkMode}
                />
              )}
            </div>
          ) : (
            <CategoriesGrid
              categories={categories}
              onCategorySelect={handleCategoryChange}
              darkMode={darkMode}
            />
          )}
        </div>
      </main>

      <footer
        className={`
  text-black py-8 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
    darkMode ? "opacity-90" : "opacity-100"
  }`}
      >
        <div className="max-w-screen-xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-semibold">UIVerse</h3>
          <p className="text-sm sm:text-base">
            A universe of beautiful UI components, crafted for developers.
          </p>

          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/your-github-username/uiverse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 50 50"
              >
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
              </svg>
            </a>

            <a
              href="http://www.linkedin.com/in/akashkumar-sahu-5b7897238"
              className="text-gray-100 hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0078d4"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"
                ></path>
                <path
                  d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364 c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274 L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479 C18,16.523,16.521,18,14.485,18H18v19H11z"
                  opacity=".05"
                ></path>
                <path
                  fill="#fff"
                  d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                ></path>
              </svg>
            </a>
          </div>

          <p className="text-sm mt-4">
            <a
              href="https://github.com/your-github-username/uiverse"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline hover:no-underline"
            >
              Rate the Repository on GitHub
            </a>
          </p>

          <p className="text-xs mt-2">
            UIVerse © {new Date().getFullYear()} | Crafted with ❤️ by Akash Sahu
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
