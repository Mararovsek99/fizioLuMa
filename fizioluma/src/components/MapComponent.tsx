"use client";
import { Container } from "@/components/Container";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

// Import Heroicons
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

// LuMa location details
const LUMA_LOCATION = {
  lat: 46.261409,
  lng: 15.282128,
};

// Mock Contact Data
const phoneNumber = "041-823-843";
const emailAddress = "fizioluma@gmail.com";
const locationAddress = "Mariborska cesta 197 - Škofja vas";

// Encode the address for the URL
const encodedAddress = encodeURIComponent(locationAddress);
// Google Maps URL structure
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

// TypeScript Interface for ContactItemProps
interface ContactItemProps {
  href: string;
  icon: React.ElementType;
  title: string;
  value: string;
  iconColor: string;
  target?: "_self" | "_blank";
}

// Contact Item Component
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
    // Card/Button styling for clear clickability
    className="flex items-center p-4 bg-gray-50 rounded-xl transition-all duration-300 shadow-sm 
               hover:bg-gray-100 hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-gray-300 flex-1 min-w-[250px] cursor-pointer"
  >
    {/* Icon container */}
    <div className={`flex-shrink-0 mr-4 ${iconColor}`}>
      <Icon className="w-7 h-7" />
    </div>

    {/* Text container, vertically centered */}
    <div className="flex flex-col justify-center w-full text-center">
      <h3 className="text-base font-medium text-gray-800 mb-1">{title}</h3>
      <p className="text-lg font-semibold text-gray-900 break-words">{value}</p>
    </div>
  </a>
);

// API Key from .env.local
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export function MapComponent() {
  const [center, setCenter] = useState(LUMA_LOCATION);

  if (!apiKey) {
    return (
      <Container>
        <div className="text-red-500 p-4 text-center">
          ERROR: Google Maps API key is not set in .env.local.
        </div>
      </Container>
    );
  }

  return (
    <APIProvider apiKey={apiKey} language="sl" solutionChannel="LumaFizioWeb">
      <Container>
        {/* Contact Block */}
        <div className="max-w-7xl mx-auto mb-10 md:mb-16 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Kontaktni podatki
          </h2>

          {/* Contact details container (Flexbox) */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* LOCATION */}
            <ContactItem
              href={mapsUrl}
              icon={MapPinIcon}
              title="Kje nas najdete"
              value={locationAddress}
              iconColor="text-red-600"
              target="_blank"
            />

            {/* PHONE */}
            <ContactItem
              href={`tel:${phoneNumber.replace(/-/g, "")}`}
              icon={PhoneIcon}
              title="Pokličite nas"
              value={phoneNumber}
              iconColor="text-green-600"
            />

            {/* EMAIL */}
            <ContactItem
              href={`mailto:${emailAddress}`}
              icon={EnvelopeIcon}
              title="Pišite nam"
              value={emailAddress}
              iconColor="text-gray-600"
            />
          </div>
        </div>
        {/* End Contact Block */}

        <div
          className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl 
                    shadow-xl border-4 border-themecolor"
        >
          <Map
            defaultCenter={LUMA_LOCATION}
            defaultZoom={15}
            gestureHandling={"greedy"}
            disableDefaultUI={false}
            mapId="YOUR_MAP_ID_HERE"
            style={{ width: "100%", height: "100%" }}
          >
            <AdvancedMarker
              position={LUMA_LOCATION}
              title={"Fizioterapija LuMa"}
            >
              <Pin
                background={"#4F46E5"}
                borderColor={"#1E293B"}
                glyphColor={"#FFFFFF"}
              />
            </AdvancedMarker>
          </Map>
        </div>
      </Container>
    </APIProvider>
  );
}
