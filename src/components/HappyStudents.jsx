import avatars from '../assets/avatars-students.png'
import { StarIcon } from './Icons'

function HappyStudents({ className = '' }) {
  return (
    <div className={`rounded-2xl bg-white p-4 ${className}`}>
      <p className="text-[17px]">Happy Students</p>
      <p className="flex items-center gap-1 text-[12px]">
        4.5 <span className="text-muted">(240)</span>
        <StarIcon className="h-4 w-4 text-accent" />
      </p>
      <div className="mt-2 flex items-center">
        <img src={avatars} alt="" className="h-[47px]" />
        <span className="-ml-3 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-accent text-[13px] font-medium">
          2K+
        </span>
      </div>
    </div>
  )
}

export default HappyStudents
