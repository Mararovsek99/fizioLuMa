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

      <main className=" pb-16">
        <Container>
          <section className="py-8 md:py-12">
            <SectionTitle
              preTitle="NAJPOGOSTEJŠE TEŽAVE"
              title="Pri katerih težavah vam lahko pomagam?"
            >
              Obravnavam tako nenadno nastale bolečine kot tudi dolgotrajne
              težave, ne glede na to, ali so posledica poškodb, operacij ali
              obremenitev.
            </SectionTitle>
          </section>

          <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {issueGroups.map((group) => (
              <article
                key={group.title}
                className="relative min-h-[360px] overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/55" />

                <div className="relative z-10 flex h-full flex-col p-6 md:p-8">
                  <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                    {group.title}
                  </h2>

                  <ul className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-white/90 text-base md:text-lg leading-relaxed"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </section>
          <section className="mt-20 py-8 md:py-12 bg-softgrey/30">
            <SectionTitle
              preTitle="... Ter vrsta drugih težav"
              title="Če vaše težave ni na seznamu, me
                kontaktirajte in skupaj bova preverila, kako vam lahko pomagam."
            ></SectionTitle>
          </section>
          <section id="therapy">
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
