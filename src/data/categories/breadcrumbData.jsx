// src/data/categories/breadcrumbData.js
export const breadcrumbData = [
  {
    id: "basic-breadcrumbs",
    title: "Basic Breadcrumbs",
    description: "Simple breadcrumb navigation with different separators",
    category: "breadcrumbs",
    preview: `
  <div class="space-y-4">
    <!-- Basic Breadcrumb with Slash -->
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="flex items-center space-x-2">
        <li>
          <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
        </li>
        <li class="text-gray-400">/</li>
        <li>
          <a href="#" class="text-gray-600 hover:text-gray-900">Products</a>
        </li>
        <li class="text-gray-400">/</li>
        <li>
          <span class="text-gray-900 font-medium">Categories</span>
        </li>
      </ol>
    </nav>
  
    <!-- Breadcrumb with Chevron -->
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="flex items-center space-x-2">
        <li>
          <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
        </li>
        <li class="text-gray-400">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </li>
        <li>
          <a href="#" class="text-gray-600 hover:text-gray-900">Products</a>
        </li>
        <li class="text-gray-400">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </li>
        <li>
          <span class="text-gray-900 font-medium">Categories</span>
        </li>
      </ol>
    </nav>
  </div>`,
    code: `
  const Breadcrumb = ({ items, separator = 'slash' }) => {
    const separators = {
      slash: <span className="text-gray-400">/</span>,
      chevron: (
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      )
    };
  
    return (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={index}>
              {index > 0 && <div className="mx-2">{separators[separator]}</div>}
              {item.href ? (
                <a href={item.href} className="text-gray-600 hover:text-gray-900">
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-900 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  };`,
  },
  {
    id: "styled-breadcrumbs",
    title: "Styled Breadcrumbs",
    description: "Breadcrumbs with different styles and backgrounds",
    category: "breadcrumbs",
    preview: `
  <div class="space-y-4">
    <!-- Contained Breadcrumb -->
    <nav class="bg-gray-100 px-4 py-2 rounded-lg" aria-label="Breadcrumb">
      <ol class="flex items-center space-x-2">
        <li>
          <a href="#" class="text-blue-600 hover:text-blue-800">Home</a>
        </li>
        <li class="text-gray-400">/</li>
        <li>
          <a href="#" class="text-blue-600 hover:text-blue-800">Products</a>
        </li>
        <li class="text-gray-400">/</li>
        <li>
          <span class="text-gray-900 font-medium">Categories</span>
        </li>
      </ol>
    </nav>
  
    <!-- Underlined Breadcrumb -->
    <nav aria-label="Breadcrumb">
      <ol class="flex items-center space-x-2">
        <li>
          <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline">Home</a>
        </li>
        <li class="text-gray-400">></li>
        <li>
          <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline">Products</a>
        </li>
        <li class="text-gray-400">></li>
        <li>
          <span class="text-gray-900 font-medium">Categories</span>
        </li>
      </ol>
    </nav>
  
    <!-- Pill Breadcrumb -->
    <nav aria-label="Breadcrumb">
      <ol class="flex items-center">
        <li>
          <a href="#" class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300">Home</a>
        </li>
        <li class="mx-2">
          <a href="#" class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300">Products</a>
        </li>
        <li>
          <span class="bg-blue-500 text-white px-3 py-1 rounded-full">Categories</span>
        </li>
      </ol>
    </nav>
  </div>`,
    code: `
  const StyledBreadcrumb = ({ items, variant = 'default' }) => {
    const styles = {
      default: {
        container: '',
        item: 'text-blue-600 hover:text-blue-800',
        separator: 'text-gray-400',
        active: 'text-gray-900 font-medium'
      },
      contained: {
        container: 'bg-gray-100 px-4 py-2 rounded-lg',
        item: 'text-blue-600 hover:text-blue-800',
        separator: 'text-gray-400',
        active: 'text-gray-900 font-medium'
      },
      underlined: {
        container: '',
        item: 'text-blue-600 hover:text-blue-800 hover:underline',
        separator: 'text-gray-400',
        active: 'text-gray-900 font-medium'
      },
      pill: {
        container: '',
        item: 'bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300',
        separator: 'mx-2',
        active: 'bg-blue-500 text-white px-3 py-1 rounded-full'
      }
    };
  
    return (
      <nav className={styles[variant].container} aria-label="Breadcrumb">
        <ol className="flex items-center">
          {items.map((item, index) => (
            <li key={index}>
              {index > 0 && <div className={styles[variant].separator}>{variant === 'pill' ? '' : '>'}</div>}
              {item.href ? (
                <a href={item.href} className={styles[variant].item}>
                  {item.label}
                </a>
              ) : (
                <span className={styles[variant].active}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  };`,
  },
];
