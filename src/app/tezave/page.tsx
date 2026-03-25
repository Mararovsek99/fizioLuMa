"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { PopupWidget } from "@/components/PopupWidget";
import { LearnMoreSection } from "@/components/LearnMoreSection";

const issueGroups = [
  {
    title: "Hrbtenica",
    image: "/img/sample-backPain.jpeg",
    items: [
      "Bolečina v vratu in glavoboli",
      "Bolečina v križu",
      "Hernija diska",
      "Osteoporoza",
      "Išias",
      "Telesna drža in krivine",
    ],
  },
  {
    title: "Rama in zgornji ud",
    image: "/img/sample-shoulder.jpeg",
    items: [
      "Sindrom zamrznjene rame",
      "Nestabilnost ali izpah",
      "SLAP lezija",
      "Kalcinacija",
      "Poškodba mišic ali vezi",
      "Teniški komolec",
      "Golferski komolec",
      "Sindrom karpalnega kanala",
    ],
  },
  {
    title: "Spodnji ud",
    image: "/img/sample_leg.jpeg",
    items: [
      "Otekle noge",
      "Poškodba sprednje in zadnje križne vezi",
      "Poškodbe meniskusa",
      "Obrabe in totalne proteze",
      "Skakalno koleno",
      "Ahilova tetiva",
      "Trn v peti",
      "Zvin gležnja",
      "Hallux valgus",
    ],
  },
  {
    title: "Poškodbe in rehabilitacija",
    image: "/img/sample-rehab.jpeg",
    items: [
      "Rehabilitacija po poškodbah",
      "Rehabilitacija po operacijah",
      "Povratek k športu in vsakodnevnim aktivnostim",
      "Obravnava po preobremenitvah",
      "Izboljšanje gibljivosti, moči in funkcije",
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

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.03,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.95,
      ease,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 14,
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

function IssueCard({
  group,
  index,
}: {
  group: (typeof issueGroups)[number];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.22 }}
      variants={shouldReduceMotion ? undefined : cardVariants}
      transition={shouldReduceMotion ? undefined : { delay: index * 0.04 }}
      className="relative min-h-[260px] overflow-hidden rounded-2xl shadow-lg sm:min-h-[300px] md:min-h-[360px]"
    >
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.35 }}
        variants={shouldReduceMotion ? undefined : imageVariants}
        className="absolute inset-0"
      >
        <Image
          src={group.image}
          alt={group.title}
          fill
          priority={index < 2}
          quality={80}
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/60 sm:bg-black/55" />

      <div className="relative z-10 flex h-full flex-col p-5 sm:p-6 md:p-8">
        <motion.h2
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.7 }}
          variants={shouldReduceMotion ? undefined : titleVariants}
          className="text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl"
        >
          {group.title}
        </motion.h2>

        <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
          {group.items.map((item, itemIndex) => (
            <motion.li
              key={item}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.9 }}
              variants={shouldReduceMotion ? undefined : itemVariants}
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 0.65,
                      delay: itemIndex * 0.06,
                      ease,
                    }
              }
              className="text-sm leading-6 text-white/90 sm:text-base md:text-lg md:leading-relaxed"
            >
              • {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function TezavePage() {
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
              preTitle="NAJPOGOSTEJŠE TEŽAVE"
              title="Pri katerih težavah vam lahko pomagam?"
            >
              Obravnavam tako nenadno nastale bolečine kot tudi dolgotrajne
              težave, ne glede na to, ali so posledica poškodb, operacij ali
              obremenitev.
            </SectionTitle>
          </FadeInBlock>

          <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
            {issueGroups.map((group, index) => (
              <IssueCard key={group.title} group={group} index={index} />
            ))}
          </section>

          <FadeInBlock className="mt-14 rounded-2xl bg-softgrey/30 px-4 py-8 sm:mt-20 sm:px-6 sm:py-10 md:py-12">
            <SectionTitle
              preTitle="... Ter vrsta drugih težav"
              title="Če vaše težave ni na seznamu, me kontaktirajte in skupaj bova preverila, kako vam lahko pomagam."
            />
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
