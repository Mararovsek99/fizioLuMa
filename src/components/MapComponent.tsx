"use client";
import { Container } from "@/components/Container";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

// Contact Data
const phoneNumber = "041-823-843";
const emailAddress = "fizioluma@gmail.com";
const locationAddress = "Mariborska cesta 197 - Škofja vas";

const encodedAddress = encodeURIComponent(locationAddress);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

// Google Maps Embed URL
const embedMapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.4359923942425!2d15.281839600000001!3d46.2614391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47657082f7d2ddaf%3A0xdfb7742fa8c2ce0f!2sMariborska%20cesta%20197%2C%203211%20%C5%A0kofja%20vas!5e0!3m2!1ssl!2ssi!4v1773589134830!5m2!1ssl!2ssi";

interface ContactItemProps {
  href: string;
  icon: React.ElementType;
  title: string;
  value: string;
  iconColor: string;
  hint: string;
  target?: "_self" | "_blank";
}

const ContactItem = ({
  href,
  icon: Icon,
  title,
  value,
  iconColor,
  hint,
  target = "_self",
}: ContactItemProps) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    className="group flex w-full items-center rounded-2xl bg-gray-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-gray-300 sm:p-5 lg:flex-1 lg:min-w-[250px] cursor-pointer"
  >
    <div className={`mr-3 flex-shrink-0 ${iconColor} sm:mr-4`}>
      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
    </div>

    <div className="min-w-0 flex-1">
      <h3 className="mb-1 text-sm font-medium text-gray-800 sm:text-base">
        {title}
      </h3>

      <p className="break-words text-base font-semibold text-gray-900 sm:text-lg">
        {value}
      </p>

      <div className="mt-2 flex items-center gap-2 text-sm font-medium text-themecolor">
        <span>{hint}</span>
        <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </div>
  </a>
);

export function MapComponent() {
  return (
    <Container className="px-4 sm:px-6">
      <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-4 sm:gap-6 lg:mb-20 lg:flex-row">
        {/* Map */}
        <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border-4 border-themecolor shadow-xl sm:h-[360px] lg:h-[500px] lg:w-1/2">
          <iframe
            src={embedMapUrl}
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Photo */}
        <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border-4 border-themecolor bg-gray-200 shadow-xl sm:h-[360px] lg:h-[500px] lg:w-1/2">
          <img
            src="/img/location_outside.jpeg"
            alt="Fizioterapija LuMa"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto mb-10 max-w-7xl pb-6 md:mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-10 sm:text-3xl">
          Kontaktni podatki
        </h2>

        <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-6">
          <ContactItem
            href={mapsUrl}
            icon={MapPinIcon}
            title="Naslov"
            value={locationAddress}
            iconColor="text-red-600"
            hint="Odpri v zemljevidu"
            target="_blank"
          />

          <ContactItem
            href={`tel:${phoneNumber.replace(/-/g, "")}`}
            icon={PhoneIcon}
            title="Telefon"
            value={phoneNumber}
            iconColor="text-green-600"
            hint="Tapni za klic"
          />

          <ContactItem
            href={`mailto:${emailAddress}`}
            icon={EnvelopeIcon}
            title="E-pošta"
            value={emailAddress}
            iconColor="text-gray-600"
            hint="Tapni za e-pošto"
          />
        </div>
      </div>
    </Container>
  );
}
