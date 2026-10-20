import React from 'react';
import { ArrowDown } from 'lucide-react';

interface FinalCtaProps {
  onStartClick?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onStartClick }) => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (onStartClick) onStartClick();
  };

  return (
    <section
      style={{
        paddingBlock: 'clamp(80px, 12vw, 140px)',
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Radial Highlight */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(184, 243, 107, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
        <div style={{ marginBottom: '18px' }}>
          <span className="eyebrow">NEXT STEPS</span>
        </div>

        <h2
          className="section-title"
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
            marginBottom: '20px',
            lineHeight: 1.08,
          }}
        >
          Have something good in mind?
        </h2>

        <p
          className="text-lead"
          style={{
            maxWidth: '560px',
            marginInline: 'auto',
            marginBottom: '36px',
          }}
        >
          Tell us what you're building, and let's explore how we can bring it to life with precision and care.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button
            onClick={scrollToContact}
            className="btn btn-primary"
            style={{ padding: '15px 32px', fontSize: '1rem' }}
          >
            <span>Start a Project</span>
            <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
