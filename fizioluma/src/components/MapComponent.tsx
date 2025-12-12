"use client";
import { Container } from "@/components/Container";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

// Informacije o lokaciji LuMa fizioterapije
const LUMA_LOCATION = {
  lat: 46.261409, // Latituda za Mariborska cesta 197, Škofja vas
  lng: 15.282128, // Longituda za Mariborska cesta 197, Škofja vas
};

// Vaš API ključ, skrit v .env.local
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export function MapComponent() {
  // Stanje za središče zemljevida (uporabno za kontrolo)
  const [center, setCenter] = useState(LUMA_LOCATION);

  // Preverjanje, ali je API ključ nastavljen
  if (!apiKey) {
    return (
      <Container>
        <div className="text-red-500 p-4 text-center">
          NAPAKA: Google Maps API ključ ni nastavljen v .env.local.
        </div>
      </Container>
    );
  }

  return (
    // APIProvider ovije celoten zemljevid in mu poda ključ
    <APIProvider apiKey={apiKey} language="sl" solutionChannel="LumaFizioWeb">
      <Container>
        <div
          className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl 
                    shadow-xl border-4 border-themecolor" // Dodal sem rob in senco, da ustreza vašemu stilu
        >
          <Map
            defaultCenter={LUMA_LOCATION}
            defaultZoom={15} //
            gestureHandling={"greedy"}
            disableDefaultUI={false} // Prikaz kontrol (zoom, itd.)
            mapId="YOUR_MAP_ID_HERE" // Opcionalno, če ste ustvarili Map ID v Google Cloud (priporočeno za styling)
            style={{ width: "100%", height: "100%" }}
          >
            {/* Oznaka za lokacijo fizioterapije LuMa */}
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
