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
    <Container className="px-4 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-4 sm:mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full items-center justify-between rounded-xl bg-gray-50 px-4 py-5 text-left text-base font-medium text-gray-800 shadow-sm transition-all duration-200 hover:bg-gray-100 hover:shadow-md focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 sm:text-lg">
                    <span className="pr-4 leading-snug">{item.question}</span>

                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180" : ""
                      } h-5 w-5 flex-shrink-0 text-themecolor transition-transform duration-300`}
                    />
                  </DisclosureButton>

                  <DisclosurePanel className="px-4 pb-4 pt-3 text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
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
    question: "Katere težave rešuješ?",
    answer:
      "Rešujem težave z mišično-skeletnim sistemom, kot so bolečine v hrbtu, vratu, sklepih, športne poškodbe, rehabilitacija po operacijah in izboljšanje gibljivosti ter držo.",
  },
  {
    question: "Ali je moje stanje sploh lahko še kaj bolje?",
    answer:
      "Da, večina stanj se lahko izboljša z ustrezno terapijo, vadbo in spremembami življenjskega sloga. Ocena vašega stanja mi pomaga določiti potencial za izboljšanje.",
  },
  {
    question: "Kakšne so čakalne dobe?",
    answer:
      "Čakalne dobe so odvisne od termina. Običajno lahko dobite termin v 2-4 dneh, za nujne primere pa tudi prej. Kontaktirajte me za trenutne razpoložljivosti.",
  },
  {
    question: "Kako se naročim?",
    answer:
      "Naročite se lahko preko telefona, e-pošte ali našega spletnega obrazca. Pokličite me na enega od zgornjih kontaktov.",
  },
  {
    question: "Koliko obravnav je potrebnih?",
    answer:
      "Število obravnav je odvisno od vaše težave. Običajno priporočam 4-6 obiskov, vendar to določim po prvi oceni. Nekateri potrebujejo več, drugi manj.",
  },
];
