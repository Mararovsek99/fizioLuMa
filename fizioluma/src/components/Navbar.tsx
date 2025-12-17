"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";

interface NavbarProps {
  onOpenPopup: () => void;
}

export const Navbar = ({ onOpenPopup }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("home");

  const navigation = [
    { name: "Domov", href: "home" },
    { name: "O meni", href: "aboutme" },
    { name: "Terapije", href: "therapy" },
    { name: "Mnenja strank", href: "Testimonials" },
    { name: "Kontakt", href: "contact" },
  ];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    navigation.forEach((item) => {
      const section = document.getElementById(item.href);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navigation.forEach((item) => {
        const section = document.getElementById(item.href);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [navigation]);

  return (
    <div className="w-full bg-navbg border-b-2 border-border sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container relative flex flex-wrap items-center justify-between p-5 mx-auto lg:justify-between xl:px-1">
        <Link href="/">
          {
            <Image
              src="/img/logo.png"
              width={200}
              height={50}
              alt="Fizio Luma Logo"
              className="h-auto"
            />
          }
        </Link>

        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <button
              onClick={onOpenPopup}
              className="px-6 py-2 text-white bg-themecolor rounded-md md:ml-5"
            >
              Naroči se
            </button>
          </div>
        </div>

        <Disclosure>
          {({ open, close }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-themecolor focus:text-themecolor focus:bg-indigo-100 focus:outline-none "
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                {navigation.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.href}`}
                    onClick={(e) => {
                      handleClick(e, item.href);
                      close(); // Dodano zapiranje mobilnega menija po kliku
                    }}
                    className={`
                        w-full px-4 py-2 -ml-4 rounded-md focus:outline-none 
                        hover:text-themecolor focus:text-themecolor
                        ${
                          activeSection === item.href
                            ? "text-themecolor font-bold border-b-2 border-themecolor"
                            : "text-navbtn"
                        }
                      `}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Gumb za naročilo v mobilnem meniju, ki odpre popup in zapre meni */}
                <button
                  onClick={() => {
                    onOpenPopup();
                    close();
                  }}
                  className="w-full px-6 py-2 mt-3 text-center text-white bg-themecolor rounded-md lg:ml-5"
                >
                  Naroči se
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a
                  href={`#${menu.href}`}
                  onClick={(e) => handleClick(e, menu.href)}
                  className={`
                    inline-block px-4 py-2 text-lg font-medium no-underline rounded-md
                    hover:text-navbtnfocus focus:text-navbtnfocus 
                    ${
                      activeSection === menu.href
                        ? "text-themecolor border-b-2 border-themecolor bg-themecolor/10"
                        : "text-navbtn"
                    }
                  `}
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
