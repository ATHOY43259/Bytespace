import { Link } from 'react-router-dom'
import logo from '../assets/logo-mark.png'
import illustration from '../assets/auth-illustration.png'

// shared blue layout for the login and register pages
function AuthLayout({ title, text, children }) {
  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto grid max-w-[1232px] items-start gap-12 px-4 py-8 lg:grid-cols-[1fr_579px] lg:gap-10 lg:py-[30px]">
        <div className="text-white">
          <Link to="/">
            <img src={logo} alt="ByteSpace" className="h-[45px]" />
          </Link>
          <h2 className="mt-10 font-heading text-[20px] font-semibold">{title}</h2>
          <p className="mt-4 max-w-[440px] text-[16px] font-light leading-[1.75] lg:min-h-[84px]">{text}</p>
          <img src={illustration} alt="" className="mt-[54px] hidden w-[502px] lg:block" />
        </div>

        <div className="flex flex-col rounded-[24px] bg-white px-6 pb-[45px] pt-12 sm:px-[60px] lg:mt-[90px] lg:min-h-[783px] lg:pt-[62px]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
