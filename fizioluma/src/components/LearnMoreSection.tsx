"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";

import tileOneImg from "../../public/img/frequentProblems.jpeg";
import tileTwoImg from "../../public/img/courseOfTherapy.jpeg";
import tileThreeImg from "../../public/img/approch.jpeg";
import tileFourImg from "../../public/img/knoweledge.jpeg";

interface LearnMoreItem {
  title: string;
  subtitle: string;
  href: string;
  image: StaticImageData;
}

const items: LearnMoreItem[] = [
  {
    title: "Najpogostejše težave",
    subtitle: "Preverite, pri katerih bolečinah in težavah vam lahko pomagam.",
    href: "/tezave",
    image: tileOneImg,
  },
  {
    title: "Potek terapije",
    subtitle: "Poglejte, kako poteka prvi pregled in nadaljnja obravnava.",
    href: "/potek-terapije",
    image: tileTwoImg,
  },
  {
    title: "Terapije in pristopi",
    subtitle: "Spoznajte metode, terapije in pristope, ki jih uporabljam.",
    href: "/terapije",
    image: tileThreeImg,
  },
  {
    title: "Znanje in izkušnje",
    subtitle: "Preberite več o mojem delu, izobraževanjih in pristopu.",
    href: "/znanje-in-izkusnje",
    image: tileFourImg,
  },
];

export const LearnMoreSection = () => {
  return (
    <Container className="px-4 sm:px-6 mb-20">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group relative block h-[180px] overflow-hidden rounded-2xl shadow-lg sm:h-[260px] md:h-[240px]"
          >
            {/* IMAGE */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/55 transition duration-300 group-hover:bg-black/45" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col p-4 sm:p-6">
              <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/90 sm:mt-3 sm:text-base">
                {item.subtitle}
              </p>

              <span className="mt-auto text-center text-sm font-semibold text-white sm:text-base">
                <span className="border-b border-white/70 pb-1">
                  Preberi več
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};
