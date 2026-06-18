"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { PopupWidget } from "@/components/PopupWidget";
import { Benefits } from "@/components/Benefits";
import { benefitTwo } from "@/components/data";

const priceList = [
  {
    category: "Online storitve",
    items: [
      {
        service: "Posvet preko videoklica",
        duration: "30-45 min",
        price: "30 €",
      },
    ],
  },
  {
    category: "Fizioterapija",
    items: [
      {
        service: "Fizioterapevtski pregled",
        duration: "30 min",
        price: "30 €",
      },
      {
        service: "Fizioterapija",
        duration: "55 min",
        price: "50 €",
      },
      {
        service: "Tecar terapija",
        duration: "15-20 min",
        price: "20 €",
      },
      {
        service: "Laser terapija",
        duration: "5-10 min",
        price: "15 €",
      },
      {
        service: "Normatec",
        duration: "30 min",
        price: "15 €",
      },
      {
        service: "Elektroterapija",
        duration: "15-20 min",
        price: "10 €",
      },
      {
        service: "Namestitev kinezioloških trakov",
        duration: "-",
        price: "5–10 €",
      },
    ],
  },

  {
    category: "Ročna limfna drenaža",
    items: [
      {
        service: "Ročna limfna drenaža",
        duration: "90 min",
        price: "60 €",
      },
      {
        service: "Ročna limfna drenaža",
        duration: "60 min",
        price: "50 €",
      },
      {
        service: "Ročna limfna drenaža",
        duration: "45 min",
        price: "45 €",
      },
      {
        service: "Ročna limfna drenaža",
        duration: "30 min",
        price: "40 €",
      },
    ],
  },

  {
    category: "Terapevtska masaža",
    items: [
      {
        service: "Terapevtska masaža",
        duration: "30 min",
        price: "40 €",
      },
      {
        service: "Terapevtska masaža",
        duration: "45 min",
        price: "45 €",
      },
      {
        service: "Terapevtska masaža",
        duration: "60 min",
        price: "50 €",
      },
      {
        service: "Terapevtska masaža",
        duration: "90 min",
        price: "60 €",
      },
    ],
  },

  {
    category: "Vadba",
    items: [
      {
        service: "Individualna funkcijska vadba",
        duration: "45-60 min",
        price: "30 €",
      },
    ],
  },

  {
    category: "Izposoja naprav",
    items: [
      {
        service: "Kinetek za razgibavanje kolena",
        duration: "1 dan",
        price: "5 €",
      },
      {
        service: "Normatec",
        duration: "1 dan",
        price: "5 €",
      },
      {
        service: "Elektrostimulator Globus",
        duration: "1 dan",
        price: "3 €",
      },
    ],
  },

  {
    category: "Akcijski paketi",
    items: [
      {
        service: "5× fizioterapija / limfna drenaža",
        duration: "60 min",
        price: "230 €",
      },
      {
        service: "10× fizioterapija / limfna drenaža",
        duration: "60 min",
        price: "450 €",
      },
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

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

function PriceTable() {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-black shadow-sm">
      <div className="hidden grid-cols-3 border-b-2 border-black bg-softgrey/30 px-4 py-4 text-sm font-bold uppercase tracking-wide text-black/70 md:grid md:px-6">
        <div>Storitev</div>
        <div className="text-center">Trajanje</div>
        <div className="text-right">Cena</div>
      </div>

      <div className="divide-y-2 divide-black">
        {priceList.map((section) => (
          <div className="text-black " key={section.category}>
            <h2 className="border-b-2 border-black bg-black/5 px-4 py-3 text-center text-xl font-bold uppercase md:px-6 md:py-4 md:text-2xl">
              {section.category}
            </h2>

            {section.items.map((item) => (
              <div
                key={`${item.service}-${item.duration}`}
                className="border-b py-3 px-4 text-center md:grid md:grid-cols-3 md:py-4 md:px-6 md:text-left"
              >
                <div className="font-medium text-lg text-black md:font-normal">
                  {item.service}
                </div>
                <div className="text-sm text-black/70 md:text-base md:text-center md:justify-self-center">
                  <span className="md:hidden">Trajanje: </span>
                  {item.duration}
                </div>
                <div className="mt-2 font-semibold text-themecolor md:mt-0 md:text-right">
                  <span className="md:hidden">Cena: </span>
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CenikPage() {
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
              preTitle="CENIK"
              title="Cene fizioterapevtskih storitev"
            >
              Pregleden cenik storitev v Fiziolumi. Obravnave so vedno
              prilagojene vašemu stanju, težavam in ciljem, zato lahko po
              potrebi skupaj izberemo najprimernejšo terapijo.
            </SectionTitle>
          </FadeInBlock>

          <FadeInBlock className="mx-auto max-w-5xl">
            <PriceTable />
          </FadeInBlock>

          <section id="benefits" className="scroll-mt-32 bg-softgrey/60 mt-20">
            <Benefits imgPos="right" data={benefitTwo} />
          </section>

          <FadeInBlock className="mt-10 rounded-2xl bg-softgrey/30 px-4 py-8 sm:mt-14 sm:px-6 sm:py-10 md:py-12">
            <SectionTitle
              preTitle="POMEMBNO"
              title="Katera storitev je primerna za vas?"
            >
              Če niste prepričani, katera terapija je najbolj primerna za vaše
              težave, se lahko pred naročilom posvetujemo in skupaj izberemo
              najboljšo možnost glede na vaše stanje.
            </SectionTitle>
          </FadeInBlock>

          <FadeInBlock
            delay={0.06}
            className="mt-8 rounded-2xl px-4 py-8 sm:mt-12 sm:px-6 sm:py-10"
          >
            <SectionTitle preTitle="NAROČANJE" title="Rezervirajte svoj termin">
              Za rezervacijo termina ali dodatna vprašanja me lahko kontaktirate
              preko obrazca, telefona ali e-pošte. Z veseljem vam pomagam pri
              izbiri ustrezne obravnave.
            </SectionTitle>
          </FadeInBlock>
        </Container>
      </main>

      <PopupWidget open={isPopupOpen} setOpen={setIsPopupOpen} />
    </>
  );
}
