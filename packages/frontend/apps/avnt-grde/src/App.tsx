import type { CSSProperties } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

type PlantState = {
  energy: number;
  growth: number;
  bloom: boolean;
  bloomAge: number;
  hue: string;
};

type CollabMode = 'creator' | 'collector';

type Mood = {
  label: string;
  mantra: string;
  description: string;
  accent: string;
  aura: string;
  heroGradient: string;
  backdrop: string;
};

const plantPalette = [
  '#FDE68A',
  '#FBB6CE',
  '#C4F1F9',
  '#FBD38D',
  '#D6BCFA',
  '#FEB2B2',
];

const createInitialPlants = (count: number): PlantState[] =>
  Array.from({ length: count }, (_, i) => ({
    energy: 0,
    growth: Math.random() * 0.25 + 0.15,
    bloom: false,
    bloomAge: 0,
    hue: plantPalette[i % plantPalette.length],
  }));

const moodboard: Mood[] = [
  {
    label: 'Bloomwave',
    mantra: 'Curate the impossible.',
    description:
      'Audiences step into lush digital ecosystems where every tap unlocks another layer of story.',
    accent: '#65F4B4',
    aura: 'rgba(101, 244, 180, 0.45)',
    heroGradient:
      'radial-gradient(circle at 10% 20%, rgba(0, 180, 150, 0.8), transparent 60%), radial-gradient(circle at 80% 0%, rgba(140, 110, 255, 0.5), transparent 55%)',
    backdrop: 'linear-gradient(135deg, #040711 0%, #091a2c 40%, #1d0734 100%)',
  },
  {
    label: 'Neon Flora',
    mantra: 'Invite the world to grow with you.',
    description:
      'The brand pulses with ritual check-ins, fan blooms, and living identities tuned to realtime data.',
    accent: '#FF9BF1',
    aura: 'rgba(255, 155, 241, 0.45)',
    heroGradient:
      'radial-gradient(circle at 90% 10%, rgba(255, 155, 241, 0.55), transparent 60%), radial-gradient(circle at 30% 80%, rgba(0, 199, 255, 0.45), transparent 50%)',
    backdrop: 'linear-gradient(135deg, #16041e 0%, #190924 40%, #071b3a 100%)',
  },
  {
    label: 'Solar Bloom',
    mantra: 'Turn curiosity into communion.',
    description:
      'Immersive watch parties, cinematic livestreams, and tactile merch drops that sprout in AR.',
    accent: '#FBB03B',
    aura: 'rgba(251, 176, 59, 0.45)',
    heroGradient:
      'radial-gradient(circle at 10% 70%, rgba(251, 176, 59, 0.45), transparent 55%), radial-gradient(circle at 85% 30%, rgba(255, 73, 123, 0.5), transparent 50%)',
    backdrop: 'linear-gradient(135deg, #120605 0%, #2b0a1f 45%, #341a03 100%)',
  },
];

const offerings = [
  {
    title: 'Immersive Drops',
    blurb:
      'Seasonal launches choreographed across AR, livestream, and tactile installations that feel alive.',
    metrics: '▲ 31% fan ritual participation',
  },
  {
    title: 'Metasocial Studios',
    blurb:
      'Interactive broadcasts where fans vote on setlists, unlock lore, and co-create narrative arcs.',
    metrics: '▲ 54% average watch time',
  },
  {
    title: 'Sonic Branding',
    blurb:
      'Signature sound beds, biophilic Foley, and adaptive stems used across tour visuals and film.',
    metrics: '▲ 18% brand recall uplift',
  },
  {
    title: 'Avant Systems',
    blurb:
      'Design languages that shift hue, motion, and typography based on community mood and moments.',
    metrics: '▲ 42% retention across platforms',
  },
];

const transmissions = [
  {
    title: 'Botanical Broadcast',
    description:
      'A worldwide go-live ritual where the community waters the digital garden to unlock unreleased demos.',
    time: 'Fridays · 21:00 GMT',
    channel: 'Twitch · Spatial.fm',
    tags: ['interactive', 'music', 'community'],
  },
  {
    title: 'Avant Field Notes',
    description:
      'Monthly deep dives into creative process, prototypes, and climate-positive touring experiments.',
    time: 'First Sunday · 18:00 GMT',
    channel: 'YouTube Live · Discord',
    tags: ['behind-the-scenes', 'research'],
  },
  {
    title: 'Midnight Flora Sessions',
    description:
      'Immersive DJ sets scored with procedural flora visuals for late-night focus and inspiration.',
    time: 'Wednesdays · 00:00 GMT',
    channel: 'Clubhouse · Mixcloud',
    tags: ['audio', 'visuals'],
  },
];

