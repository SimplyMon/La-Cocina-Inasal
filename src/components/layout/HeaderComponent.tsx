import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/src/assets/logo.png";

export function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const applySolidStyle = !isHomePage || isScrolled;

  return (
    <nav
      className={`font-poppins fixed w-full z-50 transition-all duration-300 ${
        applySolidStyle
          ? "bg-base shadow-md border-b border-secondary/30 py-0"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="La Cocina Inasal Logo"
                className="h-12 w-12 object-cover rounded-md shadow-sm border border-secondary/20"
              />
              <span
                className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  applySolidStyle ? "text-primary" : "text-secondary"
                }`}
              >
                La Cocina Inasal
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center space-x-8">
            <Link
              to={"/"}
              className={`font-medium transition-colors duration-300 ${
                applySolidStyle
                  ? "text-dark hover:text-primary"
                  : "text-base hover:text-secondary"
              }`}
            >
              Home
            </Link>
            <Link
              to={"/menu"}
              className={`font-medium transition-colors duration-300 ${
                applySolidStyle
                  ? "text-dark hover:text-primary"
                  : "text-base hover:text-secondary"
              }`}
            >
              Menu
            </Link>
            <Link
              to={"/about"}
              className={`font-medium transition-colors duration-300 ${
                applySolidStyle
                  ? "text-dark hover:text-primary"
                  : "text-base hover:text-secondary"
              }`}
            >
              Our Story
            </Link>
            <Link
              to={"/contact"}
              className={`font-medium transition-colors duration-300 ${
                applySolidStyle
                  ? "text-dark hover:text-primary"
                  : "text-base hover:text-secondary"
              }`}
            >
              Contact
            </Link>

            <button className="bg-primary text-white px-6 py-2.5 rounded-full font-medium shadow-md shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 transition-all flex items-center">
              <i className="fa fa-shopping-bag mr-2"></i> Order Now
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 transition-colors duration-300 ${
                applySolidStyle
                  ? "text-primary hover:text-primary/80"
                  : "text-base hover:text-secondary"
              }`}
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
            Contact
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
