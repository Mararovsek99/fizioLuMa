"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.jpeg";

// 1. Definicija tipov za props (TypeScript)
interface StatCounterProps {
  endValue: number;
  label: string;
  suffix: string;
}

// DEFINICIJA PROPSOV ZA HERO KOMPONENTO
interface HeroProps {
  onOpenPopup: () => void;
}

// Pomožna komponenta za animirano statistiko
const StatCounter: React.FC<StatCounterProps> = ({
  endValue,
  label,
  suffix,
}) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="text-center p-4">
      <div className="text-6xl font-extrabold text-themecolor mb-1">
        {inView ? (
          <CountUp start={0} end={endValue} duration={5} suffix={suffix} />
        ) : (
          endValue.toLocaleString() + suffix
        )}
      </div>
      <p className="text-xl font-medium text-gray-700">{label}</p>
    </div>
  );
};

export const Hero = ({ onOpenPopup }: HeroProps) => {
  // DODANO: Sprejem propa

  // FUNKCIJA ZA SMOOTH SCROLL (Ponovno uporabimo logiko iz Navbarja, prilagojeno za Hero)
  const handleScrollToTherapy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = "therapy"; // Sekcija, kamor želimo skočiti
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Posodobitev URL-ja
      if (window.history.pushState) {
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
  };

  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className=" text-mainblack text-4xl md:text-5xl lg:text-8xl font-bold text-foreground leading-tight mb-6 font-serif">
              Vaša pot do <span className="text-themecolor">boljšega</span>{" "}
              počutja
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              Individualen pristop k vašemu zdravju. Strokovne fizioterapevtske
              storitve v prijetnem in sproščenem okolju.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              {/* 1. GUMB: Rezerviraj termin (ODPIRANJE POPUP-a) */}
              <button
                onClick={onOpenPopup}
                className="px-8 py-4 text-lg font-medium text-center text-white bg-themecolor rounded-md transition filter duration-200 hover:brightness-110 cursor-pointer"
              >
                Rezerviraj termin
              </button>

              {/* 2. GUMB: Več o storitvah (SKOK NA ID="therapy") */}
              <a
                href="#therapy"
                onClick={handleScrollToTherapy}
                rel="noopener"
                className="box-border px-8 py-4 text-lg font-medium text-center text-themecolor bg-white rounded-md transition-colors duration-200 hover:bg-themecolor hover:text-white ring-2 ring-themecolor ring-inset cursor-pointer"
              >
                Več o storitvah
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="relative" style={{ width: 616 }}>
            <div className="overflow-hidden rounded-2xl relative z-10">
              <Image
                src={heroImg}
                width={485}
                height={450}
                className="object-cover rounded-2xl"
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Sekcija s statistiko - Zamenjava logotipov */}
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700">
            Več kot <span className="text-themecolor">10+</span> certifikatov
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <StatCounter endValue={3} label="Let izkušenj" suffix="+" />

            <StatCounter endValue={20} label="Zadovoljnih strank" suffix="+" />

            <StatCounter
              endValue={150}
              label="Uspešno obravnavanih pacientov"
              suffix="+"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
