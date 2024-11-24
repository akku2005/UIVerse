export const gridSystemData = [
  {
    id: "basic-grid",
    title: "Basic Grid",
    description: "Simple responsive grid layout",
    preview: `
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-blue-100 p-4 rounded">Column 1</div>
    <div class="bg-blue-200 p-4 rounded">Column 2</div>
    <div class="bg-blue-300 p-4 rounded">Column 3</div>
  </div>`,
    code: `const BasicGrid = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded">Column 1</div>
        <div className="bg-blue-200 p-4 rounded">Column 2</div>
        <div className="bg-blue-300 p-4 rounded">Column 3</div>
      </div>
    );
  };`,
    category: "grid",
  },
  {
    id: "responsive-grid",
    title: "Responsive Grid",
    description: "Grid that changes column layout based on screen size",
    preview: `
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div class="bg-green-100 p-4 rounded">Item 1</div>
    <div class="bg-green-200 p-4 rounded">Item 2</div>
    <div class="bg-green-300 p-4 rounded">Item 3</div>
    <div class="bg-green-400 p-4 rounded">Item 4</div>
    <div class="bg-green-500 p-4 rounded">Item 5</div>
    <div class="bg-green-600 p-4 rounded">Item 6</div>
  </div>`,
    code: `const ResponsiveGrid = ({ items }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={\`p-4 rounded bg-green-\${(index + 1) * 100}\`}
          >
            {item}
          </div>
        ))}
      </div>
    );
  };`,
    category: "grid",
  },
  {
    id: "auto-fit-grid",
    title: "Auto-Fit Grid",
    description: "Grid with automatic column sizing",
    preview: `
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div class="bg-purple-100 p-4 rounded">Responsive Card 1</div>
    <div class="bg-purple-200 p-4 rounded">Responsive Card 2</div>
    <div class="bg-purple-300 p-4 rounded">Responsive Card 3</div>
    <div class="bg-purple-400 p-4 rounded">Responsive Card 4</div>
  </div>`,
    code: `const AutoFitGrid = ({ cards }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={\`p-4 rounded bg-purple-\${(index + 1) * 100}\`}
          >
            {card}
          </div>
        ))}
      </div>
    );
  };`,
    category: "grid",
  },
  {
    id: "masonry-grid",
    title: "Masonry Grid",
    description: "Grid with variable height columns",
    preview: `
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-red-100 p-4 rounded h-32">Short Item 1</div>
    <div class="bg-red-200 p-4 rounded h-48">Tall Item 2</div>
    <div class="bg-red-300 p-4 rounded h-40">Medium Item 3</div>
    <div class="bg-red-400 p-4 rounded h-56">Very Tall Item 4</div>
    <div class="bg-red-500 p-4 rounded h-24">Very Short Item 5</div>
  </div>`,
    code: `const MasonryGrid = ({ items }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={\`p-4 rounded bg-red-\${(index + 1) * 100} 
              \${getRandomHeight()}\`}
          >
            {item}
          </div>
        ))}
      </div>
    );
  
    function getRandomHeight() {
      const heights = ['h-24', 'h-32', 'h-40', 'h-48', 'h-56'];
      return heights[Math.floor(Math.random() * heights.length)];
    }
  };`,
    category: "grid",
  },
  {
    id: "asymmetric-grid",
    title: "Asymmetric Grid",
    description: "Grid with different column spans",
    preview: `
  <div class="grid grid-cols-4 gap-4">
    <div class="bg-yellow-100 p-4 rounded col-span-2 row-span-2">Wide Item 1</div>
    <div class="bg-yellow-200 p-4 rounded">Item 2</div>
    <div class="bg-yellow-300 p-4 rounded">Item 3</div>
    <div class="bg-yellow-400 p-4 rounded col-span-2">Wide Item 4</div>
    <div class="bg-yellow-500 p-4 rounded">Item 5</div>
  </div>`,
    code: `const AsymmetricGrid = ({ items }) => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => {
          const columnSpan = index % 3 === 0 ? 'col-span-2' : '';
          const rowSpan = index % 4 === 0 ? 'row-span-2' : '';
          
          return (
            <div 
              key={index} 
              className={\`p-4 rounded bg-yellow-\${(index + 1) * 100} 
                \${columnSpan} \${rowSpan}\`}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  };`,
    category: "grid",
  },
];
