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

  const stats = [
    {
      id: 1,
      icon: "fa-utensils",
      number: "30+",
      label: "Authentic Dishes",
      desc: "Masterfully crafted recipes",
    },
    {
      id: 2,
      icon: "fa-calendar-check",
      number: "13+",
      label: "Years of Experience",
      desc: "Perfecting our family craft",
    },
    {
      id: 3,
      icon: "fa-users",
      number: "15k+",
      label: "Happy Suki",
      desc: "Satisfied regular customers",
    },
    {
      id: 4,
      icon: "fa-store",
      number: "4",
      label: "Locations",
      desc: "Branches serving nationwide",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-primary py-20 md:py-28 font-poppins overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--color-secondary)_0%,transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 divide-y sm:divide-y-0 sm:divide-x divide-secondary/20">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center pt-8 sm:pt-0 group cursor-default transform transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary transform group-hover:-translate-y-2 group-hover:bg-secondary group-hover:text-primary transition-all duration-300 shadow-sm">
                <i className={`fa ${stat.icon} text-2xl`}></i>
              </div>

              <h3 className="text-5xl md:text-6xl font-black text-secondary mb-2 tracking-tight drop-shadow-sm">
                {stat.number}
              </h3>

              <h4 className="text-xl font-bold text-base mb-2">{stat.label}</h4>

              <p className="text-sm text-base/70 font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
