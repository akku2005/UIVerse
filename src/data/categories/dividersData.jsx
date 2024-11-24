export const dividersData = [
  {
    id: "basic-divider",
    title: "Basic Horizontal Divider",
    description: "Simple responsive horizontal line divider",
    preview: `
  <div class="w-full px-2 sm:px-4 md:px-6 lg:px-8">
    <div class="w-full h-[1px] sm:h-[2px] bg-gray-200"></div>
  </div>`,
    code: `const BasicDivider = () => {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full h-[1px] sm:h-[2px] bg-gray-200"></div>
      </div>
    );
  };`,
    category: "dividers",
  },
  {
    id: "text-divider",
    title: "Text Divider",
    description: "Responsive divider with centered text",
    preview: `
  <div class="w-full px-2 sm:px-4 md:px-6 lg:px-8 flex items-center">
    <div class="flex-grow h-[1px] sm:h-[2px] bg-gray-300"></div>
    <span class="px-2 sm:px-4 text-xs sm:text-sm text-gray-500">
      OR
    </span>
    <div class="flex-grow h-[1px] sm:h-[2px] bg-gray-300"></div>
  </div>`,
    code: `const TextDivider = ({ text = "OR" }) => {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 flex items-center">
        <div className="flex-grow h-[1px] sm:h-[2px] bg-gray-300"></div>
        <span className="px-2 sm:px-4 text-xs sm:text-sm text-gray-500">
          {text}
        </span>
        <div className="flex-grow h-[1px] sm:h-[2px] bg-gray-300"></div>
      </div>
    );
  };`,
    category: "dividers",
  },
  {
    id: "gradient-divider",
    title: "Gradient Divider",
    description: "Responsive divider with gradient effect",
    preview: `
  <div class="w-full px-2 sm:px-4 md:px-6 lg:px-8">
    <div class="w-full h-[2px] sm:h-[3px] 
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
    </div>
  </div>`,
    code: `const GradientDivider = () => {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full h-[2px] sm:h-[3px] 
                        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        </div>
      </div>
    );
  };`,
    category: "dividers",
  },
  {
    id: "icon-divider",
    title: "Icon Divider",
    description: "Responsive divider with centered icon",
    preview: `
  <div class="w-full px-2 sm:px-4 md:px-6 lg:px-8 flex items-center">
    <div class="flex-grow h-[1px] sm:h-[2px] bg-gray-300"></div>
    <div class="mx-2 sm:mx-4 text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" 
           class="h-4 w-4 sm:h-6 sm:w-6" 
           fill="none" viewBox="0 0 24 24" 
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <div class="flex-grow h-[1px] sm:h-[2px] bg-gray-300"></div>
  </div>`,
    code: `const IconDivider = ({ icon }) => {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 flex items-center">
        <div className="flex-grow h-[1px] sm:h-[2px] bg-gray-300"></div>
        <div className="mx-2 sm:mx-4 text-gray-500">
          {icon || (
            <svg xmlns="http://www.w3.org/2000/svg" 
                 className="h-4 w-4 sm:h-6 sm:w-6" 
                 fill="none" viewBox="0 0 24 24" 
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" 
                    stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )}
        </div>
        <div className="flex-grow h-[1px] sm:h-[2px] bg-gray-300"></div>
      </div>
    );
  };`,
    category: "dividers",
  },
  {
    id: "vertical-divider",
    title: "Vertical Divider",
    description: "Responsive vertical line divider",
    preview: `
  <div class="w-full px-2 sm:px-4 md:px-6 lg:px-8 flex justify-center">
    <div class="h-12 sm:h-16 md:h-20 w-[1px] sm:w-[2px] bg-gray-300"></div>
  </div>`,
    code: `const VerticalDivider = () => {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 flex justify-center">
        <div className="h-12 sm:h-16 md:h-20 w-[1px] sm:w-[2px] bg-gray-300"></div>
      </div>
    );
  };`,
    category: "dividers",
  },
  {
    id: "dashed-divider",
    title: "Dashed Divider",
    description: "Responsive dashed line divider",
    preview: `
  <div class="w-full px-2 sm:px-4 md:px-6 lg:px-8">
    <div class="w-full h-[1px] sm:h-[2px] 
                border-b-2 border-dashed border-gray-300">
    </div>
  </div>`,
    code: `const DashedDivider = () => {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full h-[1px] sm:h-[2px] 
                        border-b-2 border-dashed border-gray-300">
        </div>
      </div>
    );
  };`,
    category: "dividers",
  },
];
