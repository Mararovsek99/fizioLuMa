"use client";

import Image, { type StaticImageData } from "next/image";
import React, { type ReactElement, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/Container";

interface BenefitBullet {
  title: string;
  desc: string;
  icon: ReactNode;
}

interface BenefitsData {
  imgPos?: "left" | "right";
  title: string;
  desc: string;
  image: StaticImageData | string;
  bullets: BenefitBullet[];
}

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: BenefitsData;
}

interface BenefitProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  delay?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const descVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease,
      delay: 0.08,
    },
  },
};

const bulletVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export const Benefits = ({ data, imgPos }: Readonly<BenefitsProps>) => {
  const shouldReduceMotion = useReducedMotion();
  const imageRight = imgPos === "right" || data.imgPos === "right";

  return (
    <Container className="mb-20 px-4 sm:px-6 lg:p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:gap-12 xl:flex-row xl:items-start xl:gap-16">
        {/* SLIKA */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.28 }}
          variants={shouldReduceMotion ? undefined : imageVariants}
          className={`mt-6 flex w-full items-center justify-center xl:w-1/2 ${
            imageRight ? "xl:order-2" : ""
          }`}
        >
          <div className="w-full max-w-[520px] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={data.image}
              width={521}
              height={521}
              alt={data.title}
              placeholder="blur"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 521px"
              quality={80}
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>

        {/* TEKST */}
        <div
          className={`flex w-full items-center ${
            imageRight ? "xl:order-1 xl:justify-start" : "xl:justify-start"
          } xl:w-1/2`}
        >
          <div className="w-full min-w-0 max-w-[560px]">
            <div className="mt-4 flex w-full flex-col text-center xl:mt-0 xl:text-left">
              <motion.h3
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView={shouldReduceMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.55 }}
                variants={shouldReduceMotion ? undefined : titleVariants}
                className="mx-auto max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:mx-0"
              >
                {data.title}
              </motion.h3>

              <motion.p
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView={shouldReduceMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.55 }}
                variants={shouldReduceMotion ? undefined : descVariants}
                className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg lg:text-xl xl:mx-0"
              >
                {data.desc}
              </motion.p>
            </div>

            <div className="mt-8 w-full">
              {data.bullets.map((item, index) => (
                <Benefit
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  delay={index * 0.08}
                >
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

function Benefit({ title, icon, children, delay = 0 }: Readonly<BenefitProps>) {
  const shouldReduceMotion = useReducedMotion();

  const renderedIcon = React.isValidElement(icon)
    ? React.cloneElement(icon as ReactElement<{ className?: string }>, {
        className: "h-7 w-7 text-indigo-50",
      })
    : icon;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.6 }}
      variants={shouldReduceMotion ? undefined : bulletVariants}
      transition={shouldReduceMotion ? undefined : { delay }}
      className="mt-8 flex items-start space-x-3 last:mb-5"
    >
      <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-themecolor">
        {renderedIcon}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-lg font-medium text-gray-800 sm:text-xl">
          {title}
        </h4>
        <p className="mt-1 text-sm leading-6 text-gray-500 sm:text-base">
          {children}
        </p>
      </div>
    </motion.div>
  );
}
