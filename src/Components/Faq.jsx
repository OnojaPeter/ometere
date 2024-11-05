import React, { useState } from 'react'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'

const faqs = [
    { 
        question: 'How long does it take to sew a custom piece?', 
        answer: 'Custom pieces generally take between [3 days/ 1week], depending on the complexity of the design and fabric availability. For standard styles, it could be as quick as [3-5] days, but more intricate designs may take longer.' },
    { 
        question: 'Do you take measurements in person, or can i provide my own?', 
        answer: 'I can take measurements in person if you’re nearby, or you can provide your own measurements. I can guide you through the process to ensure accuracy.' },
    { 
        question: 'Can you customize a design i bring to you?', 
        answer: 'Absolutely! I enjoy bringing my clients’ ideas to life and can work with designs you provide, adding custom touches with Native wears and other fabrics if you like.' },
    { 
        question: 'Do you provide alterations if the fit isnt perfect?', 
        answer: 'Yes, I offer one free round of alterations to ensure the garment fits you perfectly. Further alterations may have a small fee.' },
    { 
        question: 'Can you work with specific body types or sizes?', 
        answer: 'Yes! I tailor each piece to fit your unique body shape, ensuring a flattering and comfortable fit.' },
    { 
        question: 'What is your return policy on custom clothes', 
        answer: 'Since these are custom-made pieces, I don’t typically accept returns, but I’m happy to make adjustments if there’s an issue with fit or quality.' },

    { 
        question: 'What sizes do you offer?', 
        answer: 'I offer sizes ranging from [smallest size] to [largest size]. For a perfect fit, I also provide custom sizing.' },
    { 
        question: 'What materials are the clothes made from?', 
        answer: 'I use high-quality Native wears and plain materials known for their durability and vibrant patterns.' },
    { 
        question: 'Are there any current promotions or discounts', 
        answer: 'Yes! I periodically offer discounts on selected items or when purchasing multiple pieces. Please check my [website/social media] for current offers.' },
]

const Faq = () => {
    const [indexClicked, setIndexClicked] = useState(null)

    const handleClick = (index) => {
        if (index === indexClicked) {
            return setIndexClicked(null)
        }
        setIndexClicked(index)
    }

    return (
        <section id='faqs' className='flex justify-center items-center max-w-[1440px] mx-auto h-full py-20 bg-transparent'>

            <div className='flex justify-center items-center w-full '>
                <div className='space-y-10'>
                    <h2 className='text-center text-2xl lg:text-[3em] line-height text-white'>FAQs</h2>

                    <div className='max-w-2xl w-full text-gray-300'>
                        <h5 className='mb-2 font-bold'>For Sewing Clothes:</h5>
                        {faqs.slice(0, 6).map((faq, index) => {
                            return (
                                <div key={index} className='space-y-2 border border-gray-800 p-2 '>
                                    <div onClick={() => handleClick(index)} className='flex items-start w-full cursor-pointer border border-gray-600 p-2'>
                                        <h4 className='max-w-[300px] w-full md:max-w-[500px] md:uppercase text-sm font-semibold'>{faq.question}</h4>
                                        <button className=''><MdOutlineArrowDropDownCircle className={`text-2xl text-gray-300 ${indexClicked === index && 'rotate-180'}`} /></button>
                                    </div>
                                    {indexClicked === index &&
                                        <p className='max-w-[300px] w-full md:max-w-[500px] px-2 text-sm md:text-base'>{faq.answer}</p>
                                    }
                                </div>
                            )
                        })}

                        <h5 className='my-2 font-bold'>For Buying Clothes:</h5>
                        {faqs.slice(6, 9).map((faq, index) => {
                            return (
                                <div key={index} className='space-y-2 border border-gray-800 p-2 '>
                                    <div onClick={() => handleClick(index)} className='flex items-start w-full cursor-pointer border border-gray-600 p-2'>
                                        <h4 className='max-w-[300px] w-full md:max-w-[500px] md:uppercase text-sm font-semibold'>{faq.question}</h4>
                                        <button className=''><MdOutlineArrowDropDownCircle className={`text-2xl text-gray-300 ${indexClicked === index && 'rotate-180'}`} /></button>
                                    </div>
                                    {indexClicked === index &&
                                        <p className='max-w-[300px] w-full md:max-w-[500px] px-2 text-sm md:text-base '>{faq.answer}</p>
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq