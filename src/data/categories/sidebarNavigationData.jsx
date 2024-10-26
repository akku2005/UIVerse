// src/data/categories/sidebarNavigationData.js
export const sidebarNavigationData = [
  {
    id: "basic-sidebar",
    title: "Basic Sidebar",
    description: "A simple vertical sidebar with links.",
    category: "sidebar",
    preview: `
        <div class="w-64 h-screen bg-gray-800 text-white p-4">
          <h2 class="text-2xl font-bold mb-6">Menu</h2>
          <ul>
            <li class="mb-2"><a href="#" class="hover:text-gray-300">Dashboard</a></li>
            <li class="mb-2"><a href="#" class="hover:text-gray-300">Settings</a></li>
            <li class="mb-2"><a href="#" class="hover:text-gray-300">Profile</a></li>
          </ul>
        </div>
      `,
    code: `
    const BasicSidebar = () => (
      <div className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Dashboard</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Settings</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Profile</a></li>
        </ul>
      </div>
    );
      `,
  },
  {
    id: "collapsible-sidebar",
    title: "Collapsible Sidebar",
    description: "A sidebar that can collapse.",
    category: "sidebar",
    preview: `
        <div class="flex">
          <div id="sidebar" class="w-64 bg-blue-900 text-white p-4">
            <button class="mb-4" onclick="toggleSidebar()">Toggle</button>
            <ul>
              <li class="mb-2"><a href="#">Home</a></li>
              <li class="mb-2"><a href="#">Services</a></li>
            </ul>
          </div>
        </div>
        <script>
          function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.style.width = sidebar.style.width === '64px' ? '250px' : '64px';
          }
        </script>
      `,
    code: `
    const CollapsibleSidebar = () => {
      const [collapsed, setCollapsed] = React.useState(false);
      return (
        <div className="flex">
          <div
            style={{ width: collapsed ? '64px' : '250px' }}
            className="bg-blue-900 text-white p-4"
          >
            <button onClick={() => setCollapsed(!collapsed)} className="mb-4">
              Toggle
            </button>
            <ul>
              <li className="mb-2"><a href="#">Home</a></li>
              <li className="mb-2"><a href="#">Services</a></li>
            </ul>
          </div>
        </div>
      );
    };
      `,
  },
  {
    id: "sidebar-with-icons",
    title: "Sidebar with Icons",
    description: "Sidebar featuring icons next to links.",
    category: "sidebar",
    preview: `
        <div class="w-64 bg-gray-900 text-white p-4">
          <ul>
            <li class="flex items-center mb-2">
              <span class="material-icons mr-2">dashboard</span>
              <a href="#">Dashboard</a>
            </li>
            <li class="flex items-center mb-2">
              <span class="material-icons mr-2">settings</span>
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>
      `,
    code: `
    const SidebarWithIcons = () => (
      <div className="w-64 bg-gray-900 text-white p-4">
        <ul>
          <li className="flex items-center mb-2">
            <span className="material-icons mr-2">dashboard</span>
            <a href="#">Dashboard</a>
          </li>
          <li className="flex items-center mb-2">
            <span className="material-icons mr-2">settings</span>
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>
    );
      `,
  },
  {
    id: "hover-expand-sidebar",
    title: "Hover Expand Sidebar",
    description: "Sidebar expands when hovered.",
    category: "sidebar",
    preview: `
        <div class="w-20 bg-gray-800 h-screen hover:w-64 transition-all duration-300 p-4 text-white">
          <ul>
            <li class="mb-2">🏠 Home</li>
            <li class="mb-2">⚙️ Settings</li>
            <li class="mb-2">📧 Messages</li>
          </ul>
        </div>
      `,
    code: `
    const HoverExpandSidebar = () => (
      <div className="w-20 bg-gray-800 h-screen hover:w-64 transition-all duration-300 p-4 text-white">
        <ul>
          <li className="mb-2">🏠 Home</li>
          <li className="mb-2">⚙️ Settings</li>
          <li className="mb-2">📧 Messages</li>
        </ul>
      </div>
    );
      `,
  },
  {
    id: "gradient-sidebar",
    title: "Gradient Sidebar",
    description: "A sidebar with gradient background.",
    category: "sidebar",
    preview: `
        <div class="w-64 h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4">
          <ul>
            <li class="mb-2"><a href="#">Dashboard</a></li>
            <li class="mb-2"><a href="#">Analytics</a></li>
          </ul>
        </div>
      `,
    code: `
    const GradientSidebar = () => (
      <div className="w-64 h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4">
        <ul>
          <li className="mb-2"><a href="#">Dashboard</a></li>
          <li className="mb-2"><a href="#">Analytics</a></li>
        </ul>
      </div>
    );
      `,
  },
];
