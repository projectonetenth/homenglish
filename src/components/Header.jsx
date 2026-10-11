import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { nav, site } from '../data/site'
import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../contexts/AuthContext'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { dark, toggle } = useTheme()
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const userLabel = user
    ? (user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || '사용자')
    : null

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-surface-dark border-b border-neutral-100 dark:border-neutral-800 transition-colors">
      <div className="mx-auto flex h-14 max-w-container items-center justify-between px-4 md:px-10 lg:px-20">

        {/* 로고 */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/homenglish/homeglish_logo_kr.png"
            alt={`${site.nameKo} ${site.name}`}
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  [
                    'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                    isActive
                      ? 'text-brand dark:text-brand-light bg-brand/5 dark:bg-brand/20'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 우측 버튼들 */}
        <div className="flex items-center gap-2">
          {/* 다크모드 토글 */}
          <button
            type="button"
            aria-label={dark ? '라이트 모드' : '다크 모드'}
            onClick={toggle}
            className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>


          {/* 햄버거 */}
          <button
            type="button"
            aria-label="메뉴"
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden text-neutral-600 dark:text-neutral-300 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            onClick={() => setMobileOpen(true)}
          >
            <span className="h-0.5 w-5 bg-current rounded" />
            <span className="h-0.5 w-5 bg-current rounded" />
            <span className="h-0.5 w-5 bg-current rounded" />
          </button>
        </div>
      </div>

      {/* 모바일 패널 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 overflow-y-auto bg-white dark:bg-surface-dark p-6 shadow-xl transition-colors">
            <div className="mb-6 flex items-center justify-between">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img
                  src="/homenglish/homeglish_logo_kr.png"
                  alt={site.nameKo}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                aria-label="닫기"
                onClick={() => setMobileOpen(false)}
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-1 mb-6">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="block px-3 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-brand dark:hover:text-brand-light hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-neutral-100 dark:border-neutral-700 pt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={toggle}
                className="w-full px-3 py-2.5 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md transition text-left"
              >
                {dark ? '라이트 모드로 전환' : '다크 모드로 전환'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
