'use client';

import { motion } from 'framer-motion';

import type { Idea } from '../data/ideas';

const glowMap = {
  violet: 'from-violet-400/25 to-fuchsia-500/5 border-violet-200/20',
  blue: 'from-sky-300/25 to-blue-600/5 border-sky-200/20',
  gold: 'from-amber-200/30 to-yellow-700/5 border-amber-200/25',
};

export function IdeaCard({ idea, index }: { idea: Idea; index: number }) {
  return (
    <motion.article
      className={`rounded-[2rem] border bg-gradient-to-br ${glowMap[idea.glow]} p-5 shadow-2xl backdrop-blur-2xl`}
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.55 + index * 0.12 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="mb-5 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.28em] text-amber-100/70">
        <span>{idea.label}</span>
        <span className="rounded-full border border-white/15 px-2 py-1 text-white/55">
          {idea.drawer}
        </span>
      </div>
      <h3 className="font-serif text-2xl text-white">{idea.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-200/72">{idea.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {idea.tags.map(tag => (
          <span
            key={tag}
            className="rounded-full bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
