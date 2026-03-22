"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { PopupWidget } from "@/components/PopupWidget";
import { LearnMoreSection } from "@/components/LearnMoreSection";

const experienceSections = [
  {
    title: "Izobraževanje in certifikati",
    image: "/img/knoweledge.jpeg",
    description:
      "Redno obiskujem specializirane tečaje in delavnice, da ostajam na tekočem z najnovejšimi tehnikami, pristopi in terapevtskimi napravami. Svoje znanje nenehno nadgrajujem na področju fizioterapije, rehabilitacije in sodobnih terapij, kot so TECAR terapija, K-Laser, Normatec, TENS in druge metode, ki omogočajo še učinkovitejšo obravnavo pacientov.",
    points: [
      "redno strokovno izpopolnjevanje",
      "poznavanje sodobnih terapevtskih naprav",
      "uporaba znanja v praksi",
    ],
  },
  {
    title: "Praktične izkušnje",
    image: "/img/practicalExperience.jpeg",
    description:
      "Imam približno 5 let praktičnih izkušenj, pridobljenih v različnih okoljih – od bolnišnic in zdravilišč do privatnih ambulant. Vsakodnevno delam z različnimi pacienti, od športnikov do ljudi s kroničnimi težavami, po operacijah ali poškodbah, zato znam terapijo prilagoditi posamezniku in njegovim dejanskim potrebam.",
    points: [
      "izkušnje iz različnih institucij",
      "delo z raznolikimi pacienti",
      "individualno prilagojena obravnava",
    ],
  },
  {
    title: "Celosten pristop",
    image: "/img/approach.jpeg",
    description:
      "Pri svojem delu združujem manualne tehnike, specializirane terapije in vadbene programe. Moj pristop ni usmerjen le v kratkotrajno lajšanje težav, ampak v razumevanje vzroka, izboljšanje funkcionalnosti in podporo pri dolgoročnem okrevanju. Cilj je učinkovito zmanjšanje bolečin, oteklin in varnejša, hitrejša rehabilitacija.",
    points: [
      "kombinacija različnih terapevtskih pristopov",
      "usmerjenost v vzrok težav",
      "podpora pri dolgoročnem napredku",
    ],
  },
];

export default function ZnanjeInIzkusnjePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <Navbar onOpenPopup={handleOpenPopup} />

      <main className="bg-white pb-16">
        <Container className="sm:px-6">
          <section className="py-8 sm:py-10 md:py-12">
            <SectionTitle
              preTitle="ZNANJE IN IZKUŠNJE"
              title="Strokovno znanje, praktične izkušnje in stalno izpopolnjevanje"
            >
              Svoje delo gradim na strokovnem znanju, praktičnih izkušnjah in
              nenehnem izobraževanju na področju fizioterapije, rehabilitacije
              ter sodobnih terapevtskih pristopov. Verjamem, da kakovostna
              obravnava temelji na razumevanju posameznika, strokovni podlagi in
              premišljeni izbiri metod, ki najbolje podprejo okrevanje.
            </SectionTitle>
          </section>

          <section className="mx-auto max-w-6xl space-y-12 sm:space-y-16 md:space-y-20">
            {experienceSections.map((section, index) => {
              const isReversed = index % 2 === 1;

              return (
                <article
                  key={section.title}
                  className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12"
                >
                  <div
                    className={`relative h-[220px] w-full overflow-hidden md:h-[380px] lg:h-[440px] ${
                      isReversed ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      priority={index === 0}
                      quality={80}
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="object-cover object-center md:rounded-2xl"
                    />
                  </div>

                  <div
                    className={`px-4 md:px-0 ${
                      isReversed ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                      {section.title}
                    </h2>

                    <p className="mt-4 text-base leading-7 text-gray-600 sm:text-base md:text-lg">
                      {section.description}
                    </p>

                    <ul className="mt-5 space-y-2 sm:mt-6 sm:space-y-3">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="text-base leading-7 text-gray-700 sm:text-base md:text-lg"
                        >
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </section>

          <section className="mt-14 rounded-2xl bg-softgrey/30 px-4 py-8 sm:mt-20 sm:px-6 sm:py-10 md:py-14">
            <SectionTitle
              preTitle="O MENI"
              title="Kdo sem in kako pristopam k svojemu delu"
            >
              Sem Lucija Marovšek, diplomirana fizioterapevtka, s strastjo do
              svojega poklica in željo, da vsakemu pacientu ponudim individualen
              pristop ter kakovostno obravnavo. Pri svojem delu me vodita misli:
              »Več kot boš naredil sam, manj boš potreboval mene« in »Vaše
              težave so moje težave«. Nimam čarobne palčke, a s strokovnim
              znanjem, predanostjo in izkušnjami se vedno potrudim poiskati
              najboljšo možno pot do boljšega počutja in večje gibljivosti.
            </SectionTitle>
          </section>

          <section className="mx-auto mt-12 max-w-6xl p-5">
            <article className="grid grid-cols-1 items-center gap-5 sm:gap-8 md:grid-cols-2 md:gap-12">
              <div className="md:order-1">
                <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-2xl md:text-3xl">
                  Lucija Marovšek, diplomirana fizioterapevtka
                </h2>

                <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:text-base md:text-lg md:leading-relaxed">
                  Fizioterapijo sem študirala v Ljubljani, nato pa izkušnje
                  pridobivala z delom v bolnišnicah, zdraviliščih in privatnih
                  ambulantah. Prav ta raznolikost delovnega okolja mi je
                  omogočila, da sem razvila širok spekter znanja in praktičnih
                  veščin, ki jih danes združujem s sodobnimi terapijami in
                  pripomočki.
                </p>

                <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:text-base md:text-lg md:leading-relaxed">
                  Svoje znanje nenehno nadgrajujem z izobraževanji na visoki
                  strokovni ravni, saj želim pacientom ponuditi najučinkovitejše
                  pristope in celovite rešitve za njihove težave. Verjamem, da
                  so strokovnost, izkušnje, predanost in iskrena želja po pomoči
                  tisto, kar omogoča resnične rezultate.
                </p>

                <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:text-base md:text-lg md:leading-relaxed">
                  V prostem času sem aktivna in rada preživljam čas v naravi – v
                  hribih, pri plezanju ali smučanju. Uživam tudi v družbi
                  živali, ko se želim umiriti pa pogosto posežem po knjigah ali
                  dokumentarcih, velikokrat strokovnih, saj me učenje in
                  širjenje znanja spremljata tako na profesionalni kot osebni
                  poti.
                </p>

                <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:text-base md:text-lg md:leading-relaxed">
                  Verjamem, da kombinacija strokovnosti, izkušenj, predanosti in
                  strasti do dela pacientom prinese ne le olajšanje, temveč tudi
                  več zaupanja v svoje telo, gibanje in proces okrevanja.
                </p>
              </div>

              <div className="relative h-[280px] overflow-hidden rounded-2xl shadow-lg sm:h-[360px] md:order-2 md:h-[420px] lg:h-[650px]">
                <Image
                  src="/img/aboutme.jpeg"
                  alt="Lucija Marovšek"
                  fill
                  quality={80}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </article>
          </section>

          <section className="mt-12 rounded-2xl px-4 py-8 sm:px-6 sm:py-10">
            <SectionTitle
              preTitle="MOJE DELO"
              title="Individualen pristop, strokovna podlaga in iskrena predanost"
            >
              Pomembno mi je, da se vsak pacient pri obravnavi počuti slišanega,
              razumljenega in varnega. Zato združujem strokovno znanje,
              praktične izkušnje in oseben pristop, s katerim skupaj gradimo pot
              do boljšega počutja, lažjega gibanja in dolgoročnih rezultatov.
            </SectionTitle>
          </section>

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
