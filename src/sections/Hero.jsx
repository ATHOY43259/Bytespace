import Navbar from '../components/Navbar'
import HappyStudents from '../components/HappyStudents'
import { SearchIcon } from '../components/Icons'

import man from '../assets/hero-man-clean.png'
import limeSquiggle from '../assets/shape-lime-squiggle.png'
import whiteSquiggle from '../assets/shape-white-squiggle.png'
import limeCylinder from '../assets/shape-lime-cylinder.png'
import whiteCone from '../assets/shape-white-cone.png'
import whiteRing from '../assets/shape-white-ring.png'
import whiteSquiggle2 from '../assets/shape-white-squiggle-2.png'

function Hero() {
  return (
    <section className="grid-bg relative overflow-hidden">
      {/* 3d shapes around the hero */}
      <div className="hidden lg:block">
        <img src={limeSquiggle} alt="" className="absolute left-0 top-[280px] w-[200px]" />
        <img src={whiteSquiggle} alt="" className="absolute left-[210px] top-[500px] w-[126px]" />
        <img src={limeCylinder} alt="" className="absolute right-0 top-[250px] w-[170px]" />
        <img src={whiteCone} alt="" className="absolute right-[178px] top-[480px] w-[137px]" />
        <img src={whiteRing} alt="" className="absolute left-[60px] top-[735px] z-10 w-[250px]" />
        <img src={whiteSquiggle2} alt="" className="absolute right-[45px] top-[705px] z-10 w-[205px]" />
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto max-w-[900px] px-4 pt-10 text-center text-white md:pt-[52px]">
        <h1 className="font-heading text-[40px] font-semibold leading-[1.2] sm:text-[56px] lg:text-[70px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-8 text-[16px] font-light sm:text-[18px] md:mt-[36px]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form className="mx-auto mt-10 flex max-w-[580px] gap-4 md:mt-[56px]" onSubmit={(e) => e.preventDefault()}>
          <div className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-6">
            <SearchIcon className="h-5 w-5 shrink-0 text-muted" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full text-[18px] text-dark outline-none placeholder:text-[#9a9a9a]"
            />
          </div>
          <button className="h-[46px] self-center rounded-full bg-accent px-6 text-[18px] text-dark">Search</button>
        </form>
      </div>

      {/* person on the lime circle */}
      <div className="relative mx-auto mt-[27px] h-[340px] max-w-[1440px] sm:h-[485px]">
        <div className="absolute left-1/2 top-[50px] h-[1156px] w-[1156px] -translate-x-1/2 rounded-full bg-[#cbfc01]" />
        <div className="absolute left-1/2 top-[315px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary" />
        <img
          src={man}
          alt="Student with laptop"
          className="absolute -bottom-1 left-1/2 w-[330px] max-w-none -translate-x-[144px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.2)] sm:w-[515px] sm:-translate-x-[225px]"
        />

        <div className="absolute left-1/2 top-[103px] hidden -translate-x-[316px] rounded-2xl bg-white px-4 py-3 md:block">
          <p className="text-[17px]">UI/UX Design</p>
          <p className="text-[12px] text-muted">200 Courses &nbsp;•&nbsp; 1000+ Students</p>
        </div>

        <div className="absolute left-1/2 top-[115px] hidden w-[232px] translate-x-[122px] rounded-2xl bg-white p-4 pb-5 md:block">
          <p className="text-[14px]">Learning Progress</p>
          <p className="mt-2 font-heading text-[48px] font-medium leading-none">55%</p>
          <div className="mt-5 h-2 rounded-full bg-[#eeeeee]">
            <div className="h-2 w-[55%] rounded-full bg-accent" />
          </div>
        </div>

        <HappyStudents className="absolute left-1/2 top-[302px] hidden -translate-x-[392px] md:block" />
      </div>
    </section>
  )
}

export default Hero
