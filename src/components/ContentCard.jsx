import { Link } from 'react-router-dom'
import { categories, grades } from '../data/site'

export default function ContentCard({ item }) {
  const cat = categories[item.category]
  const grade = grades[item.grade] || grades.all
  const gradeLabel = item.gradeShort || grade.label

  return (
    <Link
      to={`/content/${item.id}`}
      className="group flex flex-col bg-white dark:bg-surface-dark border border-neutral-100 dark:border-neutral-700 rounded-xl overflow-hidden transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-500 hover:-translate-y-0.5"
    >
      {/* 썸네일 */}
      <div className="relative h-40 overflow-hidden shrink-0 bg-neutral-50 dark:bg-neutral-800">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-neutral-300 dark:text-neutral-600">
            {cat?.emoji || '📚'}
          </div>
        )}

        {/* 무료 배지 */}
        {item.types.includes('free') && (
          <span className="absolute top-3 left-3 text-[11px] font-semibold px-2 py-0.5 rounded bg-palette-mint text-emerald-800">
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
