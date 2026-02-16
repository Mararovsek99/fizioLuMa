import {
  AcademicCapIcon,
  BookOpenIcon,
  UserIcon,
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";

import aboutmeImg from "../../public/img/aboutme.jpeg";
import certificatesImg from "../../public/img/certificates.png";

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
  title: "Terapije in šolanja",
  desc: "Ves dodatni čas vlagam v najnovejša šolanja in izpopolnjevanja s področja fizioterapije, da vam lahko ponudim najbolj učinkovite in sodobne metode zdravljenja.",
  image: certificatesImg, // Uporabljam originalno referenco za sliko/certifikate
  bullets: [
    {
      title: "Specializirana Manualna terapija",
      desc: "Specializacija na področju manualne terapije za zdravljenje mišično-skeletnih težav.",
      icon: <ChartBarIcon />, // Simbol za mobilno napravo (uporabljam kot nadomestek za splošno tehniko)
    },
    {
      title: "Specializacija Limfna drenaža",
      desc: "Najnovejše izpopolnjevanje je usmerjeno v tehniko limfne drenaže, ki je ključna za zmanjšanje oteklin in pospeševanje regeneracije.",
      icon: <AdjustmentsHorizontalIcon />, // Simbol za nastavitve/prilagoditve (uporabljam kot nadomestek za splošno prilagoditev)
    },
  ],
};

export { benefitOne, benefitTwo };
