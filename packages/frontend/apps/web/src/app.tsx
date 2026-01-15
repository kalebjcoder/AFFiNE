import './avant-garde.css';

export function App() {
  return (
    <div className="avant-garde">
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
        </section>

        <section id="lookbook" className="section lookbook">
          <div className="section-header">
            <h3>Lookbook</h3>
            <p>
              A curated palette of sculptural forms, luminous gradients, and
              radical silhouettes.
            </p>
          </div>
          <div className="lookbook-grid">
            <div className="lookbook-item">
              <span>01</span>
              <h4>Chromatic Flux</h4>
              <p>Metallic gradients and glossy textures.</p>
            </div>
            <div className="lookbook-item">
              <span>02</span>
              <h4>Modernist Noir</h4>
              <p>Minimal, bold typography with sharp contrast.</p>
            </div>
            <div className="lookbook-item">
              <span>03</span>
              <h4>Neo-Classicism</h4>
              <p>Architectural structure with refined warmth.</p>
            </div>
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
