// src/data/categories/alertData.js
export const alertData = [
  {
    id: "basic-alerts",
    title: "Basic Alerts",
    description: "Simple alert messages with different styles",
    category: "alerts",
    preview: `
        <div class="space-y-4">
          <div class="p-4 rounded-md bg-blue-50 text-blue-800">
            <p>Info alert - A simple info alert message</p>
          </div>
  
          <div class="p-4 rounded-md bg-green-50 text-green-800">
            <p>Success alert - A simple success alert message</p>
          </div>
  
          <div class="p-4 rounded-md bg-yellow-50 text-yellow-800">
            <p>Warning alert - A simple warning alert message</p>
          </div>
  
          <div class="p-4 rounded-md bg-red-50 text-red-800">
            <p>Error alert - A simple error alert message</p>
          </div>
        </div>
      `,
    code: `
  const Alert = ({ children, type = 'info' }) => {
    const types = {
      info: 'bg-blue-50 text-blue-800',
      success: 'bg-green-50 text-green-800',
      warning: 'bg-yellow-50 text-yellow-800',
      error: 'bg-red-50 text-red-800',
    };
  
    return (
      <div className={\`p-4 rounded-md \${types[type]}\`}>
        <p>{children}</p>
      </div>
    );
  };
      `,
  },
  {
    id: "alerts-with-icons",
    title: "Alerts with Icons",
    description: "Alert messages with icons",
    category: "alerts",
    preview: `
        <div class="space-y-4">
          <div class="p-4 rounded-md bg-blue-50 flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Information</h3>
              <p class="mt-2 text-sm text-blue-700">This is an info message with an icon.</p>
            </div>
          </div>
  
          <div class="p-4 rounded-md bg-green-50 flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">Success</h3>
              <p class="mt-2 text-sm text-green-700">This is a success message with an icon.</p>
            </div>
          </div>
  
          <div class="p-4 rounded-md bg-yellow-50 flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-yellow-800">Warning</h3>
              <p class="mt-2 text-sm text-yellow-700">This is a warning message with an icon.</p>
            </div>
          </div>
  
          <div class="p-4 rounded-md bg-red-50 flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">Error</h3>
              <p class="mt-2 text-sm text-red-700">This is an error message with an icon.</p>
            </div>
          </div>
        </div>
      `,
    code: `
  const AlertWithIcon = ({ title, message, type = 'info' }) => {
    const types = {
      info: {
        bg: 'bg-blue-50',
        icon: 'text-blue-400',
        title: 'text-blue-800',
        text: 'text-blue-700',
        svg: <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      },
      success: {
        bg: 'bg-green- 50',
        icon: 'text-green-400',
        title: 'text-green-800',
        text: 'text-green-700',
        svg: <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      },
      warning: {
        bg: 'bg-yellow-50',
        icon: 'text-yellow-400',
        title: 'text-yellow-800',
        text: 'text-yellow-700',
        svg: <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      },
      error: {
        bg: 'bg-red-50',
        icon: 'text-red-400',
        title: 'text-red-800',
        text: 'text-red-700',
        svg: <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      }
    };
  
    return (
      <div className={\`p-4 rounded-md flex \${types[type].bg}\`}>
        <div className="flex-shrink-0">
          <svg className={\`h-5 w-5 \${types[type].icon}\`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            {types[type].svg}
          </svg>
        </div>
        <div className="ml-3">
          <h3 className={\`text-sm font-medium \${types[type].title}\`}>{title}</h3>
          <p className={\`mt-2 text-sm \${types[type].text}\`}>{message}</p>
        </div>
      </div>
    );
  };
      `,
  },
];
