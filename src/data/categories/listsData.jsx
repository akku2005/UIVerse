// src/data/categories/listsData.js
export const listsData = [
  {
    id: "basic-list",
    title: "Basic List",
    description: "Simple unordered list with minimal styling",
    category: "lists",
    preview: `
        <ul class="list-disc list-inside space-y-2">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ul>
      `,
    code: `
  const BasicList = ({ items }) => {
    return (
      <ul className="list-disc list-inside space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
      `,
  },
  {
    id: "ordered-list",
    title: "Ordered List",
    description: "Numbered list with custom styling",
    category: "lists",
    preview: `
        <ol class="list-decimal list-inside space-y-2">
          <li class="text-gray-700">First step in the process</li>
          <li class="text-gray-700">Second step in the process</li>
          <li class="text-gray-700">Third step in the process</li>
          <li class="text-gray-700">Final step in the process</li>
        </ol>
      `,
    code: `
  const OrderedList = ({ items }) => {
    return (
      <ol className="list-decimal list-inside space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ol>
    );
  };
      `,
  },
  {
    id: "icon-list",
    title: "Icon List",
    description: "List items with icons",
    category: "lists",
    preview: `
        <ul class="space-y-3">
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span>Premium feature</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span>Unlimited access</span>
          </li>
        </ul>
      `,
    code: `
  const IconList = ({ items }) => {
    return (
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  };
      `,
  },
  {
    id: "description-list",
    title: "Description List",
    description: "List with terms and descriptions",
    category: "lists",
    preview: `
        <dl class="space-y-4">
          <div>
            <dt class="text-sm font-medium text-gray-500">Full name</dt>
            <dd class="mt-1 text-sm text-gray-900">John Doe</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 text-sm text-gray-900">johndoe@example.com</dd>
          </div>
        </dl>
      `,
    code: `
  const DescriptionList = ({ items }) => {
    return (
      <dl className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <dt className="text-sm font-medium text-gray-500">{item.term}</dt>
            <dd className="mt-1 text-sm text-gray-900">{item.description}</dd>
          </div>
        ))}
      </dl>
    );
  };
      `,
  },
  {
    id: "interactive-list",
    title: "Interactive List",
    description: "Clickable list items with hover effects",
    category: "lists",
    preview: `
        <ul class="divide-y divide-gray-200">
          <li class="py-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="User avatar">
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">John Doe</p>
                <p class="text-sm text-gray-500 truncate">john@example.com</p>
              </div>
            </div>
          </li>
          <li class="py-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="User avatar">
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">Jane Smith</p>
                <p class="text-sm text-gray-500 truncate">jane@example.com</p>
              </div>
            </div>
          </li>
        </ul>
      `,
    code: `
  const InteractiveList = ({ items }) => {
    return (
      <ul className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="py-4 hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() => item.onClick?.()}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img 
                  className="h-8 w-8 rounded-full" 
                  src={item.avatar} 
                  alt="User avatar" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                <p className="text-sm text-gray-500 truncate">{item.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };
      `,
  },
];
