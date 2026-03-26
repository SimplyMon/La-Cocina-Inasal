import { useState, useEffect, useRef } from "react";

interface MenuItem {
  id: number;
  category: string;
  name: string;
  desc: string;
  price: string;
  img: string;
  tag?: string;
}

interface AnimatedMenuCardProps {
  item: MenuItem;
  index: number;
}

const AnimatedMenuCard = ({ item, index }: AnimatedMenuCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = cardRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 group flex flex-col transform ease-out border border-secondary/10 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
    >
      <div className="relative h-56 overflow-hidden bg-base">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        {item.tag && (
          <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
            {item.tag}
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors leading-tight">
            {item.name}
          </h3>
          <span className="text-xl font-black text-primary whitespace-nowrap">
            {item.price}
          </span>
        </div>

        <p className="text-dark/70 text-sm leading-relaxed mt-2 flex-1">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export function MenuScreen() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Paborito Meals",
    "Sizzling Meals",
    "Special Meals",
    "Breakfast Meals",
    "Merienda Meals",
    "Desserts",
    "Side Dish",
  ];

  const fullMenu: MenuItem[] = [
    {
      id: 1,
      category: "Paborito Meals",
      name: "Grilled Pitso",
      desc: "Juicy grilled chicken oyster cut, marinated in savory spices with a signature smoky flavor.",
      price: "₱179",
      img: "/src/assets/menu/pitso.jpg",
      tag: "Best Seller",
    },
    {
      id: 2,
      category: "Paborito Meals",
      name: "Bulalo",
      desc: "Hearty beef shank soup simmered until tender, with rich marrow broth, corn, cabbage, and potatoes.",
      price: "₱169",
      img: "/src/assets/menu/bulalo.jpg",
    },
    {
      id: 3,
      category: "Paborito Meals",
      name: "Boneless Bangus",
      desc: "Deboned milkfish marinated in vinegar and garlic, and stuffed with tomatoes and onions.",
      price: "₱169",
      img: "/src/assets/menu/bbangus.jpg",
    },
    {
      id: 4,
      category: "Paborito Meals",
      name: "Inihaw na Bangus",
      desc: "Marinated in lemongrass, calamansi, and annatto oil, grilled over hot coals.",
      price: "₱169",
      img: "/src/assets/menu/ibangus.jpg",
    },
    {
      id: 5,
      category: "Sizzling Meals",
      name: "Sizzling Bulalo",
      desc: "Tender beef shank with rich marrow, served sizzling with savory gravy and vegetables.",
      price: "₱179",
      img: "/src/assets/menu/sizbulalo.jpg",
      tag: "Chef's Choice",
    },
    {
      id: 6,
      category: "Sizzling Meals",
      name: "Bangus Sisig",
      desc: "Flaked milkfish sautéed with onions, chili, and citrus, served sizzling on a hot plate.",
      price: "₱159",
      img: "/src/assets/menu/bsisig.jpg",
    },
    {
      id: 7,
      category: "Sizzling Meals",
      name: "Sisig",
      desc: "Crispy chopped pork with onions and chili, served sizzling and packed with bold flavor.",
      price: "₱159",
      img: "/src/assets/menu/sisig.jpg",
    },
    {
      id: 8,
      category: "Special Meals",
      name: "Beef Steak",
      desc: "Tender beef slices sautéed in soy sauce, calamansi, and onions for a savory, tangy flavor.",
      price: "₱149",
      img: "/src/assets/menu/bsteak.jpg",
    },
    {
      id: 9,
      category: "Special Meals",
      name: "Sinigang na Baka",
      desc: "Beef in a sour tamarind broth with kangkong, radish, and eggplant.",
      price: "₱149",
      img: "/src/assets/menu/sbaka.jpg",
    },
    {
      id: 10,
      category: "Special Meals",
      name: "Sinigang na Bangus",
      desc: "Milkfish simmered in a tangy tamarind soup with fresh vegetables.",
      price: "₱149",
      img: "/src/assets/menu/sbangus.jpg",
    },
    {
      id: 11,
      category: "Special Meals",
      name: "Caldereta",
      desc: "Beef stew cooked in a rich tomato-based sauce with potatoes, carrots, and bell peppers.",
      price: "₱149",
      img: "/src/assets/menu/caldereta.jpg",
    },
    {
      id: 12,
      category: "Special Meals",
      name: "Garlic Pepper Beef",
      desc: "Tender beef strips sautéed with garlic and black pepper for a bold, savory kick.",
      price: "₱149",
      img: "/src/assets/menu/sinigang.jpg",
    },
    {
      id: 13,
      category: "Special Meals",
      name: "Beef Broccoli",
      desc: "Beef slices stir-fried with fresh broccoli in a savory oyster-based sauce.",
      price: "₱149",
      img: "/src/assets/menu/sbangus.jpg",
    },
    {
      id: 14,
      category: "Breakfast Meals",
      name: "Cornsilog",
      desc: "Sweet corned beef served with garlic rice and a fried egg.",
      price: "₱149",
      img: "/src/assets/menu/corn.jpg",
    },
    {
      id: 15,
      category: "Breakfast Meals",
      name: "Tapsilog",
      desc: "Classic cured beef tapa with garlic rice and a sunny-side-up egg.",
      price: "₱149",
      img: "/src/assets/menu/tapsi.jpg",
    },
    {
      id: 16,
      category: "Breakfast Meals",
      name: "Hotsilog",
      desc: "Juicy hotdog served with garlic rice and a fried egg.",
      price: "₱149",
      img: "/src/assets/menu/hotsilog.jpg",
    },
    {
      id: 17,
      category: "Breakfast Meals",
      name: "Chixsilog",
      desc: "Savory fried chicken served with garlic rice and a fried egg.",
      price: "₱149",
      img: "/src/assets/menu/chix.jpg",
    },
    {
      id: 18,
      category: "Merienda Meals",
      name: "Pancit Canton",
      desc: "Stir-fried egg noodles with vegetables and savory sauce, topped with meat and seafood.",
      price: "₱89",
      img: "/src/assets/menu/canton.jpg",
    },
    {
      id: 19,
      category: "Merienda Meals",
      name: "Pancit Bihon",
      desc: "Light rice noodles sautéed with vegetables, meat, and a flavorful soy-based seasoning.",
      price: "₱89",
      img: "/src/assets/menu/bihon.jpg",
    },
    {
      id: 20,
      category: "Merienda Meals",
      name: "Palabok",
      desc: "Rice noodles topped with rich shrimp sauce, crushed chicharrón, egg, and garlic.",
      price: "₱89",
      img: "/src/assets/menu/palabok.jpg",
    },
    {
      id: 21,
      category: "Merienda Meals",
      name: "Spaghetti",
      desc: "Filipino-style sweet spaghetti with savory meat sauce, hotdogs, and grated cheese.",
      price: "₱79",
      img: "/src/assets/menu/spag.jpg",
    },
    {
      id: 22,
      category: "Merienda Meals",
      name: "Burger",
      desc: "Juicy beef patty in a soft bun with fresh vegetables and a flavorful sauce.",
      price: "₱79",
      img: "/src/assets/menu/burger.jpg",
    },
    {
      id: 23,
      category: "Desserts",
      name: "Classic Halo-Halo",
      desc: "Shaved ice layered with sweetened beans, jellies, ube, and leche flan, topped with evaporated milk.",
      price: "₱89",
      img: "/src/assets/menu/halo.jpg",
    },
    {
      id: 24,
      category: "Desserts",
      name: "Buko Pandan",
      desc: "Sweet young coconut with pandan jelly in a creamy, chilled dessert mix.",
      price: "₱69",
      img: "/src/assets/menu/pandan.jpg",
    },
    {
      id: 25,
      category: "Desserts",
      name: "Saging con Yelo",
      desc: "Crushed ice with sweet saba bananas, brown sugar, and milk for a refreshing treat.",
      price: "₱69",
      img: "/src/assets/menu/saging.jpg",
    },
    {
      id: 26,
      category: "Side Dish",
      name: "Chopsuey",
      desc: "Stir-fried mixed vegetables with meat and a light savory sauce.",
      price: "₱89",
      img: "/src/assets/menu/chop.jpg",
    },
    {
      id: 27,
      category: "Side Dish",
      name: "Kangkong",
      desc: "Fresh water spinach sautéed with garlic and savory seasonings.",
      price: "₱89",
      img: "/src/assets/menu/kangkong.jpg",
    },
  ];

  const filteredMenu =
    activeCategory === "All"
      ? fullMenu
      : fullMenu.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-base font-poppins pt-20 pb-24">
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[80px] -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Our Menu
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Explore our authentic selection of lutong bahay. Prepared fresh
            daily using traditional recipes passed down through generations.
          </p>
        </div>
      </section>

      <section className="sticky top-20 z-40 bg-base/90 backdrop-blur-md border-b border-secondary/30 py-4 mb-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-2 -mb-2 hide-scrollbar gap-3 md:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md shadow-primary/30 transform scale-105"
                    : "bg-white text-dark/70 border border-secondary/30 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[50vh]">
        {filteredMenu.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMenu.map((item, index) => (
              <AnimatedMenuCard
                key={`${item.id}-${activeCategory}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-dark/50">
              Menu items coming soon.
            </h3>
          </div>
        )}
      </section>
    </div>
  );
}
