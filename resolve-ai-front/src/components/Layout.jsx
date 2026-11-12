import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const { pathname } = useLocation();

  // Volta pro começo quando troca de tela
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a
        href="#main"
        className="absolute left-3 -top-[60px] bg-primary text-white px-4 py-2.5 rounded-sm z-[999] transition-[top] duration-200 focus:top-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
