import React from "react";
import ComponentPreview from "./ComponentPreview";

const ComponentGrid = ({ components, searchTerm = "" }) => {
  if (!components || components.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
        <div className="text-center">
          <div className="text-gray-400 mb-4">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            No components found
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {searchTerm
              ? `No results found for "${searchTerm}"`
              : "There are no components available at the moment."}
          </p>
          {searchTerm && (
            <div className="mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Try adjusting your search:
              </p>
              <ul className="mt-2 text-sm text-gray-500 dark:text-gray-400 list-disc list-inside">
                <li>Check for typos or misspellings</li>
                <li>Use more general keywords</li>
                <li>Remove filters</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-max">
        {components.map((component) => (
          <div
            key={component.id}
            className="relative transform transition-all duration-200 hover:scale-[1.02]"
          >
            <ComponentPreview component={component} className="h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

// Optional: Add loading state component
const LoadingState = () => (
  <div className="px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-48"
        />
      ))}
    </div>
  </div>
);

const ComponentGridWrapper = ({ components, searchTerm, isLoading, error }) => {
  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Error loading components
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Please try refreshing the page
          </p>
        </div>
      </div>
    );
  }

  return <ComponentGrid components={components} searchTerm={searchTerm} />;
};

export default ComponentGridWrapper;
