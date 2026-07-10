'use client';

import { motion } from 'framer-motion';

export function Drawer({
  code,
  highlighted = false,
}: {
  code: string;
  highlighted?: boolean;
}) {
  return (
    <motion.button
      aria-label={`Open drawer ${code}`}
      className="group relative h-20 overflow-hidden rounded-xl border border-stone-950/80 bg-gradient-to-b from-zinc-700 via-zinc-900 to-black shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_30px_rgba(0,0,0,0.36)]"
      whileHover={{ x: -10, scale: 1.03 }}
      whileTap={{ x: -18, scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <span className="absolute inset-x-3 top-3 h-px bg-white/15" />
      <span className="absolute left-1/2 top-1/2 h-2 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/50 bg-amber-300/20 shadow-[0_0_18px_rgba(251,191,36,0.35)]" />
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded border border-amber-100/40 bg-gradient-to-b from-amber-200 to-amber-700 px-3 py-1 text-[0.58rem] font-black tracking-[0.22em] text-black/80">
        {code}
      </span>
      {highlighted ? (
        <span className="absolute inset-0 bg-violet-400/10 opacity-80 blur-xl" />
      ) : null}
    </motion.button>
  );
}
