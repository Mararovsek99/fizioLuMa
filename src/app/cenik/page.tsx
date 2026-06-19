"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { PopupWidget } from "@/components/PopupWidget";
import { benefitTwo } from "@/components/data";

const Benefits = dynamic(
  () => import("@/components/Benefits").then((mod) => mod.Benefits),
  {
    ssr: false,
    loading: () => (
      <div className="mt-20 min-h-[300px] rounded-2xl bg-softgrey/40" />
    ),
  },
);

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
  amount = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount,
        margin: "0px 0px -80px 0px",
      }}
      transition={{
        duration: 0.55,
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
    <div className="w-full overflow-hidden rounded-2xl border-2 border-black bg-white text-black shadow-sm">
      <div className="hidden grid-cols-3 border-b-2 border-black bg-softgrey/30 px-3 py-2 text-xs font-bold uppercase tracking-wide text-black sm:px-4 sm:py-3 sm:text-sm md:grid md:px-6 md:py-4">
        <div>Storitev</div>
        <div className="text-center">Trajanje</div>
        <div className="text-right">Cena</div>
      </div>

      <div>
        {priceList.map((section, index) => (
          <FadeInBlock
            key={section.category}
            delay={Math.min(index * 0.025, 0.12)}
            amount={0.08}
          >
            <div className="border-b-2 border-black last:border-b-0">
              <h2 className="border-t-2 border-black bg-black/5 px-3 py-2 text-center text-lg font-bold uppercase text-black sm:px-4 sm:py-3 sm:text-xl md:px-6 md:py-4 md:text-2xl">
                {section.category}
              </h2>

              {section.items.map((item) => (
                <div
                  key={`${section.category}-${item.service}-${item.duration}`}
                  className="border-b border-black/20 px-3 py-2 text-center text-sm text-black last:border-b-0 sm:px-4 sm:py-3 sm:text-base md:grid md:grid-cols-3 md:px-6 md:py-4 md:text-left"
                >
                  <div className="break-words text-base font-medium text-black sm:text-lg md:font-normal">
                    {item.service}
                  </div>

                  <div className="text-xs text-black/70 sm:text-sm md:text-center md:text-base">
                    <span className="md:hidden">Trajanje: </span>
                    {item.duration}
                  </div>

                  <div className="mt-1 font-semibold text-themecolor sm:mt-2 md:mt-0 md:text-right">
                    <span className="md:hidden">Cena: </span>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </FadeInBlock>
        ))}
      </div>
    </div>
  );
}

export default function CenikPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Navbar onOpenPopup={() => setIsPopupOpen(true)} />

      <main className="bg-white pb-16">
        <Container>
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

          <section className="mx-auto px-2 max-w-5xl sm:px-4">
            <PriceTable />
          </section>

          <section id="benefits" className="mt-20 scroll-mt-32 bg-softgrey/60">
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
            delay={0.05}
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
