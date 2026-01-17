import './avant-garde.css';

import type { CSSProperties } from 'react';
import { useMemo, useState } from 'react';

const accentOptions = [
  { label: 'Electric Violet', value: '#a855f7' },
  { label: 'Neo Gold', value: '#f6c56e' },
  { label: 'Crimson Pulse', value: '#ff5c8a' },
  { label: 'Cobalt Mist', value: '#59a7ff' },
];

const densityOptions = [
  { label: 'Airy', value: 'airy' },
  { label: 'Balanced', value: 'balanced' },
  { label: 'Compact', value: 'compact' },
];

const fontOptions = [
  { label: 'Modern Sans', value: 'sans' },
  { label: 'Editorial Serif', value: 'serif' },
];

const lookbookItems = [
  {
    id: 1,
    title: 'Chromatic Flux',
    category: 'Digital Couture',
    description: 'Metallic gradients and glossy textures.',
  },
  {
    id: 2,
    title: 'Modernist Noir',
    category: 'Identity',
    description: 'Minimal, bold typography with sharp contrast.',
  },
  {
    id: 3,
    title: 'Neo-Classicism',
    category: 'Spatial',
    description: 'Architectural structure with refined warmth.',
  },
  {
    id: 4,
    title: 'Luminous Echo',
    category: 'Identity',
    description: 'Reflective palettes and high-gloss materials.',
  },
  {
    id: 5,
    title: 'Opulent Silence',
    category: 'Spatial',
    description: 'Sculptural voids and intentional quiet.',
  },
  {
    id: 6,
    title: 'Binary Bloom',
    category: 'Digital Couture',
    description: 'AI-native visuals and generative motifs.',
  },
];

