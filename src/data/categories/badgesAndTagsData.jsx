// src/data/categories/badgesAndTagsData.js
export const badgesAndTagsData = [
  {
    id: "basic-badges",
    title: "Basic Badges",
    description: "Simple badge styles",
    category: "badges",
    preview: `
        <div class="space-x-2">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Default
          </span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Error
          </span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Warning
          </span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Success
          </span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Info
          </span>
        </div>
      `,
    code: `
  const Badge = ({ children, variant = 'default' }) => {
    const variants = {
      default: 'bg-gray-100 text-gray-800',
      error: 'bg-red-100 text-red-800',
      warning: 'bg-yellow-100 text-yellow-800',
      success: 'bg-green-100 text-green-800',
      info: 'bg-blue-100 text-blue-800',
    };
  
    return (
      <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium \${variants[variant]}\`}>
        {children}
      </span>
    );
  };
      `,
  },
  {
    id: "pill-badges",
    title: "Pill Badges",
    description: "Solid colored pill badges",
    category: "badges",
    preview: `
        <div class="space-x-2">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-white">
            Default
          </span>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white">
            Error
          </span>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500 text-white">
            Warning
          </span>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
            Success
          </span>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
            Info
          </span>
        </div>
      `,
    code: `
  const PillBadge = ({ children, variant = 'default' }) => {
    const variants = {
      default: 'bg-gray-900',
      error: 'bg-red-600',
      warning: 'bg-yellow-500',
      success: 'bg-green-600',
      info: 'bg-blue-600',
    };
  
    return (
      <span className={\`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium \${variants[variant]} text-white\`}>
        {children}
      </span>
    );
  };
      `,
  },
  {
    id: "notification-badges",
    title: "Notification Badges",
    description: "Badges with notification counts",
    category: "badges",
    preview: `
        <div class="space-x-4">
          <span class="relative inline-block">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            <span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </span>
  
          <span class="relative inline-block">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            <span class="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 ring-2 ring-white text-xs text-white text-center">
              3
            </span>
          </span>
        </div>
      `,
    code: `
  const NotificationBadge = ({ count }) => {
    return (
      <span className="relative inline-block">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
        </svg>
        {count ? (
          <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 ring-2 ring-white text-xs text-white text-center">
            {count}
          </span>
        ) : (
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        )}
      </span>
    );
  };
      `,
  },
  {
    id: "tags",
    title: "Tags",
    description: "Simple tag styles",
    category: "tags",
    preview: `
        <div class="space-x-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Default
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Error
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Warning
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Success
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Info
          </span>
        </div>
      `,
    code: `
  const Tag = ({ children, variant = 'default' }) => {
    const variants = {
      default: 'bg-gray-100 text-gray-800',
      error: 'bg-red-100 text-red-800',
      warning: 'bg-yellow-100 text-yellow-800',
      success: 'bg-green-100 text-green-800',
      info: 'bg-blue-100 text-blue-800',
    };
  
    return (
      <span className={\`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium \${variants[variant]}\`}>
        {children}
      </span>
    );
  };
      `,
  },
];
