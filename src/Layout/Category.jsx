import Image from 'next/image'
import React from 'react'
import weather from '@/assets/images/weather.svg'
import plane from '@/assets/images/plane.svg'
import local from '@/assets/images/local.svg'
import custom from '@/assets/images/customization.svg'
import { useTranslations } from 'next-intl';

const Category = () => {
    const t = useTranslations()
    return (
        <div className='container mx-auto dark:text-white  mt-15 h-screen flex flex-col items-center'>
            <div className="text-center mb-15">
                <p className='text-xl dark:text-white text-gray-500'>{t('CATEGORY')} </p>
                <p className='text-4xl dark:text-white md:text-5xl font-bold text-gray-800'> {t('We Offer Best Services')}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl'>
                <div className="card dark:bg-gray-500  bg-white p-6 hover:rounded-2xl h-[330px] gap-7 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                    <Image src={weather} width={120} height={100} alt="weather icon" className="mb-4" />
                    <div>
                        <p className='text-lg font-semibold mb-2'>{t(' Calculated Weather')}</p>
                        <p className='text-gray-500 dark:text-gray-100 text-sm w-[60%] mx-auto '>{t('Built')}</p>
                    </div>
                </div>
                <div className="relative card dark:bg-gray-500  bg-white p-6 hover:rounded-2xl h-[330px] gap-7 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center  overflow-visible">
                    <Image src={plane} width={120} height={100} alt="plane icon" className="mb-4 scale-120" />
                    <div >
                        <p className='text-lg font-semibold mb-2'>{t('Best Flights')}</p>
                        <p className='text-gray-500 dark:text-gray-100 text-sm w-[60%] mx-auto'>{t('Park')}</p>
                    </div>
                    <div className='absolute -bottom-[30px] -left-[30px] bg-orange-600 w-[100px] h-[100px] rounded-md -z-10'></div>
                </div>
                <div className="card dark:bg-gray-500  bg-white p-6 hover:rounded-2xl h-[330px] gap-7 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                    <Image src={local} width={120} height={100} alt="local events icon" className="mb-4 scale-90" />
                    <div>
                        <p className='text-lg font-semibold mb-2'>{t('Local Events')}</p>
                        <p className='text-gray-500 dark:text-gray-100 text-sm w-[70%] mx-auto '> {t('Barton')}.</p>
                    </div>
                </div>
                <div className="card dark:bg-gray-500  bg-white p-6 hover:rounded-2xl h-[330px] gap-7 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                    <Image src={custom} width={120} height={100} alt="customization icon" className="mb-4" />
                    <div>
                        <p className='text-lg font-semibold mb-2'> {t('Customization')} </p>
                        <p className='text-gray-500 dark:text-gray-100 text-sm w-[60%] mx-auto '> {t('customers')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
