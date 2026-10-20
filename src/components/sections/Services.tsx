import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { services } from '../../data/services';
import { Layout, Code, Zap, ShoppingBag, RefreshCw, Cpu, Check } from 'lucide-react';
import type { ServiceItem } from '../../types';

export const Services: React.FC = () => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={22} color="var(--accent-primary)" />;
      case 'Code':
        return <Code size={22} color="var(--accent-primary)" />;
      case 'Zap':
        return <Zap size={22} color="var(--accent-primary)" />;
      case 'ShoppingBag':
        return <ShoppingBag size={22} color="var(--accent-primary)" />;
      case 'RefreshCw':
        return <RefreshCw size={22} color="var(--accent-primary)" />;
      case 'Cpu':
        return <Cpu size={22} color="var(--accent-primary)" />;
      default:
        return <Code size={22} color="var(--accent-primary)" />;
    }
  };

  return (
    <section id="services" className="section-padding bg-secondary" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          eyebrow="CAPABILITIES & SCOPE"
          title="Services Built for Purpose"
          description="We provide end-to-end web design and technical development for businesses that value speed, clarity, and precision."
        />

        {/* 3-Column Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(20px, 3vw, 28px)',
          }}
          className="services-grid"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="card-surface service-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
                padding: 'clamp(24px, 3vw, 32px)',
                transition: 'all var(--duration-normal) var(--ease-standard)',
              }}
            >
              <div>
                {/* Header with Icon and Number */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(184, 243, 107, 0.08)',
                      border: '1px solid var(--accent-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(service.iconName)}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Service Title & Tagline */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--accent-primary)',
                    fontWeight: 500,
                    marginBottom: '14px',
                  }}
                >
                  {service.tagline}
                </p>

                <p className="text-body" style={{ fontSize: '0.92rem' }}>
                  {service.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div
                style={{
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '10px',
                    fontWeight: 600,
                  }}
                >
                  Typical Deliverables
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {service.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.84rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <Check size={13} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
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
