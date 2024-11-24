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
          {items.map(( item, index) => (
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
  {
    id: "responsive-breadcrumbs",
    title: "Responsive Breadcrumbs",
    description: "Breadcrumbs that adapt to different screen sizes",
    category: "breadcrumbs",
    preview: `
<div class="space-y-4">
  <!-- Responsive Breadcrumb with Collapse -->
  <nav class="flex items-center" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2 overflow-hidden">
      <li class="hidden md:block">
        <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
      </li>
      <li class="hidden md:block text-gray-400">/</li>
      <li class="hidden md:block">
        <a href="#" class="text-gray-600 hover:text-gray-900">Products</a>
      </li>
      <li class="hidden md:block text-gray-400">/</li>
      <li class="block">
        <span class="text-gray-900 font-medium">Electronics</span>
      </li>
      <li class="md:hidden text-gray-600 ml-auto">
        <svg xmlns="http://w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </li>
    </ol>
  </nav>

  <!-- Breadcrumb with Dropdown on Mobile -->
  <nav class="relative" aria-label="Breadcrumb">
    <div class="hidden md:flex items-center space-x-2">
      <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
      <span class="text-gray-400">/</span>
      <a href="#" class="text-gray-600 hover:text-gray-900">Products</a>
      <span class="text-gray-400">/</span>
      <span class="text-gray-900 font-medium">Electronics</span>
    </div>
    <div class="md:hidden">
      <button class="flex items-center space-x-2 text-gray-700">
        <span>Electronics</span>
        <svg xmlns="http://w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </nav>
</div>`,
    code: `
const ResponsiveBreadcrumb = ({ items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="relative" aria-label="Breadcrumb">
      {/* Full breadcrumb for larger screens */}
      <div className="hidden md:flex items-center space-x-2">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-gray-400">/</span>}
            {item.href ? (
              <a href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
 </React.Fragment>
          ))}
        </div>

        {/* Collapsed view for mobile */}
        <div className="md:hidden relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 text-gray-700"
          >
            <span>{items[items.length - 1].label}</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-md">
              {items.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href || '#'} 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    );
  };`,
  },
  {
    id: "icon-breadcrumbs",
    title: "Icon Breadcrumbs",
    description: "Breadcrumbs with icons for enhanced visual representation",
    category: "breadcrumbs",
    preview: `
<div class="space-y-4">
  <!-- Breadcrumb with Home Icon -->
  <nav aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2">
      <li>
        <a href="#" class="flex items-center text-gray-600 hover:text-gray-900">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          Home
        </a>
      </li>
      <li class="text-gray-400">/</li>
      <li>
        <a href="#" class="flex items-center text-gray-600 hover:text-gray-900">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
          Products
        </a>
      </li>
      <li class="text-gray-400">/</li>
      <li>
        <span class="flex items-center text-gray-900 font-medium">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Categories
        </span>
      </li>
    </ol>
  </nav>
</div>`,
    code: `
const IconBreadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="text-gray- 400">/</span>}
            {item.href ? (
              <a href={item.href} className="flex items-center text-gray-600 hover:text-gray-900">
                {item.icon && <item.icon className="w-5 h-5 mr-2" />}
                {item.label}
              </a>
            ) : (
              <span className="flex items-center text-gray-900 font-medium">
                {item.icon && <item.icon className="w-5 h-5 mr-2" />}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};`,
  },
  {
    id: "animated-breadcrumbs",
    title: "Animated Breadcrumbs",
    description: "Breadcrumbs with hover animations for a dynamic feel",
    category: "breadcrumbs",
    preview: `
<div class="space-y-4">
  <nav aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2">
      <li>
        <a href="#" class="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out">Home</a>
      </li>
      <li class="text-gray-400">/</li>
      <li>
        <a href="#" class="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out">Products</a>
      </li>
      <li class="text-gray-400">/</li>
      <li>
        <span class="text-gray-900 font-medium">Categories</span>
      </li>
    </ol>
  </nav>
</div>`,
    code: `
const AnimatedBreadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index}>
            {index > 0 && <span className="text-gray-400">/</span>}
            {item.href ? (
              <a href={item.href} className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out">
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
];
