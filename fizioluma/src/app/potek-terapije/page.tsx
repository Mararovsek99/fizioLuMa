"use client";

import React, { useState } from "react";
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

export default function PotekTerapijePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <Navbar onOpenPopup={handleOpenPopup} />

      <main className="pb-16">
        <Container>
          <section className="py-8 md:py-12">
            <SectionTitle
              preTitle="POTEK TERAPIJE"
              title="Kako poteka fizioterapevtska obravnava?"
            >
              Vsaka obravnava je individualno prilagojena vašim težavam, ciljem
              in življenjskemu slogu. Moj cilj ni le kratkoročno zmanjšanje
              bolečine, ampak predvsem razumevanje vzroka težav in dolgoročno
              izboljšanje vašega počutja ter funkcije.
            </SectionTitle>
          </section>

          <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {therapySteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-border bg-white shadow-lg p-6 md:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-themecolor text-white text-lg font-bold">
                    {step.number}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight text-black/80">
                    {step.title}
                  </h2>
                </div>

                <p className="mt-6 text-base md:text-lg leading-relaxed text-black/80">
                  {step.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="text-black/80 text-base md:text-lg leading-relaxed"
                    >
                      • {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="mt-20  bg-softgrey/30">
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
          </section>

          <section className="mt-12 bg-softgrey/30 ">
            <SectionTitle
              preTitle="KAJ LAHKO PRIČAKUJETE"
              title="Jasen načrt in strokovno vodeno obravnavo"
            >
              Med terapijo vam sproti razložim, kaj ugotavljam, zakaj izvajamo
              določene tehnike ali vaje ter kako lahko tudi sami prispevate k
              napredku. Pomembno mi je, da obravnavo razumete in da se v procesu
              počutite varno, slišano in vključeno.
            </SectionTitle>
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
