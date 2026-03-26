import { useState } from "react";
import { Link } from "react-router-dom";
// If your logo is in your src/assets folder, import it like this:
// import logoImg from '../assets/your-logo.png';

export function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  // If you are using an image from your public folder, you can just use the path as a string.
  // Example: const logoPath = "/logo.png";
  const logoPath = "src/assets/logo.png"; // Replace this string with your actual logo path or imported variable

  return (
    <nav className="bg-base font-poppins shadow-sm shadow-primary/10 fixed w-full z-50 border-b border-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {" "}
          {/* Added items-center here for better vertical alignment */}
          {/* BRANDING */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              {" "}
              {/* Increased gap slightly for the image */}
              {/* Added the image tag. h-12 w-12 keeps it a square. rounded-md fits the theme. */}
              <img
                src={logoPath}
                alt="La Cocina Inasal Logo"
                className="h-12 w-12 object-cover rounded-md shadow-sm border border-secondary/20"
              />
              <span className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
                La Cocina Inasal
              </span>
            </Link>
          </div>
          {/* DESKTOP MENU */}
          <div className="hidden md:flex md:items-center space-x-8">
            <Link
              to={"/"}
              className="text-dark hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to={"/menu"}
              className="text-dark hover:text-primary font-medium transition-colors"
            >
              Menu
            </Link>
            <Link
              to={"/about"}
              className="text-dark hover:text-primary font-medium transition-colors"
            >
              Our Story
            </Link>
            <Link
              to={"/contact"}
              className="text-dark hover:text-primary font-medium transition-colors"
            >
              Location
            </Link>

            {/* CALL TO ACTION BUTTON */}
            <button className="bg-primary text-white px-6 py-2.5 rounded-full font-medium shadow-md shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 transition-all flex items-center">
              <i className="fa fa-shopping-bag mr-2"></i> Order Now
            </button>
          </div>
          {/* MOBILE MENU BUTTON */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary/80 focus:outline-none p-2"
            >
              {isOpen ? (
                <i className="fa fa-times fa-2x"></i>
              ) : (
                <i className="fa fa-bars fa-2x"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-base border-t border-secondary/30 shadow-lg absolute w-full pb-4">
          <Link
            to={"/"}
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 text-dark hover:bg-secondary/20 hover:text-primary font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to={"/menu"}
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 text-dark hover:bg-secondary/20 hover:text-primary font-medium transition-colors"
          >
            Menu
          </Link>
          <Link
            to={"/about"}
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 text-dark hover:bg-secondary/20 hover:text-primary font-medium transition-colors"
          >
            Our Story
          </Link>
          <Link
            to={"/contact"}
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 text-dark hover:bg-secondary/20 hover:text-primary font-medium transition-colors"
          >
            Location
          </Link>
          <div className="px-6 mt-2">
            <button className="w-full text-center px-4 py-3 bg-primary text-white rounded-xl font-medium shadow-md shadow-primary/20 hover:bg-primary/90 transition-all flex justify-center items-center">
              <i className="fa fa-shopping-bag mr-2"></i> Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
