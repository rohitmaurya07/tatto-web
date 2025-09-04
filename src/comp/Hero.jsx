import React, { useEffect, useRef, useState } from "react";

export default function HeroSlideshow() {
  const heroImages = [
    "https://cdn.pixabay.com/photo/2019/08/09/08/12/tattoo-4394609_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/01/26/15/56/tattoo-7746387_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/05/18/adult-1867489_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/04/58/hands-1867428_1280.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoadedCount((c) => c + 1);
      img.onerror = () => setLoadedCount((c) => c + 1);
    });
  }, [heroImages]);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % heroImages.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (index) => {
    setCurrent(index);
    startTimer();
  };
  const prev = () => {
    setCurrent((p) => (p - 1 + heroImages.length) % heroImages.length);
    startTimer();
  };
  const next = () => {
    setCurrent((p) => (p + 1) % heroImages.length);
    startTimer();
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, i) => (
          <div
            key={i}
            style={{ backgroundImage: `url(${src})` }}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-800 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i === current ? "false" : "true"}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center  md:px-4 pb-50 sm:pb-20 lg:pb-32 px-6">
        <span className="inline-block rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider text-white/90">
          Custom Tattoos • Jalandhar
        </span>

        <h1 className="mt-3 text-5xl sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg leading-snug">
          Ink Your Story
        </h1>

        <p className="mt-3 sm:mt-5 max-w-sm sm:max-w-md md:max-w-xl text-md sm:text-base md:text-lg text-zinc-200/90">
          I craft bold, meaningful tattoos — from minimal line work to full
          realism. Clean, safe, and 100% custom designs.
        </p>

        {/* Buttons: full width on mobile */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto max-w-xs sm:max-w-none">
          <a
            href="#booking"
            className="w-full sm:w-auto rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition text-center"
          >
            Book a Session
          </a>
          <a
            href="#gallery"
            className="w-full sm:w-auto rounded-xl sm:rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition text-center"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-xl sm:text-2xl text-white hover:bg-black/50 transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 sm:right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-xl sm:text-2xl text-white hover:bg-black/50 transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 z-30 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-200 ${
              i === current
                ? "w-6 sm:w-8 bg-white/90"
                : "w-2 sm:w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
