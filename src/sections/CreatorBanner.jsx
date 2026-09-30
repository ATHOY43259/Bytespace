import { Link } from 'react-router-dom'
import limeSquiggle from '../assets/shape-lime-squiggle.png'
import whiteSquiggle from '../assets/shape-white-squiggle.png'
import limeCone from '../assets/shape-lime-cone.png'
import whiteCylinder from '../assets/shape-white-cylinder.png'
import whiteCone from '../assets/shape-white-cone-2.png'
import limeRing from '../assets/shape-lime-ring.png'
import limeSquiggle2 from '../assets/shape-lime-squiggle-2.png'

function CreatorBanner() {
  return (
    <section className="grid-bg relative overflow-hidden">
      <div className="hidden lg:block">
        <img src={limeSquiggle} alt="" className="absolute -top-[120px] left-0 w-[200px]" />
        <img src={whiteSquiggle} alt="" className="absolute left-[210px] top-[32px] w-[126px]" />
        <img src={whiteCone} alt="" className="absolute left-0 top-[242px] w-[150px]" />
        <img src={limeRing} alt="" className="absolute bottom-0 left-[65px] w-[250px]" />
        <img src={limeCone} alt="" className="absolute right-[203px] top-[15px] w-[137px]" />
        <img src={whiteCylinder} alt="" className="absolute right-0 top-[35px] w-[175px]" />
        <img src={limeSquiggle2} alt="" className="absolute bottom-0 right-[63px] w-[204px]" />
      </div>

      <div className="relative mx-auto max-w-[980px] px-4 py-20 text-center text-white lg:pb-[70px] lg:pt-[90px]">
        <h2 className="font-heading text-[30px] font-semibold leading-[1.25] sm:text-[43px]">
          Unlock Your Potential as a <br className="hidden sm:block" />
          Creator with ByteSpace
        </h2>
        <p className="mt-10 text-[16px] font-light leading-[1.6] sm:text-[18px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link to="/register" className="mt-10 inline-block rounded-full bg-accent px-6 py-3 text-[18px] text-dark">
          Join as Creator
        </Link>
      </div>
    </section>
  )
}

export default CreatorBanner
