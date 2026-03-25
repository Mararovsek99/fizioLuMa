"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { PopupWidget } from "@/components/PopupWidget";
import { LearnMoreSection } from "@/components/LearnMoreSection";

const therapies = [
  {
    title: "Fizioterapevtska obravnava",
    image: "/img/therapy.jpeg",
    description:
      "Pri specialni fizioterapevtski obravnavi se osredotočam na vaše potrebe in cilje. Z uporabo kombinacije manualnih tehnik, ciljnih vaj za moč in gibljivost ter sodobnih terapevtskih pripomočkov skupaj gradimo pot do učinkovitejšega okrevanja, manj bolečin in boljše telesne funkcije.",
    points: [
      "individualno prilagojen program",
      "kombinacija manualne terapije in vaj",
      "usmerjenost v dolgoročno izboljšanje funkcije",
    ],
  },
  {
    title: "Limfna drenaža",
    image: "/img/hand-lymph.jpeg",
    description:
      "Limfna drenaža je nežna in strokovna terapija, ki spodbuja pretok limfe, zmanjšuje otekanje in pomaga pri občutku lahkotnejšega telesa. Primerna je pri oteklinah, občutku težkih nog, po operacijah, poškodbah, estetskih posegih ter tudi kot podpora v nosečnosti ali pri različnih bolečinskih stanjih.",
    points: [
      "za utrujene in otekle noge",
      "po operacijah, poškodbah in posegih",
      "za boljšo cirkulacijo, regeneracijo in sprostitev",
    ],
  },
  {
    title: "Terapevtska masaža",
    image: "/img/massage.jpeg",
    description:
      "Terapevtska masaža je usmerjena tehnika za zmanjševanje mišične napetosti, bolečin in občutka preobremenjenosti. Z individualno prilagojenimi prijemi delujem na problematična področja, izboljšujem prekrvavitev ter podpiram boljšo gibljivost, regeneracijo in splošno počutje.",
    points: [
      "zmanjšanje mišične napetosti in bolečine",
      "izboljšanje prekrvavitve in gibljivosti",
      "podpora pri akutnih in kroničnih težavah",
    ],
  },
  {
    title: "Individualna vadba",
    image: "/img/hero.jpeg",
    description:
      "Individualna vadba je prilagojena vašemu trenutnemu stanju, ciljem in sposobnostim. Vključuje vaje za moč, gibljivost, stabilnost in učenje pravilnih gibalnih vzorcev, s katerimi zmanjšujemo tveganje za poškodbe, lajšamo bolečine ter izboljšujemo telesno pripravljenost in funkcionalnost.",
    points: [
      "vaje za moč, gibljivost in stabilnost",
      "učenje pravilnih gibalnih vzorcev",
      "boljša telesna funkcionalnost in preventiva",
    ],
  },
  {
    title: "Tecar terapija",
    image: "/img/tecar.jpeg",
    description:
      "TECAR terapija je sodobna fizikalna metoda, ki z radiofrekvenčno energijo spodbuja celjenje tkiv, zmanjšuje bolečine in otekanje ter izboljšuje prekrvavitev. Deluje globinsko in učinkovito podpira regeneracijo mišic, kit in sklepov pri akutnih ter kroničnih težavah.",
    points: [
      "globinsko delovanje na tkiva",
      "zmanjšanje bolečine in oteklin",
      "učinkovita podpora pri rehabilitaciji",
    ],
  },
  {
    title: "Mehanska limfna drenaža",
    image: "/img/normatec.jpeg",
    description:
      "Normatec terapija je oblika mehanske limfne drenaže s pomočjo kompresijskih hlač ali rokavov, ki s postopnim stiskanjem in sproščanjem spodbuja pretok krvi in limfe. Primerna je za zmanjševanje oteklin, utrujenosti in občutka težkih nog ali rok ter za hitrejšo regeneracijo po obremenitvah.",
    points: [
      "zmanjšanje otekanja in utrujenosti",
      "pospeševanje regeneracije mišic",
      "primerno po športnih in vsakodnevnih obremenitvah",
    ],
  },
  {
    title: "Laser terapija",
    image: "/img/laser.jpeg",
    description:
      "Laser terapija s K-Laserjem je neboleča in neinvazivna metoda, ki spodbuja celjenje tkiv, zmanjšuje vnetje, otekanje in bolečine. Deluje globinsko ter pomaga pri regeneraciji mišic, kit in sklepov, zato je zelo uporabna pri poškodbah, vnetjih in po operacijah.",
    points: [
      "neinvazivna in neboleča terapija",
      "zmanjšanje vnetja, bolečine in otekanja",
      "spodbujanje celjenja in regeneracije tkiv",
    ],
  },
  {
    title: "Elektroterapija",
    image: "/img/electro.jpeg",
    description:
      "Elektroterapija je fizikalna metoda, pri kateri z nežnimi električnimi impulzi vplivamo na zmanjšanje bolečine, sproščanje mišic ter spodbujanje regeneracije mehkih tkiv. Uporablja se pri akutnih in kroničnih težavah, preobremenjenih mišicah ter kot podpora po poškodbah ali operacijah.",
    points: [
      "lajšanje bolečin in zmanjševanje vnetja",
      "spodbujanje mišične in tkivne regeneracije",
      "učinkovita dopolnitev rehabilitacije",
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 38,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const descVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
      delay: 0.06,
    },
  },
};

const pointVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

function FadeInBlock({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.9,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

function TherapyCard({
  therapy,
  index,
}: {
  therapy: (typeof therapies)[number];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={shouldReduceMotion ? undefined : cardVariants}
      transition={shouldReduceMotion ? undefined : { delay: index * 0.03 }}
      className="overflow-hidden rounded-2xl border-2 border-black shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 flex flex-col justify-center p-5 sm:p-6 md:order-1 md:p-8 lg:p-10">
          <motion.h2
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.7 }}
            variants={shouldReduceMotion ? undefined : titleVariants}
            className="text-xl font-bold leading-tight text-black sm:text-2xl md:text-3xl"
          >
            {therapy.title}
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.65 }}
            variants={shouldReduceMotion ? undefined : descVariants}
            className="mt-4 text-sm leading-7 text-black/80 sm:mt-5 sm:text-base md:text-lg md:leading-relaxed"
          >
            {therapy.description}
          </motion.p>

          <ul className="mt-5 space-y-2 sm:mt-6 sm:space-y-3">
            {therapy.points.map((point, pointIndex) => (
              <motion.li
                key={point}
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView={shouldReduceMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.85 }}
                variants={shouldReduceMotion ? undefined : pointVariants}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 0.65,
                        delay: pointIndex * 0.08,
                        ease,
                      }
                }
                className="text-sm leading-7 text-black/85 sm:text-base md:text-lg md:leading-relaxed"
              >
                • {point}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.4 }}
          variants={shouldReduceMotion ? undefined : imageVariants}
          className="relative order-1 min-h-[220px] md:order-2 sm:min-h-[260px] md:min-h-full"
        >
          <Image
            src={therapy.image}
            alt={therapy.title}
            fill
            priority={index === 0}
            quality={80}
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function TerapijeInPristopiPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <Navbar onOpenPopup={handleOpenPopup} />

      <main className="bg-white pb-16">
        <Container className="px-4 sm:px-6">
          <FadeInBlock className="py-8 sm:py-10 md:py-12">
            <SectionTitle
              preTitle="TERAPIJE IN PRISTOPI"
              title="S katerimi terapijami vam lahko pomagam?"
            >
              Pri obravnavi uporabljam različne terapevtske pristope in metode,
              ki jih vedno prilagodim vašim težavam, ciljem in trenutnemu
              stanju. Namen obravnave ni le zmanjšanje bolečine, ampak tudi
              izboljšanje gibanja, funkcije ter kakovosti vsakodnevnega
              življenja.
            </SectionTitle>
          </FadeInBlock>

          <section className="mx-auto max-w-6xl space-y-5 sm:space-y-8 md:space-y-10">
            {therapies.map((therapy, index) => (
              <TherapyCard
                key={therapy.title}
                therapy={therapy}
                index={index}
              />
            ))}
          </section>

          <FadeInBlock className="mt-14 rounded-2xl bg-softgrey/30 px-4 py-8 sm:mt-20 sm:px-6 sm:py-10 md:py-14">
            <SectionTitle
              preTitle="INDIVIDUALEN PRISTOP"
              title="Vsaka obravnava je prilagojena vašim potrebam"
            >
              Pri izbiri terapije vedno upoštevam naravo vaših težav, morebitne
              predhodne poškodbe, operacije, stopnjo bolečine, telesno
              pripravljenost ter cilje, ki jih želite doseči. Pogosto najboljše
              rezultate dosežemo s premišljeno kombinacijo različnih pristopov,
              ki skupaj podprejo učinkovitejše okrevanje.
            </SectionTitle>
          </FadeInBlock>

          <FadeInBlock
            delay={0.06}
            className="mt-8 rounded-2xl px-4 py-8 sm:mt-12 sm:px-6 sm:py-10"
          >
            <SectionTitle
              preTitle="STROKOVNO IN CELOSTNO"
              title="Cilj je trajnejše izboljšanje, ne le kratkotrajno olajšanje"
            >
              Pomembno mi je, da terapija ni usmerjena samo v trenutno
              zmanjšanje bolečine, temveč tudi v razumevanje vzroka težav,
              izboljšanje gibanja in preprečevanje ponovnih preobremenitev. Zato
              obravnavo pogosto dopolnjujem z vajami, usmeritvami in praktičnimi
              nasveti za vsakdan.
            </SectionTitle>
          </FadeInBlock>

          <section id="therapy" className="mt-14 sm:mt-16">
            <FadeInBlock>
              <SectionTitle preTitle="IZVEDITE VEČ" title="Terapije">
                Izberite temo, ki vas zanima, in izvedite več o težavah,
                terapijah, poteku obravnave ter mojem načinu dela.
              </SectionTitle>
            </FadeInBlock>

            <FadeInBlock delay={0.1}>
              <LearnMoreSection />
            </FadeInBlock>
          </section>
        </Container>
      </main>

      <PopupWidget open={isPopupOpen} setOpen={setIsPopupOpen} />
    </>
  );
}
