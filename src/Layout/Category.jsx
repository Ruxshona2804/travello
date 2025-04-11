import Image from 'next/image'
import React from 'react'
import weather from '@/assets/images/weather.svg'
import plane from '@/assets/images/plane.svg'
import local from '@/assets/images/local.svg'
import custom from '@/assets/images/customization.svg'

const Category = () => {
    return (
        <div className='container mx-auto dark:text-white  px-4 py-16 flex flex-col items-center'>
            <div className="text-center mb-12">
                <p className='text-xl dark:text-white text-gray-500'>CATEGORY</p>
                <p className='text-4xl dark:text-white md:text-5xl font-bold text-gray-800'>We Offer Best Services</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl'>
                <div className="card dark:bg-gray-500  bg-white p-6 hover:rounded-2xl h-[330px] gap-7 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                    <Image src={weather} alt="weather icon" className="mb-4" />
                    <div>
                        <p className='text-lg font-semibold mb-2'>Calculated Weather</p>
                        <p className='text-gray-500 dark:text-gray-100 text-sm w-[60%] mx-auto '>Built Wicket longer admire do barton vanity itself do in it.</p>
                    </div>
                </div>
                <div className="relative card dark:bg-gray-500  bg-white p-6 hover:rounded-2xl h-[330px] gap-7 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center  overflow-visible">
                    <Image src={plane} alt="plane icon" className="mb-4 h-[100px]" />
                    <div >
                        <p className='text-lg font-semibold mb-2'>Best Flights</p>
                        <p className='text-gray-500 dark:text-gray-100 text-sm w-[60%] mx-auto'>Engrossed listening. Park gate sell they west hard for the.</p>
                    </div>

                    {/* Декоративный элемент СНИЗУ и СЛЕВА, наполовину выходит за пределы */}
                    <div className='absolute -bottom-[30px] -left-[30px] bg-orange-600 w-[100px] h-[100px] rounded-md -z-10'></div>
                </div>
                <div className="card dark:bg-gray-500  bg-white p-6 hover:rounded-2xl h-[330px] gap-7 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                    <Image src={local} alt="local events icon" className="mb-4" />
                    <div>
                        <p className='text-lg font-semibold mb-2'>Local Events</p>
                        <p className='text-gray-500 dark:text-gray-100 text-sm w-[60%] mx-auto '>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                    </div>
                </div>
                <div className="card dark:bg-gray-500  bg-white p-6 hover:rounded-2xl h-[330px] gap-7 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                    <Image src={custom} alt="customization icon" className="mb-4" />
                    <div>
                        <p className='text-lg font-semibold mb-2'>Customization</p>
                        <p className='text-gray-500 dark:text-gray-100 text-sm w-[60%] mx-auto '>We deliver outsourced aviation services for military customers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
