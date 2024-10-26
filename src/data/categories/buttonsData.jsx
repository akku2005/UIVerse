// src/data/categories/buttonsData.js
export const buttonsData = [
  {
    id: "primary-button",
    title: "Primary Button",
    description: "Standard primary button with hover effect",
    preview: `<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-blue-300">
        Click me!
      </button>`,
    code: `const PrimaryButton = ({ children, ...props }) => {
        return (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-blue-300"
            {...props}
          >
            {children}
          </button>
        );
      };`,
    category: "buttons",
  },
  {
    id: "secondary-button",
    title: "Secondary Button",
    description: "Secondary outlined button",
    preview: `<button class="px-4 py-2 border-2 border-gray-500 text-gray-500 rounded-lg hover:bg-gray-500 hover:text-white transition-colors focus:ring-2 focus:ring-gray-300">
        Secondary
      </button>`,
    code: `const SecondaryButton = ({ children, ...props }) => {
        return (
          <button
            className="px-4 py-2 border-2 border-gray-500 text-gray-500 rounded-lg hover:bg-gray-500 hover:text-white transition-colors focus:ring-2 focus:ring-gray-300"
            {...props}
          >
            {children}
          </button>
        );
      };`,
    category: "buttons",
  },
  {
    id: "loading-button",
    title: "Loading Button",
    description: "Button with loading spinner",
    preview: `<button class="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center space-x-2 disabled:opacity-50" disabled>
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Loading...</span>
      </button>`,
    code: `const LoadingButton = ({ loading, children, ...props }) => {
        return (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center space-x-2 disabled:opacity-50"
            disabled={loading}
            {...props}
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            <span>{loading ? 'Loading...' : children}</span>
          </button>
        );
      };`,
    category: "buttons",
  },
  {
    id: "icon-button",
    title: "Icon Button",
    description: "Button with icon",
    preview: `<button class="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center space-x-2 hover:bg-green-600">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
        <span>Add Item</span>
      </button>`,
    code: `const IconButton = ({ icon, children, ...props }) => {
        return (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center space-x-2 hover:bg-green-600"
            {...props}
          >
            {icon}
            <span>{children}</span>
          </button>
        );
      };`,
    category: "buttons",
  },
  {
    id: "gradient-button",
    title: "Gradient Button",
    description: "Button with gradient background",
    preview: `<button class="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600">
        Gradient
      </button>`,
    code: `const GradientButton = ({ children, ...props }) => {
        return (
          <button
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600"
            {...props}
          >
            {children}
          </button>
        );
      };`,
    category: "buttons",
  },
  {
    id: "rounded-button",
    title: "Rounded Button",
    description: "Fully rounded button",
    preview: `<button class="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
        Rounded
      </button>`,
    code: `const RoundedButton = ({ children, ...props }) => {
        return (
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            {...props}
          >
            {children}
          </button>
        );
      };`,
    category: "buttons",
  },
  {
    id: "outlined-button",
    title: "Outlined Button",
    description: "Button with outline style",
    preview: `<button class="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
        Outlined
      </button>`,
    code: `const OutlinedButton = ({ children, ...props }) => {
        return (
          <button
            className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
            {...props}
          >
            {children}
          </button>
        );
      };`,
    category: "buttons",
  },
  {
    id: "size-buttons",
    title: "Size Variations",
    description: "Buttons in different sizes",
    preview: `<div class="space-x-2">
        <button class="px-2 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">Small</button>
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Medium</button>
        <button class="px-6 py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600">Large</button>
      </div>`,
    code: `const SizeButtons = () => {
        return (
          <div className="space-x-2">
            <button className="px-2 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">Small</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Medium</button>
            <button className="px-6 py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600">Large</button>
          </div>
        );
      };`,
    category: "buttons",
  },
  {
    id: "block-button",
    title: "Block Button",
    description: "Button that takes up full width",
    preview: `<button class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Block
      </button>`,
    code: `const BlockButton = ({ children, ...props }) => {
        return (
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            {...props}
          >
            {children}
          </button>
        );
      };`,
    category: "buttons",
  },
  {
    id: "pill-button",
    title: "Pill Button",
    description: "Button with pill shape",
    preview: `<button class="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
        Pill
      </button>`,
    code: `const PillButton = ({ children, ...props }) => {
        return (
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            {...props}
          >
            {children}
          </button>
        );
      };`,
    category: "buttons",
  },
  {
    id: "icon-only-button",
    title: "Icon Only Button",
    description: "Button with only an icon",
    preview: `<button class="px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
      </button>`,
    code: `const IconOnlyButton = ({ icon, ...props }) => {
        return (
          <button
            className="px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            {...props}
          >
            {icon}
          </button>
        );
      };`,
    category: "buttons",
  },
  {
    id: "split-button",
    title: "Split Button",
    description: "Button with split dropdown menu",
    preview: `<div class="relative inline-block text-left group">
        <div class="inline-flex rounded-lg overflow-hidden">
          <button class="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
            Split
          </button>
          <button class="px-2 py-2 bg-blue-500 text-white hover:bg-blue-600 border-l border-blue-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>
        <ul class="hidden group-hover:block absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-md py-1 z-10">
          <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Item 1</a></li>
          <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Item 2</a></li>
          <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Item 3</a></li>
        </ul>
      </div>`,
    code: `const SplitButton = () => {
        return (
          <div className="relative inline-block text-left group">
            <div className="inline-flex rounded-lg overflow-hidden">
              <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
                Split
              </button>
              <button className="px-2 py-2 bg-blue-500 text-white hover:bg-blue-600 border-l border-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            </div>
            <ul className="hidden group-hover:block absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-md py-1 z-10">
              <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Item 1</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Item 2</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Item 3</a></li>
            </ul>
          </div>
        );
      };`,
    category: "buttons",
  },
  {
    id: "social-button",
    title: "Social Button",
    description: "Button with social media icon",
    preview: `<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v-4h2v-3h3a5 5 0 00-5-5h-3zM3 7h9v12H3z"/>
        </svg>
        Facebook
      </button>`,
    code: `const SocialButton = ({ icon, children, ...props }) => {
        return (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            {...props}
          >
            {icon}
            {children}
          </button>
        );
      };`,
    category: "buttons",
  },
  {
    id: "dropdown-button",
    title: "Dropdown Button",
    description: "Button with dropdown menu",
    preview: `<div class="relative inline-block text-left group">
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 inline-flex items-center">
          Dropdown
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <ul class="hidden group-hover:block absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-md py-1 z-10">
          <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Item 1</a></li>
          <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Item 2</a></li>
          <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Item 3</a></li>
        </ul>
      </div>`,
    code: `const DropdownButton = () => {
        return (
          <div className="relative inline-block text-left group">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 inline-flex items-center">
              Dropdown
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <ul className="hidden group-hover:block absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-md py-1 z-10">
              <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Item 1</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Item 2</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Item 3</a></li>
            </ul>
          </div>
        );
      };`,
    category: "buttons",
  },
];
