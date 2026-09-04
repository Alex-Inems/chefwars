"use client";

import { APPLICATION_FORM_URL } from "@/lib/constants";
import {
  HERO_PHOTO_ID,
  desktopHeroImageUrl,
  mobileHeroImageUrl,
} from "@/lib/images";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = "(max-width: 699px)";
const INTERVAL_MS = 6500;
const DESKTOP_QUALITY = 80;
const MOBILE_QUALITY = 80;

const MOBILE_HERO = {
  src: mobileHeroImageUrl(HERO_PHOTO_ID),
  headline: "Nigeria's ultimate culinary reality show.",
  support:
    "Talented Nigerian chefs, bold local flavors, and high-stakes challenges, all captured on camera for the world to watch.",
} as const;

const SLIDES = [
  {
    src: desktopHeroImageUrl(HERO_PHOTO_ID),
    headline: "Nigeria's ultimate culinary reality show.",
    support:
      "Talented Nigerian chefs, bold local flavors, and high-stakes challenges, all captured on camera for the world to watch.",
  },
  {
    src: desktopHeroImageUrl("photo-1665332195309-9d75071138f0"),
    headline: "Cook under pressure. Win under the lights.",
    support:
      "From jollof to pepper soup, every round tests skill, creativity, and the nerve to represent Nigerian cuisine.",
  },
  {
    src: desktopHeroImageUrl("photo-1664992960082-0ea299a9c53e"),
    headline: "Passion, originality, and pure fire.",
    support:
      "Professional chefs and passionate home cooks. Chef Wars is where Nigerian kitchen talent gets its spotlight.",
  },
  {
    src: desktopHeroImageUrl("photo-1569058242252-623df46b5025"),
    headline: "₦1,000,000 and the champion's crown.",
    support:
      "Grand cash prizes, premium equipment, and the title of Chef Wars Champion await Nigeria's last cook standing.",
  },
] as const;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_BREAKPOINT);
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function Hero() {
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(() => new Set([0, 1]));
  const timerRef = useRef<number | null>(null);

  const active = isMobile ? MOBILE_HERO : SLIDES[index];
  const isDesktop = isMobile === false;

  const goTo = useCallback((next: number) => {
    setIndex(next);
    setMounted((prev) => {
      const nextSet = new Set(prev);
      nextSet.add(next);
      nextSet.add((next + 1) % SLIDES.length);
      return nextSet;
    });
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    setMounted((prev) => {
      const nextSet = new Set(prev);
      nextSet.add(index);
      nextSet.add((index + 1) % SLIDES.length);
      return nextSet;
    });
  }, [index, isDesktop]);

  useEffect(() => {
    if (!isDesktop || paused) {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isDesktop, paused, index]);

  return (
    <section
      className={`hero${paused ? " is-paused" : ""}`}
      onMouseEnter={() => isDesktop && setPaused(true)}
      onMouseLeave={() => isDesktop && setPaused(false)}
    >
      <div className="hero-media" aria-hidden>
        {/* Mobile / first paint: one static image only */}
        {isMobile !== false ? (
          <div className="hero-slide is-active">
            <Image
              className="hero-img hero-img-mobile-static"
              src={MOBILE_HERO.src}
              alt=""
              fill
              priority
              quality={MOBILE_QUALITY}
              sizes="100vw"
              fetchPriority="high"
            />
          </div>
        ) : null}

        {/* Desktop slideshow: only mount active + nearby slides */}
        {isDesktop
          ? SLIDES.map((slide, i) =>
              mounted.has(i) ? (
                <div
                  key={slide.src}
                  className={`hero-slide${i === index ? " is-active" : ""}`}
                >
                  <Image
                    className="hero-img"
                    src={slide.src}
                    alt=""
                    fill
                    priority={i === 0}
                    quality={DESKTOP_QUALITY}
                    sizes="100vw"
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                  />
                </div>
              ) : null,
            )
          : null}

        <div className="hero-scrim" />
      </div>

      <header className="site-nav">
        <a className="site-logo" href="/">
          Chef<span>Wars</span>
        </a>
        <nav className="site-nav-links" aria-label="Primary">
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#prizes">
            Prizes
          </a>
          <a
            className="btn btn-nav-apply"
            href={APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply now
          </a>
        </nav>
      </header>

      <div className="hero-body">
        <div className="hero-copy" aria-live={isDesktop ? "polite" : "off"}>
          <p className="hero-badge">Nigeria · Culinary Excellence</p>
          <h1 className="hero-title">
            Chef<span>Wars</span>
          </h1>
          <div
            key={isMobile ? "mobile" : index}
            className={`hero-story${isMobile ? " is-static" : ""}`}
          >
            <p className="hero-headline">{active.headline}</p>
            <p className="hero-support">{active.support}</p>
          </div>
          <div className="hero-actions">
            <a
              className="btn btn-fire"
              href={APPLICATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply · ₦10,000
            </a>
            <a className="btn btn-ghost" href="#about">
              Learn more
            </a>
          </div>
        </div>

        {isDesktop ? (
          <div className="hero-controls">
            <div className="hero-dots" role="tablist" aria-label="Hero slides">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Slide ${i + 1}`}
                  className={`hero-dot${i === index ? " is-active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  {i === index ? (
                    <span
                      key={`progress-${index}`}
                      className="hero-dot-progress"
                      style={{ animationDuration: `${INTERVAL_MS}ms` }}
                    />
                  ) : null}
                </button>
              ))}
            </div>
            <p className="hero-index" aria-hidden>
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(SLIDES.length).padStart(2, "0")}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
