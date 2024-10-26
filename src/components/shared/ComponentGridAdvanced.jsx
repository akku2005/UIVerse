import { useState } from "react";
import ComponentCard from "./ComponentCard";

const ComponentGridAdvanced = ({ components }) => {
  const [sortBy, setSortBy] = useState("name");
  const [layout, setLayout] = useState("grid");

  // Function to sort components based on the selected criteria
  const sortComponents = (components) => {
    return [...components].sort((a, b) => {
      if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "newest") {
        // Assuming there's a dateAdded field; adjust accordingly
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      }
      return 0; // Default case, no sorting
    });
  };

  // Sort components based on the current sort criteria
  const sortedComponents = sortComponents(components);

  // If no components are found, show a message
  if (components.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          No components found
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Sorting and Layout Controls */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Sort By Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition duration-200"
          >
            <option value="name">Sort by name</option>
            <option value="newest">Sort by newest</option>
          </select>

          {/* Layout Toggle Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLayout("grid")}
              className={`p-2 rounded-md ${
                layout === "grid"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01 -2-2v-2z"
                />
              </svg>
            </button>
            <button
              onClick={() => setLayout("list")}
              className={`p-2 rounded-md ${
                layout === "list"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Component Count */}
        <div className="text-sm text-gray-500">
          {components.length} components
        </div>
      </div>

      {/* Component Grid or List */}
      <div
        className={
          layout === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-6"
        }
      >
        {sortedComponents.map((component) => (
          <ComponentCard
            key={component.id}
            title={component.title}
            description={component.description}
            preview={component.preview}
            code={component.code}
            category={component.category}
            layout={layout}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentGridAdvanced;
