"use client";

import { type ElementType, type MouseEvent } from "react";
import {
  AcademicCapIcon,
  UsersIcon,
  CheckCircleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/courseOfTherapy.jpeg";
import { Kaushan_Script } from "next/font/google";

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

interface StatCounterProps {
  endValue: number;
  label: string;
  suffix: string;
  icon: ElementType;
}

interface HeroProps {
  onOpenPopup: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 28,
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

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const statItemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease,
    },
  },
};

const floatingWordVariants = {
  initial: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  animate: {
    y: [0, -4, 0],
    scale: [1, 1.05, 1],
    opacity: [0.9, 1, 0.9],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut" as const,
    },
  },
};

const StatCounter = ({
  endValue,
  label,
  suffix,
  icon: Icon,
}: StatCounterProps) => {
  const shouldReduceMotion = useReducedMotion();

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={statItemVariants}
      className="flex flex-col items-center rounded-2xl px-4 py-6 text-center"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45, ease }}
      >
        <Icon className="mb-3 h-8 w-8 text-themecolor sm:h-10 sm:w-10 md:h-12 md:w-12" />
      </motion.div>

      <div className="mb-2 text-4xl font-extrabold leading-none text-themecolor sm:text-5xl md:text-6xl">
        {inView ? (
          <CountUp start={0} end={endValue} duration={5} suffix={suffix} />
        ) : (
          `${endValue}${suffix}`
        )}
      </div>

      <p className="max-w-[14ch] text-base font-medium leading-snug text-gray-700 sm:text-lg md:text-xl">
        {label}
      </p>
    </motion.div>
  );
};

