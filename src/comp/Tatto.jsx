import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Heroslideshow from "./Hero";

// --- Helper variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`relative py-20 md:py-28 ${className}`}>
    {children}
  </section>
);

const Tag = ({ children }) => (
  <span className="inline-block rounded-full border border-zinc-700/70 bg-zinc-900/60 px-3 py-1 text-xs tracking-wider uppercase text-zinc-300 backdrop-blur">
    {children}
  </span>
);

const Heading = ({ kicker, title, subtitle }) => (
  <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mx-auto max-w-3xl text-center">
    {kicker && (
      <motion.div variants={fadeUp} className="mb-4">
        <Tag>{kicker}</Tag>
      </motion.div>
    )}
    <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black tracking-tight text-white">
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p variants={fadeUp} className="mt-4 text-zinc-300/90">
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm font-medium text-zinc-300 hover:text-white transition">
    {children}
  </a>
);

export default function TattooArtistSite() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-fuchsia-600/50">
      {/* Decorative gradient glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-fuchsia-600/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#home" className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="drop-shadow">
              <path d="M3 12c6-2 5-8 9-8s3 6 9 8-3 8-9 8-3-6-9-8Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="font-black tracking-widest text-white">THE INKLAB</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#styles">Styles</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#booking">Book</NavLink>
          </nav>
          <a href="#booking" className="rounded-2xl border border-fuchsia-500/40 bg-fuchsia-600/20 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-600/30">Book Now</a>
        </div>
      </header>

      {/* Hero */}
      {/* <Section id="home" className="pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Tag>Custom Tattoos • Delhi</Tag>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Ink Your Story
            </h1>
            <p className="mt-4 max-w-xl text-zinc-300/90">
              Custom tattoos & unique designs that speak your soul</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#booking" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                Book a Session
              </a>
              <a href="#gallery" className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                View Gallery
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Certified hygiene • Single-use needles • Aftercare guide
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="relative">
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-fuchsia-600/20 via-purple-600/10 to-cyan-500/20 blur-2xl" />
            <img
              src="https://cdn.pixabay.com/photo/2023/01/26/15/56/tattoo-7746387_1280.jpg"
              alt="Tattoo artist working"
              className="aspect-square w-full rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </Section> */}
      <Heroslideshow />
      

      {/* Styles / Services */}
      <Section id="styles" className="border-t border-white/5">
        <Heading
          kicker="Styles & Services"
          title="From Minimal Lines to Full Realism"
          subtitle="Pick a style you vibe with. Every piece is custom-crafted for your story."
        />
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Blackwork", desc: "Bold blacks, high contrast, striking silhouettes.", img: "https://static.wixstatic.com/media/c7b51c_ba99aaef647b4ba58e3979faf92e2526~mv2.webp" },
            { title: "Fine Line", desc: "Delicate, minimal, elegant line art.", img: "https://d1kq2dqeox7x40.cloudfront.net/web/guides/covers/fineline.jpg?h=580&w=580" },
            { title: "Realism", desc: "Life-like portraits & detailed shading.", img: "https://static.tatship.com/idea-page-posts/54a81606-37fd-46e5-9458-88e2a88c86c1.jpg" },
            { title: "Neo Traditional", desc: "Bold outlines with rich, modern color.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MJt_vADKIrZ40AlhhQFoB6GhIMFWdpJ4nw&s" },
          ].map((card) => (
            <motion.div
              key={card.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <img src={card.img} alt={card.title} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-1 text-sm text-zinc-300/90">{card.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Consultation</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Custom Design</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery" className="border-t border-white/5">
        <Heading kicker="Portfolio" title="Recent Work" subtitle="A peek into the ink. Tap to view in full." />
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 px-4 md:grid-cols-3 lg:grid-cols-4">
          {[
            "https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_1280.jpg",
            "https://cdn.pixabay.com/photo/2014/12/04/00/06/tattoo-artist-556036_1280.jpg",
            "https://cdn.pixabay.com/photo/2014/09/07/16/53/valentines-day-background-437968_1280.jpg",
            "https://cdn.pixabay.com/photo/2015/08/16/12/39/man-890887_1280.jpg",
            "https://cdn.pixabay.com/photo/2019/08/09/08/12/tattoo-4394609_1280.jpg",
            "https://cdn.pixabay.com/photo/2017/08/03/13/01/people-2576110_1280.jpg",
            "https://cdn.pixabay.com/photo/2016/11/29/05/18/adult-1867489_1280.jpg",
            "https://cdn.pixabay.com/photo/2018/05/22/09/56/arm-3420963_1280.jpg",
          ].map((src, i) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={src} alt={`Tattoo ${i + 1}`} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="border-t border-white/5">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Heading kicker="About the Artist" title="Hi, I'm Aaryan" subtitle="Tattooing since 2016 • 1000+ happy clients" />
            <p className="mt-6 text-zinc-300/90">
              I design tattoos that age beautifully and reflect your story. My studio follows strict hygiene protocols and focuses on a calm, collaborative experience—from concept and stencil to aftercare.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-300/90">
              <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Single-use needles</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Skin-safe inks</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Custom sketches</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Touch-up support</li>
            </ul>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="https://cdn.pixabay.com/photo/2015/08/16/12/39/man-890887_1280.jpg"
            alt="Artist portrait"
            className="aspect-[4/5] w-full rounded-3xl object-cover border border-white/10"
          />
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="border-t border-white/5">
        <Heading kicker="Testimonials" title="What Clients Say" />
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {[
            {
              quote:
                "I gave a rough idea and Aaryan turned it into a clean, minimal tattoo that I adore.",
              name: "Meera K.",
            },
            {
              quote:
                "Super hygienic studio and the shading work is insane. He nailed my portrait tattoo!",
              name: "Rohit S.",
            },
            {
              quote:
                "From consultation to aftercare, everything felt professional and calm.",
              name: "Ankit V.",
            },
          ].map((t) => (
            <motion.blockquote
              key={t.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-zinc-300/90"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm">“{t.quote}”</p>
              <footer className="mt-4 text-xs text-zinc-400">— {t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </Section>

      {/* Booking */}
      <Section id="booking" className="border-t border-white/5">
        <Heading kicker="Booking" title="Request an Appointment" subtitle="Share a few details and I'll get back within 24 hours." />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! Your request has been received. I'll reach out via email.");
          }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 px-4"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input required placeholder="Full Name" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-fuchsia-500/60" />
            <input type="email" required placeholder="Email" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-fuchsia-500/60" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input placeholder="Preferred Style (e.g., Fine Line)" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-fuchsia-500/60" />
            <input placeholder="Size & Placement (e.g., 3” forearm)" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-fuchsia-500/60" />
          </div>
          <textarea rows={5} placeholder="Describe your idea…" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-fuchsia-500/60" />
          <button type="submit" className="rounded-2xl border border-fuchsia-500/40 bg-fuchsia-600/20 px-5 py-3 text-sm font-semibold text-white hover:bg-fuchsia-600/30">
            Send Request
          </button>
          <p className="text-xs text-zinc-400">By submitting, you agree to the studio policies and hygiene guidelines.</p>
        </form>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 py-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12c6-2 5-8 9-8s3 6 9 8-3 8-9 8-3-6-9-8Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span className="font-black tracking-widest">THE INKLAB</span>
            </div>
            <p className="mt-3 text-sm text-zinc-400">Studio 22, Hauz Khas, New Delhi • Tue–Sun 11am–8pm</p>
          </div>
          <div className="space-x-6 text-sm text-zinc-300 md:justify-self-center">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#styles" className="hover:text-white">Styles</a>
            <a href="#booking" className="hover:text-white">Book</a>
          </div>
          <div className="md:justify-self-end">
            <div className="flex gap-3">
              <a className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:bg-white/5" href="#">Instagram</a>
              <a className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:bg-white/5" href="#">WhatsApp</a>
              <a className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:bg-white/5" href="#">Maps</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} The Inklab Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
