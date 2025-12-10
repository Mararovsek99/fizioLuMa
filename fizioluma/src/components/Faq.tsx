"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-themecolor`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Kako poteka prva obravnava?",
    answer:
      "Ob prvem obisku opravimo kratek pogovor o težavah, oceno gibljivosti in funkcije ter fizični pregled. Na podlagi tega pripravimo individualni načrt zdravljenja in dogovorimo cilje terapije.",
  },
  {
    question: "Ali potrebujem zdravniško napotnico?",
    answer:
      "Napotnica ni vedno obvezna. Napotnica lahko omogoči delno povračilo stroškov preko ZZZS; priporočamo, da preverite pri svojem zdravniku ali nas kontaktirate za informacije o kritjih in možnostih povračila.",
  },
  {
    question: "Koliko časa traja ena terapija?",
    answer:
      "Standardni obisk običajno traja 45–60 minut, odvisno od vrste težave in obsega obravnave. Ob prvem obisku lahko traja nekoliko dlje zaradi uvodne ocene.",
  },
  {
    question: "Katere metode uporabljate?",
    answer:
      "Uporabljamo manualno terapijo, terapevtske vaje, vadbo za stabilnost in držo, elektroterapijo ter druge individualno izbrane tehnike. Terapevtski načrt je prilagojen vašim potrebam.",
  },
  {
    question: "Ali bo terapija boleča?",
    answer:
      "Nekatere tehnike lahko povzročijo kratkotrajno nelagodje ali začasno povečanje bolečine, vendar terapevt prilagodi intenzivnost. Cilj je dolgoročno zmanjšanje bolečine in izboljšanje funkcije.",
  },
  {
    question: "Kdaj bom opazil prve rezultate?",
    answer:
      "Odvisno od narave težave. Pri akutnih težavah so izboljšave pogosto opazne po nekaj obravnavah, pri kroničnih stanjih pa je potreben daljši program in dosledna domača vadba.",
  },
];