const experienceMoments = [
  {
    title: 'ARENA: Symbiotic Stage',
    detail:
      'A touring stage kit that reacts to biometric data, shaping light blooms around each beat drop.',
    location: 'Global · arenas & cultural festivals',
  },
  {
    title: 'Hyperloom Residency',
    detail:
      'Interactive gallery where fans weave memories into a living tapestry projected onto moss walls.',
    location: 'Berlin · 2024 Residency',
  },
  {
    title: 'Pulse Garden',
    detail:
      'Pop-up biome experiences with living sculptures, scent-reactive visuals, and collectible spores.',
    location: 'Los Angeles · Design Week',
  },
];

const releases = [
  {
    title: 'Mycelial Dreaming',
    year: 2025,
    type: 'EP + AR Visualiser',
    description:
      'A narrative EP with volumetric portals and AR flora that bloom as listeners share reactions.',
  },
  {
    title: 'Live at the Lumen Dome',
    year: 2024,
    type: 'Concert Film',
    description:
      'A cinematic capture of the avnt grde live show featuring adaptive stagecraft and fan POV moments.',
  },
  {
    title: 'Coexistence',
    year: 2023,
    type: 'Studio Album',
    description:
      'An atmospheric journey through future folklore and biome beats, pressed on recycled blooms.',
  },
];

const communitySignals = [
  {
    label: 'Poll: Next tour biome',
    highlight: 'Fans chose “Luminous Mangrove” with 62% of the vote.',
  },
  {
    label: 'Fan-made visuals',
    highlight:
      '342 submissions remixed the brand toolkit over the last 30 days.',
  },
  {
    label: 'Collector tiers',
    highlight: '1,204 memberships activated the holo-poster drops this season.',
  },
];

const collabModes: Record<
  CollabMode,
  { title: string; highlight: string; stats: string[] }
> = {
  creator: {
    title: 'Creator Mode',
    highlight:
      'Co-design a ritual, develop bespoke scoring, or build a sensory set with the studio.',
    stats: [
      'Concept to launch · 6 weeks',
      'Hybrid team pods · 5 disciplines',
      'Sustainability score · 96/100',
    ],
  },
  collector: {
    title: 'Collector Mode',
    highlight:
      'Unlock limited artworks, merch ecosystems, and access to early experience prototypes.',
    stats: [
      'Annual drops · 8 seasons',
      'Limited editions · 333 pieces',
      'Community resale fee reinvested in art',
    ],
  },
};

const fanChants = [
  '“Every stream feels like stepping into a new dimension.” — Liora',
  '“The plant blooms reacting to chat? Actual sorcery.” — Kei',
  '“I met my creative collaborators inside Ava’s midnight sessions.” — Madi',
  '“No other artist makes me feel so seen as a co-creator.” — Ren',
];

const setlistMoments = [
  {
    title: 'Opening Portal',
    vibe: 'Bioluminescent ambient build with choir textures.',
  },
  {
    title: 'Kinetic Pulse',
    vibe: 'Club-leaning drop synced with live motion capture dancers.',
  },
  {
    title: 'Bloom Ritual',
    vibe: 'Audience-triggered harmonics where every cheer grows new visuals.',
  },
  {
    title: 'Afterglow',
    vibe: 'Downtempo outro with AR fireflies and gratitude roll.',
  },
];

