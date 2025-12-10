import {
  AcademicCapIcon,
  BookOpenIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "O meni",
  desc: "Sem diplomirana fizioterapevtka s strastjo do pomoči ljudem pri doseganju boljšega počutja. Verjamem v celosten pristop k zdravljenju, ki upošteva tako fizične kot čustvene vidike zdravja.V svojem delu združujem sodobne terapevtske tehnike z empatijo in razumevanjem. Vsak pacient je edinstven, zato tudi obravnava vedno prilagojena njegovim potrebam.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Strokovna izobrazba",
      desc: "Diplomirana fizioterapevtka",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Dodatna znanja",
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
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
