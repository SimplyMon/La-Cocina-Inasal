import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export function Section4() {
  const [isVisible, setIsVisible] = useState(false);
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
        threshold: 0.2,
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

  const specials = [
    {
      id: 1,
      name: "Grilled Pitso",
      desc: "Juicy grilled chicken oyster cut, marinated in a savory blend of spices and served smoky and tender.",
      price: "₱280",
      img: "/src/assets/menu/pitso.jpg",
      tag: "Chef's Choice",
      tagColor: "bg-primary",
    },
    {
      id: 2,
      name: "Sizzling Sisig",
      desc: "Crispy chopped pork mask, onions, and chili, served smoking hot on a cast iron plate.",
      price: "₱250",
      img: "/src/assets/menu/sisig.jpg",
      tag: "Best Seller",
      tagColor: "bg-accent",
    },
    {
      id: 3,
      name: "Bulalo",
      desc: "Beef shank soup simmered for hours until tender, with marrow-rich broth, corn, cabbage, and potatoes.",
      price: "₱350",
      img: "/src/assets/menu/bulalo.jpg",
      tag: "Weekend Special",
      tagColor: "bg-secondary text-dark",
    },
    {
      id: 4,
      name: "Classic Halo-Halo",
      desc: "Shaved ice, sweetened beans, jellies, and ube halaya, topped with creamy leche flan.",
      price: "₱150",
      img: "/src/assets/menu/halo.jpg",
      tag: "Dessert",
      tagColor: "bg-dark",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-base font-poppins relative"
    >
      <div className="absolute top-40 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transform transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-white text-accent font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-4 shadow-sm border border-accent/20">
            Taste the Tradition
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tight">
            Paborito ng Bayan
          </h2>
          <p className="text-lg text-dark/70 font-medium">
            Discover our house specialties. These are the dishes our regular
            'sukis' keep coming back for, prepared fresh daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specials.map((dish, index) => (
            <div
              key={dish.id}
              className={`bg-white rounded-4xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 group flex flex-col transform ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {dish.tag && (
                  <div
                    className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold shadow-md ${dish.tagColor} ${dish.tagColor.includes("text-dark") ? "" : "text-white"}`}
                  >
                    {dish.tag}
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>

                <p className="text-dark/70 text-sm leading-relaxed mb-6 flex-1">
                  {dish.desc}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-base/60">
                  <span className="text-2xl font-black text-primary">
                    {dish.price}
                  </span>

                  <Link
                    to="/menu"
                    className="w-10 h-10 rounded-full bg-base text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm"
                    title="View Full Menu"
                  >
                    <i className="fa fa-arrow-right transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transform transition-all duration-700 ease-out delay-600ms ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 bg-secondary text-dark font-bold px-10 py-4 rounded-full shadow-md hover:shadow-lg hover:bg-secondary/90 hover:-translate-y-1 transition-all group"
          >
            View Full Menu
            <i className="fa fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
