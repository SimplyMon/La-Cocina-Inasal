import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.15 },
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-base font-poppins relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div
            className={`lg:w-1/2 relative transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-4xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <img
                src="/src/assets/about2.jpg"
                alt="Our Lola cooking"
                className="w-full h-[400px] md:h-[550px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-secondary/30 rounded-4xl -z-10"></div>
          </div>

          <div
            className={`lg:w-1/2 transform transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tight">
              A Legacy Built on <br />{" "}
              <span className="text-dark">Good Food.</span>
            </h2>
            <div className="space-y-6 text-dark/80 text-lg leading-relaxed">
              <p>
                It all started in our Lola’s kitchen. Every Sunday, the entire
                family would gather around a long wooden table, waiting for the
                smell of slow-roasted pork and tangy calamansi to fill the air.
                She didn't cook with measurements; she cooked with memory,
                tasting and adjusting until everything was perfect.
              </p>
              <p>
                When we opened <strong>La Cocina Inasal</strong> over a decade
                ago, our mission was simple: to bring that exact same Sunday
                feeling to our community. We refused to compromise. No
                shortcuts, no artificial flavorings—just genuine, lutong bahay
                (home-cooked) goodness.
              </p>
              <p>
                Today, even as we've grown from a small roadside to multiple
                branches, our kitchen still operates the same way. We marinate
                our meats overnight, simmer our soups for hours, and welcome
                every guest like they are part of our own family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
