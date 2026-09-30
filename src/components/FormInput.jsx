function FormInput({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-[14px]">{label}</span>
      <input
        {...props}
        required
        className="mt-3 h-[50px] w-full rounded-xl border border-[#d6d6d6] px-5 text-[17px] outline-none placeholder:text-[#9a9a9a] focus:border-primary"
      />
    </label>
  )
}

export default FormInput
