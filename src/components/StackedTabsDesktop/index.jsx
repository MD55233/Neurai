import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './stackedTabs.css';

import img0 from '../../assets/stackedtabs/image.webp';
import img1 from '../../assets/stackedtabs/image (1).webp';
import img2 from '../../assets/stackedtabs/image (2).webp';
import img3 from '../../assets/stackedtabs/image (3).webp';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const tabs = [
  { id: 'outbound', label: 'OUTBOUND' },
  { id: 'inbound', label: 'INBOUND' },
  { id: 'enrichment', label: 'DATA ENRICHMENT' },
  { id: 'deals', label: 'DEAL EXECUTION' },
];

const content = [
  {
    id: 'outbound',
    title: 'Turn hours of prospecting into minutes',
    bullets: [
      'AI-powered multichannel campaigns in one click',
      'Built-in email deliverability guardrails',
      'Prioritized task lists to maximize selling',
      'Workflow automations to identify and scale what works',
    ],
  },
  {
    id: 'inbound',
    title: 'Qualify and act on inbound leads in seconds',
    bullets: [
      'Anonymous visitor identification',
      'Real-time form enrichment',
      'Instant routing with built-in scheduler',
      'Automated nurture & follow-up sequences',
    ],
  },
  {
    id: 'enrichment',
    title: 'Fuel smarter selling with always-fresh data',
    bullets: [
      '210M+ contacts and 30M+ companies',
      'Verified emails & phone numbers',
      'Better targeting and personalization',
      'Clean data across your CRM',
    ],
  },
  {
    id: 'deals',
    title: 'Capture every conversation, accelerate every deal',
    bullets: [
      'Pre-meeting insights in seconds',
      'AI-powered summaries and follow-ups',
      'Pipeline boards & deal alerts',
      'Performance dashboards for coaching',
    ],
  },
];

export default function StackedTabs() {
  const sectionRef = useRef(null);
  const panelsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentIndex = useRef(0);

  // Set initial positions to avoid flicker
  useEffect(() => {
    panelsRef.current.forEach((panel, i) => {
      gsap.set(panel, {
        yPercent: i === 0 ? 0 : 100,
        opacity: i === 0 ? 1 : 0,
        zIndex: i === 0 ? 2 : 1,
      });
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const panels = panelsRef.current;
    if (!section) return;

    const total = panels.length;
    

    ScrollTrigger.getAll().forEach((t) => t.kill());

    const updatePanel = (index, direction = 1) => {
      if (index === currentIndex.current) return;

      panels.forEach((p, i) => {
        if (i === index) {
          gsap.to(p, {
            yPercent: 0,
            opacity: 1,
            zIndex: 2,
            duration: 0,
            ease: 'none',
          });
        } else if (i === currentIndex.current) {
          gsap.to(p, {
            yPercent: direction > 0 ? -100 : 100,
            opacity: 0,
            zIndex: 1,
            duration: 0,
            ease: 'none',
          });
        } else {
          gsap.set(p, { yPercent: direction > 0 ? 100 : -100, opacity: 0, zIndex: 1 });
        }
      });

      setActiveIndex(index);
      currentIndex.current = index;
    };

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: `+=${window.innerHeight * total}`,
      pin: true,
      snap: {
        snapTo: 1 / (total - 1),
        duration: 0.3,
        ease: 'power1.inOut',
      },
      scrub: false,
      onUpdate: (self) => {
        const index = Math.round(self.progress * (total - 1));
        if (index !== currentIndex.current) {
          const dir = index > currentIndex.current ? 1 : -1;
          updatePanel(index, dir);
        }
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const handleTabClick = (index) => {
    if (index === currentIndex.current) return;
    
    const direction = index > currentIndex.current ? 1 : -1;
    panelsRef.current.forEach((p, i) => {
      if (i === index) {
        gsap.to(p, {
          yPercent: 0,
          opacity: 1,
          zIndex: 2,
          duration: 0.3,
          ease: 'none',
        });
      } else {
        gsap.to(p, {
          yPercent: direction > 0 ? -100 : 100,
          opacity: 0,
          zIndex: 1,
          duration: 0.2,
          ease: 'none',
        });
      }
    });
    
    setActiveIndex(index);
    currentIndex.current = index;
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden w-full bg-white dark:bg-slate-900">
      {/* Sticky Tabs */}
      <div className="sticky top-[64px] md:top-[64px] z-[50] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md overflow-x-auto overflow-y-hidden w-full no-scrollbar border-b border-gray-200 dark:border-slate-700">
        <div className="flex flex-nowrap justify-start md:justify-center px-4 py-3 gap-2 xs:gap-3 sm:gap-4 max-w-[100vw]">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              className={` rounded-md font-medium border transition-all duration-300 text-nowrap px-4 py-3 text-[10px] uppercase leading-[120%] md:px-5 md:py-3 md:text-[12px] ${
                activeIndex === i
                  ? 'bg-cyan-200/80 dark:bg-cyan-400/20 text-black dark:text-cyan-300 border-cyan-300 dark:border-cyan-400'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-transparent hover:bg-white dark:hover:bg-slate-700 hover:shadow-glow hover:-translate-y-[2px]'
              }`}
              onClick={() => handleTabClick(i)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Panels */}
      <div className="relative h-screen">
        {content.map((c, i) => (
          <div
            key={c.id}
            ref={(el) => (panelsRef.current[i] = el)}
            className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 items-start md:items-center justify-center gap-4 xs:gap-6 md:gap-10 px-4 xs:px-6 md:px-10 pt-20 pb-6 md:py-0 overflow-y-auto md:overflow-y-visible w-full no-scrollbar"
          >
            {/* Text Content */}
            <div className="w-full max-w-xl mx-auto md:mx-0">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6 text-gray-900 dark:text-white">{c.title}</h2>
              <div className="flex gap-3 mb-4 md:mb-6">
                <button className="primary bg-[#5ce1e6] hover:bg-[#4dd1d6] text-black text-sm xs:text-base px-4 py-2 sm:px-6 sm:py-2 rounded-md hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02]">
                  Get started
                </button>
                <button className="secondary border border-black dark:border-white text-black dark:text-white text-sm xs:text-base px-4 py-2 sm:px-6 sm:py-2 rounded-md hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02]">
                  Learn more
                </button>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm xs:text-base">
                {c.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start before:content-['✔'] before:mr-2 before:flex-shrink-0 before:text-cyan-500 dark:before:text-cyan-400">{b}</li>
                ))}
              </ul>
            </div>

            {/* Image / Illustration */}
            <div className="flex justify-center mt-4 md:mt-0">
              <div className="w-full max-w-[600px] h-auto aspect-[7/5] overflow-hidden rounded-xl shadow-lg">
                <img src={[img0, img1, img2, img3][i]} alt={`${c.id} visual`} className="panel-image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}