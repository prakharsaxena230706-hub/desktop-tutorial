import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import MonasteryCard from '@/components/MonasteryCard'

export default function MonasteriesPage() {
  // Data for monasteries
  const monasteries = [
    {
      id: "rumtek",
      name: "Rumtek Monastery",
      location: "24km from Gangtok, East Sikkim",
      image: "https://source.unsplash.com/random/800x600/?monastery,buddhist,temple",
      description: "Also known as the Dharmachakra Centre, Rumtek Monastery is one of the largest and most significant monasteries in Sikkim. Built in the 1960s by the 16th Karmapa, it houses rare Buddhist artifacts and religious art."
    },
    {
      id: "pemayangtse",
      name: "Pemayangtse Monastery",
      location: "Near Pelling, West Sikkim",
      image: "https://source.unsplash.com/random/800x600/?tibet,monastery,mountain",
      description: "Founded in the early 18th century, Pemayangtse (meaning 'Perfect Sublime Lotus') is one of the oldest monasteries in Sikkim. It contains ancient relics, sculptures, and a remarkable seven-tiered wooden structure depicting the heavenly abode of Guru Rinpoche."
    },
    {
      id: "enchey",
      name: "Enchey Monastery",
      location: "Gangtok, East Sikkim",
      image: "https://source.unsplash.com/random/800x600/?himalaya,buddhist,temple",
      description: "Situated on a hill overlooking Gangtok, Enchey Monastery was built in 1909. It belongs to the Nyingma order of Vajrayana Buddhism and is known for its colorful Cham dances during the annual Detor Chaam festival."
    },
    {
      id: "tashiding",
      name: "Tashiding Monastery",
      location: "Tashiding, West Sikkim",
      image: "https://source.unsplash.com/random/800x600/?himalaya,temple,spiritual",
      description: "Perched on top of a heart-shaped mountain, Tashiding is considered one of the holiest Buddhist monasteries in Sikkim. It was founded in 1641 by Ngadak Sempa Chempo and houses the 'Thong-Wa-Rang-Dol' stupa believed to cleanse the sins of anyone who lays eyes on it."
    },
    {
      id: "phensang",
      name: "Phensang Monastery",
      location: "Near Gangtok, North Sikkim",
      image: "https://source.unsplash.com/random/800x600/?buddhist,monastery,sikkim",
      description: "Founded in 1721, Phensang Monastery belongs to the Nyingmapa sect of Tibetan Buddhism. It is known for its vibrant Cham dance performances during the annual Phensang Festival held during the Tibetan New Year."
    },
    {
      id: "tsuklakhang",
      name: "Tsuklakhang Royal Chapel",
      location: "Gangtok, East Sikkim",
      image: "https://source.unsplash.com/random/800x600/?buddhist,royal,chapel",
      description: "The Tsuklakhang is the royal chapel of the former ruling family of Sikkim. It contains a vast collection of Buddhist scriptures, statues, and thangkas. The monastery hosts important religious ceremonies and the annual Pang Lhabsol festival."
    },
    {
      id: "dubdi",
      name: "Dubdi Monastery",
      location: "Yuksom, West Sikkim",
      image: "https://source.unsplash.com/random/800x600/?ancient,monastery,sikkim",
      description: "Established in 1701, Dubdi is the oldest monastery in Sikkim. Perched on a hill, it requires a trek through dense forest to reach. It houses ancient manuscripts and is known for its peaceful, secluded atmosphere."
    },
    {
      id: "ralang",
      name: "Ralang Monastery",
      location: "Ravangla, South Sikkim",
      image: "https://source.unsplash.com/random/800x600/?tibetan,monastery,prayer",
      description: "Ralang Monastery was established in the 18th century. It is renowned for its collection of rare thangkas and the spectacular masked dances performed during the Pang Lhabsol festival."
    },
    {
      id: "karma",
      name: "Karma Kagyu Monastery",
      location: "Phodong, North Sikkim",
      image: "https://source.unsplash.com/random/800x600/?karma,kagyu,buddhist",
      description: "Established in the early 18th century, this monastery belongs to the Karma Kagyu school of Tibetan Buddhism. It houses impressive statues, sacred artifacts, and colorful murals depicting Buddhist deities."
    }
  ]

  return (
    <>
      <HeroSection
        title="Sacred Monasteries of Sikkim"
        subtitle="Explore ancient centers of Buddhist learning and spiritual practice nestled in the Himalayas"
        backgroundImage="https://source.unsplash.com/random/1600x900/?monastery,mountains,himalaya"
      />
      
      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Discover Sikkim's Monastic Heritage</h2>
            <p className="text-gray-700 mb-4">
              Sikkim is home to over 200 monasteries, locally known as "Gompas," which serve as centers of 
              Buddhist learning, cultural preservation, and spiritual practice. These sacred structures, 
              perched amidst breathtaking Himalayan landscapes, offer a glimpse into the region's rich 
              religious heritage and architectural traditions.
            </p>
            <p className="text-gray-700">
              From ancient wooden temples to grand modern complexes, each monastery tells a unique story 
              of faith, resilience, and artistic achievement. Visitors can witness daily rituals, 
              vibrant festivals, and the peaceful way of life maintained by resident monks.
            </p>
          </div>
        </div>
      </section>
      
      {/* Monastery List */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Explore Major Monasteries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {monasteries.map((monastery) => (
              <MonasteryCard
                key={monastery.id}
                id={monastery.id}
                name={monastery.name}
                location={monastery.location}
                image={monastery.image}
                description={monastery.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Monastic Life */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://source.unsplash.com/random/800x600/?monks,buddhist,prayer"
                alt="Monastic Life in Sikkim"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Life in a Sikkimese Monastery</h2>
              <p className="text-gray-700 mb-4">
                Life within the monasteries follows age-old traditions. The day typically begins before dawn 
                with the sound of horns and bells calling monks to morning prayers. Throughout the day, 
                monks engage in various activities including scriptural study, meditation, ritual performances, 
                and the creation of religious art.
              </p>
              <p className="text-gray-700 mb-4">
                Many monasteries also serve as educational institutions where young monks learn Buddhist 
                philosophy, Tibetan language, ritual practices, and traditional arts like thangka painting 
                and butter sculpture.
              </p>
              <p className="text-gray-700">
                Visitors are usually welcome to observe daily prayer sessions, though it's important to 
                maintain respectful behavior and follow guidelines regarding photography and appropriate dress.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Festivals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://source.unsplash.com/random/800x600/?festival,buddhist,mask"
                alt="Monastery Festival"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Monastery Festivals</h2>
              <p className="text-gray-700 mb-4">
                Throughout the year, Sikkimese monasteries host vibrant festivals that showcase the region's 
                religious and cultural traditions. The most famous of these are the Cham dances, elaborate 
                masked performances that depict Buddhist stories and teachings.
              </p>
              <p className="text-gray-700 mb-4">
                Major festivals include Losar (Tibetan New Year), Saga Dawa (celebrating Buddha's birth, 
                enlightenment, and parinirvana), and Lhabab Duchen (commemorating Buddha's descent from heaven).
              </p>
              <p className="text-gray-700">
                These festivals offer an extraordinary opportunity to witness living traditions that have 
                been preserved for centuries, with colorful costumes, sacred music, ritual dances, and 
                communal celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visitor Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Visitor Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Etiquette</h3>
              <ul className="space-y-2">
                <li>• Dress modestly, covering shoulders and knees</li>
                <li>• Remove shoes before entering prayer halls</li>
                <li>• Walk clockwise around sacred objects</li>
                <li>• Speak quietly and turn off mobile phones</li>
                <li>• Ask permission before taking photographs</li>
                <li>• Don't touch sacred objects or manuscripts</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Best Time to Visit</h3>
              <p className="mb-4">
                The best time to visit Sikkim's monasteries is from March to May and October to December 
                when the weather is pleasant and skies are clear.
              </p>
              <p>
                Consider planning your visit around major festivals for a more immersive cultural experience, 
                though accommodations should be booked well in advance during these periods.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Getting Around</h3>
              <p className="mb-4">
                Many monasteries are located in remote areas accessible only by hired vehicles or taxis. 
                Some require permits, especially those near international borders.
              </p>
              <p>
                Consider hiring a local guide who can provide cultural context and help navigate 
                logistics like transportation and accommodation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}