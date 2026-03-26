import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HeaderComponent } from "./components/layout/HeaderComponent";
import { FooterComponent } from "./components/layout/FooterComponent";
import { NotFound } from "./components/layout/NotFound";
import { HomeScreen } from "./components/screen/HomeScreen";
import { MenuScreen } from "./components/screen/MenuScreen";
import { AboutScreen } from "./components/screen/AboutScreen";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
