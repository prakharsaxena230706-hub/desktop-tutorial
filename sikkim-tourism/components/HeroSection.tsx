import Link from 'next/link'
import Image from 'next/image'

type HeroSectionProps = {
  title: string
  subtitle: string
  backgroundImage: string
  buttonText?: string
  buttonLink?: string
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  buttonText = "Explore More",
  buttonLink = "/explore"
}: HeroSectionProps) {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Sikkim Landscape"
          fill
          style={{objectFit: "cover", objectPosition: "center"}}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
          {buttonText && (
            <Link href={buttonLink} className="btn btn-secondary inline-block">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}