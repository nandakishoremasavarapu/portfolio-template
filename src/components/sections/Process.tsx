import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { processSteps } from '../../data/services';
import { Check } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="section-padding bg-secondary" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          eyebrow="WORKING METHODOLOGY"
          title="From Discovery to Launch"
          description="A transparent, collaborative four-phase sequence designed to keep projects on schedule and aligned with your objectives."
        />

        {/* 4 Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))',
            gap: '24px',
            position: 'relative',
          }}
          className="process-grid"
        >
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="card-surface process-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(24px, 3vw, 28px)',
                position: 'relative',
              }}
            >
              <div>
                {/* Step Number & Duration Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>

                  <span className="tag-chip">{step.duration}</span>
                </div>

                {/* Step Title & Summary */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '10px' }}>
                  {step.title}
                </h3>

                <p className="text-body" style={{ fontSize: '0.88rem', marginBottom: '20px' }}>
                  {step.description}
                </p>
              </div>

              {/* Activities Checklist */}
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.74rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-muted)',
                    marginBottom: '10px',
                    fontWeight: 600,
                  }}
                >
                  Key Activities
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {step.activities.map((activity, actIdx) => (
                    <li
                      key={actIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '0.82rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.4,
                      }}
                    >
                      <Check
                        size={12}
                        color="var(--accent-primary)"
                        style={{ marginTop: '3px', flexShrink: 0 }}
                      />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