const SpinningGlobe = () => (
  <div className="globe" aria-hidden>
    <svg
      viewBox="0 0 200 200"
      className="globe-svg"
      role="img"
      aria-labelledby="globe-title"
    >
      <title id="globe-title">
        Animated globe illustrating global presence
      </title>
      <defs>
        <radialGradient id="ocean" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#6BD6FF" />
          <stop offset="50%" stopColor="#4C7CFF" />
          <stop offset="100%" stopColor="#10204A" />
        </radialGradient>
        <radialGradient id="highlight" cx="30%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffffff55" />
          <stop offset="70%" stopColor="#ffffff00" />
        </radialGradient>
        <linearGradient id="land" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#83F7BC" />
          <stop offset="100%" stopColor="#2E9B68" />
        </linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.4 0 0 0 0 0.9 0 0 0 0 0.8 0 0 0 0.6 0"
          />
        </filter>
      </defs>
      <g className="globe-sphere">
        <circle cx="100" cy="100" r="90" fill="url(#ocean)" />
        <circle cx="100" cy="100" r="90" fill="url(#highlight)" />
      </g>
      <g className="globe-rotator" filter="url(#glow)">
        <g
          className="globe-meridians"
          stroke="#82b7ff"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.55"
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (Math.PI * i) / 6;
            const x = 100 + Math.cos(angle) * 90;
            return (
              <path key={i} d={`M ${x} 20 Q 100 100 ${x} 180`} fill="none" />
            );
          })}
        </g>
        <g
          className="globe-parallels"
          stroke="#82b7ff"
          strokeWidth="1"
          opacity="0.35"
        >
          {[-60, -30, 0, 30, 60].map((lat, index) => {
            const radius = Math.cos((lat * Math.PI) / 180) * 90;
            const y = 100 + Math.sin((lat * Math.PI) / 180) * 20;
            return (
              <ellipse
                key={index}
                cx="100"
                cy={y}
                rx={radius}
                ry={Math.max(12, 45 - Math.abs(lat) * 0.4)}
                fill="none"
              />
            );
          })}
        </g>
        <g className="globe-continents" fill="url(#land)">
          <path d="M130 70 C150 60 165 90 150 110 C140 125 115 120 120 100 C125 85 115 78 130 70" />
          <path d="M65 80 C50 90 45 120 70 130 C90 135 100 150 85 160 C60 175 40 150 45 120 C48 95 65 70 80 72" />
          <path d="M110 50 C120 48 140 52 150 60 C155 70 145 80 132 78 C120 76 108 68 110 50" />
        </g>
      </g>
    </svg>
    <div className="globe-glow" />
  </div>
);

const LiveTicker = ({ active }: { active: boolean }) => {
  const [viewers, setViewers] = useState(128);
  const [latency, setLatency] = useState(46);
  const [energy, setEnergy] = useState(72);

  useEffect(() => {
    if (!active) {
      return undefined;
    }
    const interval = window.setInterval(() => {
      setViewers(v => Math.max(0, Math.round(v + (Math.random() - 0.5) * 12)));
      setLatency(l => Math.max(12, Math.round(l + (Math.random() - 0.5) * 3)));
      setEnergy(e =>
        Math.min(100, Math.max(0, Math.round(e + (Math.random() - 0.5) * 5)))
      );
    }, 1500);
    return () => window.clearInterval(interval);
  }, [active]);

  return (
    <div
      className={`live-ticker ${active ? 'is-active' : ''}`}
      aria-live="polite"
    >
      <div className="ticker-pip" />
      <div className="ticker-content">
        <span>Live viewers · {viewers}</span>
        <span>Latency · {latency}ms</span>
        <span>Community energy · {energy}%</span>
      </div>
    </div>
  );
};

const PlantGarden = () => {
  const [plants, setPlants] = useState(() => createInitialPlants(16));
  const [pulse, setPulse] = useState(0);
  const gardenRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPlants(current =>
        current.map(plant => {
          const energy = Math.max(0, plant.energy - 0.04);
          const growth = Math.min(1, plant.growth + 0.01 + energy * 0.1);
          const bloomAge = plant.bloom
            ? Math.min(1, plant.bloomAge + 0.05)
            : plant.bloomAge;
          return {
            ...plant,
            energy,
            growth,
            bloomAge,
            bloom: plant.bloom && bloomAge >= 1 ? false : plant.bloom,
          };
        })
      );
      setPulse(p => (p + 1) % 100000);
    }, 180);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!gardenRef.current) {
      return;
    }
    const observer = new ResizeObserver(() => {
      setPulse(p => (p + 1) % 100000);
    });
    observer.observe(gardenRef.current);
    return () => observer.disconnect();
  }, []);

  const energisePlant = (clientX: number) => {
    const garden = gardenRef.current;
    if (!garden) {
      return;
    }
    const bounds = garden.getBoundingClientRect();
    const ratio = (clientX - bounds.left) / bounds.width;
    const index = Math.min(
      plants.length - 1,
      Math.max(0, Math.floor(ratio * plants.length))
    );
    setPlants(current =>
      current.map((plant, i) =>
        i === index
          ? {
              ...plant,
              energy: Math.min(1, plant.energy + 0.8),
              growth: Math.min(1, plant.growth + 0.12),
            }
          : plant
      )
    );
  };

  const sparkBloom = (clientX: number) => {
    const garden = gardenRef.current;
    if (!garden) {
      return;
    }
    const bounds = garden.getBoundingClientRect();
    const ratio = (clientX - bounds.left) / bounds.width;
    const index = Math.min(
      plants.length - 1,
      Math.max(0, Math.floor(ratio * plants.length))
    );
    setPlants(current =>
      current.map((plant, i) =>
        i === index
          ? {
              ...plant,
              bloom: true,
              bloomAge: 0,
              energy: 1,
              growth: Math.min(1, plant.growth + 0.25),
            }
          : plant
      )
    );
  };

  return (
    <div
      className="garden"
      ref={gardenRef}
      onPointerMove={event => energisePlant(event.clientX)}
      onClick={event => sparkBloom(event.clientX)}
    >
      <div className="soil" aria-hidden />
      {plants.map((plant, index) => {
        const wave =
          Math.sin((pulse / 14 + index) * 0.6) * 8 + plant.energy * 25;
        const height = 28 + plant.growth * 60;
        const bloomOpacity = plant.bloom
          ? Math.min(1, plant.bloomAge + 0.1)
          : 0;
        return (
          <div
            key={index}
            className="plant"
            style={{
              height: `${height}%`,
              transform: `translateY(${-(plant.energy * 6)}px) rotate(${wave}deg)`,
            }}
          >
            <div className="stem" />
            <div className="leaf left" />
            <div className="leaf right" />
            <div
              className="flower"
              style={{
                background: `radial-gradient(circle at center, #fff6, ${plant.hue})`,
                opacity: bloomOpacity,
                transform: `scale(${0.6 + plant.bloomAge * 0.8})`,
              }}
            />
          </div>
        );
      })}
      <div className="garden-hint">Move to grow · Click to bloom</div>
    </div>
  );
};

