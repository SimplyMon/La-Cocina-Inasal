import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import about from "../../assets/about.jpg";
import about2 from "../../assets/about2.jpg";

export function Section2() {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-base font-poppins relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/20 rounded-bl-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-[-10%] w-96 h-96 bg-primary/5 rounded-tr-full -z-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 overflow-hidden">
          <div
            className={`flex-1 relative w-full flex justify-end sm:justify-center lg:justify-start mt-10 lg:mt-0 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative z-10 w-4/5 md:w-3/4 rounded-4xl overflow-hidden shadow-xl border-4 border-white ml-auto lg:ml-8">
              <img
                src={about}
                alt="Cooking authentic Filipino food"
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            </div>

            <div className="absolute -bottom-10 left-0 w-3/5 sm:w-1/2 rounded-4xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <img
                src={about2}
                alt="Restaurant serving"
                className="w-full h-[200px] sm:h-[280px] object-cover"
              />
            </div>

            <div className="absolute -top-6 right-4 w-24 h-24 bg-secondary/40 rounded-full z-0"></div>
          </div>

          <div
            className={`flex-1 mt-16 lg:mt-0 z-10 transform transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="inline-block bg-secondary/30 text-primary font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 border border-secondary/50 shadow-sm">
              Our Story
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-tight mb-6">
              From Our Family Kitchen to <br className="hidden md:block" />
              <span className="text-dark">Your Table.</span>
            </h2>

            <p className="text-lg text-dark/80 mb-6 leading-relaxed">
              La Cocina Inasal started with a simple belief: the best meals are
              the ones shared with family. Decades ago, our Lola would spend
              hours in the kitchen, carefully balancing the tang of calamansi,
              the heat of native chilies, and the rich umami of soy to create
              the perfect Sunday feast.
            </p>

            <p className="text-lg text-dark/80 mb-10 leading-relaxed">
              Today, we continue her legacy. We don't take shortcuts. Every dish
              we serve is slow-cooked, properly marinated, and grilled to
              perfection using the exact same authentic recipes that brought our
              family together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                  <i className="fa fa-fire text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg mb-1">
                    Traditional Cooking
                  </h4>
                  <p className="text-sm text-dark/70 leading-snug">
                    Charcoal grilled and slow-simmered for authentic flavor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                  <i className="fa fa-leaf text-accent text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg mb-1">
                    Local Ingredients
                  </h4>
                  <p className="text-sm text-dark/70 leading-snug">
                    Freshly sourced from local Filipino farmers daily.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-secondary text-dark font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-secondary/80 border border-secondary/30 transition-all group"
            >
              Read Our Full Story
              <i className="fa fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
