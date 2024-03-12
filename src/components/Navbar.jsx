
import { Modal } from "./Modal";
import MobileNav from "./MobileMenu";
import { useLocation } from "react-router-dom";
import { navigation } from "../constants";
const Header = () => {
  const pathname = useLocation();

  return (
    <div className="flex sticky justify-between items-center border-b top-0 z-50 backdrop-blur-md bg-white/30 p-2">
      {/* left */}
      <a onClick={() => handleChange("#home")} href="#home" passHref>
        <h1 className="text-xl md:text-4xl font-semibold ml-5 cursor-pointer hover:spin-in-90">
          <span className="text-2xl lg:text-5xl text-blue-600 scroll-smooth font-bold">
            CL
          </span>
          eaner<span className="hover:scale-105">🧹</span>
        </h1>
      </a>
      {/* center */}

      <div className=" hidden items-center justify-center m-auto lg:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                // onClick={handleClick}
                className={`  text-2xl uppercase text-n-1 transition-colors hover:text-blue-400 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 text-sm lg:text-lg lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-blue-500"
                    : "lg:text-black/80"
                } `}
              >
                {item.title}
              </a>
            ))}
          </div>
       <MobileNav pathname={pathname} />
      {/* right */}
      <div className="cursor-pointer mr-5">
        <Modal />
      </div>
    </div>
  );
};

export default Header;
