import React from 'react';
import './PeopleCards.css';

const people = [
  {
    name: 'Nicole Coetzer',
    title: 'Head of Sales Development',
    company: 'Kinsta',
    logo: '',
    avatar: '',
    excerpt:
      "As Kinsta's first Head of Sales Development, Nicole built outbound sales from scratch. Using Apollo to find the right leads in less time, her growing team hit a consistent 36% connection rate.",
  },
  {
    name: 'Diego Cobian',
    title: 'Account Executive',
    company: 'Arbolus',
    logo: '',
    avatar: '',
    excerpt: 'Diego is an Account Executive focused on strategic partnerships and customer retention.',
  },
  {
    name: 'Andrew Froning',
    title: 'BDR Leader',
    company: 'Cyera',
    logo: '',
    avatar: '',
    excerpt: 'Andrew leads the BDR team and focuses on pipeline acceleration and coaching.',
  },
  {
    name: 'Mark Turner',
    title: 'VP of Revenue Operations',
    company: 'Built In',
    logo: '',
    avatar: '',
    excerpt: 'Mark oversees revenue operations and systems at scale.',
  },
  {
    name: 'Sylvain Giuliani',
    title: 'Head of Growth & Operations',
    company: 'Census',
    logo: '',
    avatar: '',
    excerpt: 'Sylvain focuses on growth systems and operational excellence.',
  },
];

export default function PeopleCards() {
  return (
    <section className="people-section">
      <div className="people-inner container">
        {/* Header / hero area above the people cards (title + big number) */}
        <div className="people-hero">
          <div className="people-hero-left">
            <h2 className="hero-title">The fastest growing businesses use Apollo</h2>
            <p className="hero-desc">Over 500,000 companies use Apollo to stay ahead of the competition.</p>
          </div>
          <div className="people-hero-right">
            <div className="hero-number">500K+</div>
          </div>
        </div>

        <div className="people-grid">
          {people.map((p, i) => (
            <article className={`person-card ${i === 0 ? 'featured' : ''}`} key={p.name} tabIndex={0}>
              <div className="card-media">
                <div className="avatar" aria-hidden />
              </div>
              <div className="card-body">
                <div className="card-meta">
                  <div className="company">{p.company}</div>
                </div>
                <h3 className="person-name">{p.name}</h3>
                <div className="person-title">{p.title}</div>
              </div>

              <div className="card-hover">
                <p className="hover-excerpt">{p.excerpt}</p>
                <div className="hover-metric">
                  <div className="metric-value">36%</div>
                  <div className="metric-label">connection rate</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
