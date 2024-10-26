export const tablesData = [
  {
    id: "basic-table",
    title: "Basic Table",
    description: "Simple table with minimal styling",
    category: "tables",
    preview: `
        <table class="min-w-full text-sm">
          <thead>
            <tr>
              <th class="px-4 py-2 text-left">Name</th>
              <th class="px-4 py-2 text-left">Email</th>
              <th class="px-4 py-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">John Doe</td>
              <td class="px-4 py-2">john@example.com</td>
              <td class="px-4 py-2">Admin</td>
            </tr>
            <tr>
              <td class="px-4 py-2">Jane Smith</td>
              <td class="px-4 py-2">jane@example.com</td>
              <td class="px-4 py-2">User</td>
            </tr>
          </tbody>
        </table>
      `,
    code: `
    const BasicTable = ({ headers, data }) => {
      return (
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={header} className="px-4 py-2 text-left">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    };
      `,
  },
  {
    id: "striped-table",
    title: "Striped Table",
    description: "Table with alternating row colors",
    category: "tables",
    preview: `
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left">
            <thead class="text-xs uppercase bg-gray-50">
              <tr>
                <th class="px-6 py-3">Product</th>
                <th class="px-6 py-3">Price</th>
                <th class="px-6 py-3">Stock</th>
                <th class="px-6 py-3">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="px-6 py-4">MacBook Pro</td>
                <td class="px-6 py-4">$1299</td>
                <td class="px-6 py-4">50</td>
                <td class="px-6 py-4">Electronics</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-6 py-4">iPhone 13</td>
                <td class="px-6 py-4">$999</td>
                <td class="px-6 py-4">100</td>
                <td class="px-6 py-4">Electronics</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    code: `
    const StripedTable = ({ headers, data }) => {
      return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-50">
              <tr>
                {headers.map((header, index) => (
                  <th key={header} className="px-6 py-3">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
      `,
  },
  {
    id: "bordered-table",
    title: "Bordered Table",
    description: "Table with borders and hover effects",
    category: "tables",
    preview: `
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left border-collapse border border-slate-400">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 border border-slate-300">Product</th>
                <th class="px-6 py-3 border border-slate-300">Price</th>
                <th class="px-6 py-3 border border-slate-300">Stock</th>
                <th class="px-6 py-3 border border-slate-300">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 border border-slate-300">MacBook Pro</td>
                <td class="px-6 py-4 border border-slate-300">$1299</td>
                <td class="px-6 py-4 border border-slate-300">50</td>
                <td class="px-6 py-4 border border-slate-300">Electronics</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 border border-slate-300">iPhone 13</td>
                <td class="px-6 py-4 border border-slate-300">$999</td>
                <td class="px-6 py-4 border border-slate-300">100</td>
                <td class="px-6 py-4 border border-slate-300">Electronics</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    code: `
    const BorderedTable = ({ headers, data }) => {
      return (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse border border-slate-400">
            <thead className="bg-gray-50">
              <tr>
                {headers.map((header, index) => (
                  <th key={header} className="px-6 py-3 border border-slate-300">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50">
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4 border border-slate-300">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
      `,
  },
  {
    id: "hoverable-table",
    title: "Hoverable Table",
    description: "Table that highlights rows on hover",
    category: "tables",
    preview: `
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left">
          <thead class="text-xs uppercase bg-gray-50">
            <tr>
              <th class="px-6 py-3">Task</th>
              <th class="px-6 py-3">Due Date</th>
              <th class="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-100">
              <td class="px-6 py-4">Design Mockups</td>
              <td class="px-6 py-4">2024-10-30</td>
              <td class="px-6 py-4">In Progress</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="px-6 py-4">Develop API</td>
              <td class="px-6 py-4">2024-11-05</td>
              <td class="px-6 py-4">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    code: `
    const HoverableTable = ({ headers, data }) => {
      return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-50">
              <tr>
                {headers.map((header, index) => (
                  <th key={header} className="px-6 py-3">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-100">
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    `,
  },
  {
    id: "responsive-table",
    title: "Responsive Table",
    description: "Table that adapts to screen size",
    category: "tables",
    preview: `
      <div class="relative overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead>
            <tr>
              <th class="px-4 py-2">Item</th>
              <th class="px-4 py-2">Details</th>
              <th class="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">Item 1</td>
              <td class="px-4 py-2">Description of item 1</td>
              <td class="px-4 py-2">
                <button class="text-blue-500">Edit</button>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-2">Item 2</td>
              <td class="px-4 py-2">Description of item 2</td>
              <td class="px-4 py-2">
                <button class="text-blue-500">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    code: `
    const ResponsiveTable = ({ headers, data }) => {
      return (
        <div className="relative overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={header} className="px-4 py-2">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    `,
  },
  {
    id: "pagination-table",
    title: "Pagination Table",
    description: "Table with pagination controls",
    category: "tables",
    preview: `
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left">
          <thead class="text-xs uppercase bg-gray-50">
            <tr>
              <th class="px-6 py-3">Name</th>
              <th class="px-6 py-3">Date</th>
              <th class="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-6 py-4">John Doe</td>
              <td class="px-6 py-4">2024-10-01</td>
              <td class="px-6 py-4">Completed</td>
            </tr>
            <tr>
              <td class="px-6 py-4">Jane Smith</td>
              <td class="px-6 py-4">2024-10-05</td>
              <td class="px-6 py-4">Pending</td>
            </tr>
          </tbody>
        </table>
        <div class="mt-2">
          <button class="bg-blue-500 text-white px-4 py-2">Previous</button>
          <button class="bg-blue-500 text-white px-4 py-2">Next</button>
        </div>
      </div>
    `,
    code: `
    const PaginationTable = ({ headers, data, onPageChange }) => {
      return (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-50">
              <tr>
                {headers.map((header, index) => (
                  <th key={header} className="px-6 py-3">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-2">
            <button className="bg-blue-500 text-white px-4 py-2" onClick={() => onPageChange(-1)}>Previous</button>
            <button className="bg-blue-500 text-white px-4 py-2" onClick={() => onPageChange(1)}>Next</button>
          </div>
        </div>
      );
    };
    `,
  },
  {
    id: "icon-table",
    title: "Icon Table",
    description: "Table with icons in the cells",
    category: "tables",
    preview: `
      <div class="relative overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead>
            <tr>
              <th class="px-4 py-2">Feature</th>
              <th class="px-4 py-2">Enabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">Notifications</td>
              <td class="px-4 py-2"><span class="text-green-500">✔️</span></td>
            </tr>
            <tr>
              <td class="px-4 py-2">Dark Mode</td>
              <td class="px-4 py-2"><span class="text-red-500">❌</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    code: `
    const IconTable = ({ headers, data }) => {
      return (
        <div className="relative overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={header} className="px-4 py-2">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    `,
  },
];
