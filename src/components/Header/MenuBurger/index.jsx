import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const aStyle = "text-zinc-800 hover:text-blue-800 transition-colors";

export default function MenuBurger() {
  const [status, setStatus] = useState(false);

  return (
    <>
      {status ? (
        <>
          <RiCloseLine
            onClick={() => setStatus(false)}
            className="absolute right-4 w-7 h-7 top-4 cursor-pointer"
          />
          <nav className="flex flex-col absolute right-4 top-14 text-center p-5 gap-4 bg-gray-200  rounded">
            <a href="#" className={aStyle}>
              Funcionalidades
            </a>
            <a href="#" className={aStyle}>
              App
            </a>
            <a href="#" className={aStyle}>
              Planos
            </a>
            <a href="#" className={aStyle}>
              Contato
            </a>
          </nav>
        </>
      ) : (
        <RiMenu3Fill
          onClick={() => setStatus(true)}
          className="w-5 h-5  cursor-pointer"
        />
      )}
    </>
  );
}
