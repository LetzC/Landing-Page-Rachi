import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const aStyle =
  "relative transition-colors text-white hover:border-b-[1px] border-gray-400 pb-4 w-full";

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
          <nav className="flex flex-col absolute top-14 text-center p-8 gap-8 bg-zinc-800 left-0 w-full ">
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
