import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="relative border-t border-gray-100 bg-softgrey/10">
      <Container className="px-4 sm:px-6">
        <div className="mx-auto mt-6 grid max-w-screen-xl grid-cols-1 gap-8 py-8 text-center lg:grid-cols-4 lg:gap-10 lg:text-left">
          {/* LOGO */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center text-themecolor lg:justify-start"
            >
              <Image
                src="/img/logo.png"
                width={140}
                height={45}
                alt="Fizio Luma Logo"
                className="h-auto w-auto"
              />
            </Link>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 lg:mx-0">
              Kakršnakoli vprašanja?
            </p>
            <p className="mx-auto max-w-md text-sm leading-6 text-gray-500 lg:mx-0">
              Pišite mi ali me pokličite.
            </p>
          </div>

          {/* PODATKI PODJETJA (KOMPAKTNO) */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Podatki podjetja
            </h3>

            <div className="text-sm leading-5 text-gray-500 space-y-0.5">
              <p>Lucija Marovšek s.p.</p>
              <p>Davčna: 54149860</p>
              <p>Straža pri Novi Cerkvi 1</p>
              <p>3203 Nova Cerkev</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Sledi mi na socialnih omrežjih
            </h3>

            <div className="flex items-center justify-center space-x-4 text-gray-500 lg:justify-start">
              <a
                href="https://www.facebook.com/p/Fizioterapija-LuMa-61553308209404/?locale=sl_SI"
                target="_blank"
                rel="noopener"
                className="rounded-full p-2 transition hover:bg-white hover:text-themecolor"
              >
                <Facebook size={35} />
              </a>

              <a
                href="https://www.instagram.com/fizio_luma/"
                target="_blank"
                rel="noopener"
                className="rounded-full p-2 transition hover:bg-white hover:text-themecolor"
              >
                <Instagram size={35} />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
          © 2026 Fizio Luma · Made by{" "}
          <a
            href="https://www.linkedin.com/in/andrej-marov%C5%A1ek-78b040206/"
            target="_blank"
            rel="noopener"
            className="text-themecolor hover:underline"
          >
            Andrej Marovšek
          </a>
        </div>
      </Container>
    </footer>
  );
}

const Facebook = ({ size = 35 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const Instagram = ({ size = 35 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);
