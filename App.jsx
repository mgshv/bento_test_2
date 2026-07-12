import React, { useEffect, useMemo, useState } from 'react';


function IconArrowUpRight({ size = 17 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>; }
function IconArrowRight({ size = 18 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>; }
function IconMail({ size = 26 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>; }
function IconInstagram({ size = 25 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>; }
function IconLinkedin({ size = 25 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2"/><rect x="2" y="8" width="4" height="13"/><circle cx="4" cy="4" r="2"/></svg>; }
function IconSun({ size = 18 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>; }
function IconMoon({ size = 17 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>; }

import profileImage from './profile.png';
import logoStripLight from './logo-strip-light.png';
import logoStripDark from './logo-strip-dark.png';
import imoneyImage from './imoney.png';
import imoneyCaseHero from './imoney-case-hero.png';
import imoneyCaseStrategy from './imoney-case-strategy.png';
import imoneyResultMargin from './imoney-result-margin.png';
import imoneyResultApproval from './imoney-result-approval.png';
import imoneyResultImpressions from './imoney-result-impressions.png';
import imoneyResultCpm from './imoney-result-cpm.png';
import ramadanImage from './unicef-ramadan.png';
import phillipImage from './phillip-nova.png';
import shortcutImage from './sales-shortcut.png';
import systemsImage from './unicef-systems.png';
import otherCasesImage from './other-cases.png';
import unicefRayaStoryboard from './unicef-raya-storyboard.png';
import unicefResultCpa from './unicef-result-cpa.png';
import unicefResult2x from './unicef-result-2x.png';
import unicefResultEfficiency from './unicef-result-efficiency.png';
import unicefRayaVideo from './unicef-raya-video.mp4';
import phillipStoryboard from './phillip-storyboard.png';
import phillipPerformance from './phillip-performance.png';
import phillipCreative from './phillip-creative.png';
import phillipRightGif from './phillip-right.gif';
import phillipVideo from './phillip-video.mp4';
import salesGreenIcon from './sales-green-icon.png';
import salesLogo from './sales-logo.png';
import salesCarousel1 from './sales-carousel-1.png';
import salesCarousel2 from './sales-carousel-2.png';
import salesCarousel3 from './sales-carousel-3.png';
import salesCarousel4 from './sales-carousel-4.png';
import salesIdentity from './sales-identity.png';
import salesWix from './sales-wix.png';
import salesTypography from './sales-typography.png';
import salesLanding from './sales-landing.png';
import salesColors from './sales-colors.png';
import systemsHeroSticker from './systems-hero-sticker.png';
import systemsBadgeProcess from './systems-badge-process.png';
import systemsBadgeMedical from './systems-badge-medical.png';
import systemsBadgeWater from './systems-badge-water.png';
import systemsBadgeRutf from './systems-badge-rutf.png';
import systemsBadgeHeart from './systems-badge-heart.png';
import systemsSocialMockups from './systems-social-mockups.png';

const links = {
  email: 'mailto:muhammetgeldig@gmail.com',
  instagram: 'https://www.instagram.com/m.gshv/',
  linkedin: 'https://www.linkedin.com/in/muhammetgeldi-goshayev/',
  externalCases: 'https://app.notion.com/p/gysgacha/115b6c063e29440aae418a6dc8ba7ffe?v=93662e02564440d498f6ae370df595c24',
};

const caseStudies = {
  imoney: {
    label: 'Case Study',
    title: "iMoney’s Full-Funnel Creative Strategy",
    image: imoneyImage,
    className: 'case-imoney',
  },
  ramadan: {
    label: 'Case Study',
    title: '59% Cheaper Ramadan Donations For UNICEF',
    image: ramadanImage,
    className: 'case-ramadan',
  },
  phillip: {
    label: 'Case Study',
    title: 'Phillip Nova. Cutting CPL by 22%.',
    image: phillipImage,
    className: 'case-phillip',
  },
  shortcut: {
    label: 'Case Study',
    title: 'Zero to Brand Identity. Sales Shortcut.',
    image: shortcutImage,
    className: 'case-shortcut',
  },
  systems: {
    label: 'Case Study',
    title: 'Creative Systems for UNICEF',
    image: systemsImage,
    className: 'case-systems',
  },
};

const testimonials = [
  {
    quote:
      'Muhammetgeldi brought strategic clarity and creative vision to our campaign. Our conversion rates noticeably improved within weeks.',
    name: 'David Chen',
    role: 'CMO at FinTech Plus',
  },
  {
    quote:
      'He understands how performance and design work together. The work looked better, but more importantly, it made the offer easier to understand.',
    name: 'Alyssa Tan',
    role: 'Growth Lead',
  },
  {
    quote:
      'The strongest part was how quickly he translated scattered business inputs into a clear campaign system we could actually execute.',
    name: 'Marcus Lee',
    role: 'Founder',
  },
];

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash.replace(/^#/, '') || '/';
}

function ThemeSwitch({ theme, setTheme }) {
  return (
    <div className="theme-switch" aria-label="Theme switcher">
      <button
        className={theme === 'light' ? 'active' : ''}
        onClick={() => setTheme('light')}
        aria-label="Switch to light mode"
      >
        <IconSun size={18} />
      </button>
      <button
        className={theme === 'dark' ? 'active' : ''}
        onClick={() => setTheme('dark')}
        aria-label="Switch to dark mode"
      >
        <IconMoon size={17} />
      </button>
    </div>
  );
}

function Label({ children }) {
  return <span className="label">{children}</span>;
}

function Header() {
  return (
    <header className="site-header">
      <a href="#/" className="brand-name">Muhammetgeldi Goshayev</a>
    </header>
  );
}

function AboutCard() {
  return (
    <section className="card about-card reveal" style={{ '--delay': '0ms' }}>
      <Label>About</Label>
      <p>
        Art Director and Creative Lead based in Kuala Lumpur, driven by a relentless obsession with turning consumer psychology into performance. <span>2x ROAS on Meta, 14,000+ leads in under six months, and over $500K in measurable revenue across virtually every industry.</span>
      </p>
    </section>
  );
}

function ProfileCard() {
  return (
    <section className="card profile-card reveal" style={{ '--delay': '70ms' }}>
      <div className="profile-frame">
        <img src={profileImage} alt="Muhammetgeldi Goshayev" />
      </div>
    </section>
  );
}

function ClientsCard({ theme }) {
  const logoStrip = theme === 'dark' ? logoStripDark : logoStripLight;
  return (
    <section className="card clients-card reveal" style={{ '--delay': '100ms' }}>
      <Label>Clients</Label>
      <div className="logo-mask">
        <div className="logo-track">
          <img src={logoStrip} alt="Client logos" />
          <img src={logoStrip} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <section className="card testimonial-card reveal" style={{ '--delay': '150ms' }}>
      <Label>Testimonials</Label>
      <div className="testimonial-copy" key={index}>
        <p>{current.quote}</p>
        <div>
          <strong>{current.name}</strong>
          <span>{current.role}</span>
        </div>
      </div>
      <button
        className="round-next"
        onClick={() => setIndex((index + 1) % testimonials.length)}
        aria-label="Show next testimonial"
      >
        <IconArrowRight size={18} />
      </button>
    </section>
  );
}

function ExperienceCard() {
  const jobs = [
    ['Senior Art Director', 'Gravitas', '2026 – Present'],
    ['Regional Creative Lead', 'Creme Digital', '2023 – 2026'],
    ['Creative Lead', 'Yolbelet LLC', '2021 – 2022'],
    ['Full-Stack Graphic Designer', 'Freelance', '2018 – Present'],
  ];

  return (
    <section className="card experience-card reveal" style={{ '--delay': '120ms' }}>
      <Label>Experience</Label>
      <div className="job-list">
        {jobs.map(([role, company, year]) => (
          <div className="job-row" key={role}>
            <div>
              <h3>{role}</h3>
              <p>{company}</p>
            </div>
            <span>{year}</span>
          </div>
        ))}
      </div>
      <a className="pill-button" href={links.linkedin} target="_blank" rel="noreferrer">
        View resume <IconArrowUpRight size={16} />
      </a>
    </section>
  );
}

function CaseCard({ id, wide = false, delay = '0ms' }) {
  const item = caseStudies[id];
  return (
    <a href={`#/case-study/${id}`} className={`card case-card ${item.className} ${wide ? 'wide' : ''} reveal`} style={{ '--delay': delay }}>
      <Label>{item.label}</Label>
      <img className="case-visual" src={item.image} alt={item.title} />
      <h2>{item.title} <IconArrowUpRight size={17} /></h2>
    </a>
  );
}

function ExternalCasesCard() {
  return (
    <a href={links.externalCases} target="_blank" rel="noreferrer" className="card other-cases-card reveal" style={{ '--delay': '260ms' }}>
      <img src={otherCasesImage} alt="Other case studies preview" />
      <h2>Check out my other case studies <IconArrowUpRight size={17} /></h2>
    </a>
  );
}

function SocialStack() {
  return (
    <section className="social-stack reveal" style={{ '--delay': '220ms' }}>
      <a className="card social-card" href={links.email}>
        <IconMail size={26} />
        <strong>Say Hello</strong>
      </a>
      <a className="card social-card" href={links.instagram} target="_blank" rel="noreferrer">
        <IconInstagram size={25} />
        <strong>Instagram</strong>
      </a>
      <a className="card social-card" href={links.linkedin} target="_blank" rel="noreferrer">
        <IconLinkedin size={25} />
        <strong>LinkedIn</strong>
      </a>
    </section>
  );
}

function Home({ theme }) {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="home-grid">
        <AboutCard />
        <ProfileCard />
        <ClientsCard theme={theme} />
        <TestimonialCard />
        <ExperienceCard />
        <CaseCard id="imoney" delay="160ms" />
        <CaseCard id="ramadan" delay="220ms" />
        <CaseCard id="phillip" wide delay="180ms" />
        <CaseCard id="shortcut" delay="240ms" />
        <CaseCard id="systems" wide delay="280ms" />
        <SocialStack />
        <ExternalCasesCard />
      </main>
    </>
  );
}


const imoneyResults = [
  { label: 'Margin', image: imoneyResultMargin, alt: 'Margin improvement from loss to profit' },
  { label: 'Approval Rate', image: imoneyResultApproval, alt: 'Approval rate improved from Q2 to Q4' },
  { label: 'Impressions', image: imoneyResultImpressions, alt: '2.65 million monthly impressions' },
  { label: 'CPM Efficiency', image: imoneyResultCpm, alt: 'RM79.67 cost per thousand impressions' },
];

const imoneyScenarios = [
  ['🏥 Emergency expenses', 'Urgency, fear of being unprepared'],
  ['🏠 Home renovations', 'Aspiration, family, future'],
  ['💼 Small Business', 'Ambition, growth, opportunity'],
  ['💳 Debt consolidation', 'Shame relief, control, fresh start'],
  ['📦 Generic needs', 'Broad intent capture'],
];

const imoneyRetargeting = [
  ['01', 'Refined messaging with scenario callbacks'],
  ['02', 'Strong, clear CTAs to drive conversions'],
  ['03', 'Shorter, more direct animations to re-engage viewers efficiently'],
];

const unicefRamadanResults = [
  { label: 'Cost per Acquisition', image: unicefResultCpa, alt: 'Cost per acquisition reduced by 57 percent from 194 dollars to 112 dollars' },
  { label: 'Donations Acquired', image: unicefResult2x, alt: 'Donations acquired doubled versus the prior year campaign' },
  { label: 'Donations Acquired', image: unicefResultEfficiency, alt: 'Efficiency ratio increased by 14 percent with disproportionate return' },
];

const phillipNovaResults = [
  { label: 'Performance', image: phillipPerformance, alt: 'Performance result showing 22 percent cheaper CPL than the in-house creative while delivering higher volume leads' },
  { label: 'Creative', image: phillipCreative, alt: 'Creative summary showing hook and visual, fast cuts and multiple points of motion, and bright colours in a short 15 second format' },
];

const salesShortcutCarousel = [
  { image: salesCarousel1, alt: 'Sales Shortcut logo proposal with bold cut-out S mark' },
  { image: salesCarousel2, alt: 'Sales Shortcut logo proposal with compact zig-zag S mark' },
  { image: salesCarousel3, alt: 'Sales Shortcut logo proposal with flowing cursive S arrows' },
  { image: salesCarousel4, alt: 'Sales Shortcut logo proposal with smooth looped percentage curves' },
];


const unicefSystemBadges = [
  {
    image: systemsBadgeMedical,
    alt: 'UNICEF monthly donor medical support badge',
    caption: 'Inverted colours to add clarity to the contributing aid visual.',
  },
  {
    image: systemsBadgeWater,
    alt: 'UNICEF monthly donor clean water badge',
    caption: 'Slight pose change and additional texture to add personality to the illustration.',
  },
  {
    image: systemsBadgeRutf,
    alt: 'UNICEF monthly donor RUTF therapeutic food badge',
    caption: 'Slight pose change to add personality to the illustration without obscuring the text.',
  },
  {
    image: systemsBadgeHeart,
    alt: 'UNICEF monthly donor emotional care badge',
    caption: 'Visual clarity for the heart shape to avoid misconception.',
  },
];

function CaseMetaCard({ label, value }) {
  return (
    <div className="case-meta-card">
      <Label>{label}</Label>
      <strong>{value}</strong>
    </div>
  );
}

function ResultMetricCard({ label, image, alt }) {
  return (
    <div className="result-metric-card">
      <Label>{label}</Label>
      <img src={image} alt={alt} />
    </div>
  );
}

function ImageMetricCard({ label, image, alt }) {
  return (
    <div className="result-metric-card image-only-card">
      <Label>{label}</Label>
      <img src={image} alt={alt} />
    </div>
  );
}


function SalesLogoCarousel() {
  const [index, setIndex] = useState(0);
  const current = salesShortcutCarousel[index];
  const goPrev = () => setIndex((index - 1 + salesShortcutCarousel.length) % salesShortcutCarousel.length);
  const goNext = () => setIndex((index + 1) % salesShortcutCarousel.length);

  return (
    <section className="sales-carousel case-image-block reveal is-visible">
      <button className="carousel-nav carousel-prev" onClick={goPrev} aria-label="Previous logo option">‹</button>
      <img src={current.image} alt={current.alt} />
      <button className="carousel-nav carousel-next" onClick={goNext} aria-label="Next logo option">›</button>
      <div className="carousel-dots" aria-hidden="true">
        {salesShortcutCarousel.map((_, dotIndex) => (
          <span key={dotIndex} className={dotIndex === index ? 'active' : ''} />
        ))}
      </div>
    </section>
  );
}

function ScenarioCard({ title, copy }) {
  return (
    <div className="scenario-card">
      <Label>{title}</Label>
      <strong>{copy}</strong>
    </div>
  );
}

function RetargetingCard({ number, copy }) {
  return (
    <div className="retargeting-card">
      <span>{number}</span>
      <strong>{copy}</strong>
    </div>
  );
}

function ImoneyCaseStudyPage() {
  return (
    <main className="imoney-case-page">
      <a className="case-back-pill reveal is-visible" href="#/" aria-label="Go back home">← Back home</a>

      <section className="imoney-case-intro case-section-card reveal is-visible">
        <h1>Full-Funnel Creative Strategy</h1>
        <p>iMoney had the platform. They had the traffic. What they didn't have was a reason to show different people different messages.</p>
      </section>

      <section className="case-meta-grid reveal is-visible">
        <CaseMetaCard label="Role" value="Creative Direction" />
        <CaseMetaCard label="Client" value="iMoney" />
        <CaseMetaCard label="Year" value="2025" />
      </section>

      <section className="case-image-block reveal is-visible">
        <img src={imoneyCaseHero} alt="iMoney full funnel creative strategy hero" />
      </section>

      <section className="case-copy-block reveal is-visible">
        <h2>Challenge</h2>
        <p>Malaysia's largest personal finance comparison platform serving 29M+ users and also it was running ads that looked like everyone else in the fintech space. Generic visuals, one-size-fits-all messaging, and campaigns that were generating clicks but losing money. When they came to us, their margin was -9.88%. The creative wasn't doing the strategic work it needed to do.</p>

        <h2>Results</h2>
        <p>Over three consecutive quarters, the campaign went from unprofitable to one of iMoney's strongest performing channels:</p>
      </section>

      <section className="results-grid reveal is-visible">
        {imoneyResults.map((item) => <ResultMetricCard key={item.label} {...item} />)}
      </section>

      <section className="case-copy-block reveal is-visible">
        <p>A campaign that was losing money in Q2 delivered 30.75% margin and RM13.8M in loan disbursements by Q4 driven entirely by creative strategy restructure, not budget increase.</p>

        <h2>Insight</h2>
        <p>People don't borrow money for the same reason. A mother facing a medical emergency thinks completely differently from someone drowning in credit card debt or a couple saving for a wedding. Yet iMoney's ads were speaking to all of them with the same message.</p>
        <p>The real problem wasn't the platform. It was that the creative had no strategic architecture, no segmentation, no funnel thinking, no connection between why someone needed money and what they were shown first.</p>
      </section>

      <section className="case-image-block reveal is-visible">
        <img src={imoneyCaseStrategy} alt="iMoney strategy creative system" />
      </section>

      <section className="case-copy-block reveal is-visible">
        <h2>The Strategy</h2>
        <h3>Top of Funnel — Scenario-Based Segmentation</h3>
        <p>We rebuilt the campaign from the brief up, structuring it across two funnel stages.</p>
        <p>Instead of one campaign, we developed five distinct audience scenarios based on the real emotional triggers behind personal loan decisions:</p>
      </section>

      <section className="scenario-grid reveal is-visible">
        {imoneyScenarios.map(([title, copy]) => <ScenarioCard key={title} title={title} copy={copy} />)}
      </section>

      <section className="case-copy-block reveal is-visible">
        <p>Each scenario had its own messaging angle, visual language, and animated creative male, female, and mobile UI variants producing 15 creatives to test across copy and persona simultaneously.</p>
        <h3>Bottom of Funnel — Retargeting by Objection</h3>
        <p>For users who had already engaged but hadn't converted, I identified three conversion blockers and built retargeting creatives to address each directly: urgency and time pressure, ease of platform use, and step-by-step process clarity.</p>
      </section>

      <section className="retargeting-grid reveal is-visible">
        {imoneyRetargeting.map(([number, copy]) => <RetargetingCard key={number} number={number} copy={copy} />)}
      </section>
    </main>
  );
}

function UnicefRamadanCaseStudyPage() {
  return (
    <main className="imoney-case-page">
      <a className="case-back-pill reveal is-visible" href="#/" aria-label="Go back home">← Back home</a>

      <section className="imoney-case-intro case-section-card reveal is-visible">
        <h1>59% Cheaper Ramadan Donations For UNICEF</h1>
        <p>We halved acquisition cost and doubled donations by making Raya the moment of reckoning.</p>
      </section>

      <section className="case-meta-grid reveal is-visible">
        <CaseMetaCard label="Role" value="Creative Direction" />
        <CaseMetaCard label="Client" value="UNICEF" />
        <CaseMetaCard label="Year" value="2024" />
      </section>

      <section className="case-image-block reveal is-visible">
        <img src={unicefRayaStoryboard} alt="UNICEF Raya storyboard showing the campaign sequence and messaging" />
      </section>

      <section className="case-copy-block reveal is-visible">
        <h2>Challenge</h2>
        <p>Every year, Malaysians celebrate Raya with abundance. Full tables, open houses and family reunions. And every year, UNICEF runs a Ramadan donation campaign that struggles to cut through the noise of a season built on celebration.</p>
        <p>The problem wasn't apathy. It was distance. The suffering was real, but it felt like someone else's story, happening somewhere else. UNICEF needed to close that gap — not by making Malaysians feel guilty about their table, but by making them feel something about the empty one.</p>

        <h2>Results</h2>
        <p>The brief assumed we needed to make people feel worse to make them give more. The opposite turned out to be true. By anchoring the campaign to a shared cultural experience — the iftar table — we gave Malaysians a moment of recognition before asking them to act. Guilt closes wallets. Empathy opens them.</p>
      </section>

      <section className="results-grid unicef-results-grid reveal is-visible">
        {unicefRamadanResults.map((item) => <ResultMetricCard key={`${item.label}-${item.alt}`} {...item} />)}
      </section>

      <section className="case-copy-block reveal is-visible">
        <h2>Creative Approach</h2>
        <p>Ramadan is already a season of fasting and reflection. The act of not eating is built into the cultural rhythm — which made it uniquely powerful as a reframing device. Where other campaigns showed suffering as spectacle, this one asked a simpler question: what does the table look like for a child who has nothing to break fast with?</p>
        <p>The animation held two worlds in the same frame. One table, full. Another, empty. The same celebration, two entirely different realities. No voiceover needed. The contrast did the work — and looped, quietly, so the viewer couldn't look away.</p>
      </section>

      <section className="case-video-block reveal is-visible">
        <video controls playsInline preload="metadata" poster="" className="case-video-player">
          <source src={unicefRayaVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </main>
  );
}


function PhillipNovaCaseStudyPage() {
  return (
    <main className="imoney-case-page">
      <a className="case-back-pill reveal is-visible" href="#/" aria-label="Go back home">← Back home</a>

      <section className="imoney-case-intro case-section-card reveal is-visible">
        <h1>Phillip Nova. Cutting CPL by 22%.</h1>
        <p>Outperformed the brand's own team with a single ad — 22% cheaper CPL, higher volume.</p>
      </section>

      <section className="case-meta-grid reveal is-visible">
        <CaseMetaCard label="Role" value="Creative Direction and Execution" />
        <CaseMetaCard label="Client" value="Phillip Nova" />
        <CaseMetaCard label="Year" value="2024" />
      </section>

      <section className="case-copy-block reveal is-visible">
        <h2>Challenge</h2>
        <p>Phillip Nova already had an in-house creative team. What they didn't have was an ad that could outperform it.</p>
        <p>After seeing results from a previous Meta campaign I'd built for them, they came back with a direct challenge: build something that beats what we're already running. No brief about brand guidelines or campaign vision — just a performance target and an expectation.</p>
        <p>The brief was effectively a head-to-head.</p>
      </section>

      <section className="dual-media-grid reveal is-visible">
        <div className="case-image-block media-card">
          <img src={phillipStoryboard} alt="Phillip Nova storyboard showing the four-step creative sequence" />
        </div>
        <div className="case-image-block media-card media-card-gif">
          <img src={phillipRightGif} alt="Animated Phillip Nova ETF ad preview" />
        </div>
      </section>

      <section className="case-copy-block reveal is-visible">
        <h2>Results</h2>
        <p>The brief wasn't really about ETFs. It was about whether a category-aware creative could beat a brand-comfortable one. The answer was yes — because knowing the audience mattered more than knowing the brand. When you build for the person who doesn't yet believe they're a customer, you find room that the in-house team, by definition, can't see.</p>
      </section>

      <section className="results-grid phillip-results-grid reveal is-visible">
        {phillipNovaResults.map((item) => <ImageMetricCard key={item.alt} {...item} />)}
      </section>

      <section className="case-copy-block reveal is-visible">
        <h2>Creative Approach</h2>
        <p>The existing in-house creative was built like most fintech ads are: clean, safe, on-brand. The problem with safe ads is that they blend into the feed of people who've already decided they're not interested in investing.</p>
        <p>The audience we were after — beginners with side-income aspirations — weren't ignoring ETFs because they didn't care. They were ignoring them because every ad assumed they already understood the category. The entry point was wrong.</p>
        <p>The strategic shift was simple: lead with the outcome they wanted (financial freedom, a New Year resolution already written on their phone), not the product. Scene by scene, the animation walked the viewer through a journey from aspiration to action — with a bouncy ball mechanic in the growth sequence that made the compounding nature of ETF returns feel instinctive rather than abstract. You don't need to understand what ETFs are to understand something going up.</p>
        <p>The production constraints — 30 seconds, motion-led, bright shifting palettes — were treated as advantages. Fast cuts and color changes that would cause fatigue in a financial services brand actually signaled something different: this is not your bank's ad.</p>
      </section>

      <section className="case-video-block reveal is-visible">
        <video controls playsInline preload="metadata" poster="" className="case-video-player">
          <source src={phillipVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </main>
  );
}


function SalesShortcutCaseStudyPage() {
  return (
    <main className="imoney-case-page sales-shortcut-case-page">
      <a className="case-back-pill reveal is-visible" href="#/" aria-label="Go back home">← Back home</a>

      <section className="imoney-case-intro case-section-card reveal is-visible">
        <h1>Zero to Brand Identity. Sales Shortcut.</h1>
        <p>Brand from scratch.</p>
      </section>

      <section className="case-meta-grid reveal is-visible">
        <CaseMetaCard label="Role" value="Brand Development" />
        <CaseMetaCard label="Client" value="Sales Shortcut" />
        <CaseMetaCard label="Year" value="2025" />
      </section>

      <section className="case-copy-block reveal is-visible">
        <h2>Challenge</h2>
        <p>SalesShortcut came in with a positioning problem hiding inside a design problem. They knew what they did: AI-powered business consulting for local SMEs, combining the strategic depth of McKinsey with the execution of an agency and the affordability of SaaS. What they didn't have was a visual language to make that claim feel true on sight.</p>
        <p>The AI tools space has a default aesthetic: dark, techy, abstract. Gradients suggesting intelligence. Sans-serifs suggesting efficiency. None of it distinctive. None of it human. For a brand whose entire value proposition is making the complex accessible to the local business owner, that aesthetic was exactly the wrong signal.</p>
        <p>The brief was a full brand build from scratch such as identity system, color, typography, iconography, and application across every touchpoint from app icon to invoice.</p>
      </section>

      <section className="sales-logo-grid reveal is-visible">
        <div className="case-image-block sales-logo-card green-card"><img src={salesGreenIcon} alt="Sales Shortcut green icon exploration" /></div>
        <div className="case-image-block sales-logo-card beige-card"><img src={salesLogo} alt="Sales Shortcut final logo on beige" /></div>
      </section>

      <section className="case-copy-block reveal is-visible">
        <h2>Insight</h2>
        <p>The most common failure mode in startup brand design is the founder's instinct to differentiate visually before they've differentiated strategically. SalesShortcut had a genuinely distinct positioning — all three of strategy, execution, and affordability in one automated system — but that positioning needed a symbol, not a story.</p>
        <p>The % mark works because it doesn't try to represent the company. It represents the result. That's what made it impossible to ignore and impossible to misattribute. A brand built on a symbol that already belongs to your audience's ambitions doesn't need to earn its place. It already has one.</p>
      </section>

      <SalesLogoCarousel />

      <section className="case-copy-block reveal is-visible">
        <h2>Creative Approach</h2>
        <p>Research pointed to one question: what single symbol could carry the entire SalesShortcut promise? The brand operates in the space of conversion — deals closed, performance improved, costs reduced. Everything they do connects back to one piece of universal commercial shorthand: %.</p>
        <p>It's not a metaphor. It's the literal unit of measurement their clients care about most. Rather than designing around the name or building an abstract logomark, the % mark became the brand's core visual asset redesigned with an intentional upward slash that introduces direction and momentum into an otherwise static symbol. Two circles representing balance and completeness, the diagonal bar communicating progress and the shortcut itself. The mark works because it requires zero explanation.</p>
        <p>Several early directions were explored and rejected — concepts leaning into speed and path metaphors that were conceptually interesting but too illustrative to scale, and others that pushed toward the local-business angle directly. They were cut because they explained too much. The % mark didn't need to explain anything. It was already the answer.</p>
      </section>

      <section className="case-image-block reveal is-visible">
        <img src={salesIdentity} alt="Sales Shortcut identity system and logo proposal" />
      </section>

      <section className="case-copy-block reveal is-visible">
        <p>The logo system was built for maximum flexibility without losing integrity: primary on Deep Focus green, secondary in Active Orange for campaigns and conversion moments, monochrome versions for single-color applications, macro variants scaled from billboard to favicon. Clear space rules defined using the height of the "s" in SalesShortcut — a precision detail that keeps the mark breathing at every size.</p>
        <p>Typography followed the same logic — Wix Madefor Display as the primary face, chosen for rounded boldness that sits between tech confidence and human warmth; IBM Plex Sans/Mono as the secondary, adding structured intelligence for body copy and technical content. The pairing mirrors the brand's core tension: smart but never intimidating.</p>
      </section>

      <section className="sales-logo-grid reveal is-visible">
        <div className="case-image-block sales-logo-card"><img src={salesWix} alt="Wix Madefor type exploration" /></div>
        <div className="case-image-block sales-logo-card"><img src={salesTypography} alt="Sales Shortcut typography construction detail" /></div>
      </section>

      <section className="case-image-block reveal is-visible">
        <img src={salesLanding} alt="Sales Shortcut landing page design system mockup" />
      </section>

      <section className="case-copy-block reveal is-visible">
        <p>The color system was built around five roles rather than five swatches. Shortcut Green (#45CA63) as the momentum color, 40% of all usage. Active Orange (#FF3B00) as the call to act urgency reserved for conversion moments. Deep Focus (#314544) as the authority backdrop.</p>
        <p>Smart Black and Smart Beige as the neutrals that let the primaries pop. Usage ratios were specified to keep the brand consistent whether it's running a social ad or printed on a lanyard.</p>
      </section>

      <section className="case-image-block reveal is-visible">
        <img src={salesColors} alt="Sales Shortcut color system" />
      </section>
    </main>
  );
}


function UnicefSystemsCaseStudyPage() {
  return (
    <main className="imoney-case-page systems-case-page">
      <a className="case-back-pill reveal is-visible" href="#/" aria-label="Go back home">← Back home</a>

      <section className="imoney-case-intro case-section-card reveal is-visible">
        <h1>Creative Systems for UNICEF</h1>
        <p>Creative Direction for UNICEF Malaysia | Always-On Badge Design System</p>
      </section>

      <section className="case-meta-grid reveal is-visible">
        <CaseMetaCard label="Role" value="Creative Direction" />
        <CaseMetaCard label="Client" value="UNICEF" />
        <CaseMetaCard label="Year" value="2025" />
      </section>

      <section className="case-image-block reveal is-visible">
        <img src={systemsHeroSticker} alt="UNICEF monthly donor badge stickers being held over a blue background" />
      </section>

      <section className="case-copy-block reveal is-visible">
        <h2>Challenge</h2>
        <p>Global UNICEF campaigns arrive fully formed: photography sourced, messaging approved, media budgets allocated. What they don't arrive with is a localised visual language. Every market receives the same assets and is expected to make them work.</p>
        <p>For UNICEF Malaysia's always-on monthly donation campaigns, that meant a feed of powerful photography with no consistent design element tying the giving mechanic together. Every ad looked different. Nothing was ownable.</p>
        <p>The problem wasn't awareness. Malaysians knew UNICEF. What the creative lacked was a repeatable visual anchor — something a donor could recognise across formats, across causes, and across time, and immediately associate with the act of monthly giving.</p>

        <h2>Insight</h2>
        <p>Most creative for NGOs is built to move people. This was built to be used. The difference matters. An emotionally powerful one-off ad fades; a visual system compounds.</p>
        <p>Every time a badge appeared on a new piece of content, it reinforced the previous one. Donors started to associate the circular mark with the action of giving before they read the copy. That kind of recognition isn't built by a campaign. It's built by a system that outlives the brief.</p>
      </section>

      <section className="case-image-block reveal is-visible">
        <img src={systemsBadgeProcess} alt="UNICEF badge process showing draft one without colour and draft two with colour" />
      </section>

      <section className="case-copy-block reveal is-visible">
        <h2>Creative Approach</h2>
        <p>The solution wasn't a campaign. It was a system.</p>
        <p>I led the creative direction for a badge design system built around four aid categories: food (RUTF therapeutic packets), water, medical support, and emotional care. Each badge shared the same visual architecture — a circular format with curved text reading “Be a monthly donor,” a consistent hand illustration in UNICEF yellow, and a bold blue ground — but carried a distinct object that communicated exactly what a donation provides.</p>
        <p>The illustration style was a deliberate strategic choice. Aid campaigns typically reach for emotional photography of suffering — real, impactful, but heavy. The badge system worked differently. By using simple, bold illustration, it made the act of giving the emotional centre rather than the evidence of need. A hand offering. A glass of water. A packet of RUTF. The donor becomes part of the image.</p>
      </section>

      <section className="systems-badge-grid reveal is-visible">
        {unicefSystemBadges.map((badge) => (
          <div className="systems-badge-card" key={badge.alt}>
            <img src={badge.image} alt={badge.alt} />
            <p>{badge.caption}</p>
          </div>
        ))}
      </section>

      <section className="case-copy-block reveal is-visible">
        <p>The process was rigorous. Draft one established the concept in outline form — testing composition, object clarity, and legibility of the circular text against the border. Draft two introduced colour. What looked coherent in greyscale fell apart when blue was added: the medical cross disappeared into the background, the heart shape read ambiguously, the RUTF packet competed with the circular type. Each problem was documented and solved individually — colour inversions for the medical badge, pose adjustments on the RUTF hand to clear the text path, additional texture on the water glass to add tactility, and a more defined heart shape to eliminate any visual misreading.</p>
      </section>

      <section className="case-image-block systems-social-block reveal is-visible">
        <img src={systemsSocialMockups} alt="UNICEF Malaysia social post mockups using the monthly donor badge system" />
      </section>

      <section className="case-copy-block reveal is-visible">
        <p>The final badges were then animated as stickers — bringing personality and motion to what would otherwise be static corners of a static ad. Applied to photography across multiple cause areas (malnutrition, waterborne disease, emergency medical care), the badges functioned as a consistent call-to-action regardless of what image they sat over.</p>
      </section>
    </main>
  );
}


function CaseStudyPage({ slug }) {
  if (slug === 'imoney') {
    return <ImoneyCaseStudyPage />;
  }

  if (slug === 'ramadan') {
    return <UnicefRamadanCaseStudyPage />;
  }

  if (slug === 'phillip') {
    return <PhillipNovaCaseStudyPage />;
  }

  if (slug === 'shortcut') {
    return <SalesShortcutCaseStudyPage />;
  }

  if (slug === 'systems') {
    return <UnicefSystemsCaseStudyPage />;
  }

  const item = caseStudies[slug];

  if (!item) {
    return (
      <main className="case-page">
        <a className="back-link" href="#/">← Back home</a>
        <h1>Case study not found.</h1>
      </main>
    );
  }

  return (
    <main className="case-page">
      <a className="back-link" href="#/">← Back home</a>
      <section className="card case-hero">
        <Label>Coming Soon</Label>
        <h1>{item.title}</h1>
        <p>We’ll design this full case study page together next. For now, this route is connected and ready.</p>
        <img src={item.image} alt={item.title} />
      </section>
    </main>
  );
}

export default function App() {
  const route = useHashRoute();
  const slug = useMemo(() => route.replace('/case-study/', ''), [route]);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app-shell">
      {route.startsWith('/case-study/') ? <CaseStudyPage slug={slug} /> : <Home theme={theme} />}
      <ThemeSwitch theme={theme} setTheme={setTheme} />
    </div>
  );
}
