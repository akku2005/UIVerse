export const imagesGalleriesData = [
  {
    id: "basic-responsive-image",
    title: "Basic Responsive Image",
    description: "Fully responsive image with adaptive sizing",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6">
    <img 
      src="https://picsum.photos/800/600" 
      alt="Responsive Image"
      class="w-full h-auto object-cover rounded-lg 
             max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl 
             mx-auto shadow-md"
    />
  </div>`,
    code: `const ResponsiveImage = ({ 
    src = "https://picsum.photos/800/600", 
    alt = "Responsive Image" 
  }) => {
    return (
      <img 
        src={src}
        alt={alt}
        className="w-full h-auto object-cover rounded-lg 
                   max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl 
                   mx-auto shadow-md"
      />
    );
  };`,
    category: "images",
  },
  {
    id: "image-gallery-grid",
    title: "Responsive Image Gallery Grid",
    description: "Adaptive grid gallery with responsive columns",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                gap-2 sm:gap-4 md:gap-6">
      <div class="aspect-w-1 aspect-h-1">
        <img 
          src="https://picsum.photos/400/400?random=1" 
          alt="Gallery Image 1"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div class="aspect-w-1 aspect-h-1">
        <img 
          src="https://picsum.photos/400/400?random=2" 
          alt="Gallery Image 2"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div class="aspect-w-1 aspect-h-1">
        <img 
          src="https://picsum.photos/400/400?random=3" 
          alt="Gallery Image 3"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div class="aspect-w-1 aspect-h-1">
        <img 
          src="https://picsum.photos/400/400?random=4" 
          alt="Gallery Image 4"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>`,
    code: `const ResponsiveImageGallery = ({ 
    images = [
      { src: "https://picsum.photos/400/400?random=1", alt: "Gallery Image 1" },
      { src: "https://picsum.photos/400/400?random=2", alt: "Gallery Image 2" },
      { src: "https://picsum.photos/400/400?random=3", alt: "Gallery Image 3" },
      { src: "https://picsum.photos/400/400?random=4", alt: "Gallery Image 4" }
    ] 
  }) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                      gap-2 sm:gap-4 md:gap-6">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img 
              src={image.src}
              alt={image.alt || \`Gallery Image \${index + 1}\`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    );
  };`,
    category: "images",
  },
  {
    id: "masonry-gallery",
    title: "Responsive Masonry Gallery",
    description: "Adaptive masonry-style image gallery",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6">
    <div class="columns-2 sm:columns-3 md:columns-4 gap-2 sm:gap-4 md:gap-6">
      <div class="mb-2 sm:mb-4">
        <img 
          src="https://picsum.photos/500/300?random=1" 
          alt="Masonry Image 1"
          class="w-full rounded-lg"
        />
      </div>
      <div class="mb-2 sm:mb-4">
        <img 
          src="https://picsum.photos/500/400?random=2" 
          alt="Masonry Image 2"
          class="w-full rounded-lg"
        />
      </div>
      <div class="mb-2 sm:mb-4">
        <img 
          src="https://picsum.photos/500/350?random=3" 
          alt="Masonry Image 3"
          class="w-full rounded-lg"
        />
      </div>
      <div class="mb-2 sm:mb-4">
        <img 
          src="https://picsum.photos/500/250?random=4" 
          alt="Masonry Image 4"
          class="w-full rounded-lg"
        />
      </div>
    </div>
  </div>`,
    code: `const MasonryGallery = ({ 
    images = [
      { src: "https://picsum.photos/500/300?random=1", alt: "Masonry Image 1" },
      { src: "https://picsum.photos/500/400?random=2", alt: "Masonry Image 2" },
      { src: "https://picsum.photos/500/350?random=3", alt: "Masonry Image 3" },
      { src: "https://picsum.photos/500/250?random=4", alt: "Masonry Image 4" }
    ]
  }) => {
    return (
      <div className="columns-2 sm:columns-3 md:columns-4 
                      gap-2 sm:gap-4 md:gap-6">
        {images.map((image, index) => (
          <div key={index} className="mb-2 sm:mb-4">
            <img 
              src={image.src}
              alt={image.alt || \`Masonry Image \${index + 1}\`}
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </div>
    );
  };`,
    category: "images",
  },
  {
    id: "image-carousel",
    title: "Responsive Image Carousel",
    description: "Adaptive image carousel with responsive sizing",
    preview: `
  <div class="w-full p-2 sm:p-4 md:p-6 relative">
    <div class="overflow-hidden relative">
      <div class="flex transition-transform duration-300 
                  transform -translate-x-full">
        <div class="w-full flex-shrink-0">
          <img 
            src="https://picsum.photos/1200/600?random=1" 
            alt="Carousel Image 1"
            class="w-full h-40 sm:h-60 md:h-80 object-cover"
          />
        </div>
        <div class="w-full flex-shrink-0">
          <img 
            src="https://picsum.photos/1200/600?random=2" 
            alt="Carousel Image 2"
            class="w-full h -40 sm:h-60 md:h-80 object-cover"
          />
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
    code: `const ResponsiveCarousel = ({ 
    images = [
      { src: "https://picsum.photos/1200/600?random=1", alt: "Carousel Image 1" },
      { src: "https://picsum.photos/1200/600?random=2", alt: "Carousel Image 2" }
    ] 
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prev) => 
        (prev + 1) % images.length
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prev) => 
        prev === 0 ? images.length - 1 : prev - 1
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
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img 
                src={image.src} 
                alt={image.alt || \`Carousel Image \${index + 1}\`}
                className="w-full h-40 sm:h-60 md:h-80 object-cover"
              />
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
    category: "images",
  },
];
