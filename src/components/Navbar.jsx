import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "home", label: "Home" },
  { href: "menu", label: "Menu" },
  { href: "our-story", label: "Our Story" },
  { href: "dining-hours", label: "Dining Hours" },
  { href: "tel:+14072035088", label: "Contact Us", isExternal: true },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight">
              <img
                src="https://popthaiorlando.com/wp-content/uploads/2024/01/pop-thai-transparent-300x140-1.png"
                alt="PopThai Logo"
                className="inline-block align-text-bottom"
                style={{ height: "1.25rem", width: "auto" }}
              />
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    className="p-2 text-black cursor-pointer link-hover shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="p-2 text-black cursor-pointer link-hover shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="lg:hidden flex justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="absolute top-16 left-0 z-20 bg-neutral-900 w-full p-6 flex flex-col items-center lg:hidden">
            <ul className="space-y-4 text-white text-lg">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.isExternal ? (
                    <a href={item.href} onClick={toggleNavbar}>
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      smooth={true}
                      duration={500}
                      onClick={toggleNavbar}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
