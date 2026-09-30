import logo from '../assets/logo-dark.png'
import { footerLinks } from '../data'

function Footer() {
  return (
    <footer className="border-t border-[#ced0d3] bg-white">
      <div className="mx-auto max-w-[1232px] px-4">
        <div className="grid gap-12 pb-16 pt-[70px] lg:grid-cols-2 lg:pb-[120px]">
          <div>
            <img src={logo} alt="ByteSpace" className="h-[45px]" />
            <p className="mt-3 text-[14px]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className="mt-10 flex flex-col gap-6 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[52px] w-full rounded-full border border-[#bfbfbf] px-6 text-[17px] outline-none focus:border-primary sm:w-[376px]"
              />
              <button className="h-[46px] self-center rounded-full bg-accent px-6 text-[18px] sm:self-auto">
                Search
              </button>
            </form>

            <p className="mt-8 max-w-[470px] text-[12px] leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-8 text-[14px] sm:grid-cols-3 lg:pt-[50px]">
            {footerLinks.map((column, i) => (
              <ul key={i} className="space-y-4">
                {column.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#ced0d3] py-7 text-[12px] sm:flex-row sm:items-center sm:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
