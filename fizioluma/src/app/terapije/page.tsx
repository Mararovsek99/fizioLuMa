"use client";

import React, { useState } from "react";
import Image from "next/image";
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

export default function TerapijeInPristopiPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <Navbar onOpenPopup={handleOpenPopup} />

      <main className="pb-16 bg-white">
        <Container>
          <section className="py-8 md:py-12">
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
          </section>

          <section className="max-w-6xl mx-auto space-y-8 md:space-y-10">
            {therapies.map((therapy) => (
              <article
                key={therapy.title}
                className="overflow-hidden rounded-2xl border-2 border-black bg-[#f3ece4] shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight text-black">
                      {therapy.title}
                    </h2>

                    <p className="mt-5 text-base md:text-lg leading-relaxed text-black/80">
                      {therapy.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {therapy.points.map((point) => (
                        <li
                          key={point}
                          className="text-black/85 text-base md:text-lg leading-relaxed"
                        >
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative min-h-[260px] md:min-h-full order-1 md:order-2">
                    <Image
                      src={therapy.image}
                      alt={therapy.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-20 py-10 md:py-14 bg-softgrey/30 rounded-2xl">
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
          </section>

          <section className="mt-12">
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
