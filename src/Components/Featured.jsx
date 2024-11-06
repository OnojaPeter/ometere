import React from 'react'
import Card from './reuseables/Card';


const products = [
    { image: 'img_1.webp', name: 'cloth 1' },
    { image: 'scrunchies.webp', name: 'Scrunchies' },
    { image: 'img_2.webp', name: 'cloth 2' },
    { image: 'img_3.webp', name: 'cloth 3' },
    { image: 'img_4.webp', name: 'cloth 4' },
    { image: "img_5.webp", name: "cloth 5" },
    { image: 'img_6.webp', name: 'cloth 6' },
    { image: 'img_7.webp', name: 'cloth 7' },
    { image: 'img_8.webp', name: 'cloth 8' },
    { image: "img_9.webp", name: "cloth 9" },
    { image: 'img_10.webp', name: 'cloth 10' },
    { image: 'img_11.webp', name: 'cloth 11' },
    { image: "img_12.webp", name: "cloth 12" },
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