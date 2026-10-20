import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Circle } from 'lucide-react';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--navbar-height)',
          zIndex: 900,
          transition: 'all var(--duration-normal) var(--ease-standard)',
          backgroundColor: isScrolled ? 'rgba(11, 13, 16, 0.88)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo / Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '-0.03em',
            }}
            aria-label="KINETIC Studio Homepage"
          >
            <span
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-hover)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                fontWeight: 800,
                fontSize: '0.95rem',
              }}
            >
              K
            </span>
            <span>
              KINETIC <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.88rem' }}>/ STUDIO</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '36px',
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  transition: 'color var(--duration-fast) var(--ease-standard)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Status Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Availability Indicator */}
            <div
              className="status-pill"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(23, 27, 34, 0.8)',
                border: '1px solid var(--border)',
                fontSize: '0.78rem',
                color: 'var(--text-secondary)',
              }}
            >
              <Circle size={8} fill="var(--accent-primary)" color="var(--accent-primary)" />
              <span>Available for Q2/Q3</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                handleNavClick(e, '#contact');
                if (onContactClick) onContactClick();
              }}
              className="btn btn-primary btn-sm desktop-cta"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          style={{
            position: 'fixed',
            inset: 0,
            top: 'var(--navbar-height)',
            backgroundColor: 'var(--bg-primary)',
            zIndex: 899,
            display: 'flex',
            flexDirection: 'column',
            padding: 'var(--space-xl) var(--container-gutter)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '12px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={20} color="var(--text-muted)" />
              </a>
            ))}
          </nav>

          <div style={{ marginTop: 'auto', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
              }}
            >
              <Circle size={8} fill="var(--accent-primary)" color="var(--accent-primary)" />
              <span>Currently accepting select projects</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                handleNavClick(e, '#contact');
                if (onContactClick) onContactClick();
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <span>Start a Project</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for Navbar media queries */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .status-pill {
            display: inline-flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
