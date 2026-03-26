import { Link } from "react-router-dom";
import bgHero from "../../assets/bg.png";
import pitso from "../../assets/menu/pitso.JPG";
import bulalo from "../../assets/menu/bulalo.JPG";
import bbangus from "../../assets/menu/bbangus.JPG";
import ibangus from "../../assets/menu/ibangus.JPG";
import sisig from "../../assets/menu/sisig.JPG";
import sbaka from "../../assets/menu/sbaka.JPG";
import sbangus from "../../assets/menu/sbangus.JPG";

interface FoodItem {
  name: string;
  desc: string;
  img: string;
}

interface FoodCardProps {
  dish: FoodItem;
}

export function Section1() {
  const menuAssets: FoodItem[] = [
    {
      name: "Grilled Pitso",
      desc: "Juicy grilled chicken oyster cut, marinated in savory spices with a signature smoky flavor.",
      img: pitso,
    },
    {
      name: "Bulalo",
      desc: "Hearty beef shank soup simmered until tender, with rich marrow broth, corn, cabbage, and potatoes.",
      img: bulalo,
    },
    {
      name: "Boneless Bangus",
      desc: "Deboned milkfish marinated in vinegar and garlic, stuffed with tomatoes and onions.",
      img: bbangus,
    },
    {
      name: "Inihaw na Bangus",
      desc: "Marinated in lemongrass, calamansi, and annatto oil, grilled over hot coals.",
      img: ibangus,
    },
    {
      name: "Sisig",
      desc: "Crispy chopped pork with onions and chili, served sizzling and packed with bold flavor.",
      img: sisig,
    },
    {
      name: "Sinigang na Baka",
      desc: "Beef in a sour tamarind broth with kangkong, radish, and eggplant.",
      img: sbaka,
    },
    {
      name: "Sinigang na Bangus",
      desc: "Milkfish simmered in a tangy tamarind soup with fresh vegetables.",
      img: sbangus,
    },
  ];

  const scrollItems = [...menuAssets, ...menuAssets];

  const FoodCard = ({ dish }: FoodCardProps) => (
    <div className="relative rounded-2xl overflow-hidden shadow-lg h-[250px] sm:h-[280px] w-full shrink-0 group border-2 border-transparent hover:border-secondary/50 transition-all">
      <img
        src={dish.img}
        alt={dish.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#D22B1F] via-[#D22B1F]/60 to-transparent flex flex-col justify-end p-5">
        <h3 className="text-white font-bold text-xl md:text-2xl drop-shadow-md">
          {dish.name}
        </h3>
        <p className="text-white/90 text-sm leading-snug mt-1 drop-shadow-sm">
          {dish.desc}
        </p>
      </div>
      <div className="absolute top-3 left-3 bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
        <span className="text-[10px] sm:text-xs font-bold text-dark">
          Best Seller
        </span>
        <span className="text-secondary text-[10px] sm:text-xs tracking-widest">
          ★★★★★
        </span>
      </div>
      <div className="absolute top-3 right-3 bg-red-600 rounded-full h-8 w-8 flex items-center justify-center shadow-md">
        <i className="fa fa-heart text-white text-sm"></i>
      </div>
    </div>
  );

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-poppins flex pt-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgHero})` }}
      ></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch gap-12 flex-1">
        <div className="flex-1 flex flex-col justify-center text-center md:text-left py-12 md:py-20">
          <div className="inline-block bg-secondary text-dark font-bold px-5 py-2 rounded-full text-xs uppercase tracking-widest mb-6 shadow-md self-center md:self-start">
            Authentic Filipino Cuisine
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Savor the True <br />
            <span className="text-secondary">Filipino Cuisine.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium drop-shadow-sm">
            Beyond the ordinary. We serve masterfully crafted Filipino dishes
            using traditional recipes and the finest local ingredients. Genuine
            flavors, served with elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:bg-primary/90 transition-all flex justify-center items-center"
            >
              Franchise Inquiries
            </Link>
            <Link
              to="/menu"
              className="text-base px-8 py-3.5 rounded-full font-semibold shadow-md transition-all flex justify-center items-center border-2 border-base hover:border-secondary"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>

        <div className="flex-1 relative w-full h-[60vh] min-h-[500px] md:h-auto overflow-hidden drop-shadow-2xl [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)] mask-image:linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)">
          <div className="absolute inset-0 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 animate-scroll-up">
              {scrollItems.map((dish, index) => (
                <FoodCard key={`col1-${index}`} dish={dish} />
              ))}
            </div>
            <div className="flex flex-col gap-4 animate-scroll-down">
              {scrollItems.map((dish, index) => (
                <FoodCard key={`col2-${index}`} dish={dish} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
