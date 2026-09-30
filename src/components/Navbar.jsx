import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-white.png'
import { BagIcon, MenuIcon } from './Icons'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 mx-auto max-w-[1232px] px-4">
      <div className="flex h-[120px] items-center justify-between">
        <Link to="/">
          <img src={logo} alt="ByteSpace" className="-mt-3 h-[45px]" />
        </Link>

        <nav className="hidden items-center gap-6 text-[16px] text-white md:flex">
          <a href="#" className="font-medium">
            Home
          </a>
          <a href="#courses" className="font-light">
            Courses
          </a>
          <a href="#creators" className="font-light">
            Creators
          </a>
        </nav>

        <div className="hidden items-center gap-6 text-[16px] font-light text-white md:flex">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Join Us</Link>
          <button aria-label="Cart">
            <BagIcon className="h-6 w-6" />
          </button>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <div className="mb-4 flex flex-col gap-3 rounded-2xl bg-white p-5 md:hidden">
          <a href="#">Home</a>
          <a href="#courses">Courses</a>
          <a href="#creators">Creators</a>
          <Link to="/login">Sign In</Link>
          <Link to="/register">Join Us</Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
