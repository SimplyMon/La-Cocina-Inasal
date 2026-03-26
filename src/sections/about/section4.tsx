import { useEffect, useRef, useState } from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  size: string;
}

export function Section4() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const pictures: GalleryImage[] = [
    {
      id: 1,
      src: "/src/assets/gallery/team.jpg",
      alt: "IT Team",
      size: "large",
    },
    {
      id: 2,
      src: "/src/assets/menu/pitso.jpg",
      alt: "Our Signature Pitso Inasal grilled",
      size: "small",
    },
    {
      id: 3,
      src: "/src/assets/about.jpg",
      alt: "Our warm restaurant exterior",
      size: "small",
    },
    {
      id: 4,
      src: "/src/assets/gallery/about1.jpg",
      alt: "Our warm restaurant Interior",
      size: "large",
    },
    {
      id: 5,
      src: "/src/assets/menu/bbangus.jpg",
      alt: "Boneless Bangus plated",
      size: "small",
    },
    {
      id: 6,
      src: "/src/assets/about2.jpg",
      alt: "La Cocina Inasal Restaurant",
      size: "small",
    },
    {
      id: 7,
      src: "/src/assets/gallery/team-owner.jpg",
      alt: "Team with the Owner",
      size: "large",
    },
    {
      id: 8,
      src: "/src/assets/menu/bulalo.jpg ",
      alt: "Our Bulalo special",
      size: "small",
    },
    {
      id: 9,
      src: "/src/assets/logo.png",
      alt: "Logo La Cocina Inasal",
      size: "small",
    },
    {
      id: 10,
      src: "/src/assets/gallery/interior.jpg",
      alt: "Kitchen action cooking Inasal",
      size: "small",
    },
    {
      id: 11,
      src: "/src/assets/gallery/about2.jpg",
      alt: "La Cocina Inasal Parking",
      size: "small",
    },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className="py-20 md:py-32 bg-base font-poppins relative overflow-hidden"
      >
        <div className="absolute top-40 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center max-w-2xl mx-auto mb-16 md:mb-24 transform transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-block bg-white text-accent font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-4 shadow-sm border border-accent/20">
              Aming Tagpuan
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tight">
              Our Gallery
            </h2>
            <p className="text-lg text-dark/70 font-medium">
              Take a visual tour through our family kitchen, our busy grill, and
              the wonderful faces of our satisfied sukis. Click any image to
              enlarge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
            {pictures.map((picture, index) => {
              const isLarge = picture.size === "large";

              return (
                <div
                  key={picture.id}
                  onClick={() => setSelectedImage(picture)}
                  className={`relative overflow-hidden rounded-4xl shadow-sm hover:shadow-2xl transition-all duration-700 group border-4 border-white transform ease-out cursor-pointer
                    ${isLarge ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"}
                    ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img
                    src={picture.src}
                    alt={picture.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>

                  <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-lg font-bold leading-tight drop-shadow-md">
                        {picture.alt}
                      </p>
                      <div className="w-8 h-1 bg-secondary mt-3 rounded-full"></div>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:rotate-12">
                    <i className="fa fa-expand text-white text-sm"></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <i className="fa fa-times text-xl"></i>
          </button>

          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-white mt-6 text-lg font-medium tracking-wide">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
