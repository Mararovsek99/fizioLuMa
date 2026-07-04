"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";

interface VideoProps {
  src: string;
  poster?: string;
}

export function Video({ src, poster }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  if (!src) return null;

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          setPlayVideo(true);
          void video.play().catch(() => undefined);
        } else {
          setPlayVideo(false);
          video.pause();
        }
      },
      { threshold: 1 },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [src]);

  return (
    <Container className="px-4 sm:px-6">
      <div
        ref={containerRef}
        className="mx-auto mb-12 w-full max-w-sm sm:max-w-md lg:max-w-lg"
      >
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
            </>
          ) : (
            <video
              ref={videoRef}
              className="h-full w-full bg-black object-contain"
              controls
              muted
              playsInline
              preload="metadata"
            >
              <source src={src} type="video/mp4" />
              Tvoj brskalnik ne podpira videa.
            </video>
          )}

          {!playVideo && (
            <video
              ref={videoRef}
              className="hidden h-full w-full bg-black object-contain"
              muted
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
