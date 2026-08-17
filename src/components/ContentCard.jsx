import { Link } from 'react-router-dom'
import { categories, grades } from '../data/site'

const catBg = {
  mint:  'bg-palette-mint/70 dark:bg-palette-mint/10',
  yellow:'bg-palette-yellow/70 dark:bg-palette-yellow/10',
  peach: 'bg-palette-peach/70 dark:bg-palette-peach/10',
  blue:  'bg-palette-blue/70 dark:bg-palette-blue/10',
}

const catText = {
  mint:  'text-emerald-700 dark:text-emerald-400',
  yellow:'text-amber-700 dark:text-amber-400',
  peach: 'text-orange-700 dark:text-orange-400',
  blue:  'text-blue-700 dark:text-blue-400',
}

export default function ContentCard({ item }) {
  const cat = categories[item.category]
  const grade = grades[item.grade] || grades.all
  const gradeLabel = item.gradeShort || grade.label

  const bg = catBg[cat?.color] ?? 'bg-neutral-100 dark:bg-neutral-800'
  const tc = catText[cat?.color] ?? 'text-neutral-500 dark:text-neutral-400'

  return (
    <Link
      to={`/content/${item.id}`}
      className="group flex flex-col bg-white dark:bg-surface-dark border border-neutral-100 dark:border-neutral-800 rounded-xl overflow-hidden transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-600 hover:-translate-y-0.5"
    >
      {/* 썸네일 */}
      <div className={`relative h-40 overflow-hidden shrink-0 ${!item.image ? bg : 'bg-neutral-50 dark:bg-neutral-800'}`}>
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className={`text-4xl font-bold tracking-tight ${tc} opacity-25 select-none`}>
              {cat?.label ?? 'English'}
            </span>
          </div>
        )}

        {/* 무료 배지 */}
        {item.types.includes('free') && (
          <span className="absolute top-3 left-3 text-[11px] font-semibold px-2 py-0.5 rounded bg-white/90 dark:bg-neutral-900/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            무료
          </span>
        )}
      </div>

      {/* 본문 */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <div className="flex items-center gap-2 text-[11px] text-neutral-400 dark:text-neutral-500">
          <span>{cat?.label}</span>
          {gradeLabel && (
            <>
              <span>·</span>
              <span>{gradeLabel}</span>
            </>
          )}
        </div>
        <h3 className="text-sm font-semibold leading-snug text-neutral-800 dark:text-neutral-100 line-clamp-2 group-hover:text-brand dark:group-hover:text-brand-light transition-colors">
          {item.title}
        </h3>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 line-clamp-2 leading-relaxed flex-1">
          {item.description}
        </p>
      </div>
    </Link>
  )
}
