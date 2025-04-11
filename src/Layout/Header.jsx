import Image from 'next/image'
import React from 'react'
import play from '@/assets/images/play.svg'
import image from '@/assets/images/image.png'




import { FaPlay } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
const Header = () => {

const t = useTranslations()

    return (
       <>
       

        <div className='container mx-auto flex items-center  mt-10   h-[100vh] '>
            <div className="right">
                
                <p className='uppercase text-error text-[26px] leading-24'>{t("destinations")}</p>
                <h1 className='text-[100px] w-[600px] dark:text-gray-300 text-main font-semibold leading-22 tracking-tighter w-[] '>{t("travel")}</h1>
                <p className='text-gray mt-6 w-[420px] dark:text-gray-300'>{t("build")}</p>
                <div className='flex items-center gap-4'>
                    <button className='shadow dark:text-gray-200 px-7 py-4 bg-amber-500 text-white mt-3 rounded-xl'>Find out more</button>
                    <button className=' dark:text-gray-300 text-gray relative  flex items-center  mt-3 rounded-xl'>
                        <Image alt='play' className='scale-90 mt-5' src={play} />
                        <FaPlay className="inline-block right-33 text-white top-17 absolute mr-2" />
                        Play Demo
                    </button>
                </div>
            </div>
            <div className="left flex items-end justify-end mt-5">
                <Image className='' src={image} alt='traveller' />
            </div>
        </div></>
    )
}

export default Header