export const App = () => {
  const [live, setLive] = useState(false);
  const [mode, setMode] = useState<CollabMode>('creator');
  const [moodIndex, setMoodIndex] = useState(0);
  const [chantIndex, setChantIndex] = useState(0);
  const [selectedTransmission, setSelectedTransmission] = useState(0);
  const [setlistIndex, setSetlistIndex] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = window.setInterval(
      () => setMoodIndex(index => (index + 1) % moodboard.length),
      7000
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(
      () => setChantIndex(index => (index + 1) % fanChants.length),
      9000
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(
      () => setSetlistIndex(index => (index + 1) % setlistMoments.length),
      8000
    );
    return () => window.clearInterval(timer);
  }, []);

  const activeMood = moodboard[moodIndex];
  const activeTransmission = transmissions[selectedTransmission];
  const activeCollab = collabModes[mode];
  const activeChant = fanChants[chantIndex];
  const activeSetlist = setlistMoments[setlistIndex];

  const pageStyle = useMemo(
    () =>
      ({
        '--accent': activeMood.accent,
        '--aura': activeMood.aura,
        '--backdrop': activeMood.backdrop,
        '--hero-gradient': activeMood.heroGradient,
      }) as CSSProperties,
    [activeMood]
  );

  return (
    <div className="page" style={pageStyle}>
      <nav className="nav" aria-label="Primary">
        <div className="nav-brand">
          <span className="brand-pill">avnt grde</span>
          <span className="brand-sub">living portfolio</span>
        </div>
        <div className="nav-links">
          <a href="#offerings">Offerings</a>
          <a href="#transmissions">Transmissions</a>
          <a href="#experiences">Experiences</a>
          <a href="#community">Community</a>
          <a href="#contact">Connect</a>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-text">
          <div className="tag">
            avnt grde · avant-garde rituals for future fans
          </div>
          <h1>
            Ava&apos;s world is a living playground where{' '}
            <span>{activeMood.mantra}</span>
          </h1>
          <p>{activeMood.description}</p>
          <div className="hero-actions">
            <button
              className={`go-live ${live ? 'is-live' : ''}`}
              onClick={() => setLive(l => !l)}
            >
              <span className="indicator" />
              {live ? 'End transmission' : 'Go live now'}
            </button>
            <button
              className="secondary"
              onClick={() =>
                document
                  .getElementById('offerings')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explore the studio
            </button>
          </div>
          <LiveTicker active={live} />
          <div className="fan-chant" aria-live="polite">
            {activeChant}
          </div>
          <div className="mood-callout">
            <span className="mood-label">Currently streaming:</span>
            <strong>{activeMood.label}</strong>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-aura" />
          <SpinningGlobe />
          <div className="hero-setlist">
            <span>Setlist moment:</span>
            <strong>{activeSetlist.title}</strong>
            <p>{activeSetlist.vibe}</p>
          </div>
        </div>
      </header>

      <main>
        <section className="section offerings" id="offerings">
          <header className="section-heading">
            <h2>Crafting ecosystems, not campaigns</h2>
            <p>
              Everything in the avnt grde universe is designed for long-form
              connection—bridging digital, physical, and ritual spaces so your
              community feels like co-authors.
            </p>
          </header>
          <div className="card-grid">
            {offerings.map(offering => (
              <article key={offering.title} className="card">
                <h3>{offering.title}</h3>
                <p>{offering.blurb}</p>
                <span className="metric">{offering.metrics}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section transmissions" id="transmissions">
          <header className="section-heading">
            <h2>Transmissions fans never miss</h2>
            <p>
              Weekly and monthly broadcasts that keep the community pulsing. Tap
              an event to preview the vibe.
            </p>
          </header>
          <div className="transmissions-grid">
            <ul className="transmission-list" role="tablist">
              {transmissions.map((transmission, index) => (
                <li key={transmission.title} role="presentation">
                  <button
                    role="tab"
                    aria-selected={selectedTransmission === index}
                    onClick={() => setSelectedTransmission(index)}
                  >
                    <span>{transmission.title}</span>
                    <small>{transmission.time}</small>
                  </button>
                </li>
              ))}
            </ul>
            <article className="transmission-detail" role="tabpanel">
              <header>
                <h3>{activeTransmission.title}</h3>
                <span>{activeTransmission.channel}</span>
              </header>
              <p>{activeTransmission.description}</p>
              <div className="tag-row">
                {activeTransmission.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section experiences" id="experiences">
          <header className="section-heading">
            <h2>Signature experiences</h2>
            <p>
              From large-scale arena rituals to intimate gallery immersions,
              each project grows with fan interaction.
            </p>
          </header>
          <div className="experience-grid">
            {experienceMoments.map(moment => (
              <article key={moment.title}>
                <h3>{moment.title}</h3>
                <p>{moment.detail}</p>
                <span>{moment.location}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section community" id="community">
          <header className="section-heading">
            <h2>Community greenhouse</h2>
            <p>
              The avnt grde fandom is a living organism. Every click, stream,
              and share nurtures the biome. Plant a seed below and watch it
              respond.
            </p>
          </header>
          <div className="community-grid">
            <div className="community-updates">
              {communitySignals.map(signal => (
                <article key={signal.label}>
                  <span className="label">{signal.label}</span>
                  <p>{signal.highlight}</p>
                </article>
              ))}
            </div>
            <PlantGarden />
          </div>
          <div
            className="collab-switcher"
            role="group"
            aria-label="Collaboration mode"
          >
            <div className="switch-buttons">
              <button
                type="button"
                className={mode === 'creator' ? 'is-active' : ''}
                onClick={() => setMode('creator')}
              >
                Creator mode
              </button>
              <button
                type="button"
                className={mode === 'collector' ? 'is-active' : ''}
                onClick={() => setMode('collector')}
              >
                Collector mode
              </button>
            </div>
            <div className="collab-detail">
              <h3>{activeCollab.title}</h3>
              <p>{activeCollab.highlight}</p>
              <ul>
                {activeCollab.stats.map(stat => (
                  <li key={stat}>{stat}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section releases" aria-labelledby="releases-title">
          <header className="section-heading">
            <h2 id="releases-title">Catalog for the avant souls</h2>
            <p>
              Explore the soundscape that shaped the movement, from ritual EPs
              to cinematic performances.
            </p>
          </header>
          <div className="release-grid">
            {releases.map(release => (
              <article key={release.title}>
                <div className="release-meta">
                  <span>{release.year}</span>
                  <span>{release.type}</span>
                </div>
                <h3>{release.title}</h3>
                <p>{release.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <header className="section-heading">
            <h2>Let&apos;s design the future of feeling</h2>
            <p>
              Collaborations, bookings, and love letters welcome. Leave your
              email to receive studio dispatches and early invites.
            </p>
          </header>
          <form
            className="newsletter"
            onSubmit={event => {
              event.preventDefault();
              setEmail('');
            }}
          >
            <label htmlFor="email">Email</label>
            <div className="input-row">
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
              />
              <button type="submit">Request access</button>
            </div>
            <p className="disclaimer">
              By submitting, you&apos;ll receive quarterly transmissions filled
              with prototypes, unreleased audio, and tickets before public drop.
            </p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h3>avnt grde</h3>
          <p>Immersive art &amp; sound ecosystems by Ava.</p>
        </div>
        <div className="footer-grid">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            TikTok
          </a>
          <a href="https://bsky.app" target="_blank" rel="noreferrer">
            Bluesky
          </a>
          <a href="https://discord.com" target="_blank" rel="noreferrer">
            Discord
          </a>
        </div>
        <span className="footer-note">
          © {new Date().getFullYear()} avnt grde · Designed with love + light
        </span>
      </footer>
    </div>
  );
};
