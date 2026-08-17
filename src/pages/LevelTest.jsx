// ✅ Tally 링크 받으면 아래 URL만 교체하면 됩니다
const TALLY_URL = null // 예: 'https://tally.so/embed/wgxxxxxx?alignLeft=1&hideTitle=1&transparentBackground=1'

export default function LevelTest() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-bg dark:bg-bg-dark">
      {/* 헤더 */}
      <div className="border-b border-neutral-100 dark:border-neutral-800">
        <div className="max-w-container mx-auto section-x py-10 md:py-14">
          <p className="text-xs font-semibold text-brand dark:text-brand-light uppercase tracking-widest mb-3">
            Level Test
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            영어 레벨 진단 테스트
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base max-w-xl">
            우리 아이의 현재 영어 수준을 파악하고, 맞는 교재와 학습법을 추천받아보세요.
          </p>
        </div>
      </div>

      {/* 테스트 영역 */}
      <div className="max-w-3xl mx-auto section-x py-10">
        {TALLY_URL ? (
          <iframe
            src={TALLY_URL}
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="홈글리시 레벨 진단 테스트"
            className="rounded-xl"
            style={{ minHeight: '600px' }}
          />
        ) : (
          // 링크 받기 전 임시 안내 화면
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 dark:bg-brand/20 flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-brand dark:text-brand-light">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="1" />
                <path d="M9 12h6M9 16h4" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
              레벨 진단 테스트 준비 중
            </h2>
            <p className="text-sm text-neutral-400 dark:text-neutral-500 max-w-sm">
              곧 오픈 예정입니다. 조금만 기다려주세요!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
