"use client";
import { Container } from "@/components/Container";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

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
  target?: "_self" | "_blank";
}

const ContactItem = ({
  href,
  icon: Icon,
  title,
  value,
  iconColor,
  target = "_self",
}: ContactItemProps) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    className="flex items-center p-4 bg-gray-50 rounded-xl transition-all duration-300 shadow-sm 
               hover:bg-gray-100 hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-gray-300 flex-1 min-w-[250px] cursor-pointer"
  >
    <div className={`flex-shrink-0 mr-4 ${iconColor}`}>
      <Icon className="w-7 h-7" />
    </div>

    <div className="flex flex-col justify-center w-full text-center">
      <h3 className="text-base font-medium text-gray-800 mb-1">{title}</h3>
      <p className="text-lg font-semibold text-gray-900 break-words">{value}</p>
    </div>
  </a>
);

export function MapComponent() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto lg:mb-20">
        {/* Map */}
        <div className="relative w-full lg:w-1/2 h-[500px] overflow-hidden rounded-2xl shadow-xl border-4 border-themecolor">
          <iframe
            src={embedMapUrl}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Photo */}
        <div className="relative w-full lg:w-4/5 h-[500px] overflow-hidden rounded-2xl shadow-xl border-4 border-themecolor bg-gray-200">
          <img
            src="/img/location_outside.jpeg"
            alt="Fizioterapija LuMa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mb-10 md:mb-16 pb-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Kontaktni podatki
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <ContactItem
            href={mapsUrl}
            icon={MapPinIcon}
            title="Naslov"
            value={locationAddress}
            iconColor="text-red-600"
            target="_blank"
          />

          <ContactItem
            href={`tel:${phoneNumber.replace(/-/g, "")}`}
            icon={PhoneIcon}
            title="Telefon"
            value={phoneNumber}
            iconColor="text-green-600"
          />

          <ContactItem
            href={`mailto:${emailAddress}`}
            icon={EnvelopeIcon}
            title="E-pošta"
            value={emailAddress}
            iconColor="text-gray-600"
          />
        </div>
      </div>
    </Container>
  );
}
