import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './pages/Home'
import Contents from './pages/Contents'
import ContentDetail from './pages/ContentDetail'
import About from './pages/About'
import SimplePage from './pages/SimplePage'
import LevelTest from './pages/LevelTest'

export default function App() {
  return (
    <div className="min-w-[320px] flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 주제별 콘텐츠 */}
          <Route path="/contents" element={<Navigate to="/contents/all" replace />} />
          <Route path="/contents/:category" element={<Contents mode="category" />} />

          {/* 유형별 콘텐츠 */}
          <Route path="/types" element={<Navigate to="/types/free" replace />} />
          <Route path="/types/:type" element={<Contents mode="type" />} />

          {/* 콘텐츠 상세 */}
          <Route path="/content/:id" element={<ContentDetail />} />

          {/* 소개 / 기타 */}
          <Route path="/about" element={<About />} />
          <Route path="/level-test" element={<LevelTest />} />
          <Route path="/guide" element={<SimplePage title="이용안내" />} />
          <Route path="/privacy" element={<SimplePage title="개인정보처리방침" />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
