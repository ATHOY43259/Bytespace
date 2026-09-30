import { testimonials } from '../data'

function Testimonials() {
  return (
    <section
      style={{
        background:
          'radial-gradient(circle at 45% 25%, #eafba6 0%, transparent 25%), radial-gradient(circle at 100% 70%, #eefbc2 0%, transparent 30%), radial-gradient(circle at 5% 95%, #c9d3f5 0%, transparent 25%), #f8f8f8',
      }}
    >
      <div className="mx-auto max-w-[1232px] px-4 pb-[60px] pt-[80px]">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <h2 className="font-heading text-[30px] font-semibold leading-[1.25] sm:text-[43px]">
            Discover What Our <br className="hidden sm:block" />
            Community Is Saying
          </h2>
          <p className="text-[16px] leading-[1.6] text-muted sm:text-[18px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-[76px] grid items-start gap-10 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl bg-white p-6">
              <img src={item.photo} alt={item.name} className="h-20 w-20 rounded-full object-cover" />
              <h3 className="mt-6 font-heading text-[20px] font-semibold">{item.name}</h3>
              <p className="text-[18px] text-primary">{item.role}</p>
              <p className="mt-6 text-[18px] leading-[1.6] text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
