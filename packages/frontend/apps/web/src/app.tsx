import './avant-garde.css';

import { useEffect } from 'react';

const stats = [
  ['48+', 'AI Projects'],
  ['120+', 'Songs Created'],
  ['32', 'Content Systems'],
  ['8.7x', 'Creator Growth'],
];

const services = [
  [
    '🎵',
    'AI Music Studio',
    'AI-assisted songwriting, production, and creative direction.',
  ],
  ['🤖', 'AI Agent Systems', 'Custom AI assistants and automation workflows.'],
  [
    '🎬',
    'Creator Growth Coaching',
    'Content strategy, branding, and audience building.',
  ],
  ['🚀', 'Digital Products', 'Templates, tools, and creator resources.'],
];

const projects = [
  [
    'Turn Me Up GPT',
    'An AI music feedback and performance partner for artists ready to sharpen every release.',
  ],
  [
    'BlainooOS',
    'A creator operating system for ideas, content calendars, launches, and daily execution.',
  ],
  [
    'YardHop App',
    'A culture-forward product concept connecting people, places, and real-world momentum.',
  ],
  [
    'Music Projects',
    'Cinematic records, hooks, and sonic experiments built with AI-enhanced direction.',
  ],
];

const journey = [
  [
    'Vision',
    'Clarify the world you want to build and the audience you want to move.',
  ],
  [
    'Creation',
    'Turn raw ideas into songs, systems, content, products, and campaigns.',
  ],
  [
    'Audience',
    'Package your story into magnetic content that compounds attention.',
  ],
  [
    'Business',
    'Monetize with offers, automations, digital products, and repeatable workflows.',
  ],
];

const testimonials = [
  [
    'Maya J.',
    'Independent Artist',
    'Blainoo helped me turn scattered voice notes into a release plan, visual identity, and content machine.',
  ],
  [
    'Chris D.',
    'Creator Founder',
    'The systems feel expensive in the best way. I finally have a creative workflow that moves as fast as my ideas.',
  ],
  [
    'Ari B.',
    'Producer',
    'It is strategy, taste, and AI execution in one place. The whole experience feels like a luxury studio sprint.',
  ],
];

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-header reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export function App() {
  useEffect(() => {
    document.title = 'Blainoo Avant Garde | AI Creative Studio';
    const description =
      'AI-powered music, content, coaching, AI agents, automation, and digital products for next-generation creators.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.append(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="hero" id="top">
        <nav className="nav glass reveal">
          <a
            className="brand"
            href="#top"
            aria-label="Blainoo Avant Garde home"
          >
            <span className="brand-mark">BA</span>
            <span>Blainoo Avant Garde</span>
          </a>
          <div className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#journey">Journey</a>
          </div>
          <a className="nav-button" href="#cta">
            Join
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">AI creative studio / music / systems</p>
            <h1>Turn Your Vision Into Reality With AI</h1>
            <p className="hero-subheadline">
              AI-powered music, content, coaching, and creative systems built
              for the next generation of creators.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#services">
                Start Creating
              </a>
              <a className="button secondary" href="#projects">
                Explore My Systems
              </a>
            </div>
          </div>

          <div
            className="hero-visual reveal"
            aria-label="Floating AI and music visual elements"
          >
            <div className="orbital-ring" />
            <div className="visual-card card-one glass">
              AI MUSIC
              <br />
              <strong>01</strong>
            </div>
            <div className="visual-card card-two glass">
              AGENTS
              <br />
              <strong>02</strong>
            </div>
            <div className="album-frame">
              <span>BLAINOO</span>
              <div className="waveform">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <strong>
                AVANT
                <br />
                GARDE
              </strong>
            </div>
          </div>
        </div>
        <div className="particle-field" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </header>

      <main>
        <section className="section about" id="about">
          <SectionHeader
            eyebrow="The studio"
            title="Music, technology, storytelling, and entrepreneurship in one luxury creative engine."
            copy="Blainoo Avant Garde is an AI creative studio blending music, technology, storytelling, and entrepreneurship for ambitious creators who want taste, speed, and systems."
          />
          <div className="stats-grid">
            {stats.map(([value, label]) => (
              <div className="stat-card glass reveal" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <SectionHeader
            eyebrow="What we build"
            title="Premium creative systems for the AI era."
            copy="From sonic identity to automated content operations, every service is designed to transform imagination into assets that move culture."
          />
          <div className="card-grid">
            {services.map(([icon, title, copy]) => (
              <article className="service-card glass reveal" key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <SectionHeader
            eyebrow="Featured projects"
            title="Signature systems with creator-first utility."
            copy="A curated ecosystem of AI tools, apps, music concepts, and operating systems for building momentum."
          />
          <div className="project-grid">
            {projects.map(([title, copy], index) => (
              <article className="project-card reveal" key={title}>
                <small>0{index + 1}</small>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="journey">
          <SectionHeader
            eyebrow="Creator journey"
            title="Vision → Creation → Audience → Business"
            copy="A repeatable path for creators who want to evolve from ideas into influence, products, and revenue."
          />
          <div className="timeline">
            {journey.map(([title, copy]) => (
              <div className="timeline-item reveal" key={title}>
                <div className="timeline-dot" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <SectionHeader
            eyebrow="Proof of energy"
            title="Built for creators who move differently."
            copy="Placeholder stories from artists, founders, and creative operators using AI to raise their standard."
          />
          <div className="testimonial-grid">
            {testimonials.map(([name, role, quote]) => (
              <figure className="testimonial glass reveal" key={name}>
                <blockquote>“{quote}”</blockquote>
                <figcaption>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="cta-section" id="cta">
          <div className="cta-card glass reveal">
            <p className="eyebrow">Enter the new creative economy</p>
            <h2>Build The Future You Imagine.</h2>
            <a className="button primary" href="mailto:hello@blainoo.ai">
              Join The Avant-Garde
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#top">
          <span className="brand-mark">BA</span>
          <span>Blainoo Avant Garde</span>
        </a>
        <div className="socials">
          <a href="https://instagram.com">Instagram</a>
          <a href="https://youtube.com">YouTube</a>
          <a href="https://x.com">X</a>
        </div>
        <p>© 2026 Blainoo Avant Garde. All rights reserved.</p>
      </footer>
    </div>
  );
}
