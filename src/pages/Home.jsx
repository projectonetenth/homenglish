import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, faqs, site } from '../data/site'
import { useSheetData } from '../hooks/useSheetData'
import ContentCard from '../components/ContentCard'

// ── 히어로 ────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-bg dark:bg-bg-dark border-b border-neutral-100 dark:border-neutral-800">
      <div className="w-full max-w-container mx-auto section-x py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl lg:text-[88px] font-bold text-brand dark:text-neutral-100 leading-[1.1] mb-10">
          가정 영어 학습의<br />
          첫 걸음,{' '}
          <span className="text-accent dark:text-accent-light">홈글리시</span>
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg max-w-xs leading-relaxed">
            영어 가정학습 선배맘과 후배맘의
            상부상조 커뮤니티 플랫폼
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contents/all"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition shadow-sm text-sm"
            >
              콘텐츠 둘러보기
            </Link>
            <Link
              to="/level-test"
              className="inline-flex items-center border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-medium px-6 py-3 rounded-lg hover:border-brand dark:hover:border-brand-light hover:text-brand dark:hover:text-brand-light transition text-sm"
            >
              레벨테스트
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 홈글리시 소개 ─────────────────────────────────────────
function Intro() {
  const features = [
    {
      num: '01',
      title: '검증된 영어 자료',
      desc: '선배맘들이 직접 써본 교재와 앱을 엄선해 소개합니다.',
    },
    {
      num: '02',
      title: '선배맘 노하우',
      desc: '엄마표 영어를 성공적으로 실천한 부모들의 실제 후기를 확인하세요.',
    },
    {
      num: '03',
      title: '레벨별 가이드',
      desc: '아이 수준에 맞는 자료와 학습 순서를 단계별로 안내합니다.',
    },
    {
      num: '04',
      title: '사교육비 절감',
      desc: '10분의 1 프로젝트 — 사교육비 부담 없이 가정에서 영어를 완성합니다.',
    },
  ]

  return (
    <section className="max-w-container mx-auto section-x py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 leading-snug mb-6">
            부모와 아이가 함께하는{' '}
            <span className="text-brand dark:text-brand-light">영어 가정학습의 모든 것</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed mb-8">
            사교육비 걱정 없이, 집에서도 충분히 영어를 잘 할 수 있어요.
            홈글리시에서 우리 아이에게 딱 맞는 콘텐츠를 찾아보세요.
          </p>
          <Link
            to="/about"
            className="text-sm font-semibold text-brand dark:text-brand-light underline underline-offset-4 hover:opacity-70 transition"
          >
            홈글리시 더 알아보기
</Link>
        </div>

        <div className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800">
          {features.map((f) => (
            <div key={f.num} className="flex gap-5 py-5 first:pt-0 last:pb-0">
              <span className="text-xs font-bold text-neutral-300 dark:text-neutral-600 mt-0.5 w-6 shrink-0 tabular-nums">
                {f.num}
              </span>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">{f.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p>
              </div>
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
        <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4 border-b border-neutral-200 dark:border-neutral-700 pb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100">
            선호도 높은 콘텐츠{' '}
            <span className="text-brand dark:text-brand-light">Top 10</span>
          </h2>
          <Link
            to="/contents/all"
            className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-brand dark:hover:text-brand-light transition"
          >
            전체 보기
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((item, i) => (
            <div key={item.id} className="relative">
              {i < 3 && (
                <div className="absolute -top-2 -left-2 z-10 w-7 h-7 bg-brand dark:bg-brand-light text-white dark:text-bg-dark rounded-md flex items-center justify-center text-xs font-bold shadow-sm">
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
  const colorBg = {
    peach: 'bg-palette-peach hover:bg-palette-hover-peach',
    yellow: 'bg-palette-yellow hover:bg-palette-hover-yellow',
    mint: 'bg-palette-mint hover:bg-palette-hover-mint',
    blue: 'bg-palette-blue hover:bg-palette-hover-blue',
  }

  return (
    <section className="max-w-container mx-auto section-x py-16 md:py-24">
      <div className="flex items-baseline gap-6 border-b border-neutral-200 dark:border-neutral-700 pb-5 mb-8 flex-wrap">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100">
          주제별 탐색
        </h2>
        <p className="text-neutral-400 dark:text-neutral-500 text-sm">
          리딩, 문법, 어휘, 파닉스 등 원하는 주제를 선택하세요
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
        {cats.map(([key, cat]) => (
          <Link
            key={key}
            to={`/contents/${key}`}
            className={[
              'flex flex-col items-center gap-2 p-4 rounded-xl transition font-semibold text-neutral-800 shadow-warm',
              colorBg[cat.color] || 'bg-palette-blue hover:bg-palette-hover-blue',
            ].join(' ')}
          >
            <span className="text-3xl">{cat.emoji}</span>
            <span className="text-xs md:text-sm text-center leading-tight">{cat.label}</span>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/contents/all"
          className="inline-flex items-center gap-2 bg-brand dark:bg-brand-light text-white dark:text-bg-dark font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition shadow-sm text-sm md:text-base"
        >
          전체 콘텐츠 보기
        </Link>
      </div>
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
    <section className="bg-brand dark:bg-brand-dark py-16 md:py-24 transition-colors">
      <div className="max-w-container mx-auto section-x">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="text-white/40 text-xs font-medium mb-6 uppercase tracking-widest">
              임팩트닷 커리어 프로젝트 선정
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
              10분의 1<br />프로젝트
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              {site.mission}
            </p>
          </div>

          <div>
            <p className="text-white/50 text-sm font-medium mb-6 border-b border-white/10 pb-4">
              이런 가정에 잘 맞아요
            </p>
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-4 text-white/80 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-light mt-2 shrink-0" />
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

// ── 후기 작성 CTA ─────────────────────────────────────────
function ReviewCTA() {
  return (
    <section className="bg-surface-2 dark:bg-surface-2dark py-16 md:py-20 transition-colors">
      <div className="max-w-container mx-auto section-x">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">
              여러분의 학습 경험을 들려주세요
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base max-w-md">
              학습 경험을 남기신 분들 중 매달 3분께 커피쿠폰을 보내드려요.
            </p>
          </div>
          <a
            href={site.contact.notion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand dark:bg-brand-light text-white dark:text-bg-dark font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition shadow-sm text-sm md:text-base shrink-0"
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
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-10">
        자주 묻는 질문
      </h2>

      <div className="max-w-3xl border-t border-neutral-200 dark:border-neutral-700">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border-b border-neutral-200 dark:border-neutral-700"
          >
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left text-neutral-800 dark:text-neutral-100 hover:text-brand dark:hover:text-brand-light transition text-sm md:text-base font-medium"
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
          href={`mailto:${site.contact.email}`}
          className="text-brand dark:text-brand-light underline underline-offset-2 hover:opacity-70 transition"
        >
          {site.contact.email}
        </a>
        로 연락 주세요.
      </p>
    </section>
  )
}

export default function Home() {
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
