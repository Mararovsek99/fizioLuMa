"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { PopupWidget } from "@/components/PopupWidget";
import { LearnMoreSection } from "@/components/LearnMoreSection";

const therapySteps = [
  {
    number: "01",
    title: "Pogovor",
    description:
      "Na začetku si vzamem čas za pogovor o vaših težavah, počutju in ciljih. Zanimajo me potek bolečine, morebitne omejitve pri vsakodnevnih opravilih, športu ali delu ter vaše dosedanje izkušnje z zdravljenjem.",
    points: [
      "kdaj in kako so se težave pojavile",
      "kaj bolečino poslabša ali olajša",
      "kako težava vpliva na vaše vsakdanje življenje",
    ],
  },
  {
    number: "02",
    title: "Testiranje",
    description:
      "Sledi usmerjen fizioterapevtski pregled, pri katerem ocenim gibljivost, moč, stabilnost, držo in način gibanja. S testiranjem poiščem vzroke težav in ne obravnavam le posledic.",
    points: [
      "pregled gibljivosti sklepov in hrbtenice",
      "ocena mišične moči in stabilnosti",
      "funkcionalni testi glede na vaše težave",
    ],
  },
  {
    number: "03",
    title: "Pregled dokumentacije",
    description:
      "Če imate izvide, magnetno resonanco, RTG slike, ortopedska mnenja ali drugo zdravstveno dokumentacijo, jo skupaj pregledava. Tako dobim še bolj celostno sliko vašega stanja in lažje prilagodim obravnavo.",
    points: [
      "pregled specialističnih izvidov",
      "upoštevanje preteklih poškodb ali operacij",
      "uskladitev terapije z vašim zdravstvenim stanjem",
    ],
  },
  {
    number: "04",
    title: "Obravnava",
    description:
      "Na podlagi pregleda pripravim individualno obravnavo, prilagojeno vašim potrebam. Terapija lahko vključuje manualne tehnike, sproščanje mehkih tkiv, mobilizacijo, usmerjene vaje ter postopno vračanje v boljšo funkcijo.",
    points: [
      "individualno prilagojen pristop",
      "zmanjšanje bolečine in izboljšanje gibanja",
      "postopno vračanje v aktivnosti brez preobremenitev",
    ],
  },
  {
    number: "05",
    title: "Vaje in nasveti za domov",
    description:
      "Pomemben del terapije so tudi jasna navodila za domov. Dobite vaje, priporočila in praktične usmeritve, s katerimi lahko med obiski aktivno sodelujete pri izboljšanju svojega stanja.",
    points: [
      "preproste in učinkovite domače vaje",
      "nasveti za držo, gibanje in obremenitve",
      "večja samostojnost in dolgoročnejši rezultat",
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
    y: 36,
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

const titleRowVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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

function TherapyStepCard({
  step,
  index,
}: {
  step: (typeof therapySteps)[number];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.28 }}
      variants={shouldReduceMotion ? undefined : cardVariants}
      transition={shouldReduceMotion ? undefined : { delay: index * 0.04 }}
      className="rounded-2xl border border-border bg-white p-5 shadow-lg sm:p-6 md:p-8"
    >
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.6 }}
        variants={shouldReduceMotion ? undefined : titleRowVariants}
        className="flex items-center gap-3 sm:gap-4"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-themecolor text-base font-bold text-white sm:h-12 sm:w-12 sm:text-lg">
          {step.number}
        </div>

        <h2 className="text-xl font-bold leading-tight text-black/80 sm:text-2xl md:text-3xl">
          {step.title}
        </h2>
      </motion.div>

      <motion.p
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.6 }}
        variants={shouldReduceMotion ? undefined : descVariants}
        className="mt-5 text-sm leading-7 text-black/80 sm:mt-6 sm:text-base md:text-lg md:leading-relaxed"
      >
        {step.description}
      </motion.p>

      <ul className="mt-5 space-y-2 sm:mt-6 sm:space-y-3">
        {step.points.map((point, pointIndex) => (
          <motion.li
            key={point}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.8 }}
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
            className="text-sm leading-7 text-black/80 sm:text-base md:text-lg md:leading-relaxed"
          >
            • {point}
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function PotekTerapijePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <Navbar onOpenPopup={handleOpenPopup} />

      <main className="pb-16">
        <Container className="px-4 sm:px-6">
          <FadeInBlock className="py-8 sm:py-10 md:py-12">
            <SectionTitle
              preTitle="POTEK TERAPIJE"
              title="Kako poteka fizioterapevtska obravnava?"
            >
              Vsaka obravnava je individualno prilagojena vašim težavam, ciljem
              in življenjskemu slogu. Moj cilj ni le kratkoročno zmanjšanje
              bolečine, ampak predvsem razumevanje vzroka težav in dolgoročno
              izboljšanje vašega počutja ter funkcije.
            </SectionTitle>
          </FadeInBlock>

          <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
            {therapySteps.map((step, index) => (
              <TherapyStepCard key={step.number} step={step} index={index} />
            ))}
          </section>

          <FadeInBlock className="mt-14 rounded-2xl bg-softgrey/30 px-4 py-8 sm:mt-20 sm:px-6 sm:py-10">
            <SectionTitle
              preTitle="INDIVIDUALEN PRISTOP"
              title="Vsaka terapija je prilagojena posamezniku"
            >
              Potek obravnave je odvisen od narave vaših težav, morebitnih
              preteklih poškodb, operacij, telesne pripravljenosti in ciljev, ki
              jih želite doseči. Pri nekom je poudarek bolj na zmanjšanju
              bolečine, pri drugem na izboljšanju gibljivosti, stabilnosti ali
              varnem povratku k športu in vsakodnevnim aktivnostim.
            </SectionTitle>
          </FadeInBlock>

          <FadeInBlock
            delay={0.06}
            className="mt-8 rounded-2xl bg-softgrey/30 px-4 py-8 sm:mt-12 sm:px-6 sm:py-10"
          >
            <SectionTitle
              preTitle="KAJ LAHKO PRIČAKUJETE"
              title="Jasen načrt in strokovno vodeno obravnavo"
            >
              Med terapijo vam sproti razložim, kaj ugotavljam, zakaj izvajamo
              določene tehnike ali vaje ter kako lahko tudi sami prispevate k
              napredku. Pomembno mi je, da obravnavo razumete in da se v procesu
              počutite varno, slišano in vključeno.
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
