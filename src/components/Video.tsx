"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { Container } from "@/components/Container";

interface VideoProps {
  src: string;
  poster?: string;
}

export function Video({ src, poster }: Readonly<VideoProps>) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const userPauseRef = useRef(false);

  if (!src) return null;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
          if (!userPauseRef.current) {
            video.muted = false;
            void video.play().catch(() => undefined);
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.75 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [src]);

  const handleTogglePlay = (event: MouseEvent<HTMLVideoElement>) => {
    const video = videoRef.current;
    if (!video) return;

    if (event.target !== event.currentTarget) {
      return;
    }

    event.preventDefault();

    if (video.paused) {
      userPauseRef.current = false;
      void video.play().catch(() => undefined);
    } else {
      userPauseRef.current = true;
      video.pause();
    }
  };

  return (
    <Container className="px-4 sm:px-6">
      <div className="mx-auto mb-12 w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-md">
        <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black shadow-2xl">
          <video
            ref={videoRef}
            poster={poster}
            className="h-full w-full bg-black object-contain cursor-pointer"
            controls
            playsInline
            preload="metadata"
            onClick={handleTogglePlay}
          >
            <source src={src} type="video/mp4" />
            Tvoj brskalnik ne podpira videa.
          </video>
        </div>
      </div>
    </Container>
  );
}
