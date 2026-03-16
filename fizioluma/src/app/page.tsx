"use client";

import React, { useState } from "react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { MapComponent } from "@/components/MapComponent";
import { Navbar } from "@/components/Navbar";
import { PopupWidget } from "@/components/PopupWidget";
import { LearnMoreSection } from "@/components/LearnMoreSection";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <Navbar onOpenPopup={handleOpenPopup} />

      <Container>
        <section id="home">
          <Hero onOpenPopup={handleOpenPopup} />
        </section>

        <SectionTitle
          preTitle="Naj se predstavim"
          title=" Zakaj izbrati fizioterapijo LuMa?"
        >
          Pri LuMa vam nudim individualno obravnavo, prilagojeno vašim težavam,
          naprednim terapijam ter realnim ciljem. Učinkovito, strokovno in
          prijazno – za vaše boljše gibanje.
        </SectionTitle>

        <section id="aboutme">
          <Benefits data={benefitOne} />
        </section>

        <section id="benefits" className="bg-softgrey/10 scroll-mt-32">
          <Benefits imgPos="right" data={benefitTwo} />
        </section>
        <section id="therapy">
          <SectionTitle preTitle="IZVEDITE VEČ" title="Terapije">
            Izberite temo, ki vas zanima, in izvedite več o težavah, terapijah,
            poteku obravnave ter mojem načinu dela.
          </SectionTitle>
          <LearnMoreSection />
        </section>

        <SectionTitle
          preTitle="POGLEJ VIDEO"
          title="Na hitro o moji fizioterapiji"
        >
          V Fizioterapiji LuMa verjamem v moč gibanja in individualen pristop k
          zdravljenju. Oglejte si kratek video, kjer vam predstavim svoje metode
          dela, vrednote in kako lahko skupaj dosežemo vaše cilje za boljše
          počutje in gibljivost.
        </SectionTitle>

        <Video src="/video/Presentation.mp4" poster="/img/VideoPreview.jpeg" />

        <section id="Testimonials">
          <SectionTitle
            preTitle="Mnenja strank"
            title="Kaj pravijo moje stranke"
          >
            Preberite izkušnje mojih zadovoljnih strank — njihove zgodbe o
            napredku, zaupanju in izboljšanem počutju. Resnične ocene, ki
            govorijo o strokovnosti in prijaznem pristopu.
          </SectionTitle>
        </section>

        <Testimonials />

        <section id="contact" className="bg-softgrey/20 pt-2 scroll-mt-5">
          <SectionTitle preTitle="kontakt" title="Kje me najdete">
            Fizioterapija LuMa se nahaja 2 minuti od avtocestnega izvoza Celje
            center. Nasproti pekarne Šmarjeta.
          </SectionTitle>

          <MapComponent />
        </section>
        <SectionTitle preTitle="HITRA POMOČ" title="Najpogostejša vprašanja">
          Tukaj so odgovori na najpogostejša vprašanja o storitvah, poteku
          terapij in rezervacijah. Če ne najdete odgovora, me prosimo
          kontaktirajte, z veseljem pomagam.
        </SectionTitle>

        <Faq />

        <Cta onOpenPopup={handleOpenPopup} />
      </Container>

      <PopupWidget open={isPopupOpen} setOpen={setIsPopupOpen} />
    </>
  );
}
