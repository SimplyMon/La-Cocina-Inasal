export function Section1() {
  return (
    <section className="relative bg-primary text-white py-20 md:py-32 font-poppins overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-base/10 rounded-full blur-[80px] -z-10 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block bg-white/10 backdrop-blur-sm text-secondary font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 border border-white/20">
          Kwento Ng Aming Pamilya
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
          Our Story
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          From a humble kitchen in the province to your favorite neighborhood
          Filipino Cuisine. Discover the story, passion, and family secrets
          behind La Cocina Inasal.
        </p>
      </div>
    </section>
  );
}
