import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Mail, MessageCircle, Copy, Check, Send, AlertCircle, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import type { ContactFormData } from '../../types';

interface ContactProps {
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'New Website',
    budget: '$3k – $7k',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const agencyEmail = 'studio@kinetic-digital.example';
  const whatsappNumber = '447123456789';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi KINETIC Studio! I'm interested in discussing a new web project."
  )}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(agencyEmail);
      setEmailCopied(true);
      onShowToast(`Copied ${agencyEmail} to clipboard`);
      setTimeout(() => setEmailCopied(false), 3000);
    } catch {
      onShowToast(`Studio email: ${agencyEmail}`);
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief description of your project or requirements.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Inquiry received! We will respond within 24 hours.');
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'New Website',
      budget: '$3k – $7k',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="section-padding bg-secondary" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          eyebrow="COMMENCE CONVERSATION"
          title="Let's Talk About Your Project"
          description="Have an upcoming launch or website overhaul? Send an inquiry below or reach out via direct channels."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(40px, 6vw, 64px)',
            alignItems: 'start',
          }}
          className="contact-layout"
        >
          {/* Left Column: Direct Communication & Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div className="card-surface" style={{ padding: 'clamp(24px, 3vw, 32px)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>
                Direct Channels
              </h3>

              {/* Email Channel */}
              <div
                style={{
                  padding: '16px',
                  backgroundColor: 'rgba(11, 13, 16, 0.6)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(184, 243, 107, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={18} color="var(--accent-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Studio Email
                    </div>
                    <a
                      href={`mailto:${agencyEmail}`}
                      style={{ fontSize: '0.94rem', fontWeight: 500, color: 'var(--text-primary)' }}
                    >
                      {agencyEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '6px' }}
                  aria-label="Copy studio email address"
                >
                  {emailCopied ? <Check size={14} color="var(--accent-primary)" /> : <Copy size={14} />}
                  <span>{emailCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* WhatsApp Direct */}
              <div
                style={{
                  padding: '16px',
                  backgroundColor: 'rgba(11, 13, 16, 0.6)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(184, 243, 107, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MessageCircle size={18} color="var(--accent-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      WhatsApp Direct
                    </div>
                    <span style={{ fontSize: '0.94rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                      Quick chat &amp; initial consultation
                    </span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '6px' }}
                >
                  <span>Open WhatsApp</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Service Level Commitments */}
            <div
              style={{
                padding: '24px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={16} color="var(--accent-primary)" />
                <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Responses delivered within <strong style={{ color: 'var(--text-primary)' }}>24 hours</strong> on business days.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={16} color="var(--accent-primary)" />
                <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  NDA protection and clear milestone contracts for all engagements.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="card-surface" style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
            {isSubmitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: 'clamp(20px, 4vw, 40px)',
                  gap: '18px',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(111, 227, 162, 0.12)',
                    border: '1px solid var(--state-success)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Check size={32} color="var(--state-success)" />
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 600 }}>Inquiry Received</h3>

                <p className="text-body" style={{ maxWidth: '440px' }}>
                  Thank you, <strong style={{ color: 'var(--text-primary)' }}>{formData.name}</strong>. Your project
                  details have been received. We review every brief thoroughly and will get back to you at{' '}
                  <strong style={{ color: 'var(--accent-primary)' }}>{formData.email}</strong> within 24 hours.
                </p>

                <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
                  <button onClick={handleReset} className="btn btn-secondary btn-sm">
                    Send another inquiry
                  </button>
                  <a
                    href={`mailto:${agencyEmail}?subject=Project Brief from ${encodeURIComponent(
                      formData.name
                    )}&body=${encodeURIComponent(formData.message)}`}
                    className="btn btn-primary btn-sm"
                  >
                    <span>Launch in Mail Client</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 600 }}>Project Inquiry Form</h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>* Required fields</span>
                </div>

                {/* Name & Email Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="form-name"
                      style={{ display: 'block', fontSize: '0.84rem', fontWeight: 500, marginBottom: '8px' }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid',
                        borderColor: errors.name ? 'var(--state-error)' : 'var(--border)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontSize: '0.94rem',
                      }}
                      required
                    />
                    {errors.name && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: 'var(--state-error)', marginTop: '6px' }}>
                        <AlertCircle size={12} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="form-email"
                      style={{ display: 'block', fontSize: '0.84rem', fontWeight: 500, marginBottom: '8px' }}
                    >
                      Your Email *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid',
                        borderColor: errors.email ? 'var(--state-error)' : 'var(--border)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontSize: '0.94rem',
                      }}
                      required
                    />
                    {errors.email && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: 'var(--state-error)', marginTop: '6px' }}>
                        <AlertCircle size={12} />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Company & Project Type Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '16px',
                  }}
                >
                  <div>
                    <label
                      htmlFor="form-company"
                      style={{ display: 'block', fontSize: '0.84rem', fontWeight: 500, marginBottom: '8px' }}
                    >
                      Company / Organization <span style={{ color: 'var(--text-muted)' }}>(Optional)</span>
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      placeholder="Acme Studio"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontSize: '0.94rem',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-project-type"
                      style={{ display: 'block', fontSize: '0.84rem', fontWeight: 500, marginBottom: '8px' }}
                    >
                      Project Type
                    </label>
                    <select
                      id="form-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontSize: '0.94rem',
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23A3ABB8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                        backgroundSize: '16px',
                      }}
                    >
                      <option value="New Website">New Custom Website</option>
                      <option value="Website Redesign">Website Redesign &amp; Polish</option>
                      <option value="E-commerce Storefront">E-commerce Storefront</option>
                      <option value="Custom Web Application">Custom Web Application</option>
                      <option value="Landing Page">High-Conversion Landing Page</option>
                    </select>
                  </div>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label
                    htmlFor="form-budget"
                    style={{ display: 'block', fontSize: '0.84rem', fontWeight: 500, marginBottom: '8px' }}
                  >
                    Approximate Budget Range
                  </label>
                  <select
                    id="form-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontSize: '0.94rem',
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23A3ABB8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                      backgroundSize: '16px',
                    }}
                  >
                    <option value="< $3k">&lt; $3,000 (Focused Landing Page / Audit)</option>
                    <option value="$3k – $7k">$3,000 – $7,000 (Standard Portfolio or Business Site)</option>
                    <option value="$7k – $15k">$7,000 – $15,000 (Full E-commerce or Brand System)</option>
                    <option value="$15k+">$15,000+ (Custom Web Application / Enterprise)</option>
                  </select>
                </div>

                {/* Project Message */}
                <div>
                  <label
                    htmlFor="form-message"
                    style={{ display: 'block', fontSize: '0.84rem', fontWeight: 500, marginBottom: '8px' }}
                  >
                    Project Overview &amp; Goals *
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    placeholder="Tell us about your business, target timeline, any design references, or specific functionality required..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid',
                      borderColor: errors.message ? 'var(--state-error)' : 'var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontSize: '0.94rem',
                      resize: 'vertical',
                    }}
                    required
                  />
                  {errors.message && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: 'var(--state-error)', marginTop: '6px' }}>
                      <AlertCircle size={12} />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '14px',
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-layout {
            grid-template-columns: 0.9fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
};
