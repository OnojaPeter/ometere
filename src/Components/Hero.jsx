import React from 'react'

const Hero = () => {
  return (
    <section className='flex justify-center items-center max-w-[1440px] mx-auto '>
        <div className='flex justify-center items-center w-full -mt-10 h-screen'>
            <div className='relative w-[400px]'>
                <div className='h-full w-full bg-black/20 md:bg-black/10 absolute top-0'></div>
                <img className='h-[500px] w-[400px] object-cover' src="/images/img4.webp" alt="" />
                <div className="absolute -bottom-12 -right-24 z-[-2] h-[200px] w-[300px] bg-[radial-gradient(#ffffff55_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>

            <div className='text-white space-y-5 -ml-32 md:-ml-16 z-10'>
                <div className='uppercase'>
                    <span className='text-white font-medium '>
                        new {''}
                    </span> 
                    collection
                </div>

                <h1 className='text-[3.2em] md:text-[4.2em] line-height'>Meet New <br /> Fashion Week</h1>

                <div>
                    <a href="#footer"><button className=' bg-black text-white px-4 py-2 text-sm font-medium '>Contact Us</button></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero