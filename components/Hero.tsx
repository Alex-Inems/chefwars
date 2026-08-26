"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80",
    alt: "Fine plated dish in soft restaurant light",
    headline: "Where kitchens compete.",
    support:
      "ChefWars brings elite cooks into one arena — precision plating, fierce timing, and dishes built to win the table.",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2400&q=80",
    alt: "Seared steak with herb butter",
    headline: "Heat decides the champion.",
            support:
              "From searing flame to final garnish, every round is judged on craft, courage, and the will to go bolder.",
  },
  {
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=2400&q=80",
    alt: "Seasonal salad with citrus",
    headline: "Fresh minds. Fresh fire.",
    support:
      "Seasonal ingredients become weapons of flavor — bright, unexpected, and impossible to ignore.",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2400&q=80",
    alt: "Pasta plated with fresh basil",
    headline: "Technique under pressure.",
    support:
      "Classic skill meets modern rivalry. One plate. One chance. The crowd tastes who rises.",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=2400&q=80",
    alt: "Dessert with berries and cream",
    headline: "The final course wins.",
    support:
      "Sweet finishes decide legends. In ChefWars, dessert is not an afterthought — it is the last strike.",
  },
] as const;

const INTERVAL_MS = 5500;

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
    <main className="hero">
      <div className="hero-media" aria-hidden>
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide${i === index ? " is-active" : ""}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className="hero-veil" />

      <header className="hero-nav">
        <a className="nav-mark" href="/">
          ChefWars
        </a>
        <ul className="nav-links">
          <li>
            <a href="#battles">Battles</a>
          </li>
          <li>
            <a href="#chefs">Chefs</a>
          </li>
          <li>
            <a href="#join">Join</a>
          </li>
        </ul>
      </header>

      <section className="hero-copy" aria-live="polite">
        <h1 className="brand">ChefWars</h1>
        <div key={index} className="story">
          <p className="headline">{active.headline}</p>
          <p className="support">{active.support}</p>
        </div>
        <div className="cta-row">
          <a className="btn btn-primary" href="#battles">
            Enter the arena
          </a>
          <a className="btn btn-ghost" href="#join">
            Watch live
          </a>
        </div>
      </section>
    </main>
  );
}
