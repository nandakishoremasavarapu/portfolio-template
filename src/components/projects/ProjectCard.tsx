import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, ExternalLink } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  featuredLarge?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  featuredLarge = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="card-surface project-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '0',
        overflow: 'hidden',
        borderColor: isHovered ? 'var(--border-hover)' : 'var(--border)',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all var(--duration-normal) var(--ease-standard)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Image Preview */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: featuredLarge ? '16/10' : '16/10',
          overflow: 'hidden',
          backgroundColor: '#0B0D10',
          borderBottom: '1px solid var(--border)',
          cursor: 'pointer',
        }}
        onClick={() => onOpenCaseStudy(project)}
      >
        <img
          src={project.image}
          alt={`${project.title} Preview`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform var(--duration-slow) var(--ease-standard)',
          }}
          loading="lazy"
        />

        {/* Floating Category Tag */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            display: 'flex',
            gap: '8px',
          }}
        >
          <span
            className="tag-chip"
            style={{
              backgroundColor: 'rgba(11, 13, 16, 0.85)',
              backdropFilter: 'blur(6px)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              color: 'var(--text-primary)',
            }}
          >
            {project.category}
          </span>
          <span
            className="tag-chip"
            style={{
              backgroundColor: 'rgba(11, 13, 16, 0.85)',
              backdropFilter: 'blur(6px)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Case Study Hover Overlay Prompt */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all var(--duration-fast) var(--ease-standard)',
          }}
        >
          <span className="btn btn-primary btn-sm" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
            <BookOpen size={13} />
            <span>Case Study</span>
          </span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div
        style={{
          padding: 'clamp(20px, 3vw, 28px)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
            <h3
              className="project-title"
              style={{
                color: isHovered ? 'var(--accent-primary)' : 'var(--text-primary)',
                transition: 'color var(--duration-fast) var(--ease-standard)',
                cursor: 'pointer',
              }}
              onClick={() => onOpenCaseStudy(project)}
            >
              {project.title}
            </h3>

            <button
              onClick={() => onOpenCaseStudy(project)}
              aria-label={`View ${project.title} Case Study`}
              style={{
                color: isHovered ? 'var(--accent-primary)' : 'var(--text-muted)',
                transform: isHovered ? 'translate(2px, -2px)' : 'none',
                transition: 'all var(--duration-fast) var(--ease-standard)',
              }}
            >
              <ArrowUpRight size={22} />
            </button>
          </div>

          <p className="text-body" style={{ marginTop: '12px', fontSize: '0.94rem' }}>
            {project.description}
          </p>
        </div>

        {/* Tech Stack Chips & Action Links */}
        <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '20px',
            }}
          >
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tag-chip">
                {tech}
              </span>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '16px',
              borderTop: '1px solid var(--border)',
            }}
          >
            <button
              onClick={() => onOpenCaseStudy(project)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.86rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color var(--duration-fast) var(--ease-standard)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <BookOpen size={14} color="var(--accent-primary)" />
              <span>Read Case Study</span>
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                  transition: 'color var(--duration-fast) var(--ease-standard)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                aria-label={`Open live project for ${project.title}`}
              >
                <span>Live Site</span>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
