import partner1 from '../assets/partner-1.png'
import partner2 from '../assets/partner-2.png'
import partner3 from '../assets/partner-3.png'
import partner4 from '../assets/partner-4.png'
import partner5 from '../assets/partner-5.png'

const partners = [partner1, partner2, partner3, partner4, partner5]

function Partners() {
  return (
    <section className="bg-[#f5f5f6]">
      <div className="mx-auto flex max-w-[1232px] flex-wrap items-center justify-center gap-x-16 gap-y-8 px-4 py-[72px] lg:justify-between lg:gap-0">
        {partners.map((logo, i) => (
          <img key={i} src={logo} alt="Partner logo" className="h-[60px]" />
        ))}
      </div>
    </section>
  )
}

export default Partners
