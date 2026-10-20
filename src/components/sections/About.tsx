import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Compass, Gauge, Shield, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      title: 'Restraint over Noise',
      description:
        'Clarity always outshines visual clutter. We avoid gratuitous 3D gimmicks, autoplay videos, and decorative bloat that slow down your customers.',
      icon: <Compass size={18} color="var(--accent-primary)" />,
    },
    {
      title: 'Speed as a Feature',
      description:
        'A beautiful website that takes 4 seconds to load is a failed website. We build for sub-second paint times and frictionless mobile navigation.',
      icon: <Gauge size={18} color="var(--accent-primary)" />,
    },
    {
      title: 'Maintainable Architecture',
      description:
        'We write clean, strictly-typed TypeScript and modular CSS that any future engineer can read and extend without confusion.',
      icon: <Shield size={18} color="var(--accent-primary)" />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-primary" style={{ position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(40px, 6vw, 64px)',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative & Values */}
          <div>
            <SectionHeading
              eyebrow="STUDIO PHILOSOPHY"
              title="Small team. Thoughtful execution."
              description="We work with businesses to turn ideas into clear, functional digital experiences. From the first conversation to the final details, our focus is on thoughtful design, reliable development, and websites that serve a real purpose."
            />

            {/* Principles List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '32px' }}>
              {principles.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '16px 20px',
                    backgroundColor: 'rgba(23, 27, 34, 0.4)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(184, 243, 107, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '6px' }}>{p.title}</h4>
                    <p className="text-body" style={{ fontSize: '0.9rem' }}>
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Studio Workspace Visual & Commitments */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                aspectRatio: '16/10',
                backgroundColor: '#0B0D10',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
            >
              <img
                src="/images/about/studio-workspace.jpg"
                alt="Studio Engineering and Design Workspace"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />

              {/* Minimalist Watermark Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(11, 13, 16, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border)',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Clock size={13} color="var(--accent-primary)" />
                <span>Bespoke Engineering • Dedicated Senior Attention</span>
              </div>
            </div>

            {/* Studio Commitments Panel */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
              }}
            >
              <div
                style={{
                  padding: '16px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Response Time
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  &lt; 24 Hours
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Direct developer contact
                </div>
              </div>

              <div
                style={{
                  padding: '16px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Code Standard
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  100% Bespoke
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Zero generic site builders
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
};
