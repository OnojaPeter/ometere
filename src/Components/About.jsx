import React from 'react'

const About = () => {
  return (
    <section id='about' className='flex flex-col justify-center items-center max-w-[1440px] mx-auto h-full space-y-8 md:space-y-16 py-20'>
        <div className='text-center space-y-3 '>
            <h2 className='text-2xl lg:text-[3em] line-height text-white'>About us</h2>
            <p className='max-w-xs md:max-w-sm mx-auto text-gray-300 text-xs md:text-base'>
                Official representative of the world-famous clothing brand Fashionee in Europe and the world                 
            </p>
        </div>
        <div className='flex justify-center items-center w-full'>
            <div className='flex flex-col lg:flex-row justify-center md:gap-20 text-gray-300'>
                <div className='max-w-sm space-y-6 flex flex-col items-center md:items-start'>
                    <div className='space-y-2'>
                        {/* <h4 className='capitalize text-base md:text-lg font-medium'>the beginning of our journey</h4> */}
                        <div className='flex  gap-4'>
                            {/* <div className='-rotate-90 flex items-center text-sm md:text-base'><span>-</span> <p>2020</p></div> */}
                            <p className='text-sm md:text-base'>
                                Made by Ometere specializes in crafting unique and elegant women’s clothing using vibrant Native wears and premium plain fabrics. Our mission is to celebrate individuality through custom designs that blend tradition with modern style.
                            </p>
                        </div>
                    </div>

                    <div className=" z-[-2] h-[100px] md:h-[200px] w-full bg-[radial-gradient(#ffffff55_1px,transparent_1px)] bg-[size:20px_20px]">
                        <div className='flex justify-end items-center h-full'>
                            <div className='flex flex-col mx-5'>
                                <span className='text-3xl md:text-5xl '>50+</span> 
                                <h4 className='text-base font-medium'>Satisfied clients</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-sm space-y-6 flex flex-col items-center md:items-start'>               
                    <div className=" z-[-2] h-[100px] md:h-[200px] w-full bg-[radial-gradient(#ffffff55_1px,transparent_1px)] bg-[size:20px_20px]">
                        <div className='flex md:justify-end items-center h-full'>
                            <div className='flex flex-col mx-5'>
                                <span className='text-3xl md:text-5xl '>50+</span> 
                                <h4 className='text-base font-medium'>Designs done</h4>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        {/* <h4 className='capitalize text-base md:text-lg font-medium'>who are we now?</h4> */}

                        <div className='flex gap-4'>
                            {/* <div className='-rotate-90 flex items-center text-sm md:text-base'><span>-</span> <p>2024</p></div> */}
                            <p className='text-sm md:text-base'>
                                We’re dedicated to creating high-quality, tailored pieces that fit perfectly and make every woman feel confident and beautiful. From everyday wear to statement pieces, we bring your vision to life with craftsmanship and passion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About