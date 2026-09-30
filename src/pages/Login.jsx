import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import FormInput from '../components/FormInput'
import facebook from '../assets/icon-facebook.png'
import google from '../assets/icon-google.png'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Signed in as ${email}`)
  }

  return (
    <AuthLayout
      title="Sign in with ease"
      text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <p className="text-[18px] text-primary">Sign In</p>
      <h1 className="font-heading text-[36px] font-semibold sm:text-[44px]">Welcome Back</h1>

      <form onSubmit={handleSubmit} className="mt-[26px] space-y-[14px]">
        <FormInput
          label="Email"
          type="email"
          placeholder="designer@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Password"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-end">
          <button className="h-[46px] rounded-full bg-accent px-6 text-[18px]">Sign In</button>
        </div>
      </form>

      <div className="mt-20 flex items-center gap-4 text-[16px] text-muted">
        <span className="h-px flex-1 bg-[#cccccc]" />
        or
        <span className="h-px flex-1 bg-[#cccccc]" />
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <button className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-[#d6d6d6]">
          <img src={facebook} alt="Facebook" className="h-9 w-9" />
        </button>
        <button className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-[#d6d6d6]">
          <img src={google} alt="Google" className="h-9 w-9" />
        </button>
      </div>

      <p className="mt-auto pt-10 text-center text-[16px] text-muted">
        New user?{' '}
        <Link to="/register" className="text-primary">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  )
}

export default Login