export const Hero = ({ onOpenPopup }: HeroProps) => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToTherapy = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = "therapy";
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

  return (
    <>
      <section className="relative min-h-screen overflow-hidden xl:h-[100svh] xl:min-h-[100svh]">
        {/* MOBILE BACKGROUND IMAGE */}
        <div className="absolute inset-0 lg:hidden">
          <motion.div
            initial={shouldReduceMotion ? false : { scale: 1.04 }}
            animate={shouldReduceMotion ? undefined : { scale: 1 }}
            transition={{ duration: 1.1, ease }}
            className="absolute inset-0"
          >
            <Image
              src={heroImg}
              alt="Fizioterapevtska obravnava"
              priority
              placeholder="blur"
              fill
              sizes="100vw"
              quality={75}
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* XL DESKTOP RIGHT IMAGE */}
        <motion.div
          variants={imageVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          className="absolute inset-y-0 right-0 hidden w-[46%] xl:block 2xl:w-[47%]"
        >
          <motion.div
            initial={shouldReduceMotion ? false : { scale: 1.03 }}
            animate={shouldReduceMotion ? undefined : { scale: 1 }}
            transition={{ duration: 1.1, ease }}
            className="relative h-full w-full"
          >
            <Image
              src={heroImg}
              alt="Fizioterapevtska obravnava"
              priority
              placeholder="blur"
              fill
              sizes="46vw"
              quality={80}
              className="object-cover object-center"
            />

            {/* SOFT EDGE / BLEND */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#f3f3f1] via-[#f3f3f1] via-45% to-transparent xl:w-56 2xl:w-72" />

            {/* dodatni mehak fade čez rob slike */}
            <div className="absolute inset-y-0 left-0 w-20 bg-[#f3f3f1] blur-3xl xl:w-28 2xl:w-36" />

            {/* še en ultra mehak sloj čez sam rob slike */}
            <div className="absolute inset-y-0 left-4 w-12 bg-[#f3f3f1]/80 blur-2xl xl:left-6 xl:w-16" />
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <Container className="relative z-10 px-4 py-16 pt-48 sm:px-6 sm:py-20 lg:px-8 lg:py-0 lg:pt-40 xl:flex xl:h-[100svh] xl:items-center xl:pt-0">
          <motion.div
            className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,560px)_minmax(380px,480px)] lg:gap-12 xl:h-full xl:w-full xl:grid-cols-[minmax(0,560px)_minmax(380px,480px)] xl:gap-16"
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* BESEDILO */}
            <motion.div
              variants={heroContainerVariants}
              className="order-1 mx-auto flex w-full max-w-md min-w-0 flex-col items-center text-center lg:mx-0 sm:mt-40 lg:max-w-[560px] lg:items-start lg:text-left"
            >
              <motion.h1
                variants={fadeUpVariants}
                className="font-serif text-5xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl lg:text-mainblack xl:text-[4.25rem]"
              >
                Vaša pot do{" "}
                <motion.span
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 10, scale: 0.98 }
                  }
                  animate={
                    shouldReduceMotion ? undefined : ["visibleWord", "floating"]
                  }
                  variants={{
                    visibleWord: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.8,
                        delay: 0.35,
                        ease,
                      },
                    },
                    floating: floatingWordVariants.animate,
                  }}
                  className={`${kaushan.className} inline-block text-5xl lg:text-6xl`}
                  style={{
                    textShadow: "0 0 18px rgba(255,255,255,0.18)",
                  }}
                >
                  boljšega
                </motion.span>{" "}
                počutja
              </motion.h1>

              <motion.p
                variants={fadeUpVariants}
                className="mx-auto mt-4 max-w-sm text-lg leading-7 text-white/90 sm:mt-6 sm:max-w-lg sm:text-lg sm:leading-8 lg:mx-0 lg:max-w-[34rem] lg:text-xl lg:text-gray-500"
              >
                Individualen pristop k vašemu zdravju.
                <br className="sm:hidden" />
                Strokovne fizioterapevtske storitve v
                <br className="sm:hidden" />
                prijetnem in sproščenem okolju.
                <br className="sm:hidden" />
              </motion.p>

              <motion.div
                variants={fadeUpVariants}
                className="mt-28 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap lg:w-auto"
              >
                <motion.button
                  onClick={onOpenPopup}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -2, transition: { duration: 0.2 } }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-themecolor px-6 py-3 text-lg mb-2 font-medium text-white transition duration-200 hover:brightness-110 sm:px-8 sm:py-4"
                >
                  Naroči se
                </motion.button>

                <motion.a
                  href="#therapy"
                  onClick={handleScrollToTherapy}
                  rel="noopener"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -2, transition: { duration: 0.2 } }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-themecolor ring-2 ring-inset ring-white/70 transition-colors duration-200 hover:bg-themecolor hover:text-white hover:ring-themecolor sm:px-8 sm:py-4 sm:text-lg lg:ring-themecolor"
                >
                  Več o storitvah
                </motion.a>
              </motion.div>
            </motion.div>

            {/* LG/TABLET ORIGINAL IMAGE */}
            <motion.div
              variants={imageVariants}
              className="order-2 hidden w-full justify-end lg:flex xl:hidden"
            >
              <div className="w-full max-w-[460px] overflow-hidden rounded-2xl shadow-2xl xl:max-w-[500px]">
                <motion.div
                  initial={shouldReduceMotion ? false : { scale: 1.03 }}
                  animate={shouldReduceMotion ? undefined : { scale: 1 }}
                  transition={{ duration: 1.1, ease }}
                >
                  <Image
                    src={heroImg}
                    alt="Fizioterapevtska obravnava"
                    priority
                    placeholder="blur"
                    width={500}
                    height={620}
                    sizes="(max-width: 1024px) 0px, (max-width: 1280px) 460px, 500px"
                    quality={80}
                    className="h-[520px] w-full object-cover xl:h-[580px]"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* XL IMAGE SPACER */}
            <div className="order-2 hidden xl:block" />
          </motion.div>
        </Container>
      </section>

      {/* STATISTIKA */}
      <section className="w-full bg-softgrey/60 py-8 shadow-2xl sm:mt-10 sm:py-10 lg:py-12">
        <Container className="px-4 sm:px-6">
          <motion.div
            className="mx-auto max-w-7xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={fadeUpVariants}
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, ease }}
              className="text-center text-base text-gray-700 sm:text-lg md:text-xl"
            >
              Več kot <span className="font-semibold text-themecolor">10+</span>{" "}
              certifikatov
            </motion.div>

            <motion.div
              className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-4 lg:gap-8"
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <StatCounter
                endValue={5}
                label="Let izkušenj"
                suffix="+"
                icon={AcademicCapIcon}
              />

              <StatCounter
                endValue={350}
                label="Zadovoljnih strank"
                suffix="+"
                icon={UsersIcon}
              />

              <StatCounter
                endValue={1180}
                label="Uspešno obravnavanih pacientov"
                suffix="+"
                icon={CheckCircleIcon}
              />

              <StatCounter
                endValue={12}
                label="Različnih terapij"
                suffix="+"
                icon={LightBulbIcon}
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};
