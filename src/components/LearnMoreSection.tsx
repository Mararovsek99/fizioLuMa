"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
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

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
      delay: 0.08,
    },
  },
};

export const LearnMoreSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Container className="mb-20 px-4 sm:px-6">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        {items.map((item) => (
          <motion.div
            key={item.title}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.35 }}
            variants={shouldReduceMotion ? undefined : cardVariants}
          >
            <Link
              href={item.href}
              className="group relative block h-[180px] overflow-hidden rounded-2xl shadow-lg sm:h-[260px] md:h-[240px]"
            >
              {/* IMAGE */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="relative h-full w-full"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 1.04, transition: { duration: 0.45, ease } }
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* OVERLAY */}
              <motion.div
                className="absolute inset-0 bg-black/55"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        backgroundColor: "rgba(0, 0, 0, 0.45)",
                        transition: { duration: 0.3 },
                      }
                }
              />

              {/* CONTENT */}
              <motion.div
                className="absolute inset-0 flex flex-col p-4 sm:p-6"
                variants={shouldReduceMotion ? undefined : contentVariants}
              >
                <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/90 sm:mt-3 sm:text-base">
                  {item.subtitle}
                </p>

                <motion.span
                  className="mt-auto text-center text-sm font-semibold text-white sm:text-base"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -1, transition: { duration: 0.2 } }
                  }
                >
                  <span className="border-b border-white/70 pb-1">
                    Preberi več
                  </span>
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};
