import React from "react";

const CategoriesGrid = ({ categories, onCategorySelect }) => {
  return (
    <div className="space-y-8 px-4 ">
      {/* Intro Section */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          🚀 Awesome UI Library for Developers
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore and use pre-designed components that are production-ready.
          Copy the code, customize it, and integrate it into your projects
          effortlessly. Your feedback matters! If you find this library helpful,
          kindly ⭐{" "}
          <a
            href="https://github.com/your-github-username/awesome-ui-library"
            className="text-indigo-500 underline hover:text-indigo-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            rate the repository on GitHub.
          </a>
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className="relative group p-6 sm:p-8 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gray-800/10 transition-opacity rounded-xl"></div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600">
              {category.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-500 group-hover:text-gray-700">
              Explore {category.name.toLowerCase()}
            </p>

            <span className="absolute top-4 right-4 text-indigo-500 group-hover:rotate-45 transition-transform">
              ➜
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;
