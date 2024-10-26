// src/data/categories/progressBarData.js
export const progressBarData = [
  {
    id: "basic-progress",
    title: "Basic Progress Bars",
    description: "Simple progress bars with different styles",
    category: "progress",
    preview: `
  <div class="space-y-4">
    <!-- Basic Progress Bar -->
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
    </div>
  
    <!-- Progress Bar with Label -->
    <div class="w-full">
      <div class="flex justify-between mb-1">
        <span class="text-sm font-medium text-gray-700">Progress</span>
        <span class="text-sm font-medium text-gray-700">65%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div class="bg-green-600 h-2.5 rounded-full" style="width: 65%"></div>
      </div>
    </div>
  
    <!-- Large Progress Bar -->
    <div class="w-full bg-gray-200 rounded-full h-4">
      <div class="bg-purple-600 h-4 rounded-full" style="width: 75%"></div>
    </div>
  </div>`,
    code: `
  const ProgressBar = ({ progress, height = "h-2.5", color = "bg-blue-600", showLabel = false }) => {
    return (
      <div className="w-full">
        {showLabel && (
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">{progress}%</span>
          </div>
        )}
        <div className={\`w-full bg-gray-200 rounded-full \${height}\`}>
          <div 
            className={\`\${color} \${height} rounded-full transition-all duration-300\`}
            style={{ width: \`\${progress}%\` }}
          ></div>
        </div>
      </div>
    );
  };`,
  },
  {
    id: "colored-progress",
    title: "Colored Progress Bars",
    description: "Progress bars with different colors",
    category: "progress",
    preview: `
  <div class="space-y-4">
    <!-- Blue Progress -->
    <div class="w-full bg-blue-200 rounded-full h-2.5">
      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
    </div>
  
    <!-- Green Progress -->
    <div class="w-full bg-green-200 rounded-full h-2.5">
      <div class="bg-green-600 h-2.5 rounded-full" style="width: 65%"></div>
    </div>
  
    <!-- Red Progress -->
    <div class="w-full bg-red-200 rounded-full h-2.5">
      <div class="bg-red-600 h-2.5 rounded-full" style="width: 85%"></div>
    </div>
  
    <!-- Yellow Progress -->
    <div class="w-full bg-yellow-200 rounded-full h-2.5">
      <div class="bg-yellow-600 h-2.5 rounded-full" style="width: 35%"></div>
    </div>
  </div>`,
    code: `
  const ColoredProgressBar = ({ progress, color }) => {
    const colors = {
      blue: { bg: 'bg-blue-200', fill: 'bg-blue-600' },
      green: { bg: 'bg-green-200', fill: 'bg-green-600' },
      red: { bg: 'bg-red-200', fill: 'bg-red-600' },
      yellow: { bg: 'bg-yellow-200', fill: 'bg-yellow-600' }
    };
  
    return (
      <div className={\`w-full \${colors[color].bg} rounded-full h-2.5\`}>
        <div 
          className={\`\${colors[color].fill} h-2.5 rounded-full transition-all duration-300\`}
          style={{ width: \`\${progress}%\` }}
        ></div>
      </div>
    );
  };`,
  },
  {
    id: "animated-progress",
    title: "Animated Progress Bars",
    description: "Progress bars with animations",
    category: "progress",
    preview: `
  <div class="space-y-4">
    <!-- Animated Progress -->
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div class="bg-blue-600 h-2.5 rounded-full animate-[progress_2s_ease-in-out]" style="width: 75%"></div>
    </div>
  
    <!-- Striped Animated Progress -->
    <div class="w-full bg-gray-200 rounded-full h-4">
      <div 
        class="bg-green-600 h-4 rounded-full relative overflow-hidden"
        style="width: 65%"
      >
        <div class="absolute inset-0 bg-stripes animate-[move_30s_linear_infinite]"></div>
      </div>
    </div>
  
    <!-- Pulse Progress -->
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div class="bg-purple-600 h-2.5 rounded-full animate-pulse" style="width: 55%"></div>
    </div>
  </div>`,
    code: `
  const AnimatedProgressBar = ({ progress, type = 'basic' }) => {
    const animations = {
      basic: 'animate-[progress_2s_ease-in-out]',
      striped: 'relative overflow-hidden',
      pulse: 'animate-pulse'
    };
  
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={\`bg-blue-600 h-2.5 rounded-full \${animations[type]}\`}
          style={{ width: \`\${progress}%\` }}
        >
          {type === 'striped' && (
            <div className="absolute inset-0 bg-stripes animate-[move_30s_linear_infinite]"></div>
          )}
        </div>
      </div>
    );
  };
  
  // Add to tailwind.config.js:
  // module.exports = {
  //   theme: {
  //     extend: {
  //       keyframes: {
  //         progress: {
  //           '0%': { width: '0%' },
  //           '100%': { width: '100%' }
  //         },
  //         move: {
  //           '0%': { transform: 'translateX(-100%)' },
  //           '100%': { transform: 'translateX(100%)' }
  //         }
  //       },
  //       backgroundImage: {
  //         'stripes': 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)'
  //       },
  //       backgroundSize: {
  //         'stripes': '1rem 1rem'
  //       }
  //     }
  //   }
  // }`,
  },
  {
    id: "progress-with-steps",
    title: "Progress with Steps",
    description: "Progress bars with step indicators",
    category: "progress",
    preview: `
  <div class="space-y-4">
    <!-- Steps Progress -->
    <div class="w-full">
       <div class="flex justify-between mb-1">
        <span class="text-sm font-medium text-gray-700">Step 1</span>
        <span class="text-sm font-medium text-gray-700">Step 2</span>
        <span class="text-sm font-medium text-gray-700">Step 3</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div class="bg-blue-600 h-2.5 rounded-full" style="width: 65%"></div>
      </div>
    </div>
  
    <!-- Steps Progress with Icons -->
    <div class="w-full">
      <div class="flex justify-between mb-1">
        <span class="text-sm font-medium text-gray-700">
          <i class="fas fa-lock"></i>
        </span>
        <span class="text-sm font-medium text-gray-700">
          <i class="fas fa-user"></i>
        </span>
        <span class="text-sm font-medium text-gray-700">
          <i class="fas fa-check"></i>
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div class="bg-green-600 h-2.5 rounded-full" style="width: 75%"></div>
      </div>
    </div>
  </div>`,
    code: `
  const StepsProgressBar = ({ steps, progress }) => {
    return (
      <div className="w-full">
        <div className="flex justify-between mb-1">
          {steps.map((step, index) => (
            <span key={index} className="text-sm font-medium text-gray-700">
              {step.icon ? <i className={step.icon}></i> : step.name}
            </span>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: \`\${progress}%\` }}
          ></div>
        </div>
      </div>
    );
  };`,
  },
];
