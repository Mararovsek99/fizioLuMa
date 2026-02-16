"use client";
import React from "react";
import { Container } from "@/components/Container";

interface CtaProps {
  onOpenPopup: () => void;
}

export const Cta = ({ onOpenPopup }: CtaProps) => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-themecolor px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Imaš še kakšno vprašanje?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Odgovorim ti v enem dnevu!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <button
            onClick={onOpenPopup}
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-themecolor bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Vprašaj me!
          </button>
        </div>
      </div>
    </Container>
  );
};
