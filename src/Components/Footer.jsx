import React from 'react'
import { FaCopyright } from 'react-icons/fa'

const Footer = ({whatsappUrl}) => {
  return (
    <section id='footer' className=' flex flex-col justify-between items-center h-full bg-white/90'>
        <div className='container mx-auto flex flex-col space-y-10 md:space-y-0 justify-center text-center md:text-start items-center md:items-start md:flex-row md:justify-between w-full p-5 md:py-10'>
            <div className=''>
                <h2 className='font-normal text-lg font-ade text-black'>
                  made_by_ometere
                </h2>
                <p className='text-sm text-[#646cff]'>Make a fashion statement with us</p>
            </div>

            <div className='space-y-1'>
                <h4 className='font-medium md:font-bold text-lg text-black'>Contact us</h4>
                <ul className='space-y-1'>
                    <a href=""><li>Instagram</li></a>
                    <a href=""><li>Facebook</li></a>
                    <a href=""><li>Tiktok</li></a>  
                    <a href={whatsappUrl}><li>Whatsapp</li></a>           
                </ul>
            </div>

            <div className='space-y-1'>
                <h4 className='font-medium md:font-bold text-lg text-black'>Navigation</h4>
                <ul className='space-y-1'>
                    <a href="#about"><li>About us</li></a>
                    <a href="#featured"><li>featured products</li></a>
                    <a href="#faqs"><li>FAQs</li></a>      
                </ul>
            </div>
            
        </div>
        
        <div className='w-full h-[1px] bg-purple-400'></div>

        <div className='my-2 flex items-center space-x-1'>
            <FaCopyright />
            <p className='text-sm '>  All right reserved | <span className='font-normal text-sm font-ade text-black'> made_by_ometere </span>2024</p>
        </div>
        
    </section>
  )
}

export default Footer