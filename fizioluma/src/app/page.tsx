import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { MapComponent } from "@/components/MapComponent";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <section id="home">
        <Hero />
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
      <section id="therapy">
        <Benefits imgPos="right" data={benefitTwo} />
      </section>

      <SectionTitle
        preTitle="POGLEJ VIDEO"
        title="Na hitro o moji fizioterapiji"
      >
        V fizioluma verjamemo v moč gibanja in individualen pristop k
        zdravljenju. Oglejte si kratek video, kjer vam predstavim svoje metode
        dela, vrednote in kako lahko skupaj dosežemo vaše cilje za boljše
        počutje in gibljivost.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <section id="Testimonials">
        <SectionTitle preTitle="Mnenja strank" title="Kaj pravijo naše stranke">
          Preberite izkušnje naših zadovoljnih strank — njihove zgodbe o
          napredku, zaupanju in izboljšanem počutju. Resnične ocene, ki govorijo
          o strokovnosti in prijaznem pristopu.
        </SectionTitle>
      </section>

      <Testimonials />

      <section id="contact">
        <SectionTitle preTitle="kontakt" title="Kje nas najdete">
          Fizioterapija LuMa se nahaja 2 minuti od avtocestnega izvoza Celje
          center.
        </SectionTitle>
      </section>

      <MapComponent />

      <SectionTitle preTitle="HITRA POMOČ" title="Najpogostejša vprašanja">
        Tukaj so odgovori na najpogostejša vprašanja o storitvah, poteku terapij
        in rezervacijah. Če ne najdete odgovora, nas prosimo kontaktirajte — z
        veseljem pomagamo.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
