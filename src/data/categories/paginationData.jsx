// src/data/categories/paginationData.js
export const paginationData = [
  {
    id: "basic-pagination",
    title: "Basic Pagination",
    description: "A simple pagination component with numbered buttons.",
    category: "pagination",
    preview: `
        <div class="flex gap-2">
          <button class="px-3 py-1 bg-gray-200 rounded">1</button>
          <button class="px-3 py-1 bg-gray-200 rounded">2</button>
          <button class="px-3 py-1 bg-gray-200 rounded">3</button>
        </div>
      `,
    code: `
    const BasicPagination = () => {
      return (
        <div className="flex gap-2">
          {[1, 2, 3].map((page) => (
            <button key={page} className="px-3 py-1 bg-gray-200 rounded">
              {page}
            </button>
          ))}
        </div>
      );
    };
      `,
  },
  {
    id: "pagination-with-prev-next",
    title: "Pagination with Previous and Next",
    description: "Includes 'Previous' and 'Next' buttons.",
    category: "pagination",
    preview: `
        <div class="flex gap-2">
          <button class="px-3 py-1 bg-gray-300 rounded">Previous</button>
          <button class="px-3 py-1 bg-gray-200 rounded">1</button>
          <button class="px-3 py-1 bg-gray-200 rounded">2</button>
          <button class="px-3 py-1 bg-gray-200 rounded">3</button>
          <button class="px-3 py-1 bg-gray-300 rounded">Next</button>
        </div>
      `,
    code: `
    const PaginationWithPrevNext = () => {
      return (
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-gray-300 rounded">Previous</button>
          {[1, 2, 3].map((page) => (
            <button key={page} className="px-3 py-1 bg-gray-200 rounded">
              {page}
            </button>
          ))}
          <button className="px-3 py-1 bg-gray-300 rounded">Next</button>
        </div>
      );
    };
      `,
  },
  {
    id: "icon-pagination",
    title: "Icon Pagination",
    description: "Uses icons for navigation.",
    category: "pagination",
    preview: `
        <div class="flex items-center gap-2">
          <button class="p-2 bg-gray-300 rounded">⬅</button>
          <button class="p-2 bg-gray-300 rounded">➡</button>
        </div>
      `,
    code: `
    const IconPagination = () => {
      return (
        <div className="flex items-center gap-2">
          <button className="p-2 bg-gray-300 rounded">⬅</button>
          <button className="p-2 bg-gray-300 rounded">➡</button>
        </div>
      );
    };
      `,
  },
  {
    id: "dots-pagination",
    title: "Pagination with Dots",
    description: "Shows ellipsis for skipped pages.",
    category: "pagination",
    preview: `
        <div class="flex gap-2">
          <button class="px-3 py-1 bg-gray-200 rounded">1</button>
          <span class="px-3 py-1">...</span>
          <button class="px-3 py-1 bg-gray-200 rounded">10</button>
        </div>
      `,
    code: `
    const DotsPagination = () => {
      return (
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-gray-200 rounded">1</button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 bg-gray-200 rounded">10</button>
        </div>
      );
    };
      `,
  },
  {
    id: "rounded-pagination",
    title: "Rounded Pagination",
    description: "Pagination with rounded buttons.",
    category: "pagination",
    preview: `
        <div class="flex gap-2">
          <button class="p-2 rounded-full bg-blue-500 text-white">1</button>
          <button class="p-2 rounded-full bg-blue-500 text-white">2</button>
          <button class="p-2 rounded-full bg-blue-500 text-white">3</button>
        </div>
      `,
    code: `
    const RoundedPagination = () => {
      return (
        <div className="flex gap-2">
          {[1, 2, 3].map((page) => (
            <button key={page} className="p-2 rounded-full bg-blue-500 text-white">
              {page}
            </button>
          ))}
        </div>
      );
    };
      `,
  },
  {
    id: "shadow-pagination",
    title: "Pagination with Shadow",
    description: "Adds shadow to the buttons.",
    category: "pagination",
    preview: `
        <div class="flex gap-2">
          <button class="px-3 py-1 bg-white shadow-md rounded">1</button>
          <button class="px-3 py-1 bg-white shadow-md rounded">2</button>
          <button class="px-3 py-1 bg-white shadow-md rounded">3</button>
        </div>
      `,
    code: `
    const ShadowPagination = () => {
      return (
        <div className="flex gap-2">
          {[1, 2, 3].map((page) => (
            <button key={page} className="px-3 py-1 bg-white shadow-md rounded">
              {page}
            </button>
          ))}
        </div>
      );
    };
      `,
  },
  {
    id: "pagination-with-current-indicator",
    title: "Pagination with Current Page Indicator",
    description: "Highlights the current page.",
    category: "pagination",
    preview: `
        <div class="flex gap-2">
          <button class="px-3 py-1 bg-gray-300 rounded">1</button>
          <button class="px-3 py-1 bg-blue-500 text-white rounded">2</button>
          <button class="px-3 py-1 bg-gray-300 rounded">3</button>
        </div>
      `,
    code: `
    const CurrentIndicatorPagination = ({ currentPage }) => {
      return (
        <div className="flex gap-2">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={\`px-3 py-1 rounded \${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}\`}
            >
              {page}
            </button>
          ))}
        </div>
      );
    };
      `,
  },
  {
    id: "pagination-with-loading",
    title: "Pagination with Loading Indicator",
    description: "Shows a loading spinner during page change.",
    category: "pagination",
    preview: `
        <div class="flex gap-2 items-center">
          <button class="px-3 py-1 bg-gray-200 rounded">1</button>
          <button class="px-3 py-1 bg-gray-200 rounded">2</button>
          <div class="loader"></div>
        </div>
        <style>
          .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      `,
    code: `
    const PaginationWithLoading = () => {
      return (
        <div className="flex gap-2 items-center">
          {[1, 2].map((page) => (
            <button key={page} className="px-3 py-1 bg-gray-200 rounded">
              {page}
            </button>
          ))}
          <div className="loader" />
          <style jsx>{\`
            .loader {
              border: 4px solid #f3f3f3;
              border-top: 4px solid #3498db;
              border-radius: 50%;
              width: 20px;
              height: 20px;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          \`}</style>
        </div>
      );
    };
      `,
  },
];
