import { useEffect, useRef, useState } from "react"
import "./stackedTabs.css"

import img0 from '../../assets/stackedtabs/image.webp';
import img1 from '../../assets/stackedtabs/image (1).webp';
import img2 from '../../assets/stackedtabs/image (2).webp';
import img3 from '../../assets/stackedtabs/image (3).webp';

const tabs = [
  { id: "outbound", label: "OUTBOUND" },
  { id: "inbound", label: "INBOUND" },
  { id: "enrichment", label: "DATA ENRICHMENT" },
  { id: "deals", label: "DEAL EXECUTION" },
]

const content = [
  {
    id: "outbound",
    title: "Turn hours of prospecting into minutes",
    bullets: [
      "AI-powered multichannel campaigns in one click",
      "Built-in email deliverability guardrails",
      "Prioritized task lists to maximize selling",
      "Workflow automations to identify and scale what works",
    ]
  },
  {
    id: "inbound",
    title: "Qualify and act on inbound leads in seconds",
    bullets: [
      "Anonymous visitor identification",
      "Real-time form enrichment",
      "Instant routing with built-in scheduler",
      "Automated nurture & follow-up sequences",
    ]
  },
  {
    id: "enrichment",
    title: "Fuel smarter selling with always-fresh data",
    bullets: [
      "210M+ contacts and 30M+ companies",
      "Verified emails & phone numbers",
      "Better targeting and personalization",
      "Clean data across your CRM",
    ]
  },
  {
    id: "deals",
    title: "Capture every conversation, accelerate every deal",
    bullets: [
      "Pre-meeting insights in seconds",
      "AI-powered summaries and follow-ups",
      "Pipeline boards & deal alerts",
      "Performance dashboards for coaching",
    ]
  },
]

