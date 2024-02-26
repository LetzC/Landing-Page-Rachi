import logo from "../../../public/logo.svg";
import { useMediaQuery } from "react-responsive";
import MenuBurger from "./MenuBurger/index";

const aStyle = "text-zinc-800 hover:text-blue-800 transition-colors";

export default function Header() {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className="flex justify-between py-5 px-6 md:px-32">
      <a href="#">
        <img src={logo} alt="Logo Rachi" className="w-20 md:w-100" />
      </a>

      {isTablet ? (
        <MenuBurger />
      ) : (
        <nav className="flex gap-16">
          <a href="#functionality" className={aStyle}>
            Funcionalidades
          </a>
          <a href="#app" className={aStyle}>
            App
          </a>
          <a href="#plans" className={aStyle}>
            Planos
          </a>
          <a href="#contact" className={aStyle}>
            Contato
          </a>
        </nav>
      )}
    </header>
  );
}
