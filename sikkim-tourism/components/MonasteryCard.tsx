import Image from 'next/image'
import Link from 'next/link'

type MonasteryCardProps = {
  id: string
  name: string
  location: string
  image: string
  description: string
}

export default function MonasteryCard({ id, name, location, image, description }: MonasteryCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
      <div className="relative h-60">
        <Image
          src={image}
          alt={name}
          fill
          style={{objectFit: "cover"}}
          className="transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-500 mb-3">{location}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        <Link href={`/monasteries/${id}`} className="text-primary font-medium hover:underline">
          Read more
        </Link>
      </div>
    </div>
  )
}