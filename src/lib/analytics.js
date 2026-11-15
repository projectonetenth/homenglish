// GA4 커스텀 이벤트 전송 헬퍼.
// gtag가 아직 로드되지 않았거나 차단된 경우 조용히 무시한다.
export function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}
