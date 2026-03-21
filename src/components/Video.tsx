"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/Container";

interface VideoProps {
  src: string;
  poster?: string;
}

export function Video({ src, poster }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (!src) return null;

  const handlePlay = async () => {
    setPlayVideo(true);

    // počakamo, da se video renderira
    setTimeout(async () => {
      const video = videoRef.current;
      if (!video) return;

      try {
        await video.play();
      } catch (error) {
        console.error("Video play failed:", error);
      }

      try {
        if (video.requestFullscreen) {
          await video.requestFullscreen();
        } else if ((video as any).webkitEnterFullscreen) {
          (video as any).webkitEnterFullscreen();
        }
      } catch (error) {
        console.error("Fullscreen failed:", error);
      }
    }, 50);
  };

  return (
    <Container className="px-4 sm:px-6">
      <div className="mx-auto mb-12 w-full max-w-sm sm:max-w-md lg:max-w-lg">
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

              <div className="absolute inset-0 bg-black/20" />

              <button
                onClick={handlePlay}
                className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30 sm:h-18 sm:w-18 lg:h-20 lg:w-20"
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
              ref={videoRef}
              className="h-full w-full bg-black object-contain"
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
