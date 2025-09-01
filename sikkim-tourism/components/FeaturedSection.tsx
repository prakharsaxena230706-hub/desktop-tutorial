import Image from 'next/image'
import Link from 'next/link'

type FeaturedItem = {
  id: string
  title: string
  image: string
  description: string
  link: string
}

type FeaturedSectionProps = {
  title: string
  subtitle: string
  items: FeaturedItem[]
}

export default function FeaturedSection({ title, subtitle, items }: FeaturedSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link href={item.link} className="text-primary font-medium hover:underline">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}