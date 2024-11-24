// src/data/categories/tabsData.js
export const tabsData = [
  {
    id: "basic-tabs",
    title: "Basic Tabs",
    description: "Simple underlined tabs",
    preview: `<div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8">
          <a href="#" class="border-b-2 border-blue-500 py-4 px-1 text-sm font-medium text-blue-600">Tab 1</a>
          <a href="#" class="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Tab 2</a>
          <a href="#" class="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Tab 3</a>
        </nav>
      </div>`,
    code: `const Tabs = ({ tabs, activeTab, onTabClick }) => {
        return (
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href="#"
                  className={\`border-b-2 py-4 px-1 text-sm font-medium \${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }\`}
                  onClick={() => onTabClick(tab.id)}
                >
                  {tab.label}
                </a>
              ))}
            </nav>
          </div>
        );
      };`,
    category: "tabs",
  },
  {
    id: "pills-tabs",
    title: "Pills Tabs",
    description: "Tabs with pill-style background",
    preview: `<nav class="flex space-x-4" aria-label="Tabs">
        <a href="#" class="bg-blue-100 text-blue-700 px-3 py-2 font-medium text-sm rounded-md">Tab 1</a>
        <a href="#" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md hover:bg-gray-100">Tab 2</a>
        <a href="#" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md hover:bg-gray-100">Tab 3</a>
      </nav>`,
    code: `const PillTabs = ({ tabs, activeTab, onTabClick }) => {
        return (
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href="#"
                className={\`px-3 py-2 font-medium text-sm rounded-md \${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }\`}
                onClick={() => onTabClick(tab.id)}
              >
                {tab.label}
              </a>
            ))}
          </nav>
        );
      };`,
    category: "tabs",
  },
  {
    id: "icon-tabs",
    title: "Icon Tabs",
    description: "Tabs with icons",
    preview: `<nav class="flex space-x-4" aria-label="Tabs">
        <a href="#" class="flex items-center space-x-2 text-blue-600 group">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
          </svg>
          <span>Home</span>
         
        </a>
        <a href="#" class="flex items-center space-x-2 text-gray-500 hover:text-gray-700 group">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
          </svg>
          <span>Team</span>
        </a>
        <a href="#" class="flex items-center space-x-2 text-gray-500 hover:text-gray-700 group">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"/>
          </svg>
          <span>Projects</span>
        </a>
      </nav>`,
    code: `const IconTabs = ({ tabs, activeTab, onTabClick }) => {
        return (
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href="#"
                className={\`flex items-center space-x-2 group \${
                  activeTab === tab.id
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }\`}
                onClick={() => onTabClick(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="h-0.5 w-full bg-blue-600 absolute bottom-0"></div>
                )}
              </a>
            ))}
          </nav>
        );
      };`,
    category: "tabs",
  },
  {
    id: "vertical-tabs",
    title: "Vertical Tabs",
    description: "Vertically aligned tabs",
    preview: `<div class="flex space-x-4">
        <nav class="flex flex-col space-y-1 w-48" aria-label="Tabs">
          <a href="#" class="bg-blue-50 text-blue-700 px-3 py-2 font-medium text-sm rounde -md">Tab 1</a>
          <a href="#" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md hover:bg-gray-100">Tab 2</a>
          <a href="#" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md hover:bg-gray-100">Tab 3</a>
        </nav>
        <div class="flex-1 p-4">Tab content</div>
      </div>`,
    code: `const VerticalTabs = ({ tabs, activeTab, onTabClick }) => {
        return (
          <div className="flex space-x-4">
            <nav className="flex flex-col space-y-1 w-48" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                 
                  className={\`px-3 py-2 font-medium text-sm rounded-md \${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }\`}
                  onClick={() => onTabClick(tab.id)}
                >
                  {tab.label}
                </a>
              ))}
            </nav>
            <div className="flex-1 p-4">Tab content</div>
          </div>
        );
      };`,
    category: "tabs",
  },
];
