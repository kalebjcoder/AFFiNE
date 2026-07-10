'use client';

import { motion } from 'framer-motion';

export function SearchBar() {
  return (
    <motion.label
      className="group flex w-full items-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-4 py-3 shadow-[0_0_45px_rgba(116,77,255,0.16)] backdrop-blur-2xl transition focus-within:border-amber-200/60 sm:max-w-xl"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35 }}
    >
      <span className="text-lg text-amber-200">⌕</span>
      <input
        className="min-w-0 flex-1 bg-transparent text-sm font-medium tracking-[0.18em] text-white placeholder:text-white/45 focus:outline-none"
        placeholder="SEARCH THE VAULT"
        type="search"
      />
      <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.25em] text-white/45 sm:block">
        ⌘ K
      </span>
    </motion.label>
  );
}
