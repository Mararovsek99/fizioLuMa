"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { name: "Domov", href: "home" },
    { name: "O meni", href: "aboutme" },
    { name: "Terapije", href: "therapy" },
    { name: "Mnenja strank", href: "Testimonials" },
    { name: "Kontakt", href: "contact" },
  ];

  // Funkcija za gladko drsenje (ostane nespremenjena)
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      if (window.history.pushState) {
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
  };

  return (
    <div className="w-full bg-navbg border-b-2 border-border sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container relative flex flex-wrap items-center justify-between p-5 mx-auto lg:justify-between xl:px-1">
        {/* Logo - Link na / (vrh strani) ostane Link komponenta */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-themecolor">
            <span>
              <Image
                src="/img/logo.png"
                width="250"
                alt="N"
                height="250"
                className="w-48"
              />
            </span>
          </span>
        </Link>

        {/* Gumb "Naroči se"  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              // Predvidevam, da ta povezava vodi na drugo stran ali modal/formular
              href="/narocise"
              className="px-6 py-2 text-white bg-themecolor rounded-md md:ml-5"
            >
              Naroči se
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              {/* ... koda gumba za mobilni meni ... */}
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-themecolor focus:text-themecolor focus:bg-indigo-100 focus:outline-none "
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {/* Prikaz X ikone, ko je meni odprt */}
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {/* Prikaz Hamburger ikone, ko je meni zaprt */}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {/* MOBILNA NAVIGACIJA: Uporaba <a> in onClick */}
                  {navigation.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.href}`} // Dodan #
                      onClick={(e) => handleClick(e, item.href)}
                      className="w-full px-4 py-2 -ml-4 text-navbtn rounded-md  hover:text-themecolor focus:text-themecolor  focus:outline-none"
                    >
                      {item.name}
                    </a>
                  ))}
                  {/* Ta "Get Started" sem pustil kot Link, lahko ga tudi spremenite v <a> */}
                  <Link
                    href="/"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-softgrey rounded-md lg:ml-5"
                  >
                    Naroči se
                  </Link>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {/* NAMIZNA NAVIGACIJA: Uporaba <a> in onClick */}
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a // Zamenjano iz <Link> v <a>
                  href={`#${menu.href}`} // Dodan #
                  onClick={(e) => handleClick(e, menu.href)}
                  className="inline-block px-4 py-2 text-lg font-medium text-navbtn no-underline rounded-md  hover:text-navbtnfocus focus:text-navbtnfocus "
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
