import Image from 'next/image'

type CultureCardProps = {
  title: string
  image: string
  description: string
}

export default function CultureCard({ title, image, description }: CultureCardProps) {
  return (
    <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-md bg-white">
      <div className="md:w-1/2 relative h-64 md:h-auto">
        <Image
          src={image}
          alt={title}
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <div className="md:w-1/2 p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}