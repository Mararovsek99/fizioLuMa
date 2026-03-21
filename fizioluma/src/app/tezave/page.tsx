"use client";

import React, { useState } from "react";
import Image from "next/image";
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
          {/* HEADER */}
          <section className="py-8 sm:py-10 md:py-12">
            <SectionTitle
              preTitle="NAJPOGOSTEJŠE TEŽAVE"
              title="Pri katerih težavah vam lahko pomagam?"
            >
              Obravnavam tako nenadno nastale bolečine kot tudi dolgotrajne
              težave, ne glede na to, ali so posledica poškodb, operacij ali
              obremenitev.
            </SectionTitle>
          </section>

          {/* CARDS */}
          <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
            {issueGroups.map((group) => (
              <article
                key={group.title}
                className="relative overflow-hidden rounded-2xl shadow-lg min-h-[260px] sm:min-h-[300px] md:min-h-[360px]"
              >
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/60 sm:bg-black/55" />

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-col p-5 sm:p-6 md:p-8">
                  <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                    {group.title}
                  </h2>

                  <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-white/90 text-sm leading-6 sm:text-base md:text-lg md:leading-relaxed"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </section>

          {/* INFO BLOCK */}
          <section className="mt-14 rounded-2xl bg-softgrey/30 px-4 py-8 sm:mt-20 sm:px-6 sm:py-10 md:py-12">
            <SectionTitle
              preTitle="... Ter vrsta drugih težav"
              title="Če vaše težave ni na seznamu, me kontaktirajte in skupaj bova preverila, kako vam lahko pomagam."
            />
          </section>

          {/* LEARN MORE */}
          <section id="therapy" className="mt-14 sm:mt-16">
            <SectionTitle preTitle="IZVEDITE VEČ" title="Terapije">
              Izberite temo, ki vas zanima, in izvedite več o težavah,
              terapijah, poteku obravnave ter mojem načinu dela.
            </SectionTitle>

            <LearnMoreSection />
          </section>
        </Container>
      </main>

      <PopupWidget open={isPopupOpen} setOpen={setIsPopupOpen} />
    </>
  );
}
