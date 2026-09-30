import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import FormInput from '../components/FormInput'

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Welcome, ${form.name}!`)
  }

  return (
    <AuthLayout
      title="Sign up and come in"
      text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <p className="text-[18px] text-primary">Create an Account</p>
      <h1 className="font-heading text-[36px] font-semibold leading-[1.2] sm:text-[44px]">
        Welcome to <br />
        ByteSpace
      </h1>

      <form onSubmit={handleSubmit} className="mt-[35px] space-y-[14px]">
        <FormInput label="Full Name" name="name" placeholder="Jamie Davis" value={form.name} onChange={handleChange} />
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="designer@example.com"
          value={form.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="********"
          value={form.password}
          onChange={handleChange}
        />
        <div className="flex justify-end">
          <button className="h-[46px] rounded-full bg-accent px-6 text-[18px]">Continue</button>
        </div>
      </form>

      <p className="mt-auto pt-10 text-center text-[16px] text-muted">
        Already have an account?{' '}
        <Link to="/login" className="text-primary">
          Login
        </Link>
      </p>
    </AuthLayout>
  )
}

export default Register
