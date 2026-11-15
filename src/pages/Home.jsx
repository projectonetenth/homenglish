import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, faqs, site } from '../data/site'
import { useSheetData } from '../hooks/useSheetData'
import { usePageTitle } from '../hooks/usePageTitle'
import ContentCard from '../components/ContentCard'

// ── 카테고리 아이콘 (채워진 라운드 스타일) ─────────────────
function CatIcon({ name, className = '' }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'currentColor', className }
  switch (name) {
    case 'reading':
      return <svg {...common}><path d="M12 5c-1.8-1.2-4-1.8-6.3-1.8-.9 0-1.7.7-1.7 1.6v11.3c0 .9.8 1.5 1.7 1.5 2 0 3.9.5 5.5 1.5.5.3 1.1.3 1.6 0 1.6-1 3.5-1.5 5.5-1.5.9 0 1.7-.6 1.7-1.5V4.8c0-.9-.8-1.6-1.7-1.6-2.3 0-4.5.6-6.3 1.8Z"/></svg>
    case 'grammar':
      return <svg {...common}><path d="M16.9 3.3a2.3 2.3 0 0 1 3.3 3.3L8.8 18l-4.2 1 1-4.2L16.9 3.3Z"/></svg>
    case 'vocabulary':
      return <svg {...common}><path d="M5 3h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm8 1.5V8h3.5L13 4.5ZM7 12h7v1.6H7V12Zm0 3.2h5v1.6H7v-1.6Z"/></svg>
    case 'listening':
      return <svg {...common}><path d="M12 3a8 8 0 0 0-8 8v4.5A2.5 2.5 0 0 0 6.5 18H8v-6H6.2A6 6 0 0 1 18 11.6V12h-2v6h1.5A2.5 2.5 0 0 0 20 15.5V11a8 8 0 0 0-8-8Z"/></svg>
    case 'phonics':
      return <svg {...common}><path d="M4 9v6h3.5l5 4V5l-5 4H4Zm11.5-1.3a5 5 0 0 1 0 8.6l-.9-1.6a3.2 3.2 0 0 0 0-5.4l.9-1.6Z"/></svg>
    case 'app':
      return <svg {...common}><path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 4v12h10V6H7Zm5 13.3a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z"/></svg>
    default:
      return <svg {...common}><circle cx="12" cy="12" r="8" /></svg>
  }
}

// 카테고리별 아이콘 배지 색 (절제된 톤)
const catTone = {
  reading: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300',
  grammar: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300',
  vocabulary: 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300',
  listening: 'bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300',
  phonics: 'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300',
  app: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300',
}

