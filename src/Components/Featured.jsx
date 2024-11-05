import React from 'react'
import Card from './reuseables/Card';


const products = [
    { image: 'scrunchies.webp', name: 'Scrunchies' },
    { image: 'img2.webp', name: 'cloth 2' },
    { image: 'img3.webp', name: 'cloth 3' },
    { image: 'img4.webp', name: 'cloth 4' },
    { image: "img5.webp", name: "cloth 5" },
    { image: 'img6.webp', name: 'cloth 6' },
    { image: 'img7.webp', name: 'cloth 7' },
    { image: 'img8.webp', name: 'cloth 8' },
    { image: "img1.webp", name: "cloth 1" },
]

const Featured = () => {

    return (
        <section id='featured' className='space-y-10 text-gray-300 py-20'>
            <h2 className='text-center text-2xl lg:text-[3em] line-height text-white'>Featured Products</h2>

            <Card products={products} />
               
          
            {/* <div className='flex gap-4'>
            {products.map((product, index) => (
                <div key={index} className='w-1/4 space-y-4 overflow-hidden'>
                    <div className='h-80 '>
                        <img className='object-cover h-full w-full ' src={`images/${product.image}`} alt="" />
                    </div>
                    <div>
                        <h4>{product.name}</h4>
                    </div>
                </div>
            ))}
        </div> */}
        </section>
    )
}

export default Featured