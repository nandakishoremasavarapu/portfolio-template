import React from 'react';
import { ArrowDown, MessageSquare, CheckCircle2, Terminal, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreClick?: () => void;
  onTalkClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onTalkClick }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--navbar-height) + clamp(48px, 8vw, 96px))',
        paddingBottom: 'clamp(64px, 10vw, 120px)',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Grid Accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1440px',
          height: '100%',
          backgroundImage:
            'radial-gradient(circle at 50% 180px, rgba(184, 243, 107, 0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(40px, 6vw, 64px)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Main Hero Column */}
          <div style={{ maxWidth: '820px' }}>
            {/* Eyebrow Label with Availability Indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(23, 27, 34, 0.9)',
                border: '1px solid var(--border)',
                marginBottom: 'clamp(20px, 3vw, 28px)',
              }}
            >
              <span className="status-dot" />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                }}
              >
                Independent Digital Studio
              </span>
              <span style={{ color: 'var(--border)' }}>•</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
                Accepting New Projects
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title" style={{ marginBottom: 'clamp(20px, 3vw, 32px)' }}>
              Digital experiences,
              <br />
              <span style={{ color: 'var(--text-primary)' }}>built with </span>
              <span
                style={{
                  color: 'var(--accent-primary)',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                intention.
              </span>
            </h1>

            {/* Supporting Description */}
            <p
              className="text-lead"
              style={{
                maxWidth: '640px',
                marginBottom: 'clamp(28px, 4vw, 40px)',
                lineHeight: 1.6,
              }}
            >
              We design and develop thoughtful digital experiences that help businesses establish their presence,
              communicate clearly, and grow online.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              <button
                onClick={() => {
                  scrollTo('#work');
                  if (onExploreClick) onExploreClick();
                }}
                className="btn btn-primary"
                aria-label="Explore Selected Work"
              >
                <span>Explore Our Work</span>
                <ArrowDown size={17} />
              </button>

              <button
                onClick={() => {
                  scrollTo('#contact');
                  if (onTalkClick) onTalkClick();
                }}
                className="btn btn-secondary"
                aria-label="Navigate to Contact Section"
              >
                <MessageSquare size={17} />
                <span>Let's Talk</span>
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                  marginLeft: '8px',
                }}
              >
                <ShieldCheck size={16} color="var(--accent-primary)" />
                <span>Verified Client Deliverables</span>
              </div>
            </div>
          </div>

          {/* Technical Craftsmanship & Benchmark Panel */}
          <div
            className="hero-telemetry-panel"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(24px, 3vw, 32px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Header with status bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={16} color="var(--accent-primary)" />
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.04em',
                  }}
                >
                  ENGINEERING_TELEMETRY.ts
                </span>
              </div>
              <span className="tag-chip tag-chip-accent">v2.4 Active</span>
            </div>

            {/* Key Metrics Matrix */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(11, 13, 16, 0.6)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '16px',
                }}
              >
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Lighthouse Score
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.9rem',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '4px',
                  }}
                >
                  100
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>/100</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Performance & SEO
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(11, 13, 16, 0.6)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '16px',
                }}
              >
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Target LCP Speed
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.9rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '4px',
                  }}
                >
                  &lt;0.6s
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Sub-second paint
                </div>
              </div>
            </div>

            {/* Quality Standard Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <CheckCircle2 size={16} color="var(--accent-primary)" />
                <span>Strict WCAG 2.2 AA Contrast &amp; Keyboard Navigation</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <CheckCircle2 size={16} color="var(--accent-primary)" />
                <span>Zero bloated libraries • Bespoke TypeScript execution</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <CheckCircle2 size={16} color="var(--accent-primary)" />
                <span>Tailored responsive breakpoints from 320px to 4K displays</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 980px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
};
