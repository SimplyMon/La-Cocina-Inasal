import { useEffect, useRef, useState } from "react";

export function Section7() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      },
    );

    const currentRef = sectionRef.current;

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
      <div className="absolute top-20 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-tl-full blur-[80px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transform transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-white text-accent font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-4 shadow-sm border border-accent/20">
            Halina't Bumisita
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tight">
            Come and Visit Us
          </h2>
          <p className="text-lg text-dark/70 font-medium">
            Whether you're dining in with family or ordering for home, we are
            always ready to serve you the best lutong bahay.
          </p>
        </div>

        <div className="bg-white rounded-4xl shadow-xl shadow-primary/5 border border-secondary/20 overflow-hidden flex flex-col lg:flex-row items-stretch">
          <div
            className={`lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative bg-white z-10 transform transition-all duration-1000 ease-out delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-2xl font-bold text-primary mb-8">
              Restaurant Details
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                  <i className="fa fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Our Location</h4>
                  <p className="text-dark/70 text-sm leading-relaxed">
                    1913 Remedios St، Corner Leon Guinto St,
                    <br />
                    Malate, Manila, 1004 Metro Manila
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                  <i className="fa fa-clock text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Opening Hours</h4>
                  <p className="text-dark/70 text-sm leading-relaxed">
                    Monday - Saturday
                    <br />
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                  <i className="fa fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Contact Us</h4>
                  <p className="text-dark/70 text-sm leading-relaxed">
                    +63 995-098-2343
                    <br />
                    lacocinainasal692@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-base/60">
              <h4 className="font-bold text-dark mb-4 flex items-center gap-2">
                <i className="fa fa-motorcycle text-accent"></i> Available for
                Delivery
              </h4>
              <div className="flex gap-4">
                <button className="flex-1 bg-base hover:bg-secondary/20 text-dark font-bold py-3 px-4 rounded-xl border border-secondary/30 transition-colors shadow-sm flex items-center justify-center gap-2">
                  <i className="fa fa-shopping-bag text-primary"></i> Order
                  Direct
                </button>
                <button className="flex-1 bg-base hover:bg-accent/10 text-dark font-bold py-3 px-4 rounded-xl border border-accent/20 transition-colors shadow-sm flex items-center justify-center gap-2">
                  <i className="fa fa-bolt text-accent"></i> Delivery Apps
                </button>
              </div>
            </div>
          </div>

          <div
            className={`lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-gray-200 transform transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.461522404903!2d120.98850417494862!3d14.57275778591033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9fb56925d27%3A0x5e9f27e94edc361c!2sLa%20Mesa%20Inasal!5e0!3m2!1sen!2sph!4v1774529124795!5m2!1sen!2sph"
              className="absolute inset-0 w-full h-full border-0 grayscale-20 contrast-90 opacity-90 hover:grayscale-0 hover:opacity-100 hover:contrast-100 transition-all duration-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location Map"
            ></iframe>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
              <a
                href="https://maps.google.com/?q=Taytay,Rizal"
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <i className="fa fa-directions"></i>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
