export const spacingData = [
  {
    id: "basic-margin",
    title: "Basic Margin Spacing",
    description: "Responsive margin application",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6">
    <div class="bg-blue-100 p-4">
      <div class="bg-blue-200 m-2 sm:m-4 md:m-6 p-4">
        Responsive Margin
      </div>
    </div>
  </div>`,
    code: `const BasicMargin = () => {
    return (
      <div className="bg-blue-100 p-4">
        <div className="bg-blue-200 m-2 sm:m-4 md:m-6 p-4">
          Responsive Margin
        </div>
      </div>
    );
  };`,
    category: "spacing",
  },
  {
    id: "responsive-padding",
    title: "Responsive Padding",
    description: "Adaptive padding across different screen sizes",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6">
    <div class="bg-green-100 p-2 sm:p-4 md:p-6 lg:p-8">
      <div class="bg-green-200 text-center">
        Adaptive Padding
      </div>
    </div>
  </div>`,
    code: `const ResponsivePadding = () => {
    return (
      <div className="bg-green-100 p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="bg-green-200 text-center">
          Adaptive Padding
        </div>
      </div>
    );
  };`,
    category: "spacing",
  },
  {
    id: "gap-spacing",
    title: "Responsive Gap Spacing",
    description: "Flexible gap between elements",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6">
    <div class="flex flex-col gap-2 sm:gap-4 md:gap-6">
      <div class="bg-purple-100 p-4">Item 1</div>
      <div class="bg-purple-200 p-4">Item 2</div>
      <div class="bg-purple-300 p-4">Item 3</div>
    </div>
  </div>`,
    code: `const GapSpacing = () => {
    return (
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        <div className="bg-purple-100 p-4">Item 1</div>
        <div className="bg-purple-200 p-4">Item 2</div>
        <div className="bg-purple-300 p-4">Item 3</div>
      </div>
    );
  };`,
    category: "spacing",
  },
  {
    id: "grid-spacing",
    title: "Responsive Grid Spacing",
    description: "Adaptive grid layout with responsive gaps",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                gap-2 sm:gap-4 md:gap-6">
      <div class="bg-red-100 p-2 sm:p-4">Grid Item 1</div>
      <div class="bg-red-200 p-2 sm:p-4">Grid Item 2</div>
      <div class="bg-red-300 p-2 sm:p-4">Grid Item 3</div>
      <div class="bg-red-400 p-2 sm:p-4">Grid Item 4</div>
    </div>
  </div>`,
    code: `const ResponsiveGridSpacing = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                      gap-2 sm:gap-4 md:gap-6">
        <div className="bg-red-100 p-2 sm:p-4">Grid Item 1</div>
        <div className="bg-red-200 p-2 sm:p-4">Grid Item 2</div>
        <div className="bg-red-300 p-2 sm:p-4">Grid Item 3</div>
        <div className="bg-red-400 p-2 sm:p-4">Grid Item 4</div>
      </div>
    );
  };`,
    category: "spacing",
  },
  {
    id: "flex-spacing",
    title: "Responsive Flex Spacing",
    description: "Adaptive flex layout with responsive spacing",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6">
    <div class="flex flex-col sm:flex-row 
                space-y-2 sm:space-y-0 sm:space-x-2 
                md:space-x-4">
      <div class="bg-yellow-100 p-4 flex-1">Flex Item 1</div>
      <div class="bg-yellow-200 p-4 flex-1">Flex Item 2</div>
      <div class="bg-yellow-300 p-4 flex-1">Flex Item 3</div>
    </div>
  </div>`,
    code: `const ResponsiveFlexSpacing = () => {
    return (
      <div className="flex flex-col sm:flex-row 
                      space-y-2 sm:space-y-0 sm:space-x-2 
                      md:space-x-4">
        <div className="bg-yellow-100 p-4 flex-1">Flex Item 1</div>
        <div className="bg-yellow-200 p-4 flex-1">Flex Item 2</div>
        <div className="bg-yellow-300 p-4 flex-1">Flex Item 3</div>
      </div>
    );
  };`,
    category: "spacing",
  },
  {
    id: "responsive-stack",
    title: "Responsive Stack Spacing",
    description: "Adaptive stacked layout with responsive margins",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6">
    <div class="space-y-2 sm:space-y-4 md:space-y-6">
      <div class="bg-indigo-100 p-3 sm:p-4 md:p-5">
        Stack Item 1
      </div>
      <div class="bg-indigo-200 p-3 sm:p-4 md:p-5">
        Stack Item 2
      </div>
      <div class="bg-indigo-300 p-3 sm:p-4 md:p-5">
        Stack Item 3
      </div>
    </div>
  </div>`,
    code: `const ResponsiveStackSpacing = () => {
    return (
      <div className="space-y-2 sm:space-y-4 md:space-y-6">
        <div className="bg-indigo-100 p-3 sm:p-4 md:p-5">
          Stack Item 1
        </div>
        <div className="bg-indigo-200 p-3 sm:p-4 md:p-5">
          Stack Item 2
        </div>
        <div className="bg-indigo-300 p-3 sm:p-4 md:p-5">
          Stack Item 3
        </div>
      </div>
    );
  };`,
    category: "spacing",
  },
];
