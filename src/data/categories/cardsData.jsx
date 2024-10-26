// src/data/categories/cardsData.js
export const cardsData = [
  {
    id: 1,
    title: "Card Title 1",
    description: "A clean and simple card design with a shadow effect.",
    image: "https://picsum.photos/id/1015/300/150", // Random image
    preview: `
        <div class="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <img src="https://picsum.photos/id/1015/300/150" alt="Card Image" class="rounded-lg mb-2">
          <h2 class="font-bold text-xl mb-2">Card Title 1</h2>
          <p>This card features a simple layout with a clean look.</p>
        </div>
      `,
    category: "cards",
  },
  {
    id: 2,
    title: "Card Title 2",
    description: "A card with a colored header and a subtle border.",
    image: "https://picsum.photos/id/1016/300/150", // Random image
    preview: `
        <div class="bg-white border-l-4 border-blue-500 rounded-lg p-4 transition-all duration-300 hover:bg-blue-100">
          <img src="https://picsum.photos/id/1016/300/150" alt="Card Image" class="rounded-lg mb-2">
          <h2 class="font-bold text-xl text-blue-500 mb-1">Card Title 2</h2>
          <p>This card uses a colored border to highlight its importance.</p>
        </div>
      `,
    category: "cards",
  },
  {
    id: 3,
    title: "Card Title 3",
    description: "A card featuring an image at the top.",
    image: "https://picsum.photos/id/1018/300/150", // Random image
    preview: `
        <div class="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:rotate-1">
          <img src="https://picsum.photos/id/1018/300/150" alt="Card Image" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="font-bold text-xl">Card Title 3</h2>
            <p>This card includes an image to grab attention.</p>
          </div>
        </div>
      `,
    category: "cards",
  },
  {
    id: 4,
    title: "Card Title 4",
    description: "A card with a gradient background.",
    image: "https://picsum.photos/id/1019/300/150", // Random image
    preview: `
        <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-6 transition-all duration-300 hover:opacity-80">
          <img src="https://picsum.photos/id/1019/300/150" alt="Card Image" class="rounded-lg mb-2">
          <h2 class="font-bold text-xl">Card Title 4</h2>
          <p>This card features a beautiful gradient background.</p>
        </div>
      `,
    category: "cards",
  },
  {
    id: 5,
    title: "Card Title 5",
    description: "A card with an icon to represent its purpose.",
    image: "https://picsum.photos/id/1020/300/150", // Random image
    preview: `
        <div class="bg-white shadow-md rounded-lg p-4 flex items-center transition-transform transform hover:-translate-y-1">
          <div class="text-blue-500 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" viewBox="0 0 24 24"><path d="M12 0a12 12 0 100 24 12 12 0 000-24zm2 17.414L11.586 15 14 12.586 10.414 9 8 11.414 12 15.414l2-2 2.414 2.414z"/></svg>
          </div>
          <div>
            <img src="https://picsum.photos/id/1020/300/150" alt="Card Image" class="rounded-lg mb-2">
            <h2 class="font-bold text-xl">Card Title 5</h2>
            <p>This card includes an icon to visually represent the content.</p>
          </div>
        </div>
      `,
    category: "cards",
  },
  {
    id: 6,
    title: "Card Title 6",
    description: "A card with a hover effect and transition.",
    image: "https://picsum.photos/id/1021/300/150", // Random image
    preview: `
        <div class="bg-white rounded-lg p-4 transition-transform transform hover:scale-110 shadow-md">
          <img src="https://picsum.photos/id/1021/300/150" alt="Card Image" class="rounded-lg mb-2">
          <h2 class="font-bold text-xl">Card Title 6</h2>
          <p>Hover over this card to see the scaling effect.</p>
        </div>
      `,
    category: "cards",
  },
  {
    id: 7,
    title: "Card Title 7",
    description: "A card with an image overlay effect.",
    image: "https://picsum.photos/id/1022/300/150", // Random image
    preview: `
        <div class="relative rounded-lg overflow-hidden shadow-md">
          <img src="https://picsum.photos/id/1022/300/150" alt="Card Image" class="w-full h-48 object-cover">
          <div class="absolute inset-0 bg-black opacity-50 flex items-center justify-center transition-opacity duration-300 hover:opacity-30">
            <h2 class="text-white font-bold text-xl">Card Title 7</h2>
          </div>
        </div>
      `,
    category: "cards",
  },
  {
    id: 8,
    title: "Card Title 8",
    description: "A card with a list of features.",
    image: "https://picsum.photos/id/1023/300/150", // Random image
    preview: `
        <div class="bg-white rounded-lg p-4 shadow-md transition-transform transform hover:translate-x-1 hover:translate-y-1">
          <img src="https://picsum.photos/id/1023/300/150" alt="Card Image" class="rounded-lg mb-2">
          <h2 class="font-bold text-xl mb-2">Card Title 8</h2>
          <ul class="list-disc list-inside">
            <li>Feature One</li>
            <li>Feature Two</li>
            <li>Feature Three</li>
          </ul>
        </div>
      `,
    category: "cards",
  },
  {
    id: 9,
    title: "Card Title 9",
    description: "A card with a background image and overlay text.",
    image: "https://picsum.photos/id/1024/300/150", // Random image
    preview: `
        <div class="relative rounded-lg overflow-hidden shadow-md">
          <img src="https://picsum.photos/id/1024/300/150" alt="Card Image" class="w-full h-48 object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 hover:bg-opacity-20">
            <h2 class="text-white font-bold text-xl">Card Title 9</h2>
          </div>
        </div>
      `,
    category: "cards",
  },
  {
    id: 10,
    title: "Card Title 10",
    description: "A card styled with a border radius and shadow.",
    image: "https://picsum.photos/id/1025/300/150", // Random image
    preview: `
        <div class="bg-white border-2 border-gray-200 rounded-lg shadow-md p-4 transition-all duration-300 hover:bg-gray-100">
          <img src="https://picsum.photos/id/1025/300/150" alt="Card Image" class="rounded-lg mb-2">
          <h2 class="font-bold text-xl">Card Title 10</h2>
          <p>This card uses a border for a unique style.</p>
        </div>
      `,
    category: "cards",
  },
  {
    id: 11,
    title: "Card Title 11",
    description: "A vertical card with different colored sections.",
    image: "https://picsum.photos/id/1026/300/150", // Random image
    preview: `
        <div class="bg-white rounded-lg shadow-md">
          <div class="bg-blue-500 text-white p-4 rounded-t-lg">
            <h2 class="font-bold text-xl">Card Title 11</h2>
          </div>
          <div class="p-4 transition-transform transform hover:scale-105">
            <img src="https://picsum.photos/id/1026/300/150" alt="Card Image" class="rounded-lg mb-2">
            <p>This card has a blue header with a clean layout.</p>
          </div>
        </div>
      `,
    category: "cards",
  },
  {
    id: 12,
    title: "Card Title 12",
    description: "A card with a hover color change.",
    image: "https://picsum.photos/id/1027/300/150", // Random image
    preview: `
        <div class="bg-white shadow-md rounded-lg p-4 transition-colors duration-300 hover:bg-gray-300">
          <img src="https://picsum.photos/id/1027/300/150" alt="Card Image" class="rounded-lg mb-2">
          <h2 class="font-bold text-xl">Card Title 12</h2>
          <p>Hovering changes the background color of this card.</p>
        </div>
      `,
    category: "cards",
  },
  {
    id: 13,
    title: "Card Title 13",
    description: "A card with a lifting shadow effect.",
    image: "https://picsum.photos/id/1028/300/150", // Random image
    preview: `
        <div class="bg-white rounded-lg p-4 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
          <img src="https://picsum.photos/id/1028/300/150" alt="Card Image" class="rounded-lg mb-2">
          <h2 class="font-bold text-xl">Card Title 13</h2>
          <p>On hover, this card's shadow gets deeper.</p>
        </div>
      `,
    category: "cards",
  },
  {
    id: 14,
    title: "Card Title 14",
    description: "A card with a fixed image and description.",
    image: "https://picsum.photos/id/1029/300/150", // Random image
    preview: `
        <div class="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-110">
          <img src="https://picsum.photos/id/1029/300/150" alt="Card Image" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="font-bold text-xl">Card Title 14</h2>
            <p>This card maintains a fixed image and highlights text.</p>
          </div>
        </div>
      `,
    category: "cards",
  },
  {
    id: 15,
    title: "Card Title 15",
    description: "A card with detailed layout and icons.",
    image: "https://picsum.photos/id/1030/300/150", // Random image
    preview: `
        <div class="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:bg-gray-100">
          <img src="https://picsum.photos/id/1030/300/150" alt="Card Image" class="rounded-lg mb-2">
          <div class="flex items-center">
            <div class="text-blue-500 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" viewBox="0 0 24 24"><path d="M12 0a12 12 0 100 24 12 12 0 000-24zm2 17.414L11.586 15 14 12.586 10.414 9 8 11.414 12 15.414l2-2 2.414 2.414z"/></svg>
            </div>
            <h2 class="font-bold text-xl">Card Title 15</h2>
          </div>
          <p>This card includes an icon with a detailed description.</p>
        </div>
      `,
    category: "cards",
  },
];
