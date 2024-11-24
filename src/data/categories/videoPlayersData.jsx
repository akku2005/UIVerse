export const videoPlayersData = [
  {
    id: "basic-responsive-video",
    title: "Basic Responsive Video Player",
    description: "Fully responsive video player with adaptive sizing",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6">
    <div class="aspect-w-16 aspect-h-9">
      <video 
        controls 
        class="w-full h-full object-cover rounded-lg"
      >
        <source 
          src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>`,
    code: `const ResponsiveVideoPlayer = ({ 
    src = "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title = "Responsive Video"
  }) => {
    return (
      <div className="aspect-w-16 aspect-h-9">
        <video 
          controls 
          className="w-full h-full object-cover rounded-lg"
          title={title}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };`,
    category: "videos",
  },
  {
    id: "advanced-video-player",
    title: "Advanced Responsive Video Player",
    description: "Custom video player with controls and responsive design",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6">
    <div class="relative w-full aspect-w-16 aspect-h-9">
      <video 
        id="custom-video-player"
        class="w-full h-full absolute top-0 left-0"
      >
        <source 
          src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
          type="video/mp4"
        />
      </video>
      <div class="absolute bottom-0 left-0 right-0 
                  bg-black bg-opacity-50 p-2 
                  flex items-center justify-between">
        <button class="text-white mr-2">Play/Pause</button>
        <input 
          type="range" 
          class="w-full mx-2"
          min="0" max="100"
        />
        <button class="text-white ml-2">Fullscreen</button>
      </div>
    </div>
  </div>`,
    code: `const AdvancedVideoPlayer = ({ 
    src = "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
  }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
  
    const togglePlay = () => {
      if (videoRef.current) {
        isPlaying 
          ? videoRef.current.pause() 
          : videoRef.current.play();
        setIsPlaying(!isPlaying);
      }
    };
  
    return (
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <video 
          ref={videoRef}
          className="w-full h-full absolute top-0 left-0"
        >
          <source src={src} type="video/mp4" />
        </video>
        <div className="absolute bottom-0 left-0 right-0 
                        bg-black bg-opacity-50 p-2 
                        flex items-center justify-between">
          <button 
            onClick={togglePlay} 
            className="text-white mr-2"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <input 
            type="range" 
            className="w-full mx-2"
            min="0" 
            max="100"
          />
          <button className="text-white ml-2">
            Fullscreen
          </button>
        </div>
      </div>
    );
  };`,
    category: "videos",
  },
  {
    id: "video-gallery",
    title: "Responsive Video Gallery",
    description: "Grid of responsive video thumbnails",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                gap-2 sm:gap-4 md:gap-6">
      <div class="aspect-w-16 aspect-h-9">
        <video 
          class="w-full h-full object-cover rounded-lg"
          poster="https://via.placeholder.com/640x360"
        >
          <source 
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
            type="video/mp4"
          />
        </video>
      </div>
      <div class="aspect-w-16 aspect-h-9">
        <video 
          class="w-full h-full object-cover rounded-lg"
          poster="https://via.placeholder.com/640x360"
        >
          <source 
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
            type="video/mp4"
          />
        </video>
      </div>
      <div class="aspect-w-16 aspect-h-9">
        <video 
          class="w-full h-full object-cover rounded-lg"
          poster="https://via.placeholder.com/640x360"
        >
          <source 
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
            type="video/mp4"
          />
        </video>
      </div>
      <div class="aspect-w-16 aspect-h-9">
        <video 
          class="w-full h-full object-cover rounded-lg"
          poster="https://via.placeholder.com/640x360"
        >
          <source 
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </div>`,
    code: `const ResponsiveVideoGallery = ({ 
    videos = [
      { 
        src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        poster: "https://via.placeholder.com/640x360"
      },
      // Add more video objects
    ]
  }) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                      gap-2 sm:gap-4 md:gap-6">
        {videos.map((video, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <video 
              className="w-full h-full object-cover rounded-lg"
              poster={video.poster}
            >
              <source 
                src={video.src} 
                type="video/mp4"
              />
            </video>
          </div>
        ))}
      </div>
    );
  };`,
    category: "videos",
  },
  {
    id: "video-carousel",
    title: "Responsive Video Carousel",
    description: "Adaptive video carousel with responsive sizing",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6 relative">
    <div class="overflow-hidden relative">
      <div class="flex transition-transform duration-300 
                  transform -translate-x-full">
        <div class="w-full flex-shrink-0">
          <video 
            controls 
            class="w-full h-40 sm:h-60 md:h-80 object-cover"
          >
            <source 
              src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="w-full flex-shrink-0">
          <video 
            controls 
            class="w-full h-40 sm:h-60 md:h-80 object-cover"
          >
            <source 
              src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div class="absolute inset-y-0 left-0 flex items-center">
        <button class="bg-black/50 text-white p-2">
          ←
        </button>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center">
        <button class="bg-black/50 text-white p-2">
          →
        </button>
      </div>
    </div>
  </div>`,
    code: `const ResponsiveVideoCarousel = ({ 
    videos = [
      { src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
      { src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" }
    ] 
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prev) => 
        (prev + 1) % videos.length
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prev) => 
        prev === 0 ? videos.length - 1 : prev - 1
      );
    };
  
    return (
      <div className="relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-300"
          style={{ 
            transform: \`translateX(-\${currentIndex * 100}%)\` 
          }}
        >
          {videos.map((video, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <video 
                controls 
                className="w-full h-40 sm:h-60 md:h-80 object-cover"
              >
                <source 
                  src={video.src} 
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button onClick={prevSlide} className="bg-black/50 text-white p-2">
            ←
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button onClick={nextSlide} className="bg-black/50 text-white p-2">
            →
          </button>
        </div>
      </div>
    );
  };`,
    category: "videos",
  },
];
