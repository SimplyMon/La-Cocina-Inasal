import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="min-h-screen bg-base font-poppins flex items-center justify-center relative overflow-hidden pt-20 pb-24">
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="text-center z-10 px-4 max-w-lg mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="relative">
          <h1 className="text-8xl md:text-[10rem] font-black text-primary/10 select-none tracking-tighter">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-secondary drop-shadow-md">
            <i className="fa fa-tools text-6xl md:text-7xl"></i>
          </div>
        </div>

        <div className="inline-block bg-white text-accent font-bold px-5 py-2 rounded-full text-xs uppercase tracking-widest mt-4 mb-6 shadow-sm border border-accent/20">
          Work in Progress
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-dark mb-4 tracking-tight">
          Oops! Recipe Not Found.
        </h2>
        <p className="text-lg text-dark/70 mb-10 leading-relaxed">
          Looks like this dish is still in the making! The page you are looking
          for doesn't exist, has been moved, or is currently under construction.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-primary text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-primary/30 hover:-translate-y-1 hover:bg-primary/90 transition-all group"
        >
          <i className="fa fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