export default function StackedTabs() {
  const sectionRef = useRef(null)
  const panelsRef = useRef([])
  const tabsBarRef = useRef(null)
  const tabsScrollRef = useRef(null)
  const tabBtnRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)
  const currentIndex = useRef(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isPinned, setIsPinned] = useState(false)
  const [tabsHeight, setTabsHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        const panels = panelsRef.current.filter((p) => p !== null)
        const headerHeight = 80
        const scrollPos = window.scrollY + headerHeight

        let maxInView = 0
        let maxDist = Number.POSITIVE_INFINITY

        panels.forEach((panel, i) => {
          if (!panel) return
          const rect = panel.getBoundingClientRect()
          const panelTop = Math.abs(rect.top)

          if (panelTop < maxDist) {
            maxDist = panelTop
            maxInView = i
          }
        })

        if (maxInView !== currentIndex.current) {
          setActiveIndex(maxInView)
          currentIndex.current = maxInView
        }
      }

      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile])

  // Ensure active tab is visible inside the horizontal scroller (mobile and small screens)
  useEffect(() => {
    const container = tabsScrollRef.current
    const btn = tabBtnRefs.current[activeIndex]
    if (!container || !btn) return

    const containerRect = container.getBoundingClientRect()
    const btnRect = btn.getBoundingClientRect()

    const isFullyVisible = btnRect.left >= containerRect.left && btnRect.right <= containerRect.right
    if (isFullyVisible) return

    const btnCenter = btn.offsetLeft + btn.offsetWidth / 2
    const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth)
    const targetScrollLeft = Math.max(0, Math.min(maxScroll, btnCenter - container.clientWidth / 2))
    container.scrollTo({ left: targetScrollLeft, behavior: "smooth" })
  }, [activeIndex])

  // JS-controlled sticky within section: pin tab bar only while the section is in view
  useEffect(() => {
    const onScrollResize = () => {
      const sec = sectionRef.current
      const bar = tabsBarRef.current
      if (!sec || !bar) return

      const rect = sec.getBoundingClientRect()
      const headerH = window.innerWidth >= 768 ? 64 : 56 // md:top-16 = 64px, top-14 = 56px
      const barH = bar.offsetHeight || 0
      if (tabsHeight !== barH) setTabsHeight(barH)

      const shouldPin = rect.top <= headerH && rect.bottom > headerH + barH
      if (shouldPin !== isPinned) setIsPinned(shouldPin)
    }

    onScrollResize()
    window.addEventListener("scroll", onScrollResize, { passive: true })
    window.addEventListener("resize", onScrollResize)
    return () => {
      window.removeEventListener("scroll", onScrollResize)
      window.removeEventListener("resize", onScrollResize)
    }
  }, [isPinned, tabsHeight])

  const handleTabClick = (index) => {
    if (index === currentIndex.current) return

    if (isMobile) {
      setActiveIndex(index)
      currentIndex.current = index

      const panel = panelsRef.current[index]
      if (panel) {
        setTimeout(() => {
          panel.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
      return
    }

    setActiveIndex(index)
    currentIndex.current = index
  }

  const getPanelStyle = (index) => {
    if (isMobile) return {}

    const offset = Math.max(0, index - activeIndex) * 20
    const yTransform = index <= activeIndex ? 0 : offset
    const opacity = index <= activeIndex ? 1 : 0.5
    const zIndex = Math.max(1, 100 - index)

    return {
      transform: `translateY(${yTransform}px) scale(${0.95 + index * 0.01})`,
      opacity: opacity,
      zIndex: zIndex,
      transition: "all 0.3s ease-out",
    }
  }

  return (
    <section ref={sectionRef} className="relative w-full bg-white dark:bg-slate-900 overflow-x-hidden overflow-y-visible">
      <div
        ref={tabsBarRef}
        className={`${
          isPinned ? "fixed left-0 right-0 top-14 md:top-16" : "relative"
        } z-[200] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-all duration-300 border-b border-gray-100 dark:border-slate-700`}
      >
        <div ref={tabsScrollRef} className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
          <div
            role="tablist"
            aria-label="Tabs"
            className="flex flex-nowrap justify-start md:justify-center px-4 md:px-6 lg:px-8 py-3 md:py-4 gap-2 xs:gap-3 sm:gap-4 min-w-min md:min-w-0"
          >
            {tabs.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={activeIndex === i}
                className={`
                  flex-shrink-0 rounded-md font-medium transition-all duration-300 text-nowrap 
                  px-3.5 md:px-4 lg:px-5 py-2 md:py-2.5
                  text-[11px] md:text-[12px] lg:text-[13px] uppercase leading-[120%] tracking-wide
                  ${
                    activeIndex === i
                      ? "bg-cyan-200/80 dark:bg-cyan-900/60 text-black dark:text-cyan-100 shadow-md scale-105 border border-cyan-300 dark:border-cyan-700"
                      : "bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-700 hover:border-cyan-200 dark:hover:border-cyan-600 hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                  }
                `}
                ref={(el) => (tabBtnRefs.current[i] = el)}
                onClick={() => handleTabClick(i)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Spacer to avoid layout jump when tab bar is pinned */}
      <div aria-hidden="true" style={{ height: isPinned ? tabsHeight : 0 }} />

      <div
        className={`relative md:pt-16 ${isMobile ? "min-h-auto" : "md:h-screen md:flex md:items-center md:justify-center"}`}
      >
        {content.map((c, i) => (
          <div
            key={c.id}
            ref={(el) => {
              if (el) panelsRef.current[i] = el
            }}
            style={getPanelStyle(i)}
            className={`
              ${isMobile ? "relative w-full min-h-screen py-8 px-4 xs:px-5 sm:px-6" : "absolute inset-0 pt-20 md:pt-16 w-full"}
              grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 xs:gap-8 md:gap-10 lg:gap-14
              overflow-hidden
            `}
          >
            <div className="w-full max-w-2xl mx-auto md:mx-0 order-1">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-balance text-black dark:text-white">
                {c.title}
              </h2>

              <div className="flex flex-col xs:flex-row gap-3 mb-6 md:mb-8">
                <button className="w-full xs:w-auto px-5 xs:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-white bg-cyan-400 hover:bg-cyan-500 transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95">
                  Get started
                </button>
                <button className="w-full xs:w-auto px-5 xs:px-6 py-2.5 md:py-3 rounded-lg font-semibold border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95">
                  Learn more
                </button>
              </div>

              <ul className="space-y-2.5 md:space-y-3.5 text-sm xs:text-base md:text-lg text-gray-600 dark:text-gray-300">
                {c.bullets.map((b, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 before:content-['✓'] before:font-bold before:flex-shrink-0 before:text-cyan-500 before:mt-0.5"
                  >
                    <span className="pt-0.5">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center w-full max-w-2xl mx-auto md:mx-0 order-2">
              <div className="w-full  lg:aspect-[7/6] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800 rounded-xl shadow-xl overflow-hidden flex items-center justify-center">
                <img src={[img0, img1, img2, img3][i]} alt={`${c.id} visual`} className="panel-image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
