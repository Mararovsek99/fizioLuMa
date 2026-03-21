"use client";
import React from "react";
import { Container } from "@/components/Container";

interface CtaProps {
  onOpenPopup: () => void;
}

export const Cta = ({ onOpenPopup }: CtaProps) => {
  return (
    <Container className="px-4 sm:px-6 my-12 sm:my-16 lg:my-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 rounded-2xl bg-themecolor px-6 py-8 text-white shadow-lg sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-12">
        {/* TEXT */}
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-xl font-semibold leading-snug sm:text-2xl lg:text-3xl">
            Imaš še kakšno vprašanje?
          </h2>

          <p className="mt-2 text-sm font-medium text-white/90 sm:text-base lg:text-xl">
            Odgovorim ti v enem dnevu!
          </p>
        </div>

        {/* BUTTON */}
        <div className="w-full flex-shrink-0 text-center lg:w-auto">
          <button
            onClick={onOpenPopup}
            className="inline-flex w-full items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-themecolor transition duration-200 hover:brightness-95 sm:w-auto sm:px-8 sm:py-4 sm:text-lg lg:px-10 lg:py-5"
          >
            Vprašaj me!
          </button>
        </div>
      </div>
    </Container>
  );
};
