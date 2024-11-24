export const avatarsData = [
  {
    id: "basic-avatar-set",
    title: "Basic Avatar Styles",
    description: "Responsive and customizable avatar designs",
    preview: `
  <div class="flex justify-center items-center 
              space-x-4 sm:space-x-6 md:space-x-8 
              p-4 bg-gray-50 rounded-lg">
    <img src="https://i.pravatar.cc/150?img=1" 
         alt="User Avatar" 
         class="avatar-basic rounded-full 
                w-12 h-12 sm:w-16 sm:h-16 
                md:w-20 md:h-20 
                object-cover 
                border-2 border-blue-500"/>
    <img src="https://i.pravatar.cc/150?img=2" 
         alt="User Avatar" 
         class="avatar-basic rounded-full 
                w-12 h-12 sm:w-16 sm:h-16 
                md:w-20 md:h-20 
                object-cover 
                border-2 border-green-500"/>
    <img src="https://i.pravatar.cc/150?img=3" 
         alt="User Avatar" 
         class="avatar-basic rounded-full 
                w-12 h-12 sm:w-16 sm:h-16 
                md:w-20 md:h-20 
                object-cover 
                border-2 border-purple-500"/>
  </div>`,
    code: `import React from 'react';
  
  const BasicAvatarSet = () => {
    const avatars = [
      { 
        src: 'https://i.pravatar.cc/150?img=1', 
        alt: 'User Avatar 1', 
        borderColor: 'border-blue-500' 
      },
      { 
        src: 'https://i.pravatar.cc/150?img=2', 
        alt: 'User Avatar 2', 
        borderColor: 'border-green-500' 
      },
      { 
        src: 'https://i.pravatar.cc/150?img=3', 
        alt: 'User Avatar 3', 
        borderColor: 'border-purple-500' 
      }
    ];
  
    return (
      <div className="flex justify-center items-center 
                      space-x-4 sm:space-x-6 md:space-x-8 
                      p-4 bg-gray-50 rounded-lg">
        {avatars.map(({ src, alt, borderColor }, index) => (
          <img 
            key={index}
            src={src}
            alt={alt}
            className={\`avatar-basic rounded-full 
                       w-12 h-12 sm:w-16 sm:h-16 
                       md:w-20 md:h-20 
                       object-cover 
                       border-2 \${borderColor}\`}
          />
        ))}
      </div>
    );
  };
  
  export default BasicAvatarSet;`,
    category: "avatars",
  },
  {
    id: "status-avatars",
    title: "Avatar with Status Indicators",
    description: "Avatars with online/offline status indicators",
    preview: `
  <div class="flex justify-center items-center 
              space-x-4 sm:space-x-6 md:space-x-8 
              p-4 bg-gray-100 rounded-lg">
    <div class="avatar-status-container relative">
      <img src="https://i.pravatar.cc/150?img=4" 
           alt="User Avatar" 
           class="avatar-status rounded-full 
                  w-16 h-16 object-cover"/>
      <span class="status-indicator absolute 
                   bottom-0 right-0 
                   bg-green-500 
                   w-4 h-4 sm:w-5 sm:h-5 
                   border-2 border-white 
                   rounded-full"></span>
    </div>
    <div class="avatar-status-container relative">
      <img src="https://i.pravatar.cc/150?img=5" 
           alt="User Avatar" 
           class="avatar-status rounded-full 
                  w-16 h-16 object-cover"/>
      <span class="status-indicator absolute 
                   bottom-0 right-0 
                   bg-red-500 
                   w-4 h-4 sm:w-5 sm:h-5 
                   border-2 border-white 
                   rounded-full"></span>
    </div>
    <div class="avatar-status-container relative">
      <img src="https://i.pravatar.cc/150?img=6" 
           alt="User Avatar" 
           class="avatar-status rounded-full 
                  w-16 h-16 object-cover"/>
      <span class="status-indicator absolute 
                   bottom-0 right-0 
                   bg-yellow-500 
                   w-4 h-4 sm:w-5 sm:h-5 
                   border-2 border-white 
                   rounded-full"></span>
    </div>
  </div>`,
    code: `import React from 'react';
  
  const StatusAvatars = () => {
    const avatars = [
      { 
        src: 'https://i.pravatar.cc/150?img=4', 
        alt: 'User Avatar 1', 
        status: 'online',
        statusColor: 'bg-green-500'
      },
      { 
        src: 'https://i.pravatar.cc/150?img=5', 
        alt: 'User Avatar 2', 
        status: 'offline',
        statusColor: 'bg-red-500'
      },
      { 
        src: 'https://i.pravatar.cc/150?img=6', 
        alt: 'User Avatar 3', 
        status: 'away',
        statusColor: 'bg-yellow-500'
      }
    ];
  
    return (
      <div className="flex justify-center items-center 
                      space-x-4 sm:space-x-6 md:space-x-8 
                      p-4 bg-gray-100 rounded-lg">
        {avatars.map(({ src, alt, status, statusColor }, index) => (
          <div key={index} className="avatar-status-container relative">
            <img 
              src={src}
              alt={alt}
              className="avatar-status rounded-full 
                         w-16 h-16 object-cover"
            />
            <span 
              className={\`status-indicator absolute 
                         bottom-0 right-0 
                         \${statusColor} 
                         w-4 h-4 sm:w-5 sm:h-5 
                         border-2 border-white 
                         rounded-full\`}
              title={status}
            ></span>
          </div>
        ))}
      </div>
    );
  };
  
  export default StatusAvatars;`,
    category: "avatars",
  },
  {
    id: "avatar-group",
    title: "Avatar Group",
    description: "Responsive avatar group with overlap",
    preview: `
  <div class="flex justify-center items-center 
              p-4 bg-gray-50 rounded-lg">
    <div class="avatar-group flex -space-x-4">
      <img src="https://i.pravatar.cc/150?img=7" 
           alt="User Avatar" 
           class="avatar-group-item 
                  w-12 h-12 sm:w-16 sm:h-16 
                  rounded-full 
                  object-cover 
                  border-2 border-white"/>
      <img src="https://i.pravatar.cc/150?img=8" 
           alt="User Avatar" 
           class="avatar-group-item 
                  w-12 h-12 sm:w-16 sm:h-16 
                  rounded-full 
                  object-cover 
                  border-2 border-white"/>
      <img src="https://i.pravatar.cc/150?img=9" 
           alt="User  Avatar" 
           class="avatar-group-item 
                  w-12 h-12 sm:w-16 sm:h-16 
                  rounded-full 
                  object-cover 
                  border-2 border-white"/>
      <div class="avatar-group-overflow 
                  w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center 
                  bg-gray-300 border-2 border-white">
        +3
      </div>
    </div>
  </div>`,
    code: `import React from 'react';
  
  const AvatarGroup = () => {
    const avatars = [
      { src: 'https://i.pravatar.cc/150?img=7', alt: 'User  Avatar 1' },
      { src: 'https://i.pravatar.cc/150?img=8', alt: 'User  Avatar 2' },
      { src: 'https://i.pravatar.cc/150?img=9', alt: 'User  Avatar 3' },
      { src: 'https://i.pravatar.cc/150?img=10', alt: 'User  Avatar 4' },
      { src: 'https://i.pravatar.cc/150?img=11', alt: 'User  Avatar 5' },
    ];
  
    return (
      <div className="flex justify-center items-center 
                      p-4 bg-gray-50 rounded-lg">
        <div className="avatar-group flex -space-x-4">
          {avatars.slice(0, 3).map(({ src, alt }, index) => (
            <img 
              key={index}
              src={src}
              alt={alt}
              className="avatar-group-item 
                         w-12 h-12 sm:w-16 sm:h-16 
                         rounded-full 
                         object-cover 
                         border-2 border-white"
            />
          ))}
          <div className="avatar-group-overflow 
                          w-12 h-12 sm:w-16 sm:h-16 
                          rounded-full flex items-center justify-center 
                          bg-gray-300 border-2 border-white">
            +{avatars.length - 3}
          </div>
        </div>
      </div>
    );
  };
  
  export default AvatarGroup;`,
    category: "avatars",
  },
];
