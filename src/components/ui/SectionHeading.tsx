import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  badge?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  badge,
  className = '',
}) => {
  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '760px' : '820px',
        marginInline: align === 'center' ? 'auto' : undefined,
        marginBottom: 'clamp(36px, 5vw, 60px)',
      }}
    >
      {eyebrow && (
        <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: align === 'center' ? 'center' : 'flex-start', gap: '10px' }}>
          <span className="eyebrow">{eyebrow}</span>
          {badge && <span className="tag-chip tag-chip-accent">{badge}</span>}
        </div>
      )}
      <h2 className="section-title" style={{ marginBottom: description ? '18px' : '0' }}>
        {title}
      </h2>
      {description && <p className="text-lead">{description}</p>}
    </div>
  );
};
