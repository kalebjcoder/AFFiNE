'use client';

import { motion } from 'framer-motion';

import { ideas } from '../data/ideas';
import { FilingCabinet } from './FilingCabinet';
import { IdeaCard } from './IdeaCard';
import { SearchBar } from './SearchBar';
import { Sidebar } from './Sidebar';

function DustParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 34 }).map((_, index) => (
        <motion.span
          key={`dust-${index}`}
          className="absolute size-1 rounded-full bg-amber-100/35 blur-[1px]"
          style={{
            left: `${(index * 29) % 100}%`,
            top: `${(index * 47) % 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.65, 0.12],
            y: [-12, -44, -12],
            x: [0, index % 2 ? 18 : -18, 0],
          }}
          transition={{
            duration: 8 + (index % 6),
            repeat: Infinity,
            delay: index * 0.18,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export function LibraryHall() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08060f] text-white">
      <Sidebar />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(139,92,246,0.36),transparent_30%),radial-gradient(circle_at_78%_10%,rgba(56,189,248,0.24),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(245,158,11,0.24),transparent_34%)]" />
      <motion.div
        className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-amber-200/12 to-transparent blur-3xl"
        animate={{ opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <DustParticles />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:pl-32">
        <header className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-2xl sm:px-6">
          <span className="font-serif text-lg tracking-[0.18em] text-amber-100">
            THE VAULT
          </span>
          <span className="hidden text-xs uppercase tracking-[0.32em] text-white/45 sm:block">
            Private cinematic archive
          </span>
          <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-emerald-100">
            Online
          </span>
        </header>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-8">
          <div>
            <motion.p
              className="mb-5 text-xs uppercase tracking-[0.45em] text-sky-100/70"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Warehouse Library / Level 09
            </motion.p>
            <motion.h1
              className="max-w-4xl font-serif text-5xl leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl xl:text-8xl"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18 }}
            >
              Unlock every idea in the dark.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-base leading-8 text-slate-200/70 sm:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
            >
              A glossy glass command center surrounded by brass-labeled filing
              cabinets, purple-blue shadows, and warm gold pools of light.
            </motion.p>
            <div className="mt-8">
              <SearchBar />
            </div>
          </div>

          <div id="drawers" className="relative">
            <FilingCabinet />
          </div>
        </div>

        <section id="artifacts" className="grid gap-4 pb-8 md:grid-cols-3">
          {ideas.map((idea, index) => (
            <IdeaCard key={idea.id} idea={idea} index={index} />
          ))}
        </section>
      </section>
    </main>
  );
}
