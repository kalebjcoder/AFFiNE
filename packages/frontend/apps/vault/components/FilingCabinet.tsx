import { drawerRows } from '../data/ideas';
import { Drawer } from './Drawer';

export function FilingCabinet() {
  return (
    <section className="relative mx-auto w-full max-w-4xl rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-zinc-800/85 via-zinc-950/92 to-black/95 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.75)] backdrop-blur-sm sm:p-7">
      <div className="absolute -inset-1 -z-10 rounded-[2.7rem] bg-gradient-to-r from-violet-500/25 via-sky-400/15 to-amber-300/25 blur-2xl" />
      <div className="mb-5 flex items-center justify-between px-2">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-100/70">
          Floor-to-ceiling cabinets
        </p>
        <p className="hidden text-xs uppercase tracking-[0.35em] text-white/35 sm:block">
          Interactive archive
        </p>
      </div>
      <div className="grid gap-3 sm:gap-4">
        {drawerRows.map((row, rowIndex) => (
          <div
            key={row.join('-')}
            className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          >
            {row.map(code => (
              <Drawer
                key={code}
                code={code}
                highlighted={rowIndex === 1 && code.endsWith('04')}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
