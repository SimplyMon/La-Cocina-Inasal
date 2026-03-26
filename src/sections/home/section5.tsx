import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import halo from "../../assets/resto.jpg";

export function Section5() {
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

  const franchiseBenefits = [
    {
      icon: "fa-chart-line",
      title: "Proven Business Model",
      desc: "High-yield returns with our streamlined, time-tested Filipino Cuisine operations.",
    },
    {
      icon: "fa-book-open",
      title: "Comprehensive Training",
      desc: "Full culinary and management training for you and your entire staff.",
    },
    {
      icon: "fa-hands-helping",
      title: "End-to-End Support",
      desc: "From location scouting to marketing, we are with you every step of the way.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-base font-poppins relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-white rounded-4xl shadow-2xl shadow-primary/5 border border-secondary/20 overflow-hidden flex flex-col lg:flex-row items-stretch group transform transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-full overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img
              src={halo}
              alt="Restaurant Partnership"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-white/20">
              <span className="flex items-center gap-2 text-dark font-bold text-sm">
                <i className="fa fa-star text-secondary"></i>
                Rapidly Growing Brand
              </span>
            </div>
          </div>

          <div className="lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <i className="fa fa-handshake absolute bottom-[-20%] right-[-5%] text-[15rem] text-base/50 z-0 transform -rotate-12"></i>

            <div className="relative z-10">
              <div className="inline-block bg-secondary/30 text-primary font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 border border-secondary/50 shadow-sm">
                Partner With Us
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-tight mb-4 tracking-tight">
                Bring La Cocina Inasal to <br className="hidden sm:block" />
                <span className="text-dark">Your City.</span>
              </h2>

              <p className="text-lg text-dark/70 mb-10 leading-relaxed max-w-xl">
                Join our growing family and share the rich, authentic taste of
                Filipino Cuisine. We are looking for passionate partners to
                expand our legacy nationwide.
              </p>

              <div className="space-y-6 mb-12">
                {franchiseBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <i className={`fa ${benefit.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dark mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-dark/60 text-sm leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/franchise"
                  className="bg-primary text-white text-center px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:-translate-y-1 hover:bg-primary/90 transition-all flex justify-center items-center group/btn"
                >
                  <i className="fa fa-download mr-3"></i>
                  Download Franchise Kit
                </Link>
                <Link
                  to="/contact"
                  className="bg-base text-primary border-2 border-primary/20 hover:border-primary/50 text-center px-8 py-4 rounded-full font-bold transition-all flex justify-center items-center"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
