import { useEffect } from 'react'

const BASE = '홈글리시 homenglish'
const DEFAULT_TITLE = `${BASE} · 아이들 영어교육 콘텐츠`

// 페이지별로 브라우저 탭 제목을 설정한다.
// GA(Analytics.jsx)가 page_view를 보낼 때 이 제목을 함께 전송하므로,
// GA 보고서에서 경로(ID) 대신 사람이 읽을 수 있는 제목으로 구분된다.
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${BASE}` : DEFAULT_TITLE
  }, [title])
}
