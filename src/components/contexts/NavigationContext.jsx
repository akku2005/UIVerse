// src/components/contexts/NavigationContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [navigationHistory, setNavigationHistory] = useState({
    currentCategory: null,
    searchTerm: "",
    isAdvancedView: false,
    history: [],
    currentIndex: -1,
  });

  // Load state from localStorage on initial mount
  useEffect(() => {
    const savedState = localStorage.getItem("navigationState");
    if (savedState) {
      setNavigationHistory(JSON.parse(savedState));
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("navigationState", JSON.stringify(navigationHistory));
  }, [navigationHistory]);

  const navigate = (category, search, isAdvanced) => {
    setNavigationHistory((prev) => {
      const newHistory = [
        ...prev.history.slice(0, prev.currentIndex + 1),
        {
          category,
          search,
          isAdvanced,
        },
      ];

      return {
        currentCategory: category,
        searchTerm: search,
        isAdvancedView: isAdvanced,
        history: newHistory,
        currentIndex: newHistory.length - 1,
      };
    });
  };

  const goBack = () => {
    if (navigationHistory.currentIndex > 0) {
      setNavigationHistory((prev) => {
        const newIndex = prev.currentIndex - 1;
        const previousState = prev.history[newIndex];
        return {
          ...prev,
          currentCategory: previousState.category,
          searchTerm: previousState.search,
          isAdvancedView: previousState.isAdvanced,
          currentIndex: newIndex,
        };
      });
      return true;
    }
    return false;
  };

  const goForward = () => {
    if (navigationHistory.currentIndex < navigationHistory.history.length - 1) {
      setNavigationHistory((prev) => {
        const newIndex = prev.currentIndex + 1;
        const nextState = prev.history[newIndex];
        return {
          ...prev,
          currentCategory: nextState.category,
          searchTerm: nextState.search,
          isAdvancedView: nextState.isAdvanced,
          currentIndex: newIndex,
        };
      });
      return true;
    }
    return false;
  };

  return (
    <NavigationContext.Provider
      value={{
        currentCategory: navigationHistory.currentCategory,
        searchTerm: navigationHistory.searchTerm,
        isAdvancedView: navigationHistory.isAdvancedView,
        navigate,
        goBack,
        goForward,
        canGoBack: navigationHistory.currentIndex > 0,
        canGoForward:
          navigationHistory.currentIndex < navigationHistory.history.length - 1,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
