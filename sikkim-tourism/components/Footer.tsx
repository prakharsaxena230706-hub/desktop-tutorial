import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sikkim Tourism</h3>
            <p className="text-gray-400 mb-4">
              Explore the mystical land of monasteries, mountains, and rich cultural heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/monasteries" className="text-gray-400 hover:text-white">Monasteries</Link></li>
              <li><Link href="/culture" className="text-gray-400 hover:text-white">Culture & Heritage</Link></li>
              <li><Link href="/explore" className="text-gray-400 hover:text-white">Explore</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/travel-guide" className="text-gray-400 hover:text-white">Travel Guide</Link></li>
              <li><Link href="/accommodation" className="text-gray-400 hover:text-white">Accommodation</Link></li>
              <li><Link href="/transportation" className="text-gray-400 hover:text-white">Transportation</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              <p>Department of Tourism</p>
              <p>Government of Sikkim</p>
              <p>Gangtok, Sikkim</p>
              <p>India - 737101</p>
              <p className="mt-2">Email: info@sikkimtourism.gov.in</p>
              <p>Phone: +91-3592-220634</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sikkim Tourism. All Rights Reserved.</p>
          <p className="mt-1 text-sm">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-white ml-2">Terms of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}