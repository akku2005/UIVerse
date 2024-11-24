export const iconsData = [
  {
    id: "responsive-icon-set",
    title: "Responsive Icon Set",
    description: "Adaptive and interactive icon collection",
    preview: `
  <div class="flex flex-wrap justify-center items-center 
              space-x-4 sm:space-x-6 md:space-x-8 
              p-4 bg-gray-50 rounded-lg">
    <div class="icon-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" 
           class="icon text-blue-500 hover:text-blue-700" 
           fill="none" viewBox="0 0 24 24" 
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </div>
    <div class="icon-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" 
           class="icon text-green-500 hover:text-green-700" 
           fill="none" viewBox="0 0 24 24" 
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="icon-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" 
           class="icon text-red-500 hover:text-red-700" 
           fill="none" viewBox="0 0 24 24" 
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
  </div>`,
    code: `import React from 'react';
  import { 
    HomeIcon, 
    CheckCircleIcon, 
    ExclamationIcon 
  } from '@heroicons/react/outline';
  
  const ResponsiveIconSet = () => {
    const icons = [
      { 
        Icon: HomeIcon, 
        color: 'text-blue-500', 
        hoverColor: 'hover:text-blue-700' 
      },
      { 
        Icon: CheckCircleIcon, 
        color: 'text-green-500', 
        hoverColor: 'hover:text-green-700' 
      },
      { 
        Icon: ExclamationIcon, 
        color: 'text-red-500', 
        hoverColor: 'hover:text-red-700' 
      }
    ];
  
    return (
      <div className="flex flex-wrap justify-center items-center 
                      space-x-4 sm:space-x-6 md:space-x-8 
                      p-4 bg-gray-50 rounded-lg">
        {icons.map(({ Icon, color, hoverColor }, index) => (
          <div key={index} className="icon-wrapper">
            <Icon 
              className={\`icon \${color} \${hoverColor}\`} 
            />
          </div>
        ))}
      </div>
    );
  };
  
  // Tailwind CSS Classes
  const iconStyles = \`
    .icon-wrapper {
      @apply transition-transform duration-300 
             transform hover:scale-110 
             cursor-pointer;
    }
    .icon {
      @apply w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12;
    }
  \`;
  
  export default ResponsiveIconSet;`,
    category: "icons",
  },
  {
    id: "interactive-icon-buttons",
    title: "Interactive Icon Buttons",
    description: "Responsive and animated icon buttons",
    preview: `
  <div class="flex justify-center items-center 
              space-x-4 sm:space-x-6 md:space-x-8 
              p-4 bg-gray-100 rounded-lg">
    <button class="icon-button group">
      <svg xmlns="http://www.w3.org/2000/svg" 
           class="icon-button-svg text-blue-500 
                  group-hover:text-blue-700" 
           fill="none" viewBox="0 0 24 24" 
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
    <button class="icon-button group">
      <svg xmlns="http://www.w3.org/2000/svg" 
           class="icon-button-svg text-green-500 
                  group-hover:text-green-700" 
           fill="none" viewBox="0 0 24 24" 
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </button>
  </div>`,
    code: `import React, { useState } from 'react';
  import { 
    HeartIcon, 
    PlusIcon 
  } from '@heroicons/react/outline';
  
  const InteractiveIconButtons = () => {
    const [liked, setLiked] = useState(false);
  
    const iconButtons = [
      {
        Icon: HeartIcon,
        defaultColor: 'text-blue-500',
        hoverColor: 'group-hover:text-blue-700',
        onClick: () => setLiked(!liked)
      },
      {
        Icon: PlusIcon,
        defaultColor: 'text-green-500',
        hoverColor: 'group-hover:text-green-700',
        onClick: () => {}
      }
    ];
  
    return (
      <div className="flex justify-center items-center 
                      space-x-4 sm:space-x-6 md:space-x-8 
                      p-4 bg-gray-100 rounded-lg">
        {iconButtons.map(({ Icon, defaultColor, hoverColor, onClick }, index) => (
          <button 
            key={index} 
            onClick={onClick}
            className="icon-button group"
          >
            <Icon 
              className={\`icon-button-svg \${defaultColor} \${hoverColor}\`}
            />
          </button>
        ))}
      </div>
    );
  };
  
  // Tailwind CSS Classes
  const buttonStyles = \`
    .icon -button {
      @apply p-2 sm:p-3 md:p-4 
             bg-gray-100 rounded-full 
             focus:outline-none 
             transition-all duration-300 
             transform hover:scale-110;
    }
    .icon-button-svg {
      @apply w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10;
    }
  \`;
  
  export default InteractiveIconButtons;`,
    category: "icons",
  },
  {
    id: "icon-grid",
    title: "Responsive Icon Grid",
    description: "Grid layout for displaying icons responsively",
    preview: `
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
              gap-4 p-4 bg-gray-100 rounded-lg">
    <div class="flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" 
           class="icon-grid-item text-purple-500" 
           fill="none" viewBox="0 0 24 24" 
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </div>
    <div class="flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" 
           class="icon-grid-item text-orange-500" 
           fill="none" viewBox="0 0 24 24" 
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M12 2l2.5 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7-5.5-4h7z" />
      </svg>
    </div>
    <div class="flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" 
           class="icon-grid-item text-teal-500" 
           fill="none" viewBox="0 0 24 24" 
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </div>
    <div class="flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" 
           class="icon-grid-item text-pink-500" 
           fill="none" viewBox="0 0 24 24" 
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M12 2l2.5 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7-5.5-4h7z" />
      </svg>
    </div>
  </div>`,
    code: `import React from 'react';
  import { 
    StarIcon, 
    LightningBoltIcon, 
    ShieldIcon, 
    HeartIcon 
  } from '@heroicons/react/outline';
  
  const ResponsiveIconGrid = () => {
    const icons = [
      { Icon: StarIcon, color: 'text-purple-500' },
      { Icon: LightningBoltIcon, color: 'text-orange-500' },
      { Icon: ShieldIcon, color: 'text-teal-500' },
      { Icon: HeartIcon, color: 'text-pink-500' },
    ];
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                      gap-4 p-4 bg-gray-100 rounded-lg">
        {icons.map(({ Icon, color }, index) => (
          <div key={index} className="flex justify-center items-center">
            <Icon className={\`icon-grid-item \${color}\`} />
          </div>
        ))}
      </div>
    );
  };
  
  // Tailwind CSS Classes
  const gridStyles = \`
    .icon-grid-item {
      @apply h-10 w-10;
    }
  \`;
  
  export default ResponsiveIconGrid;`,
    category: "icons",
  },
];
