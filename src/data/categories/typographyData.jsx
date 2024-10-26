// src/data/categories/typographyData.js
export const typographyData = [
  {
    id: "headings",
    title: "Headings",
    description: "Different heading styles",
    category: "typography",
    preview: `
        <div class="space-y-4">
          <h1 class="text-5xl font-bold text-gray-900">Heading 1 (text-5xl)</h1>
          <h2 class="text-4xl font-bold text-gray-900">Heading 2 (text-4xl)</h2>
          <h3 class="text-3xl font-bold text-gray-900">Heading 3 (text-3xl)</h3>
          <h4 class="text-2xl font-bold text-gray-900">Heading 4 (text-2xl)</h4>
          <h5 class="text-xl font-bold text-gray-900">Heading 5 (text-xl)</h5>
          <h6 class="text-lg font-bold text-gray-900">Heading 6 (text-lg)</h6>
        </div>
      `,
    code: `
  const Headings = () => {
    return (
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">Heading 1</h1>
        <h2 className="text-4xl font-bold text-gray-900">Heading 2</h2>
        <h3 className="text-3xl font-bold text-gray-900">Heading 3</h3>
        <h4 className="text-2xl font-bold text-gray-900">Heading 4</h4>
        <h5 className="text-xl font-bold text-gray-900">Heading 5</h5>
        <h6 className="text-lg font-bold text-gray-900">Heading 6</h6>
      </div>
    );
  };
      `,
  },
  {
    id: "paragraphs",
    title: "Paragraphs",
    description: "Different paragraph styles",
    category: "typography",
    preview: `
        <div class="space-y-6">
          <p class="text-base text-gray-700 leading-relaxed">
            Default paragraph with regular text size. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p class="text-sm text-gray-600 leading-relaxed">
            Smaller paragraph with lighter text. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p class="text-lg text-gray-800 leading-relaxed">
            Larger paragraph with darker text. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      `,
    code: `
  const Paragraphs = () => {
    return (
      <div className="space-y-6">
        <p className="text-base text-gray-700 leading-relaxed">
          Default paragraph with regular text size...
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Smaller paragraph with lighter text...
        </p>
        <p className="text-lg text-gray-800 leading-relaxed">
          Larger paragraph with darker text...
        </p>
      </div>
    );
  };
      `,
  },
  {
    id: "text-styles",
    title: "Text Styles",
    description: "Various text styling options",
    category: "typography",
    preview: `
        <div class="space-y-4">
          <p class="font-bold">Bold text</p>
          <p class="font-semibold">Semi-bold text</p>
          <p class="font-medium">Medium text</p>
          <p class="font-normal">Normal text</p>
          <p class="font-light">Light text</p>
          <p class="italic">Italic text</p>
          <p class="underline">Underlined text</p>
          <p class="line-through">Strikethrough text</p>
          <p class="uppercase">Uppercase text</p>
          <p class="lowercase">Lowercase text</p>
          <p class="capitalize">Capitalized text</p>
        </div>
      `,
    code: `
  const TextStyles = () => {
    return (
      <div className="space-y-4">
        <p className="font-bold">Bold text</p>
        <p className="font-semibold">Semi-bold text</p>
        <p className="font-medium">Medium text</p>
        <p className="font-normal">Normal text</p>
        <p className="font-light">Light text</p>
        <p className="italic">Italic text</p>
        <p className="underline">Underlined text</p>
        <p className="line-through">Strikethrough text</p>
        <p className="uppercase">Uppercase text</p>
        <p className="lowercase">Lowercase text</p>
        <p className="capitalize">Capitalized text</p>
      </div>
    );
  };
      `,
  },
  {
    id: "text-colors",
    title: "Text Colors",
    description: "Different text color variations",
    category: "typography",
    preview: `
        <div class="space-y-2">
          <p class="text-gray-900">Default dark text</p>
          <p class="text-gray-600">Secondary text</p>
          <p class="text-gray-400">Muted text</p>
          <p class="text-blue-600">Primary blue text</p>
          <p class="text-green-600">Success green text</p>
          <p class="text-red-600">Danger red text</p>
          <p class="text-yellow-600">Warning yellow text</p>
          <p class="text-purple-600">Purple text</p>
          <p class="text-indigo-600">Indigo text</p>
        </div>
      `,
    code: `
  const TextColors = () => {
    return (
      <div className="space-y-2">
        <p className="text-gray-900">Default dark text</p>
        <p className="text-gray-600">Secondary text</p>
        <p className="text-gray-400">Muted text</p>
        <p className="text-blue-600">Primary blue text</p>
        <p className="text-green-600">Success green text</p>
        <p className="text-red-600">Danger red text</p>
        <p className="text-yellow-600">Warning yellow text</p>
        <p className="text-purple-600">Purple text</p>
        <p className="text-indigo-600">Indigo text</p>
      </div>
    );
  };
      `,
  },
  {
    id: "links",
    title: "Links",
    description: "Different link styles",
    category: "typography",
    preview: `
        <div class="space-y-4">
          <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline">
            Default link style
          </a>
          <br/>
          <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">
            Subtle link with transition
          </a>
          <br/>
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-800 border-b-2 border-indigo-200 hover:border-indigo-600">
            Underline transition link
          </a>
          <br/>
           <a href="#" class="text-red-600 hover:text-red-800 hover:underline">
            Danger link
          </a>
        </div>
      `,
    code: `
  const Links = () => {
    return (
      <div className="space-y-4">
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          Default link style
        </a>
        <br/>
        <a 
          href="#" 
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          Subtle link with transition
        </a>
        <br/>
        <a 
          href="#" 
          className="font-medium text-indigo-600 hover:text-indigo-800 border-b-2 border-indigo-200 hover:border-indigo-600"
        >
          Underline transition link
        </a>
        <br/>
        <a 
          href="#" 
          className="text-red-600 hover:text-red-800 hover:underline"
        >
          Danger link
        </a>
      </div>
    );
  };
      `,
  },
];
