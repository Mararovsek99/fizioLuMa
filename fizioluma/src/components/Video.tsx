"use client";

import { useState } from "react";
import { Container } from "@/components/Container";

interface VideoProps {
  src: string;
  poster?: string;
}

export function Video({ src, poster }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!src) return null;

  return (
    <Container>
      <div className="mx-auto mb-12 w-full max-w-md lg:max-w-lg">
        <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black shadow-2xl">
          {!playVideo ? (
            <>
              {poster ? (
                <img
                  src={poster}
                  alt="Video preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-neutral-900" />
              )}

              <button
                onClick={() => setPlayVideo(true)}
                className="absolute left-1/2 top-1/2 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-white lg:h-20 lg:w-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Play Video</span>
              </button>
            </>
          ) : (
            <video
              className="h-full w-full object-contain bg-black"
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              <source src={src} type="video/mp4" />
              Tvoj brskalnik ne podpira videa.
            </video>
          )}
        </div>
      </div>
    </Container>
  );
}
