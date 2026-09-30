import { useState } from 'react'
import CourseCard from '../components/CourseCard'
import { courses, topicRows } from '../data'

function Courses() {
  const [active, setActive] = useState('Featured')

  return (
    <section id="courses" className="mx-auto max-w-[1232px] px-4 pt-[74px]">
      <h2 className="text-center font-heading text-[30px] font-semibold leading-[1.25] sm:text-[43px]">
        Discover Your Passion, <br className="hidden sm:block" />
        Build Your Skills
      </h2>
      <p className="mx-auto mt-4 max-w-[920px] text-center text-[16px] leading-[1.6] text-muted sm:text-[17px]">
        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
        different fields, from technology to the arts, and make a difference in your career and life.
      </p>

      <div className="mt-10 flex flex-col gap-5">
        {topicRows.map((row, i) => (
          <div key={i} className="flex flex-wrap justify-center gap-x-4 gap-y-5">
            {row.map((topic) => (
              <button
                key={topic}
                onClick={() => setActive(topic)}
                className={`rounded-full px-4 py-2.5 text-[16px] ${
                  active === topic ? 'bg-accent text-dark' : 'bg-soft text-[#4b4c53] hover:bg-[#e8e8e8]'
                }`}
              >
                {topic}
              </button>
            ))}
            {i === topicRows.length - 1 && <button className="px-1 text-[16px] text-primary">+ More</button>}
          </div>
        ))}
      </div>

      <div className="mt-[78px] grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

export default Courses
