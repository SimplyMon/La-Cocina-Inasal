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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          <div
            className={`lg:w-5/12 flex flex-col gap-6 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-2 tracking-tight">
              Visit Our Branch
            </h2>
            <p className="text-dark/70 mb-6 leading-relaxed">
              Drop by and experience the warmth of true Filipino hospitality. We
              are located right in the heart of the city.
            </p>

            <div className="bg-white p-8 rounded-4px shadow-sm border border-secondary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                <i className="fa fa-map-marker-alt text-2xl text-primary group-hover:text-white transition-colors"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  Our Location
                </h3>
                <p className="text-dark/70 leading-relaxed">
                  1913 Remedios St, Corner Leon Guinto St,
                  <br />
                  Malate, Manila, 1004 Metro Manila
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-4px shadow-sm border border-secondary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-300">
                <i className="fa fa-clock text-2xl text-secondary group-hover:text-primary transition-colors"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  Opening Hours
                </h3>
                <p className="text-dark/70 leading-relaxed">
                  <span className="font-semibold text-dark">
                    Monday - Saturday:
                  </span>{" "}
                  9:00 AM - 8:00 PM
                  <br />
                  <span className="font-semibold text-dark">Sunday:</span>{" "}
                  Closed for Family Day
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-4px shadow-sm border border-secondary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-6">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                <i className="fa fa-phone-alt text-2xl text-accent group-hover:text-white transition-colors"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  Contact Details
                </h3>
                <p className="text-dark/70 leading-relaxed">
                  <span className="font-semibold text-dark">Phone:</span> +63
                  995-098-2343
                  <br />
                  <span className="font-semibold text-dark">Email:</span>{" "}
                  lacocinainasal692@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div
            className={`lg:w-7/12 relative min-h-[400px] lg:min-h-full rounded-4px overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.461522404903!2d120.98850417494862!3d14.57275778591033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9fb56925d27%3A0x5e9f27e94edc361c!2sLa%20Mesa%20Inasal!5e0!3m2!1sen!2sph!4v1774529124795!5m2!1sen!2sph"
              className="absolute inset-0 w-full h-full border-0 grayscale-10 hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Cocina Inasal Map"
            ></iframe>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
              <a
                href="https://maps.app.goo.gl/..."
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-white font-bold px-8 py-4 rounded-full shadow-xl hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center gap-3 whitespace-nowrap"
              >
                <i className="fa fa-directions"></i>
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
