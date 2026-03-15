"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";

// Začasne slike - zamenjaj kasneje s svojimi
import tileOneImg from "../../public/img/hero.jpeg";
import tileTwoImg from "../../public/img/hero.jpeg";
import tileThreeImg from "../../public/img/hero.jpeg";
import tileFourImg from "../../public/img/hero.jpeg";

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
    href: "/o-meni",
    image: tileFourImg,
  },
];

export const LearnMoreSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group relative block min-h-[340px] overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/35 transition duration-300 group-hover:bg-black/45" />

            <div className="absolute inset-0 flex flex-col p-6">
              <h3 className="text-white text-3xl font-bold leading-tight drop-shadow-md">
                {item.title}
              </h3>

              <p className="text-white/90 text-base leading-relaxed mt-3 drop-shadow-sm">
                {item.subtitle}
              </p>

              <span className="mt-auto mb-2 mx-auto text-white text-lg font-semibold border-b border-white/70 pb-1 w-fit">
                Preberi več
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};
