"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
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

        <FadeInBlock>
          <SectionTitle
            preTitle="Naj se predstavim"
            title=" Zakaj izbrati fizioterapijo LuMa?"
          >
            Pri LuMa vam nudim individualno obravnavo, prilagojeno vašim
            težavam, naprednim terapijam ter realnim ciljem. Učinkovito,
            strokovno in prijazno – za vaše boljše gibanje.
          </SectionTitle>
        </FadeInBlock>

        <section id="aboutme">
          <Benefits data={benefitOne} />
        </section>

        <section id="benefits" className="scroll-mt-32 bg-softgrey/10">
          <Benefits imgPos="right" data={benefitTwo} />
        </section>

        <section id="therapy">
          <FadeInBlock>
            <SectionTitle preTitle="IZVEDITE VEČ" title="Terapije">
              Izberite temo, ki vas zanima, in izvedite več o težavah,
              terapijah, poteku obravnave ter mojem načinu dela.
            </SectionTitle>
          </FadeInBlock>

          <FadeInBlock delay={0.2}>
            <LearnMoreSection />
          </FadeInBlock>
        </section>

        <FadeInBlock>
          <SectionTitle
            preTitle="POGLEJ VIDEO"
            title="Na hitro o moji fizioterapiji"
          >
            V Fizioterapiji LuMa verjamem v moč gibanja in individualen pristop
            k zdravljenju. Oglejte si kratek video, kjer vam predstavim svoje
            metode dela, vrednote in kako lahko skupaj dosežemo vaše cilje za
            boljše počutje in gibljivost.
          </SectionTitle>
        </FadeInBlock>

        <FadeInBlock delay={0.2}>
          <Video
            src="/video/Presentation.mp4"
            poster="/img/VideoPreview.jpeg"
          />
        </FadeInBlock>

        <section id="Testimonials">
          <FadeInBlock>
            <SectionTitle
              preTitle="Mnenja strank"
              title="Kaj pravijo moje stranke"
            >
              Preberite izkušnje mojih zadovoljnih strank — njihove zgodbe o
              napredku, zaupanju in izboljšanem počutju. Resnične ocene, ki
              govorijo o strokovnosti in prijaznem pristopu.
            </SectionTitle>
          </FadeInBlock>
        </section>

        <FadeInBlock delay={0.2}>
          <Testimonials />
        </FadeInBlock>

        <section id="contact" className="mt-10 bg-softgrey/20 pt-2">
          <FadeInBlock>
            <SectionTitle preTitle="kontakt" title="Kje me najdete">
              Fizioterapija LuMa se nahaja 2 minuti od avtocestnega izvoza Celje
              center. Nasproti pekarne Šmarjeta.
            </SectionTitle>
          </FadeInBlock>

          <FadeInBlock delay={0.2}>
            <MapComponent />
          </FadeInBlock>
        </section>

        <FadeInBlock>
          <SectionTitle preTitle="HITRA POMOČ" title="Najpogostejša vprašanja">
            Tukaj so odgovori na najpogostejša vprašanja o storitvah, poteku
            terapij in rezervacijah. Če ne najdete odgovora, me prosimo
            kontaktirajte, z veseljem pomagam.
          </SectionTitle>
        </FadeInBlock>

        <FadeInBlock delay={0.2}>
          <Faq />
        </FadeInBlock>

        <FadeInBlock delay={0.2}>
          <Cta onOpenPopup={handleOpenPopup} />
        </FadeInBlock>
      </Container>

      <PopupWidget open={isPopupOpen} setOpen={setIsPopupOpen} />
    </>
  );
}
