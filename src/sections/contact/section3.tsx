import { useEffect, useRef, useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: string;
}

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

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Do you accept table reservations?",
      answer:
        "Yes, we accept reservations for large groups (8 or more) during weekdays. Weekends are strictly walk-in only to accommodate all our sukis fairly.",
      icon: "fa-chair",
    },
    {
      id: 2,
      question: "Is there parking available?",
      answer:
        "We have limited street parking available directly in front of the restaurant, as well as a designated drop-off/pick-up area for delivery riders.",
      icon: "fa-car",
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer:
        "We accept Cash, GCash, Maya, and major Credit/Debit cards. Contactless payment is highly encouraged!",
      icon: "fa-wallet",
    },
    {
      id: 4,
      question: "Do you offer food delivery?",
      answer:
        "Yes! You can find us on GrabFood and FoodPanda. You can also call our branch directly to arrange for bulk orders or local pickup.",
      icon: "fa-motorcycle",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/10 font-poppins relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transform transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight">
            Good to Know
          </h2>
          <p className="text-lg text-dark/70">
            Quick answers to the most common questions from our guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-white p-8 rounded-4px shadow-sm hover:shadow-md transition-all duration-500 border border-secondary/20 flex flex-col sm:flex-row gap-6 transform ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-primary">
                <i className={`fa ${faq.icon} text-xl`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-3 leading-tight">
                  {faq.question}
                </h3>
                <p className="text-dark/70 leading-relaxed text-sm md:text-dark">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
