"use client";

import { APPLICATION_FORM_URL } from "@/lib/constants";
import { heroImageUrl } from "@/lib/images";
import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: heroImageUrl("photo-1665334217407-6688e6941a47"),
    alt: "Nigerian jollof rice served with sides on a table",
    headline: "Nigeria's ultimate culinary reality show.",
    support:
      "Talented Nigerian chefs, bold local flavors, and high-stakes challenges, all captured on camera for the world to watch.",
  },
  {
    src: heroImageUrl("photo-1665332195309-9d75071138f0"),
    alt: "Plated Nigerian jollof rice ready for judging",
    headline: "Cook under pressure. Win under the lights.",
    support:
      "From jollof to pepper soup, every round tests skill, creativity, and the nerve to represent Nigerian cuisine.",
  },
  {
    src: heroImageUrl("photo-1664992960082-0ea299a9c53e"),
    alt: "Bowl of Nigerian jollof rice with garnishes",
    headline: "Passion, originality, and pure fire.",
    support:
      "Professional chefs and passionate home cooks. Chef Wars is where Nigerian kitchen talent gets its spotlight.",
  },
  {
    src: heroImageUrl("photo-1569058242252-623df46b5025"),
    alt: "Nigerian rice dish with grilled meat and sides",
    headline: "₦1,000,000 and the champion's crown.",
    support:
      "Grand cash prizes, premium equipment, and the title of Chef Wars Champion await Nigeria's last cook standing.",
  },
] as const;

const INTERVAL_MS = 6000;
const HERO_IMAGE_QUALITY = 92;

export function Hero() {
  const [index, setIndex] = useState(0);
  const active = SLIDES[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-media" aria-hidden>
        {SLIDES.map((slide, i) => (
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
              quality={HERO_IMAGE_QUALITY}
              sizes="100vw"
              fetchPriority={i === 0 ? "high" : "low"}
            />
          </div>
        ))}
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
        <div className="hero-copy" aria-live="polite">
          <p className="hero-badge">Nigeria · Culinary Excellence</p>
          <h1 className="hero-title">
            Chef<span>Wars</span>
          </h1>
          <div key={index} className="hero-story">
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
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <p className="hero-index" aria-hidden>
            {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
