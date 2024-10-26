// src/data/categories/navigationData.js
export const navigationData = [
  {
    id: 1,
    title: "Horizontal Navigation",
    description: "A simple horizontal navigation bar.",
    preview: `
      <nav class="bg-gray-800 text-white px-4 py-2">
        <ul class="flex space-x-6">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">About</a></li>
          <li><a href="#" class="hover:underline">Services</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    `,
    code: `
      const HorizontalNav = () => (
        <nav className="bg-gray-800 text-white px-4 py-2">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      );
    `,
    category: "navigation",
  },

  {
    id: 3,
    title: "Mobile Navigation",
    description: "A mobile-friendly navigation with a burger menu.",
    preview: `
      <nav class="bg-blue-600 p-4">
        <button class="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    `,
    code: `
      const MobileNav = () => (
        <nav className="bg-blue-600 p-4">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      );
    `,
    category: "navigation",
  },
  {
    id: 4,
    title: "Tabbed Navigation",
    description: "A tab-based navigation component.",
    preview: `
      <div class="flex space-x-4 border-b">
        <a href="#" class="pb-2 border-b-2 border-transparent hover:border-blue-500">Tab 1</a>
        <a href="#" class="pb-2 border-b-2 border-transparent hover:border-blue-500">Tab 2</a>
        <a href="#" class="pb-2 border-b-2 border-transparent hover:border-blue-500">Tab 3</a>
      </div>
    `,
    code: `
      const TabbedNav = () => (
        <div className="flex space-x-4 border-b">
          <a href="#" className="pb-2 border-b-2 border-transparent hover:border-blue-500">Tab 1</a>
          <a href="#" className="pb-2 border-b-2 border-transparent hover:border-blue-500">Tab 2</a>
          <a href="#" className="pb-2 border-b-2 border-transparent hover:border-blue-500">Tab 3</a>
        </div>
      );
    `,
    category: "navigation",
  },
  {
    id: 5,
    title: "Breadcrumb Navigation",
    description: "A breadcrumb navigation for tracking pages.",
    preview: `
      <nav class="text-sm text-gray-600">
        <a href="#" class="hover:underline">Home</a> / 
        <a href="#" class="hover:underline">Products</a> / 
        <span>Details</span>
      </nav>
    `,
    code: `
      const BreadcrumbNav = () => (
        <nav className="text-sm text-gray-600">
          <a href="#" className="hover:underline">Home</a> / 
          <a href="#" className="hover:underline">Products</a> / 
          <span>Details</span>
        </nav>
      );
    `,
    category: "navigation",
  },
  {
    id: 6,
    title: "Pagination Navigation",
    description: "A pagination component for navigation.",
    preview: `
      <nav class="flex justify-center space-x-2">
        <button class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">1</button>
        <button class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">2</button>
        <button class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">3</button>
      </nav>
    `,
    code: `
      const PaginationNav = () => (
        <nav className="flex justify-center space-x-2">
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">1</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">2</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">3</button>
        </nav>
      );
    `,
    category: "navigation",
  },
  {
    id: 7,
    title: "Sidebar Navigation",
    description: "A collapsible sidebar navigation.",
    preview: `
      <aside class="bg-gray-800 text-white w-64 h-full p-4">
        <ul class="space-y-4">
          <li><a href="#" class="hover:text-gray-400">Overview</a></li>
          <li><a href="#" class="hover:text-gray-400">Reports</a></li>
          <li><a href="#" class="hover:text-gray-400">Analytics</a></li>
        </ul>
      </aside>
    `,
    code: `
      const SidebarNav = () => (
        <aside className="bg-gray-800 text-white w-64 h-full p-4">
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gray-400">Overview</a></li>
            <li><a href="#" className="hover:text-gray-400">Reports</a></li>
            <li><a href="#" className="hover:text-gray-400">Analytics</a></li>
          </ul>
        </aside>
      );
    `,
    category: "navigation",
  },
  {
    id: 8,
    title: "Sticky Header Navigation",
    description: "A header that stays fixed at the top on scroll.",
    preview: `
      <header class="bg-white shadow fixed top-0 left-0 w-full p-4">
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-bold">Logo</h1>
          <nav>
            <ul class="flex space-x-4">
              <li><a href="#" class="hover:underline">Home</a></li>
              <li><a href="#" class="hover:underline">Blog</a></li>
              <li><a href="#" class="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `,
    code: `
      const StickyHeaderNav = () => (
        <header className="bg-white shadow fixed top-0 left-0 w-full p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Logo</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
      );
    `,
    category: "navigation",
  },
];
