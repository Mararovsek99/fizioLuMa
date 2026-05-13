"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onOpenPopup: () => void;
}

export const Navbar = ({ onOpenPopup }: NavbarProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");

  const navigation = [
    { name: "Domov", href: "/#home", sectionId: "home" },
    { name: "O meni", href: "/#aboutme", sectionId: "aboutme" },
    { name: "Ugodnosti", href: "/#benefits", sectionId: "benefits" },
    { name: "Terapije", href: "/#therapy", sectionId: "therapy" },
    { name: "Kontakt", href: "/#contact", sectionId: "contact" },
  ];

  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    if (!isHomePage) return;

    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      if (window.history.pushState) {
        window.history.pushState(null, "", `/#${targetId}`);
      }
    }
  };

  useEffect(() => {
    if (!isHomePage) return;

    const sections = navigation
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isHomePage]);

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full border-b border-border backdrop-blur-sm ${
        isHomePage && activeSection === "home"
          ? "bg-white/90 shadow-sm"
          : "bg-navbg"
      }`}
    >
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-4 lg:justify-between xl:px-1">
        <Link href="/">
          <Image
            src="/img/logo.png"
            width={150}
            height={50}
            alt="Fizio Luma Logo"
            loading="eager"
            className="h-auto w-[160px] md:w-[150px]"
          />
        </Link>

        <div className="nav__item ml-auto mr-2 gap-3 lg:order-2 lg:ml-0 lg:flex">
          <div className="nav__item mr-3 hidden lg:flex">
            <button
              onClick={onOpenPopup}
              className="rounded-md bg-themecolor px-6 py-2 text-white md:ml-5"
            >
              Naroči se
            </button>
          </div>
        </div>

        <Disclosure>
          {({ open, close }) => (
            <div className="lg:hidden">
              <Disclosure.Button
                aria-label="Toggle Menu"
                className={`rounded-md px-2 py-1 focus:outline-none ${
                  open
                    ? "fixed right-4 top-4 z-50 text-gray-700 hover:text-themecolor focus:bg-indigo-100 focus:text-themecolor"
                    : "text-gray-500 hover:text-themecolor focus:bg-indigo-100 focus:text-themecolor"
                }`}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="my-5 flex w-full flex-wrap">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      if (isHomePage) {
                        handleScrollClick(e, item.sectionId);
                      }
                      close();
                    }}
                    className={`-ml-4 w-full rounded-md px-4 py-2 focus:outline-none hover:text-themecolor focus:text-themecolor ${
                      isHomePage && activeSection === item.sectionId
                        ? "border-b-2 border-themecolor font-bold text-themecolor"
                        : "text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <button
                  onClick={() => {
                    onOpenPopup();
                    close();
                  }}
                  className="mt-3 w-full rounded-md bg-themecolor px-6 py-2 text-center text-white"
                >
                  Naroči se
                </button>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 items-center justify-end pt-6 lg:flex lg:pt-0">
            {navigation.map((menu, index) => (
              <li className="nav__item mr-3 list-none" key={index}>
                <Link
                  href={menu.href}
                  onClick={(e) => {
                    if (isHomePage) {
                      handleScrollClick(e, menu.sectionId);
                    }
                  }}
                  className={`inline-block rounded-md px-4 py-2 text-lg font-medium no-underline hover:text-navbtnfocus focus:text-navbtnfocus ${
                    isHomePage && activeSection === menu.sectionId
                      ? "border-b-2 border-themecolor bg-themecolor/10 text-themecolor"
                      : "text-navbtn"
                  }`}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
