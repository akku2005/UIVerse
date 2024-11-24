export const containersData = [
  {
    id: "basic-container",
    title: "Basic Container",
    description: "Standard responsive container with max-width",
    preview: `
  <div class="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
    <div class="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 
                mx-auto bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
      <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
        Basic Container
      </h2>
      <p class="text-xs sm:text-sm md:text-base text-gray-700">
        Responsive container that adapts to all screen sizes with 
        dynamic padding and max-width.
      </p>
    </div>
  </div>`,
    code: `const BasicContainer = ({ children }) => {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl 
                        lg:max-w-4xl xl:max-w-6xl mx-auto 
                        bg-gray-100 p-4 sm:p-6 md:p-8 
                        rounded-lg shadow-md">
          {children}
        </div>
      </div>
    );
  };`,
    category: "containers",
  },
  {
    id: "fluid-container",
    title: "Fluid Container",
    description: "Full-width container with responsive padding",
    preview: `
  <div class="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
    <div class="bg-blue-100 p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
      <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
        Fluid Container
      </h2>
      <p class="text-xs sm:text-sm md:text-base text-gray-700">
        Spans full width with responsive padding across all devices.
      </p>
    </div>
  </div>`,
    code: `const FluidContainer = ({ children }) => {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="bg-blue-100 p-3 sm:p-4 md:p-6 lg:p-8 
                        rounded-lg shadow-md">
          {children}
        </div>
      </div>
    );
  };`,
    category: "containers",
  },
  {
    id: "responsive-grid-container",
    title: "Responsive Grid Container",
    description: "Adaptive grid layout for all screen sizes",
    preview: `
  <div class="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
      <div class="bg-green-100 p-3 sm:p-4 md:p-6 rounded-lg shadow-md">
        <h3 class="text-sm sm:text-base md:text-lg font-semibold">Section 1</h3>
        <p class="text-xs sm:text-sm">Responsive grid section</p>
      </div>
      <div class="bg-green-200 p-3 sm:p-4 md:p-6 rounded-lg shadow-md">
        <h3 class="text-sm sm:text-base md:text-lg font-semibold">Section 2</h3>
        <p class="text-xs sm:text-sm">Adapts to screen size</p>
      </div>
      <div class="bg-green-300 p-3 sm:p-4 md:p-6 rounded-lg shadow-md">
        <h3 class="text-sm sm:text-base md:text-lg font-semibold">Section 3</h3>
        <p class="text-xs sm:text-sm">Flexible layout</p>
      </div>
      <div class="bg-green-400 p-3 sm:p-4 md:p-6 rounded-lg shadow-md">
        <h3 class="text-sm sm:text-base md:text-lg font-semibold">Section 4</h3>
        <p class="text-xs sm:text-sm">Full responsiveness</p>
      </div>
    </div>
  </div>`,
    code: `const ResponsiveGridContainer = ({ sections }) => {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 
                        md:grid-cols-3 lg:grid-cols-4 
                        gap-2 sm:gap-4 md:gap-6">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={\`bg-green-\${(index + 1) * 100} 
                          p-3 sm:p-4 md:p-6 
                          rounded-lg shadow-md\`}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                {section.title}
              </h3>
              <p className="text-xs sm:text-sm">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };`,
    category: "containers",
  },
  {
    id: "sidebar-layout-container",
    title: "Responsive Sidebar Container",
    description: "Adaptive sidebar layout for all devices",
    preview: `
  <div class="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
    <div class="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6">
      <div class="w-full md:w-1/4 bg-purple-100 
                  p-3 sm:p-4 md:p-6 rounded-lg">
        <h3 class="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-4">
          Sidebar
        </h3>
        <ul class="space-y-1 sm:space-y-2">
          <li class="text-xs sm:text-sm">Menu Item 1</li>
          <li class="text-xs sm:text-sm">Menu Item 2</li>
          <li class="text-xs sm:text-sm">Menu Item 3</li>
        </ul>
      </div>
      <div class="w-full md:w-3/4 bg-purple-200 
                  p-3 sm:p-4 md:p-6 rounded-lg">
        <h2 class="text-sm sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
          Main Content
        </h2>
        <p class="text-xs sm:text- sm md:text-base">Responsive sidebar layout with main content area</p>
      </div>
    </div>
  </div>`,
    code: `const SidebarLayoutContainer = ({ 
    sidebar, 
    mainContent 
  }) => {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6">
          <div className="w-full md:w-1/4 bg-purple-100 p-3 sm:p-4 md:p-6 rounded-lg">
            {sidebar}
          </div>
          <div className="w-full md:w-3/4 bg-purple-200 p-3 sm:p-4 md:p-6 rounded-lg">
            {mainContent}
          </div>
        </div>
      </div>
    );
  };`,
    category: "containers",
  },
  {
    id: "card-container",
    title: "Responsive Card Container",
    description: "Adaptive container for card-based layouts",
    preview: `
  <div class="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
      <div class="bg-red-100 p-3 sm:p-4 md:p-6 rounded-lg shadow-md">
        <h3 class="text-sm sm:text-base md:text-lg font-semibold mb-2">Card 1</h3>
        <p class="text-xs sm:text-sm">Responsive card layout</p>
      </div>
      <div class="bg-red-200 p-3 sm:p-4 md:p-6 rounded-lg shadow-md">
        <h3 class="text-sm sm:text-base md:text-lg font-semibold mb-2">Card 2</h3>
        <p class="text-xs sm:text-sm">Adapts to different screen sizes</p>
      </div>
      <div class="bg-red-300 p-3 sm:p-4 md:p-6 rounded-lg shadow-md">
        <h3 class="text-sm sm:text-base md:text-lg font-semibold mb-2">Card 3</h3>
        <p class="text-xs sm:text-sm">Flexible card container</p>
      </div>
    </div>
  </div>`,
    code: `const CardContainer = ({ cards }) => {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={\`bg-red-\${(index + 1) * 100} 
                          p-3 sm:p-4 md:p-6 
                          rounded-lg shadow-md\`}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };`,
    category: "containers",
  },
];
