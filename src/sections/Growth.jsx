import CourseCard from '../components/CourseCard'
import HappyStudents from '../components/HappyStudents'
import { CheckIcon } from '../components/Icons'
import { courses } from '../data'

import man from '../assets/growth-man.png'
import woman from '../assets/creator-woman.png'
import spring from '../assets/shape-lime-spring.png'
import spring2 from '../assets/shape-lime-spring-2.png'

const stats = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
]

const features = ['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community']

function Growth() {
  return (
    <section
      id="creators"
      className="overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 28% 8%, #e4fb8f 0%, transparent 22%), radial-gradient(circle at 0% 42%, #cdd6f7 0%, transparent 25%), radial-gradient(circle at 0% 88%, #ecfbb8 0%, transparent 22%), radial-gradient(circle at 92% 90%, #d6ddf7 0%, transparent 25%), #f9f9f9',
      }}
    >
      <div className="mx-auto max-w-[1232px] px-4 py-[120px]">
        {/* row 1 */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-[30px] font-semibold leading-[1.25] sm:text-[43px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-8 max-w-[480px] text-[16px] leading-[1.7] text-muted sm:text-[17px]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>

            <div className="mt-12 flex gap-14">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="text-[36px] leading-none text-primary">{item.value}</p>
                  <p className="mt-2 text-[18px] text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-[310px] justify-center sm:h-[550px]">
            <div className="relative h-[550px] w-[582px] shrink-0 origin-top scale-[0.55] sm:scale-100">
              <CourseCard course={courses[0]} className="absolute left-0 top-0 w-[372px]" />
              <img
                src={man}
                alt="Student learning online"
                className="absolute bottom-0 left-[-55px] w-[768px] max-w-none"
              />
              <div className="absolute left-[345px] top-[215px] w-[232px] rounded-2xl bg-white p-4 pb-5">
                <p className="text-[14px]">Learning Progress</p>
                <p className="mt-2 font-heading text-[48px] font-medium leading-none">55%</p>
                <div className="mt-5 h-2 rounded-full bg-[#eeeeee]">
                  <div className="h-2 w-[55%] rounded-full bg-accent" />
                </div>
              </div>
              <img src={spring} alt="" className="absolute left-[451px] top-[92px] w-[124px]" />
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div className="mt-[100px] grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="order-2 flex h-[320px] justify-center sm:h-[575px] lg:order-1 lg:justify-start">
            <div className="relative h-[575px] w-[541px] shrink-0 origin-top scale-[0.55] sm:scale-100">
              <div className="absolute left-0 top-[18px] w-[224px] rounded-2xl bg-primary p-4 text-white">
                <p className="text-[17px]">Total Revenue</p>
                <p className="text-[10px]">July 1-28</p>
                <p className="mt-2 text-[24px] font-semibold">$120.29</p>
                <div className="mt-2 h-2 rounded-full bg-white">
                  <div className="h-2 w-[75%] rounded-full bg-accent" />
                </div>
              </div>

              <div className="absolute left-0 top-[168px] w-[134px] rounded-2xl bg-primary p-4 text-white">
                <p className="text-[17px]">Year to Date</p>
                <p className="text-[10px]">2023</p>
                <p className="mt-2 text-[24px] font-semibold">$1,200.38</p>
                <span className="mt-2 inline-block rounded-full bg-accent px-2 py-1 text-[10px] text-dark">+12$</span>
              </div>

              <img
                src={woman}
                alt="Course creator"
                className="absolute left-[44px] top-0 w-[465px] max-w-none drop-shadow-[0_30px_30px_rgba(0,0,0,0.2)]"
              />
              <img src={spring2} alt="" className="absolute left-[335px] top-[112px] w-[160px]" />
              <HappyStudents className="absolute left-[283px] top-[387px]" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-[30px] font-semibold leading-[1.25] sm:text-[43px]">
              Create & Manage <br className="hidden sm:block" />
              Courses Easily.
            </h2>
            <p className="mt-8 max-w-[560px] text-[16px] leading-[1.7] text-muted sm:text-[17px]">
              <span className="font-medium text-dark">ByteSpace</span> supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <ul className="mt-10 space-y-3">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[18px]">
                  <CheckIcon className="h-6 w-6 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Growth
