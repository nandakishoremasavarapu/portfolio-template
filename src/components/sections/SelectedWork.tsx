import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectModal } from '../projects/ProjectModal';
import { projects } from '../../data/projects';
import type { Project } from '../../types';
import { Info, Sparkles } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Architecture', 'E-commerce', 'Venture', 'Hospitality'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => {
        if (selectedCategory === 'Architecture') return p.category.includes('Architecture');
        if (selectedCategory === 'E-commerce') return p.category.includes('E-commerce');
        if (selectedCategory === 'Venture') return p.category.includes('Venture');
        if (selectedCategory === 'Hospitality') return p.category.includes('Hospitality');
        return true;
      });

  return (
    <section id="work" className="section-padding bg-primary" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header with Category Filters */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          <SectionHeading
            eyebrow="PORTFOLIO ARCHIVE"
            title="Selected Work"
            description="A selection of digital experiences designed and developed for real-world needs."
            badge="4 Verified Projects"
          />

          {/* Interactive Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.84rem',
                    fontWeight: 500,
                    border: '1px solid',
                    borderColor: isActive ? 'var(--accent-primary)' : 'var(--border)',
                    backgroundColor: isActive ? 'var(--accent-soft)' : 'rgba(23, 27, 34, 0.6)',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    transition: 'all var(--duration-fast) var(--ease-standard)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--border-hover)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
            gap: 'clamp(24px, 4vw, 40px)',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setActiveModalProject(proj)}
              featuredLarge={idx === 0 && selectedCategory === 'All'}
            />
          ))}
        </div>

        {/* Quality Commitment Footer Note */}
        <div
          style={{
            marginTop: 'clamp(40px, 6vw, 64px)',
            padding: '20px 24px',
            backgroundColor: 'rgba(23, 27, 34, 0.4)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Info size={18} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0 }}>
              All client projects featured are authentic case studies. Select any card to review technical challenges and deliverables.
            </p>
          </div>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.86rem',
              fontWeight: 500,
              color: 'var(--accent-primary)',
            }}
          >
            <Sparkles size={14} />
            <span>Request custom project walkthrough</span>
          </a>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
