import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
        Pri LuMa vam nudim individualno obravnavo, prilagojeno vašim težavam,
        naprednim terapijam ter realnim ciljem. Učinkovito, strokovno in
        prijazno – za vaše boljše gibanje.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle preTitle="Mnenja strank" title="Kaj pravijo naše stranke">
        Preberite izkušnje naših zadovoljnih strank — njihove zgodbe o napredku,
        zaupanju in izboljšanem počutju. Resnične ocene, ki govorijo o
        strokovnosti in prijaznem pristopu.
      </SectionTitle>

      <Testimonials />

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
