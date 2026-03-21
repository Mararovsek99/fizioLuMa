"use client";

import {
  AcademicCapIcon,
  UsersIcon,
  CheckCircleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.jpeg";
import { Kaushan_Script } from "next/font/google";

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

interface StatCounterProps {
  endValue: number;
  label: string;
  suffix: string;
  icon: React.ElementType;
}

interface HeroProps {
  onOpenPopup: () => void;
}

const StatCounter: React.FC<StatCounterProps> = ({
  endValue,
  label,
  suffix,
  icon: Icon,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center rounded-2xl px-4 py-6 text-center"
    >
      <Icon className="mb-3 h-8 w-8 text-themecolor sm:h-10 sm:w-10 md:h-12 md:w-12" />

      <div className="mb-2 text-4xl font-extrabold leading-none text-themecolor sm:text-5xl md:text-6xl">
        {inView ? (
          <CountUp start={0} end={endValue} duration={5} suffix={suffix} />
        ) : (
          endValue.toLocaleString() + suffix
        )}
      </div>

      <p className="max-w-[14ch] text-base font-medium leading-snug text-gray-700 sm:text-lg md:text-xl">
        {label}
      </p>
    </div>
  );
};

export const Hero = ({ onOpenPopup }: HeroProps) => {
  const handleScrollToTherapy = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
      <section className="relative overflow-hidden min-h-[100svh] lg:min-h-0">
        {/* MOBILE BACKGROUND IMAGE */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src={heroImg}
            alt="Fizioterapevtska obravnava"
            priority
            placeholder="blur"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* CONTENT */}
        <Container className="relative z-10 px-4 py-16 pt-40 sm:px-6 sm:py-20 lg:px-8 lg:py-0 lg:pt-40">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* BESSEDILO */}
            <div className="order-1 mx-auto flex w-full max-w-md min-w-0 flex-col items-center text-center lg:max-w-xl lg:items-start lg:text-left">
              <h1 className="font-serif text-5xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl lg:text-mainblack xl:text-7xl">
                Vaša pot do{" "}
                <span className={`${kaushan.className} text-5xl  `}>
                  boljšega
                </span>{" "}
                počutja
              </h1>

              <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-white/90 sm:mt-6 sm:max-w-lg sm:text-lg sm:leading-8 lg:mx-0 lg:text-xl lg:text-gray-500">
                Individualen pristop k vašemu zdravju.
                <br className="sm:hidden" />
                Strokovne fizioterapevtske storitve v prijetnem
                <br className="sm:hidden" />
                in sproščenem okolju.
              </p>

              <div className="mt-8 p-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap lg:justify-start">
                <button
                  onClick={onOpenPopup}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-themecolor px-6 py-3 text-lg font-medium text-white transition duration-200 hover:brightness-110 sm:px-8 sm:py-4 sm:text-lg"
                >
                  Naroči se
                </button>

                <a
                  href="#therapy"
                  onClick={handleScrollToTherapy}
                  rel="noopener"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-themecolor ring-2 ring-inset ring-white/70 transition-colors duration-200 hover:bg-themecolor hover:text-white hover:ring-themecolor sm:px-8 sm:py-4 sm:text-lg lg:ring-themecolor"
                >
                  Več o storitvah
                </a>
              </div>
            </div>

            {/* DESKTOP IMAGE */}
            <div className="order-2 hidden w-full justify-center lg:flex">
              <div className="w-full max-w-[520px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={heroImg}
                  alt="Fizioterapevtska obravnava"
                  priority
                  placeholder="blur"
                  className="h-[520px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* STATISTIKA */}
      <Container className="px-4 pb-12 pt-8 sm:px-6 sm:pb-16 lg:pt-12 ">
        <div className="shadow-2xl rounded-2xl bg-softgrey/20 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="text-center text-base text-gray-700 sm:text-lg md:text-xl">
            Več kot <span className="font-semibold text-themecolor">10+</span>{" "}
            certifikatov
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-4 lg:gap-8">
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
          </div>
        </div>
      </Container>
    </>
  );
};
