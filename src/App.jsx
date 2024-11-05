import { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import Footer from './Components/Footer';
import { FaInstagram, FaFacebookSquare, FaTiktok, FaWhatsapp } from 'react-icons/fa'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if scroll is greater than 100vh
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const phoneNumber = '+2348161711309'; // Replace with your number in international format
    const message = 'Hi, I’d like to ask about your services!'; // Message to prefill in WhatsApp chat
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className='relative'>
      <div className="fixed z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className=' '>
        {/*Header*/}
        <nav className={` z-50 top-0 w-full transition-colors duration-300 ${isScrolled ? 'bg-white/90 text-black fixed' : 'bg-transparent text-white relative'}`}>
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <h2 className='font-normal text-lg font-ade'>
                  made_by_ometere
                </h2>

                <ul className="flex space-x-3">
                  <a href='' target="_blank" rel="noopener noreferrer"><FaInstagram className={`text-xl hover:text-purple-400 ${isScrolled ? 'text-black ' : 'text-white hover:text-white/80'}`} /></a>
                  <a href='' target="_blank" rel="noopener noreferrer"><FaFacebookSquare className={`text-xl hover:text-blue-400 ${isScrolled ? 'text-black ' : 'text-white'}`} /></a>
                  <a href='' target="_blank" rel="noopener noreferrer"><FaTiktok className={`text-xl hover:text-purple-300 ${isScrolled ? 'text-black ' : 'text-white'}`} /></a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp className={`text-xl hover:text-green-400 ${isScrolled ? 'text-black ' : 'text-white'}`} /></a>
                </ul>
            </div>
        </nav>

        <LandingPage />
        <Footer whatsappUrl={whatsappUrl} />
      </div>
    </div>
  )
}

export default App