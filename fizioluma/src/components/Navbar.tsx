"use client";
import Link from "next/link";
import Image from "next/image";
// Import React hooks for state and lifecycle management (Scrollspy functionality)
import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  // State to hold the ID of the currently visible (active) section, default to 'home'
  const [activeSection, setActiveSection] = useState("home");

  // Array defining the navigation links (name: visible text, href: section ID)
  const navigation = [
    { name: "Domov", href: "home" },
    { name: "O meni", href: "aboutme" },
    { name: "Terapije", href: "therapy" },
    { name: "Mnenja strank", href: "Testimonials" },
    { name: "Kontakt", href: "contact" },
  ];

  /**
   * Smoothly scrolls the viewport to the target section based on its ID.
   * Prevents default link behavior and updates URL fragment.
   * NOTE: We rely solely on the Intersection Observer (in useEffect)
   * to determine the active state after the smooth scroll completes,
   * preventing the 'flickering' issue.
   * * @param {React.MouseEvent<HTMLAnchorElement>} e - The click event.
   * @param {string} targetId - The ID of the target section (e.g., 'aboutme').
   */
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Use scrollIntoView with 'smooth' behavior for animation
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Aligns the top of the element to the top of the viewport
      });

      // Update the URL fragment (hash) without triggering a page reload
      if (window.history.pushState) {
        // The second argument must be a string (e.g., empty string) in TypeScript
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
  };

  /**
   * Sets up the Intersection Observer for Scrollspy functionality.
   * This hook runs once after the component mounts.
   */
  useEffect(() => {
    // Defines how the observer detects intersection (center of the viewport)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is intersecting (visible)
          if (entry.isIntersecting) {
            // Update the active section state based on the element's ID
            setActiveSection(entry.target.id);
          }
        });
      },
      // Configuration: '-50% 0px -50% 0px' creates a center line intersection area
      // This means a section is "active" when its center passes the viewport center.
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    // Start observing all section elements defined in the navigation array
    navigation.forEach((item) => {
      const section = document.getElementById(item.href);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup function: unobserve elements when the component unmounts
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
        {/* Logo Link to Home */}
        <Link href="/">{/* ... Logo Image ... */}</Link>

        {/* 'Book Now' Button (visible on desktop) */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="/narocise" // Assuming this leads to a booking page
              className="px-6 py-2 text-white bg-themecolor rounded-md md:ml-5"
            >
              Naroči se
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              {/* Mobile Menu Toggle Button */}
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-themecolor focus:text-themecolor focus:bg-indigo-100 focus:outline-none "
              >
                {/* SVG for Hamburger / Close Icon */}
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {/* 'X' icon when menu is open */}
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {/* Hamburger icon when menu is closed */}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              {/* Mobile Menu Panel */}
              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {/* Mobile Navigation Links (using <a> for smooth scroll) */}
                  {navigation.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.href}`}
                      onClick={(e) => handleClick(e, item.href)}
                      // Dynamic class assignment for active state (Scrollspy)
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

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {/* Desktop Navigation Links (using <a> for smooth scroll and Scrollspy styles) */}
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a
                  href={`#${menu.href}`}
                  onClick={(e) => handleClick(e, menu.href)}
                  // Dynamic class assignment for active state (Scrollspy)
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
