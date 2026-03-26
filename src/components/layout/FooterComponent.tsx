import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

export function FooterComponent() {
  return (
    <footer className="bg-primary text-base font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="md:flex md:justify-between md:items-start gap-12">
          <div className="mb-12 md:mb-0 md:w-1/3">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="La Cocina Inasal Logo"
                className="h-12 w-12 object-cover rounded-md"
              />
              <span className="text-2xl font-bold text-secondary tracking-tight">
                La Cocina Inasal
              </span>
            </Link>
            <p className="mt-3 text-base/80 leading-relaxed max-w-sm">
              Bringing the authentic taste of Filipino Cuisine warmth straight
              to your plate, Served fresh daily.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:w-2/3">
            <div>
              <h4 className="text-secondary font-bold mb-4 tracking-wide">
                Explore
              </h4>
              <ul className="space-y-3 text-base/80">
                <li>
                  <Link
                    to="/"
                    className="hover:text-secondary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu"
                    className="hover:text-secondary transition-colors"
                  >
                    Our Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-secondary transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-secondary transition-colors"
                  >
                    Location
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-secondary font-bold mb-4 tracking-wide">
                Services
              </h4>
              <ul className="space-y-3 text-base/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Catering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Franchise
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Reservations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-secondary font-bold mb-4 tracking-wide">
                Follow Us
              </h4>
              <ul className="flex space-x-5 text-base/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors transform hover:scale-110 inline-block"
                  >
                    <i className="fab fa-facebook fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors transform hover:scale-110 inline-block"
                  >
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors transform hover:scale-110 inline-block"
                  >
                    <i className="fab fa-tiktok fa-lg"></i>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors transform hover:scale-110 inline-block"
                  >
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-secondary font-bold mb-4 tracking-wide">
                Contact
              </h4>
              <ul className="space-y-3 text-base/80">
                <li>
                  <a
                    href="mailto:lacocinainasal692@gmail.com"
                    className="hover:text-secondary transition-colors"
                  >
                    lacocinainasal692@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+639123456789"
                    className="hover:text-secondary transition-colors"
                  >
                    +63 995-098-2343
                  </a>
                </li>
                <li className="pt-2">
                  <span className="block font-medium text-base">
                    Open Daily:
                  </span>
                  9:00 AM - 8:00 PM
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-base/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-base/60 text-sm">
          <p>
            © {new Date().getFullYear()} La Cocina Inasal. All rights reserved.
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://mondev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-secondary/80 hover:text-secondary transition-colors"
            >
              Mon.Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
