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
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 shadow-md">
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
