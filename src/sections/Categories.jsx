import { categories } from '../data'

function Categories() {
  return (
    <section className="mx-auto max-w-[1232px] px-4 pb-[120px] pt-[74px]">
      <h2 className="text-center font-heading text-[28px] font-semibold leading-[1.25] sm:text-[35px]">
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className="mx-auto mt-5 max-w-[920px] text-center text-[16px] leading-[1.6] text-muted sm:text-[17px]">
        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various
        fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated
        categories.
      </p>

      <div className="mt-[55px] grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
        {categories.map((item) => (
          <a
            key={item.name}
            href="#"
            className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-[#cfcfcf] transition hover:border-primary"
          >
            <img src={item.icon} alt="" className="h-16 w-16" />
            <span className="text-[18px] sm:text-[19px]">{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Categories
