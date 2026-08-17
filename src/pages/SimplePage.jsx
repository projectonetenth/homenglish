import { Link } from 'react-router-dom'
import { site } from '../data/site'

const FORM = site.contact.form

const content = {
  '이용안내': {
    sections: [
      {
        title: '홈글리시란?',
        body: '홈글리시는 영어 가정학습 선배맘과 후배맘의 상부상조 커뮤니티 플랫폼입니다. 사교육비 부담 없이 집에서도 영어를 완성할 수 있도록 검증된 콘텐츠와 노하우를 제공합니다.',
      },
      {
        title: '콘텐츠 이용 방법',
        body: '상단 메뉴의 콘텐츠에서 주제별(리딩, 문법, 어휘 등) 또는 유형별(무료, 유료, 교재 등)로 원하는 자료를 탐색할 수 있습니다. 각 콘텐츠 카드를 클릭하면 상세 정보와 구매처를 확인할 수 있어요.',
      },
      {
        title: '레벨 진단 테스트',
        body: '우리 아이의 현재 영어 수준을 파악하고 싶다면 레벨 진단 테스트를 이용해 보세요. 테스트 결과에 따라 적합한 교재와 학습 순서를 추천해 드립니다.',
      },
      {
        title: '커뮤니티 이용',
        body: '자유게시판과 Q&A 게시판에서 다른 학부모님들과 경험을 나눌 수 있습니다. 게시글 작성은 로그인 후 이용하실 수 있어요.',
      },
      {
        title: '문의',
        body: '궁금한 점이나 불편한 점은 아래 문의 폼을 이용해 주세요. 빠르게 답변해 드리겠습니다.',
      },
    ],
  },
  '개인정보처리방침': {
    sections: [
      {
        title: '수집하는 개인정보',
        body: '홈글리시는 서비스 제공을 위해 이메일 주소를 수집합니다. 로그인 시 이메일과 비밀번호가 사용되며, Supabase를 통해 안전하게 관리됩니다.',
      },
      {
        title: '개인정보 이용 목적',
        body: '수집된 개인정보는 회원 가입 및 관리, 서비스 제공, 고지사항 전달 등의 목적으로만 사용됩니다.',
      },
      {
        title: '개인정보 보유 기간',
        body: '회원 탈퇴 시까지 보유하며, 탈퇴 후에는 즉시 파기합니다. 단, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.',
      },
      {
        title: '제3자 제공',
        body: '홈글리시는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.',
      },
      {
        title: '문의',
        body: '개인정보 처리에 관한 문의는 아래 문의 폼을 이용해 주세요.',
      },
    ],
  },
}

export default function SimplePage({ title }) {
  const page = content[title]

  if (!page) {
    return (
      <div className="max-w-container mx-auto section-x py-24 text-center">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">{title}</h1>
        <p className="text-neutral-500 dark:text-neutral-400 mb-8">이 페이지는 준비 중입니다.</p>
        <Link to="/" className="inline-flex items-center bg-brand text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition">
          홈으로
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-bg dark:bg-bg-dark">
      <div className="border-b border-neutral-100 dark:border-neutral-800">
        <div className="max-w-container mx-auto section-x py-10 md:py-14">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100">
            {title}
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto section-x py-12 md:py-16">
        <div className="space-y-10">
          {page.sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-base font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                {s.title}
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-700 flex items-center gap-6">
          <a
            href={site.contact.form}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-brand hover:bg-brand-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg transition shadow-sm"
          >
            문의하기
          </a>
          <Link to="/" className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-brand dark:hover:text-brand-light transition">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}
