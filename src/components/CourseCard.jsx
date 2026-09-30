import avatars from '../assets/avatars-small.png'
import { LevelIcon, StarIcon } from './Icons'

function CourseCard({ course, className = '' }) {
  return (
    <div className={`rounded-3xl border border-[#d9d9d9] bg-white p-4 ${className}`}>
      <div className="relative overflow-hidden rounded-2xl">
        <img src={course.image} alt={course.title} className="h-[195px] w-full rounded-2xl object-cover" />
        <div className="absolute bottom-4 left-3 flex gap-2 whitespace-nowrap text-[13px] text-dark/70">
          <span className="rounded-full bg-white/60 px-3 py-1 backdrop-blur">17 Lessons</span>
          <span className="rounded-full bg-white/60 px-3 py-1 backdrop-blur">2 hours 16 mins</span>
          <span className="rounded-full bg-white/60 px-3 py-1 backdrop-blur">59 Comments</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <h3 className="truncate font-heading text-[20px] font-semibold leading-tight">{course.title}</h3>
        <span className="flex shrink-0 items-center gap-1 text-[18px] text-muted">
          4.5 <StarIcon className="h-5 w-5 text-[#c4c4c4]" />
        </span>
      </div>
      <p className="text-[14px] text-muted">
        by <span className="text-primary">purepearl studio</span>
      </p>

      <div className="mt-3 flex items-center gap-3">
        <span className="flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-[14px] text-dark/80">
          <LevelIcon className="h-4 w-4" /> Beginner
        </span>
        <div className="flex items-center">
          <img src={avatars} alt="" className="h-[35px]" />
          <span className="-ml-2 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-accent text-[12px] font-medium">
            26+
          </span>
        </div>
      </div>

      <p className="mt-2">
        <span className="text-[20px] font-semibold text-primary">$25</span>
        <span className="text-[12px] text-muted">/lifetime</span>
      </p>
    </div>
  )
}

export default CourseCard
