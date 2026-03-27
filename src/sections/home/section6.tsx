import { useEffect, useRef, useState } from "react";
import gaila from "../../assets/testimonials/gaila.png";
import gorospe from "../../assets/testimonials/gorospe.png";
import mon from "../../assets/testimonials/pic.png";

export function Section6() {
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

  const testimonials = [
    {
      id: 1,
      name: "Mon Pasag",
      role: "Loyal Suki",
      review:
        "The Beef sinigang tastes exactly like my Lola's cooking. It's so hard to find genuine lutong bahay in the city, but La Cocina Inasal nails it every single time. My family eats here every Sunday!",
      rating: 5,
      image: mon,
    },
    {
      id: 2,
      name: "Danica Gaila",
      role: "Local Foodie",
      review:
        "Hands down the best Sizzling Sisig I've had in a long time. Perfectly crispy, perfectly seasoned. The ambiance is warm and the staff treats you like family. Highly recommended!",
      rating: 5,
      image: gaila,
    },
    {
      id: 3,
      name: "Francis Gorospe",
      role: "First-time Visitor",
      review:
        "We booked a table for our anniversary wanting something authentic. The Bulalo was incredibly rich and the meat was fall-off-the-bone tender. A premium dining experience with true Filipino heart.",
      rating: 5,
      image: gorospe,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/10 font-poppins relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-24 transform transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-primary text-white font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-4 shadow-sm">
            Customer Reviews
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tight">
            Mga Kwento ng Aming Suki
          </h2>
          <p className="text-lg text-dark/70 font-medium">
            Don't just take our word for it. Hear what our beloved guests have
            to say about their dining experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-4xl p-8 md:p-10 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-700 relative group flex flex-col transform ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-8 right-8 text-secondary/20 group-hover:text-secondary/30 transition-colors duration-300">
                <i className="fa fa-quote-right text-6xl"></i>
              </div>

              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fa fa-star text-secondary text-sm"></i>
                ))}
              </div>

              <p className="text-dark/80 leading-relaxed mb-8 relative z-10 flex-1 italic">
                "{testimonial.review}"
              </p>

              <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-base/60">
                <div className="shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-white group-hover:border-secondary transition-all duration-300"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-dark text-lg leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-dark/60 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