export function App() {
  const [accent, setAccent] = useState(accentOptions[0].value);
  const [density, setDensity] = useState(densityOptions[1].value);
  const [fontMode, setFontMode] = useState(fontOptions[0].value);
  const [lookbookFilter, setLookbookFilter] = useState('All');
  const [showGridLines, setShowGridLines] = useState(false);

  const filteredLookbook = useMemo(() => {
    if (lookbookFilter === 'All') {
      return lookbookItems;
    }
    return lookbookItems.filter(item => item.category === lookbookFilter);
  }, [lookbookFilter]);

  return (
    <div
      className={`avant-garde density-${density} font-${fontMode} ${
        showGridLines ? 'show-grid' : ''
      }`}
      style={{ '--accent-color': accent } as CSSProperties}
    >
      <header className="hero">
        <nav className="nav">
          <span className="logo">Avant Garde</span>
          <div className="nav-links">
            <a href="#story">Story</a>
            <a href="#studio">Studio</a>
            <a href="#lookbook">Lookbook</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="nav-cta">Book a consult</button>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Avant Garde Atelier</p>
            <h1>Design that feels like a movement.</h1>
            <p className="hero-subtitle">
              Avant Garde is a bold, modern studio shaping expressive identities
              and immersive spaces for visionary brands.
            </p>
            <div className="hero-actions">
              <button className="primary">Start a project</button>
              <button className="secondary">View manifesto</button>
            </div>
            <div className="hero-kicker">
              <div>
                <strong>Creative Direction</strong>
                <span>Immersive brand environments</span>
              </div>
              <div>
                <strong>Customizable</strong>
                <span>Tailor palettes & rhythm live</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-top">
              <span>Avant Garde</span>
              <span>Est. 2024</span>
            </div>
            <h2>Signature aesthetics with uncompromising clarity.</h2>
            <p>
              From avant-garde fashion houses to next-gen tech, we craft
              identities that stand apart and stay timeless.
            </p>
            <div className="hero-card-tags">
              <span>Brand Systems</span>
              <span>Spatial Design</span>
              <span>Digital Couture</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="customize" className="section customize">
          <div className="section-header">
            <h3>Customize the atmosphere</h3>
            <p>
              Use the controls to adjust the Avant Garde aesthetic in real time.
              Choose your accent color, spatial density, and editorial tone.
            </p>
          </div>
          <div className="customize-controls">
            <label>
              Accent color
              <select
                value={accent}
                onChange={event => setAccent(event.target.value)}
              >
                {accentOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Layout density
              <select
                value={density}
                onChange={event => setDensity(event.target.value)}
              >
                {densityOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Typography
              <select
                value={fontMode}
                onChange={event => setFontMode(event.target.value)}
              >
                {fontOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="toggle">
              Show grid lines
              <input
                type="checkbox"
                checked={showGridLines}
                onChange={event => setShowGridLines(event.target.checked)}
              />
              <span className="toggle-pill" />
            </label>
          </div>
        </section>

        <section id="story" className="section story">
          <div>
            <h3>Our story</h3>
            <p>
              Avant Garde is more than a name—it is an attitude. We believe in
              daring silhouettes, cinematic lighting, and unapologetic texture.
              Our work blends modernist discipline with experimental freedom to
              build worlds that resonate.
            </p>
          </div>
          <div className="story-stats">
            <div>
              <h4>12</h4>
              <span>Global collaborations</span>
            </div>
            <div>
              <h4>30+</h4>
              <span>Editorial features</span>
            </div>
            <div>
              <h4>100%</h4>
              <span>Custom craftsmanship</span>
            </div>
          </div>
        </section>

        <section id="studio" className="section studio">
          <div className="section-header">
            <h3>The studio</h3>
            <p>
              We translate bold ideas into tangible brand moments—campaigns,
              experiences, and products that feel iconic from the first touch.
            </p>
          </div>
          <div className="card-grid">
            <article>
              <h4>Identity Architecture</h4>
              <p>
                Strategic naming, visual identity, and tonal systems that move
                with culture.
              </p>
            </article>
            <article>
              <h4>Experience Design</h4>
              <p>
                Immersive retail, pop-ups, and cultural installations with
                atmospheric presence.
              </p>
            </article>
            <article>
              <h4>Digital Atelier</h4>
              <p>
                High-concept web, editorial, and immersive storytelling for the
                modern avant-garde audience.
              </p>
            </article>
          </div>
          <div className="studio-features">
            <div>
              <h4>Signature Modules</h4>
              <ul>
                <li>Art direction sprints</li>
                <li>Material library curation</li>
                <li>Interactive brand playbooks</li>
              </ul>
            </div>
            <div>
              <h4>Global Access</h4>
              <p>
                Collaborate with a distributed network of photographers,
                typographers, and immersive technologists.
              </p>
              <button className="secondary small">Request a deck</button>
            </div>
          </div>
        </section>

        <section id="lookbook" className="section lookbook">
          <div className="section-header">
            <h3>Lookbook</h3>
            <p>
              A curated palette of sculptural forms, luminous gradients, and
              radical silhouettes.
            </p>
          </div>
          <div className="lookbook-toolbar">
            <label>
              Filter by discipline
              <select
                value={lookbookFilter}
                onChange={event => setLookbookFilter(event.target.value)}
              >
                <option value="All">All</option>
                <option value="Identity">Identity</option>
                <option value="Spatial">Spatial</option>
                <option value="Digital Couture">Digital Couture</option>
              </select>
            </label>
            <div className="lookbook-count">
              Showing <strong>{filteredLookbook.length}</strong> studies
            </div>
          </div>
          <div className="lookbook-grid">
            {filteredLookbook.map(item => (
              <div key={item.id} className="lookbook-item">
                <span>{String(item.id).padStart(2, '0')}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span className="lookbook-category">{item.category}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div>
            <h3>Let’s build something iconic</h3>
            <p>
              Share your vision and we will respond within 48 hours with a
              curated proposal tailored to Avant Garde.
            </p>
          </div>
          <form className="contact-form">
            <input placeholder="Full name" />
            <input placeholder="Email" />
            <input placeholder="Brand focus" />
            <textarea placeholder="Tell us about your project" rows={4} />
            <button type="button">Send the brief</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Avant Garde</strong>
          <p>New York · Paris · Tokyo</p>
        </div>
        <div className="footer-links">
          <a href="#story">Manifesto</a>
          <a href="#studio">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <span>© {new Date().getFullYear()} Avant Garde Studio</span>
      </footer>
    </div>
  );
}
