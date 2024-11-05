import React from 'react'

const Deal = () => {
  return (
    <section className='flex justify-center items-center max-w-[1440px] mx-auto h-full py-20 bg-transparent'>
        <div className='flex justify-center items-center w-full'>
            <div className='relative w-[600px]'>
                <div className='h-full w-full bg-black/30 md:bg-black/10 absolute top-0'></div>
                <img className='h-[400px] w-[600px] object-cover object-center' src="/images/img1.webp" alt="" />
                <div className="absolute -bottom-12 -right-24 z-[-2] h-[200px] w-[300px] bg-[radial-gradient(#ffffff55_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>

            <div className='text-white space-y-5 -ml-32 md:-ml-16 z-10'>
                <div className='uppercase'>
                    <span className='text-white font-medium '>
                        deal {''}
                    </span> 
                    of the week
                </div>

                <h2 className='text-[2em] md:text-[3.5em] line-height'>Multi-Brand <br /> Store Of Clothes</h2>
                <p className='max-w-md text-xs md:text-base'>
                    We follow fashion trends and have been working for you for more than 4 years. 
                    A selection of the best, interesting, and amazing outfits for different occasions.
                </p>

                {/* <div>
                    <button className=' bg-black text-white px-4 py-2 text-sm font-medium '>Contact Us</button>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Deal