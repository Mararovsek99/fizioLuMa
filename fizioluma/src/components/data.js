import {
  AcademicCapIcon,
  BookOpenIcon,
  UserIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  SparklesIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

import aboutmeImg from "../../public/img/aboutme.jpeg";
import couponsImg from "../../public/img/benefits.jpeg";

const benefitOne = {
  title: "O meni",
  desc: "Sem diplomirana fizioterapevtka s strastjo do pomoči ljudem pri doseganju boljšega počutja. Verjamem v celosten pristop k zdravljenju, ki upošteva tako fizične kot čustvene vidike zdravja.V svojem delu združujem sodobne terapevtske tehnike z empatijo in razumevanjem. Vsak pacient je edinstven, zato tudi obravnava vedno prilagojena njegovim potrebam.",
  image: aboutmeImg,
  bullets: [
    {
      title: "Strokovna izobrazba",
      desc: "Diplomirana fizioterapevtka",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Specialna znanja",
      desc: "Stalno izobraževanje in specializacije",
      icon: <BookOpenIcon />,
    },
    {
      title: "Individualen pristop",
      desc: "Osebna obravnava vsakega pacienta",
      icon: <UserIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Ugodnosti in popusti",
  desc: "V fizioterapiji LuMa imajo pacienti na voljo več dodatnih ugodnosti, ki omogočajo boljšo obravnavo, več podpore med terapijo in boljše rezultate zdravljenja.",
  image: couponsImg,
  bullets: [
    {
      title: "Brezplačen uvodni posvet",
      desc: "Prvih 30 minut je namenjenih pogovoru, pregledu težav in načrtovanju terapije.",
      icon: <ChatBubbleLeftRightIcon />,
    },
    {
      title: "Dodatni čas pri prvi obravnavi",
      desc: "Pri prvi terapiji je dodanih 15–30 minut, da lahko temeljito analiziramo težavo.",
      icon: <ClockIcon />,
    },
    {
      title: "Akcijski paket 5 + 1",
      desc: "Ob nakupu paketa 5 terapij ali masaž prejmete eno dodatno terapijo brezplačno.",
      icon: <SparklesIcon />,
    },
    {
      title: "Stalno spremljanje napredka",
      desc: "Med terapijami poteka sprotno spremljanje napredka in prilagajanje terapije.",
      icon: <ChartBarIcon />,
    },
    {
      title: "Brez čakalnih vrst",
      desc: "Termine organiziramo tako, da se izognemo čakanju in zagotovimo kakovostno obravnavo.",
      icon: <CheckBadgeIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
