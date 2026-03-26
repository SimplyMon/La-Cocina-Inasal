import { useEffect, useRef, useState } from "react";

export function Section3() {
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
      { threshold: 0.15 },
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const values = [
    {
      id: 1,
      icon: "fa-seedling",
      title: "Fresh Ingredients",
      desc: "We source our produce and meats daily from local Filipino farmers to ensure every bite is fresh and flavorful.",
    },
    {
      id: 2,
      icon: "fa-fire",
      title: "Traditional Methods",
      desc: "From charcoal grilling to slow-simmering clay pots, we honor the old-school ways of Filipino cooking.",
    },
    {
      id: 3,
      icon: "fa-heart",
      title: "Filipino Hospitality",
      desc: "You aren't just a customer; you are our 'Suki'. We serve every meal with a warm smile and genuine care.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/10 font-poppins relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`mb-16 transform transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight">
            Our Promise
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            The three pillars that guide everything we do in our kitchen and our
            dining room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.id}
              className={`bg-white p-10 rounded-[ shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center transform ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary shadow-inner">
                <i className={`fa ${value.icon} text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">
                {value.title}
              </h3>
              <p className="text-dark/70 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
