'use client';

import { motion } from 'framer-motion';

const navItems = ['Index', 'Drawers', 'Artifacts', 'Signals'];

export function Sidebar() {
  return (
    <motion.aside
      className="fixed left-4 top-4 z-30 hidden h-[calc(100vh-2rem)] w-20 flex-col items-center justify-between rounded-[2rem] border border-white/10 bg-white/[0.06] py-6 shadow-2xl backdrop-blur-2xl lg:flex"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid size-11 place-items-center rounded-2xl border border-amber-200/25 bg-amber-200/10 font-serif text-xl text-amber-100">
        V
      </div>
      <nav className="flex rotate-180 flex-col items-center gap-8 [writing-mode:vertical-rl]">
        {navItems.map(item => (
          <a
            key={item}
            className="text-[0.65rem] uppercase tracking-[0.28em] text-white/45 transition hover:text-amber-100"
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="h-20 w-px bg-gradient-to-b from-transparent via-amber-200/50 to-transparent" />
    </motion.aside>
  );
}
