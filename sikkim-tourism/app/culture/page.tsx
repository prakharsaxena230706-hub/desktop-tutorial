import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CultureCard from '@/components/CultureCard'

export default function CulturePage() {
  // Cultural elements data
  const culturalElements = [
    {
      title: "Traditional Festivals",
      image: "https://source.unsplash.com/random/800x600/?festival,buddhist",
      description: "Sikkim celebrates numerous festivals throughout the year, with Losar (Tibetan New Year), Saga Dawa, and Dashain being major celebrations. These festivals feature masked dances, religious ceremonies, and community feasting. Pang Lhabsol, unique to Sikkim, honors Mount Kangchenjunga, considered the guardian deity of the land."
    },
    {
      title: "Music & Dance",
      image: "https://source.unsplash.com/random/800x600/?dance,traditional",
      description: "Traditional Sikkimese music and dance forms reflect the state's diverse ethnic composition. The Lepchas perform Chu Faat dance, while the Bhutias are known for Singhi Chaam (snow lion dance) and Yak Chaam. Folk instruments include the nangma (Tibetan guitar), flutes, drums, and cymbals that accompany both religious and secular performances."
    },
    {
      title: "Traditional Attire",
      image: "https://source.unsplash.com/random/800x600/?traditional,clothes",
      description: "Sikkimese traditional clothing is colorful and adapted to the mountainous climate. Bhutia women wear the Bakhu (a wrap-around dress) with a silken blouse and multicolored aprons, while men wear similar robes with trousers. Lepcha women wear Dumvum (a loose dress with a belt) and Nyamrek scarves. These garments feature intricate embroidery and vibrant colors."
    },
    {
      title: "Cuisine",
      image: "https://source.unsplash.com/random/800x600/?food,himalayan",
      description: "Sikkimese cuisine blends Tibetan, Nepali, and indigenous influences. Momos (dumplings), thukpa (noodle soup), and gundruk (fermented leafy greens) are staple foods. Chang, a millet-based alcoholic beverage, is served during celebrations. Sikkim also produces world-renowned cardamom and has a growing organic food industry."
    }
  ]

  // Handicrafts data
  const handicrafts = [
    {
      title: "Thangka Paintings",
      image: "https://source.unsplash.com/random/800x600/?thangka,buddhist,art",
      description: "These intricate religious paintings on fabric depict Buddhist deities, mandalas, or scenes from religious texts. Created using natural pigments, thangkas serve both as religious objects and teaching tools."
    },
    {
      title: "Wooden Crafts",
      image: "https://source.unsplash.com/random/800x600/?woodcarving,craft",
      description: "Skilled artisans carve furniture, masks, and religious objects from wood. Choktse (folding tables) with intricate designs are particularly famous Sikkimese wooden crafts."
    },
    {
      title: "Handloom Weaving",
      image: "https://source.unsplash.com/random/800x600/?weaving,textile",
      description: "Traditional textile weaving produces distinctive fabrics like yathras (woolen rugs), kira (women's dresses), and kho (men's robes) with geometric patterns and vibrant colors."
    },
    {
      title: "Carpet Making",
      image: "https://source.unsplash.com/random/800x600/?carpet,tibetan",
      description: "Tibetan-style carpet weaving is practiced in many parts of Sikkim. These carpets feature distinctive patterns including Buddhist symbols and are known for their durability and beauty."
    }
  ]

  return (
    <>
      <HeroSection
        title="Culture & Heritage of Sikkim"
        subtitle="Experience the rich tapestry of traditions, arts, and living heritage of the Himalayan kingdom"
        backgroundImage="https://source.unsplash.com/random/1600x900/?sikkim,culture,festival"
      />
      
      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">A Living Cultural Tapestry</h2>
            <p className="text-gray-700 mb-4">
              Sikkim's cultural heritage is as diverse as its landscape, shaped by the harmonious 
              coexistence of different ethnic communities including the indigenous Lepchas, 
              Bhutias of Tibetan descent, and Nepalis, along with other groups.
            </p>
            <p className="text-gray-700">
              This cultural mosaic is expressed through vibrant festivals, traditional music and dance, 
              distinctive cuisine, unique arts and crafts, and the spiritual practices that have flourished 
              for centuries in this Himalayan sanctuary.
            </p>
          </div>
        </div>
      </section>
      
      {/* Cultural Elements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Elements of Sikkimese Culture</h2>
          <p className="section-subtitle">
            Discover the diverse traditions that form Sikkim's unique cultural identity
          </p>
          <div className="space-y-12 mt-12">
            {culturalElements.map((element, index) => (
              <CultureCard
                key={index}
                title={element.title}
                image={element.image}
                description={element.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Local Communities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Indigenous Communities</h2>
          <p className="section-subtitle">
            Learn about the ethnic groups that contribute to Sikkim's cultural diversity
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Lepchas</h3>
              <div className="relative h-48 mb-4 rounded overflow-hidden">
                <Image
                  src="https://source.unsplash.com/random/800x600/?indigenous,people"
                  alt="Lepcha Community"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <p className="text-gray-700">
                Considered the original inhabitants of Sikkim, the Lepchas have a deep connection to the land. 
                Their traditional religion, Munism, involves nature worship, though many have embraced Buddhism. 
                The Lepcha language has its own script and rich oral traditions including myths and folklores.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Bhutias</h3>
              <div className="relative h-48 mb-4 rounded overflow-hidden">
                <Image
                  src="https://source.unsplash.com/random/800x600/?tibetan,people"
                  alt="Bhutia Community"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <p className="text-gray-700">
                Of Tibetan origin, the Bhutias migrated to Sikkim in the 14th century. They follow Tibetan Buddhism 
                and played a significant role in establishing the kingdom of Sikkim. Their cultural practices are 
                closely linked to Buddhist traditions, and they speak Sikkimese, a Tibetan dialect.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Nepalis</h3>
              <div className="relative h-48 mb-4 rounded overflow-hidden">
                <Image
                  src="https://source.unsplash.com/random/800x600/?nepali,people"
                  alt="Nepali Community"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <p className="text-gray-700">
                Nepali-speaking communities began settling in Sikkim in the 19th century. They comprise several 
                ethnic groups including Rais, Limbus, Tamangs, and Gurungs, each with distinct cultural traditions. 
                Many follow Hinduism while incorporating local beliefs and practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Handicrafts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Traditional Arts & Crafts</h2>
          <p className="section-subtitle">
            Explore the skilled craftsmanship passed down through generations
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {handicrafts.map((craft, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-56">
                  <Image
                    src={craft.image}
                    alt={craft.title}
                    fill
                    style={{objectFit: "cover"}}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{craft.title}</h3>
                  <p className="text-gray-600">{craft.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Cultural Preservation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Preserving Cultural Heritage</h2>
              <p className="text-gray-700 mb-4">
                Efforts to preserve Sikkim's rich cultural heritage include documentation of oral traditions, 
                language preservation initiatives, cultural festivals, and training programs for traditional arts. 
                Monasteries continue to serve as centers for cultural preservation, maintaining ancient practices 
                and teaching younger generations.
              </p>
              <p className="text-gray-700 mb-4">
                The Namgyal Institute of Tibetology in Gangtok houses one of the world's largest collections 
                of Tibetan and Buddhist artifacts, manuscripts, and works of art. It serves as a research 
                center for Tibetan Buddhist culture and religion.
              </p>
              <p className="text-gray-700">
                The state government has established several cultural centers and museums dedicated to 
                preserving and showcasing Sikkim's diverse cultural heritage, while also promoting 
                responsible cultural tourism that benefits local communities.
              </p>
            </div>
            <div className="lg:w-1/2 relative h-96">
              <Image
                src="https://source.unsplash.com/random/800x600/?museum,cultural,artifacts"
                alt="Cultural Preservation"
                fill
                style={{objectFit: "cover"}}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Festivals Calendar */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Major Festival Calendar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Winter (Dec-Feb)</h3>
              <ul className="space-y-2">
                <li>• Losoong/Namsoong (December)</li>
                <li>• Losar - Tibetan New Year (February)</li>
                <li>• Maghe Sankranti (January)</li>
                <li>• Sonam Losar (January/February)</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Spring (Mar-May)</h3>
              <ul className="space-y-2">
                <li>• Bhumchu Festival (February/March)</li>
                <li>• Saga Dawa (May/June)</li>
                <li>• Sikkim State Day (May 16)</li>
                <li>• Ram Navami (March/April)</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Summer (Jun-Aug)</h3>
              <ul className="space-y-2">
                <li>• Drukpa Tseshi (July/August)</li>
                <li>• Guru Rinpoche's Birthday (July)</li>
                <li>• Bhanu Jayanti (July)</li>
                <li>• Tendong Lho Rum Faat (August)</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Autumn (Sep-Nov)</h3>
              <ul className="space-y-2">
                <li>• Pang Lhabsol (September)</li>
                <li>• Dashain (October/November)</li>
                <li>• Tihar/Diwali (October/November)</li>
                <li>• Lhabab Duchen (November)</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/cultural-calendar" className="btn bg-white text-primary hover:bg-opacity-90 inline-block">
              View Full Cultural Calendar
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}