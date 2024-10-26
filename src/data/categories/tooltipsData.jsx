// src/data/categories/tooltipsData.js
export const tooltipsData = [
  {
    id: "basic-tooltip",
    title: "Basic Tooltip",
    description: "Simple tooltip with text on hover.",
    category: "tooltips",
    preview: `
          <div class="relative group inline-block">
            <button class="px-4 py-2 bg-blue-600 text-white rounded">
              Hover me
            </button>
            <div class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-gray-700 text-white text-center text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Basic Tooltip
            </div>
          </div>
        `,
    code: `
    const BasicTooltip = () => {
      return (
        <div className="relative group inline-block">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Hover me
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-gray-700 text-white text-center text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Basic Tooltip
          </div>
        </div>
      );
    };
        `,
  },
  {
    id: "tooltip-with-icon",
    title: "Tooltip with Icon",
    description: "Tooltip displaying an icon with text.",
    category: "tooltips",
    preview: `
          <div class="relative group inline-block">
            <button class="px-4 py-2 bg-blue-600 text-white rounded">
              <svg class="h-5 w-5 inline" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18a8 8 0 110-16 8 8 0 010 16zm-.67-5.89H9V9h1.33v3.11zm0-4.33H9V5h1.33v1.78z" />
              </svg>
              Info
            </button>
            <div class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-gray-700 text-white text-center text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              This is additional information.
            </div>
          </div>
        `,
    code: `
    const TooltipWithIcon = () => {
      return (
        <div className="relative group inline-block">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            <svg className="h-5 w-5 inline" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18a8 8 0 110-16 8 8 0 010 16zm-.67-5.89H9V9h1.33v3.11zm0-4.33H9V5h1.33v1.78z" />
            </svg>
            Info
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-gray-700 text-white text-center text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            This is additional information.
          </div>
        </div>
      );
    };
        `,
  },
  {
    id: "tooltip-on-click",
    title: "Tooltip on Click",
    description: "Tooltip that appears when clicked.",
    category: "tooltips",
    preview: `
          <div class="relative inline-block">
            <button onclick="toggleTooltip(event)" class="px-4 py-2 bg-blue-600 text-white rounded">
              Click me
            </button>
            <div id="click-tooltip" class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-700 text-white text-center text-sm rounded p-2 hidden">
              Clicked Tooltip
            </div>
          </div>
          <script>
            function toggleTooltip(event) {
              const tooltip = document.getElementById('click-tooltip');
              tooltip.classList.toggle('hidden');
            }
          </script>
        `,
    code: `
    const TooltipOnClick = () => {
      const [visible, setVisible] = React.useState(false);
  
      const toggleTooltip = () => {
        setVisible(!visible);
      };
  
      return (
        <div className="relative inline-block">
          <button onClick={toggleTooltip} className="px-4 py-2 bg-blue-600 text-white rounded">
            Click me
          </button>
          {visible && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-700 text-white text-center text-sm rounded p-2">
              Clicked Tooltip
            </div>
          )}
        </div>
      );
    };
        `,
  },
  {
    id: "tooltip-with-delay",
    title: "Tooltip with Delay",
    description: "Tooltip that appears with a delay.",
    category: "tooltips",
    preview: `
          <div class="relative group inline-block">
            <button class="px-4 py-2 bg-blue-600 text-white rounded">
              Hover me
            </button>
            <div class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-gray-700 text-white text-center text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-500">
              Tooltip with delay
            </div>
          </div>
        `,
    code: `
    const TooltipWithDelay = () => {
      return (
        <div className="relative group inline-block">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Hover me
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-gray-700 text-white text-center text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-500">
            Tooltip with delay
          </div>
        </div>
      );
    };
        `,
  },
  {
    id: "responsive-tooltip",
    title: "Responsive Tooltip",
    description: "Tooltip that adjusts its position based on viewport.",
    category: "tooltips",
    preview: `
          <div class="relative group inline-block">
            <button class="px-4 py-2 bg-blue-600 text-white rounded">
              Hover me
            </button>
            <div class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-gray-700 text-white text-center text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 tooltip-responsive">
              Responsive Tooltip
            </div>
          </div>
        `,
    code: `
    const ResponsiveTooltip = () => {
      return (
        <div className="relative group inline-block">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Hover me
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-gray-700 text-white text-center text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 tooltip-responsive">
            Responsive Tooltip
          </div>
        </div>
      );
    };
        `,
  },
];
