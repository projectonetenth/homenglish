import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 해시 라우터는 라우트 이동 시 GA가 자동으로 페이지뷰를 잡지 못하므로
// location 변경마다 page_view 이벤트를 수동으로 전송한다.
export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag !== 'function') return
    const path = location.pathname + location.search
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [location.pathname, location.search])

  return null
}
