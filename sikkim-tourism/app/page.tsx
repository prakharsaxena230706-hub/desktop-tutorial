import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import FeaturedSection from '@/components/FeaturedSection'

export default function Home() {
  // Featured monasteries
  const featuredMonasteries = [
    {
      id: "rumtek",
      title: "Rumtek Monastery",
      image: "https://source.unsplash.com/random/800x600/?monastery,buddhist",
      description: "One of the most significant monasteries in Sikkim, known for its beautiful architecture and religious artifacts.",
      link: "/monasteries/rumtek"
    },
    {
      id: "pemayangtse",
      title: "Pemayangtse Monastery",
      image: "https://source.unsplash.com/random/800x600/?tibet,buddhist",
      description: "One of the oldest and premier monasteries of Sikkim, founded in the early 18th century.",
      link: "/monasteries/pemayangtse"
    },
    {
      id: "enchey",
      title: "Enchey Monastery",
      image: "https://source.unsplash.com/random/800x600/?himalaya,temple",
      description: "A two-hundred-year-old monastery located in Gangtok, offering panoramic views of the surrounding landscape.",
      link: "/monasteries/enchey"
    }
  ]
  
  // Cultural highlights
  const culturalHighlights = [
    {
      id: "festivals",
      title: "Colorful Festivals",
      image: "https://source.unsplash.com/random/800x600/?festival,buddhist",
      description: "Experience vibrant Buddhist festivals with masked dances and ancient rituals.",
      link: "/culture/festivals"
    },
    {
      id: "cuisine",
      title: "Traditional Cuisine",
      image: "https://source.unsplash.com/random/800x600/?himalayan,food",
      description: "Taste authentic Sikkimese dishes blending Tibetan, Nepali and indigenous flavors.",
      link: "/culture/cuisine"
    },
    {
      id: "handicrafts",
      title: "Local Handicrafts",
      image: "https://source.unsplash.com/random/800x600/?handicraft,tibetan",
      description: "Discover intricate thangka paintings, wood carvings and handwoven textiles.",
      link: "/culture/handicrafts"
    }
  ]

  return (
    <>
      <HeroSection
        title="Discover Sikkim's Sacred Monasteries"
        subtitle="Experience the spiritual heritage and breathtaking beauty of the Himalayan paradise"
        backgroundImage="https://source.unsplash.com/random/1600x900/?sikkim,monastery,mountains"
        buttonText="Start Exploring"
        buttonLink="/monasteries"
      />
      
      {/* About Sikkim */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Welcome to Sikkim</h2>
              <p className="text-gray-700 mb-4">
                Nestled in the Eastern Himalayas, Sikkim is a small but beautiful state known for its spectacular natural beauty, 
                vibrant culture and remarkable biodiversity. This former Buddhist kingdom is home to over 200 monasteries, 
                dramatic landscapes ranging from lush valleys to snow-capped mountains, and warm, hospitable people.
              </p>
              <p className="text-gray-700 mb-6">
                Sikkim's monasteries are not just places of worship but also repositories of ancient wisdom, 
                art, and traditions. These sacred spaces offer a glimpse into the state's rich Buddhist heritage 
                and provide serene environments for spiritual contemplation amidst breathtaking Himalayan landscapes.
              </p>
              <Link href="/about" className="btn btn-primary inline-block">
                Learn More About Sikkim
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://source.unsplash.com/random/600x800/?sikkim,landscape"
                  alt="Sikkim Landscape"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://source.unsplash.com/random/600x800/?buddhist,prayer"
                  alt="Buddhist Prayer"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://source.unsplash.com/random/600x800/?himalaya,mountains"
                  alt="Himalayan Mountains"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://source.unsplash.com/random/600x800/?sikkim,culture"
                  alt="Sikkim Culture"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Monasteries */}
      <FeaturedSection
        title="Explore Sacred Monasteries"
        subtitle="Discover Sikkim's ancient Buddhist monasteries, centers of spiritual practice and cultural heritage"
        items={featuredMonasteries}
      />
      
      {/* Culture Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Experience Living Traditions</h2>
              <p className="text-gray-700 mb-4">
                Sikkim's rich cultural tapestry is woven from indigenous traditions, Buddhist influences, 
                and the practices of various ethnic communities. The state's cultural heritage comes alive 
                through colorful festivals, traditional music and dance, distinctive cuisine, and intricate handicrafts.
              </p>
              <p className="text-gray-700 mb-6">
                From the rhythmic chants of Buddhist ceremonies to the vibrant folk dances of indigenous communities, 
                Sikkim offers visitors an authentic glimpse into living traditions that have been preserved for centuries.
              </p>
              <Link href="/culture" className="btn btn-primary inline-block">
                Discover Sikkim Culture
              </Link>
            </div>
            <div className="md:w-1/2 relative h-96 order-1 md:order-2">
              <Image
                src="https://source.unsplash.com/random/800x600/?sikkim,festival,dance"
                alt="Sikkim Cultural Festival"
                fill
                style={{objectFit: "cover"}}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Cultural Highlights */}
      <FeaturedSection
        title="Cultural Highlights"
        subtitle="Immerse yourself in the rich cultural tapestry of Sikkim through its festivals, cuisine, and crafts"
        items={culturalHighlights}
      />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Spiritual Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to experience the mystical monasteries and rich cultural heritage of Sikkim?
            Start planning your journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/travel-guide" className="btn bg-white text-primary hover:bg-gray-100">
              Travel Guide
            </Link>
            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}