// ── 히어로 ────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-bg dark:bg-bg-dark">
      <div className="w-full max-w-container mx-auto section-x pt-16 pb-14 md:pt-28 md:pb-24">
        <p className="inline-flex items-center gap-2 rounded-full bg-surface dark:bg-surface-dark border border-neutral-200/70 dark:border-neutral-700 px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          임팩트닷 커리어 프로젝트 선정 · 10분의 1 프로젝트
        </p>

        <h1 className="text-[2.1rem] sm:text-5xl md:text-6xl lg:text-[76px] font-bold text-neutral-900 dark:text-neutral-100 leading-[1.08] tracking-[-0.03em] max-w-4xl mb-7">
          집에서 시작하는 우리 아이 영어, <span className="text-brand dark:text-brand-light">홈글리시</span>
        </h1>

        <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl mb-10">
          영어 가정학습 선배맘과 후배맘이 함께 만드는 상부상조 커뮤니티.
          검증된 자료와 레벨별 가이드로, 사교육비 걱정 없이 시작하세요.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/contents/all"
            className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-3.5 rounded-full transition text-sm md:text-base"
          >
            콘텐츠 둘러보기
          </Link>
          <Link
            to="/level-test"
            className="inline-flex items-center justify-center border border-neutral-300 dark:border-neutral-600 text-neutral-800 dark:text-neutral-200 font-semibold px-7 py-3.5 rounded-full hover:border-neutral-800 dark:hover:border-neutral-300 transition text-sm md:text-base"
          >
            무료 레벨테스트
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── 홈글리시 소개 ─────────────────────────────────────────
function Intro() {
  const features = [
    { num: '01', title: '검증된 영어 자료', desc: '선배맘들이 직접 써본 교재와 앱을 엄선해 소개합니다.' },
    { num: '02', title: '선배맘 노하우', desc: '엄마표 영어를 성공적으로 실천한 부모들의 실제 후기를 확인하세요.' },
    { num: '03', title: '레벨별 가이드', desc: '아이 수준에 맞는 자료와 학습 순서를 단계별로 안내합니다.' },
    { num: '04', title: '사교육비 절감', desc: '10분의 1 프로젝트 — 부담 없이 가정에서 영어를 완성합니다.' },
  ]

  return (
    <section className="max-w-container mx-auto section-x py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div className="md:sticky md:top-24">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 leading-snug tracking-[-0.02em] mb-6">
            부모와 아이가 함께하는 <span className="text-brand dark:text-brand-light">영어 가정학습의 모든 것</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed mb-8 max-w-md">
            사교육비 걱정 없이, 집에서도 충분히 영어를 잘 할 수 있어요.
            홈글리시에서 우리 아이에게 딱 맞는 콘텐츠를 찾아보세요.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand dark:text-brand-light hover:gap-2.5 transition-all"
          >
            홈글리시 더 알아보기
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div
              key={f.num}
              className="rounded-2xl bg-surface dark:bg-surface-dark border border-neutral-200/70 dark:border-neutral-800 p-6"
            >
              <span className="text-sm font-bold text-brand dark:text-brand-light tabular-nums">{f.num}</span>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mt-3 mb-1.5">{f.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 선호도 Top 10 ─────────────────────────────────────────
function Top10() {
  const { contents } = useSheetData()
  const featured = contents.slice(0, 6)

  return (
    <section className="bg-surface-2 dark:bg-surface-2dark transition-colors py-16 md:py-24">
      <div className="max-w-container mx-auto section-x">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs font-semibold text-brand dark:text-brand-light uppercase tracking-widest mb-2">Popular</p>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-[-0.02em]">
              엄마들이 많이 찾은 콘텐츠
            </h2>
          </div>
          <Link
            to="/contents/all"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:text-brand dark:hover:text-brand-light transition"
          >
            전체 보기 <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((item, i) => (
            <div key={item.id} className="relative">
              {i < 3 && (
                <div className="absolute -top-2 -left-2 z-10 w-7 h-7 bg-brand dark:bg-brand-light text-white dark:text-bg-dark rounded-full flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </div>
              )}
              <ContentCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 카테고리 탐색 ─────────────────────────────────────────
function CategoryBrowse() {
  const cats = Object.entries(categories).filter(([k]) => k !== 'all')

  return (
    <section className="max-w-container mx-auto section-x py-16 md:py-24">
      <div className="mb-10">
        <p className="text-xs font-semibold text-brand dark:text-brand-light uppercase tracking-widest mb-2">Browse</p>
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-[-0.02em]">
          주제별로 찾아보기
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-2">
          리딩, 문법, 어휘, 파닉스 등 원하는 주제를 선택하세요
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {cats.map(([key, cat]) => (
          <Link
            key={key}
            to={`/contents/${key}`}
            className="group flex items-center gap-4 rounded-2xl bg-surface dark:bg-surface-dark border border-neutral-200/70 dark:border-neutral-800 px-5 py-4 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"
          >
            <span className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 ${catTone[key] || 'bg-neutral-100 text-neutral-500'}`}>
              <CatIcon name={key} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-semibold text-neutral-900 dark:text-neutral-100 text-sm">{cat.label}</span>
              <span className="block text-xs text-neutral-400 dark:text-neutral-500 truncate">{cat.desc}</span>
            </span>
            <span className="text-neutral-300 dark:text-neutral-600 group-hover:text-brand dark:group-hover:text-brand-light group-hover:translate-x-0.5 transition-all" aria-hidden>→</span>
          </Link>
        ))}
      </div>

      <Link
        to="/contents/all"
        className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-3.5 rounded-full transition text-sm md:text-base"
      >
        전체 콘텐츠 보기
      </Link>
    </section>
  )
}

// ── 10분의 1 프로젝트 ────────────────────────────────────
function MissionBand() {
  const items = [
    '아이에게 집에서 영어를 가르쳐보고 싶은 부모',
    '사교육비 부담을 줄이고 싶은 가정',
    '뭐부터 해야 할지 몰라 헤매는 부모',
    '아이 수준에 맞는 자료를 찾고 싶은 가정',
  ]

  return (
    <section className="max-w-container mx-auto section-x py-8 md:py-12">
      <div className="rounded-3xl bg-brand dark:bg-brand-dark px-7 py-12 md:px-16 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="text-white/50 text-xs font-semibold mb-6 uppercase tracking-widest">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-[-0.02em] mb-7">
              10분의 1 프로젝트
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-md">
              {site.mission}
            </p>
          </div>

          <div>
            <p className="text-white/50 text-sm font-medium mb-5 border-b border-white/15 pb-4">
              이런 가정에 잘 맞아요
            </p>
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85 text-sm leading-relaxed">
                  <span className="text-brand-light mt-0.5 shrink-0" aria-hidden>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 후기 작성 CTA (옐로우 피처 카드) ──────────────────────
function ReviewCTA() {
  return (
    <section className="max-w-container mx-auto section-x py-8 md:py-12">
      <div className="rounded-3xl bg-[#EAF3B2] px-7 py-12 md:px-16 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#1E2B4D] leading-tight tracking-[-0.02em] mb-3">
              여러분의 학습 경험을 들려주세요
            </h2>
            <p className="text-[#2E4372] text-sm md:text-base max-w-md">
              후기를 남겨주신 분들 중 매달 3분께 커피쿠폰을 보내드려요.
            </p>
          </div>
          <a
            href={site.contact.form}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-dark text-white font-semibold px-8 py-3.5 rounded-full hover:bg-brand transition text-sm md:text-base shrink-0"
          >
            후기 작성하기
          </a>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="max-w-container mx-auto section-x py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-[-0.02em] mb-10">
        자주 묻는 질문
      </h2>

      <div className="max-w-3xl border-t border-neutral-200 dark:border-neutral-700">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-neutral-200 dark:border-neutral-700">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left text-neutral-900 dark:text-neutral-100 hover:text-brand dark:hover:text-brand-light transition text-sm md:text-base font-medium"
            >
              {faq.q}
              <span className={`text-neutral-400 transition-transform duration-200 ml-4 shrink-0 ${open === i ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>
            {open === i && (
              <div className="pb-5 text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-neutral-400 dark:text-neutral-500">
        더 궁금한 점은{' '}
        <a
          href={site.contact.form}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand dark:text-brand-light underline underline-offset-2 hover:opacity-70 transition"
        >
          문의하기
        </a>
        로 연락 주세요.
      </p>
    </section>
  )
}

export default function Home() {
  usePageTitle()
  return (
    <>
      <Hero />
      <Intro />
      <Top10 />
      <CategoryBrowse />
      <MissionBand />
      <ReviewCTA />
      <FAQ />
    </>
  )
}
