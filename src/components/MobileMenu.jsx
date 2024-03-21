import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { navigation } from "../constants";

const MobileNav = ({ pathname }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(true);
  };

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="aline-middle">
          <MenuIcon onClick={handleToggle} className="cursor-pointer w-6 h-6" />
        </SheetTrigger>

        {isOpen && (
          <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <h1 className="text-xl lg:text-4xl font-semibold ml-5 cursor-pointer">
              <span className="text-xl lg:text-5xl text-blue-600 scroll-smooth font-bold">
                CL
              </span>
              eaner🧹
            </h1>

            <div className="flex flex-col items-center justify-center ">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className={`  text-2xl uppercase text-gray-700 transition-colors hover:text-blue-400
                } px-6 py-6 md:py-8 text-sm md:text-lg md:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-blue-500"
                    : "lg:text-black/80"
                } `}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </SheetContent>
        )}
      </Sheet>
    </div>
  );
};

export default MobileNav;
