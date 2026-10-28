"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import Form from "next/form";

interface Production {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  year: string;
}

const productions: Production[] = [
  {
    id: "1",
    title: "Scene",
    category: "Feature Film",
    thumbnail: "/cinema/scene-poster-1.jpg",
    year: "2026",
  },
  {
    id: "2",
    title: "Scene",
    category: "Feature Film",
    thumbnail: "/cinema/scene-poster-2.jpg",
    year: "2026",
  },
  {
    id: "3",
    title: "Scene",
    category: "Feature Film",
    thumbnail: "/cinema/scene-poster-3.jpg",
    year: "2026",
  },
  {
    id: "4",
    title: "Scene",
    category: "Feature Film",
    thumbnail: "/cinema/scene-poster-4.jpg",
    year: "2026",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMovieClick = (movie: Production) => {
    console.log(`Opening production: ${movie.title}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-app-background">
      <section className="relative h-200 w-full flex flex-col justify-between items-center p-6 text-center text-white">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 70%, rgba(0,0,0,0.4) 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 70%, rgba(0,0,0,0.4) 88%, transparent 100%)",
            }}
          >
            <video
              src="background/scene.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div
            className="absolute inset-x-0 bottom-0 h-[35vh] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to top, #f5f2eb 0%, rgba(245, 242, 235, 0.5) 30%, rgba(245, 242, 235, 0.1) 50%, transparent 80%)",
            }}
          />
        </div>

        <header className="w-full flex justify-between items-center px-4 md:px-8 py-2 z-1 relative">
          <div className="hidden md:flex gap-12 items-center text-xl">
            <Link href="/">About</Link>
            <Link href="/about">Movies</Link>
          </div>

          <div className="flex flex-row items-center justify-center gap-2">
            <Image
              src="/logo/logo-white.png"
              alt="Zhagaram Studios Logo"
              width={50}
              height={50}
              className="md:w-[60px] md:h-[60px]"
            />
            <div className="flex flex-col items-start justify-center">
              <p className="font-bold text-lg md:text-xl">Zhagaram</p>
              <p className="font-thin text-sm md:text-base">Studios</p>
            </div>
          </div>

          <div className="hidden md:flex gap-12 items-center text-xl">
            <Link href="/journal">Work</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-black/95 flex flex-col items-center gap-6 py-8 md:hidden text-xl border-b border-white/10">
              <Link href="/" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                Movies
              </Link>
              <Link href="/journal" onClick={() => setIsOpen(false)}>
                Work
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          )}
        </header>

        <div className="absolute flex flex-col items-center justify-center z-1 top-1/2 left-1">
          <Image
            src="/cinema/scene-logo.png"
            alt="Hero Image"
            width={500}
            height={600}
          />
        </div>
      </section>

      <section className="relative flex flex-row py-20 text-center justify-between w-full">
        <div className="flex flex-col items-start justify-center max-w-4xl px-15">
          <p className="text-7xl font-style">Welcome, Nanbar!</p>
          <p className="text-6xl font-bold text-pastel-green">
            Zhagaram Studios
          </p>
          <p className="text-base max-w-2xl py-4 text-left">
            From the family of 2D Entertainment and Agaram Foundation, we at
            Zhagaram Studios believe in the power of storytelling through the
            lens of creativity. Our team of passionate artists and filmmakers
            work tirelessly to bring your vision to life, crafting cinematic
            experiences that resonate with audiences worldwide.
          </p>
          <Link
            href="/journal"
            className="mt-4 bg-pastel-yellow text-app-foreground py-2 px-4 rounded-md"
          >
            About Us
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center pt-20 text-center w-full relative">
        <div className="w-full bg-app-foreground py-20 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-8 mb-12 flex items-end justify-between">
            <div>
              <span className="text-lg uppercase tracking-[0.3em] text-amber-500/70 mb-2">
                Productions
              </span>
              <h2 className="text-4xl tracking-tight text-zinc-100">
                Our Cinematic Journey
              </h2>
            </div>
          </div>

          <div className="relative w-full">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto px-12 md:px-24 py-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: "none" }}
            >
              {productions.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => handleMovieClick(movie)}
                  className="group relative flex-none w-[310px] md:w-[400px] aspect-[16/10] bg-[#121215] flex flex-col justify-between cursor-pointer snap-center rounded-[3px] border border-zinc-800/40 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:scale-[1.03] hover:border-amber-500/30 hover:shadow-[0_20px_50px_rgba(217,119,6,0.1)]"
                >
                  <div className="w-full h-5 bg-[#0a0a0c] flex justify-between px-3 items-center border-b border-zinc-900/80">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={`top-${i}`}
                        className="w-3 h-2.5 bg-[#16161a] rounded-[1px] shadow-inner transition-colors duration-500 group-hover:bg-zinc-900"
                      />
                    ))}
                  </div>

                  <div className="relative w-full flex-1 overflow-hidden bg-zinc-950">
                    <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 transition-all duration-500 group-hover:from-black/90" />

                    <Image
                      src={movie.thumbnail}
                      alt={movie.title}
                      fill
                      sizes="(max-w-768px) 310px, 400px"
                      className="object-cover filter saturate-[0.85] contrast-[1.05] transition-all duration-700 ease-out scale-100 group-hover:scale-105 group-hover:saturate-100"
                      priority={movie.id === "1"}
                    />

                    <div className="absolute inset-y-0 left-0 w-[1px] bg-zinc-900/60 z-10" />
                    <div className="absolute inset-y-0 right-0 w-[1px] bg-zinc-900/60 z-10" />

                    <div className="absolute inset-x-0 bottom-0 p-5 z-20 flex justify-between items-end transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="max-w-[75%]">
                        <span className="text-[10px] font-mono tracking-widest text-amber-400/80 uppercase block mb-1">
                          {movie.category}
                        </span>
                        <h3 className="text-base font-light text-zinc-100 tracking-wide line-clamp-1">
                          {movie.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-mono text-zinc-500 tracking-tighter group-hover:text-zinc-400 transition-colors">
                          {movie.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-5 bg-[#0a0a0c] flex justify-between px-3 items-center border-t border-zinc-900/80">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={`bot-${i}`}
                        className="w-3 h-2.5 bg-[#16161a] rounded-[1px] shadow-inner transition-colors duration-500 group-hover:bg-zinc-900"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-pastel-green flex flex-col items-center justify-center text-center py-16 px-10 mt-45">
        <div className="max-w-7xl flex flex-col items-center justify-center text-center">
          <h2 className="text-5xl mb-4 font-bold">Get in Touch</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20 w-full max-w-7xl px-4 sm:px-10 pt-10">
          <Form
            action="/api/contact"
            className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-md order-2 lg:order-1"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-pastel-green"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-pastel-green"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-pastel-green resize-none h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-pastel-yellow text-app-foreground py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Send Message
            </button>
          </Form>

          <div className="w-full max-w-md lg:max-w-7xl flex flex-col items-center lg:items-start justify-center order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl mb-4 font-bold">Our Address</h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg tracking-wide leading-relaxed">
              Zhagaram Studios Pvt. Ltd. <br />
              43/20, 2nd floor, Akshaya Suriya Appartment, <br />
              Besant avenue road , Adyar, Chennai - 600020. <br />
              +91 44 42046111
            </p>
            <p className="font-bold text-base sm:text-lg">
              info@zhagaramstudios.com
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-pastel-green py-6 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-sm text-app-foreground">
          <p>
            &copy; {new Date().getFullYear()} Zhagaram Studios. All rights
            reserved.
          </p>
          <p className="font-medium">
            Created by
            <span className="hover:underline cursor-pointer">
              The Artwork Labs
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}
