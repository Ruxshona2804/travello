import Image from 'next/image'
import React from 'react'
import telegram from '@/assets/images/telegram.svg'
import { MdOutlineMail } from "react-icons/md";
import { useTranslations } from 'next-intl';

const Subscribe = () => {
    const t = useTranslations()
    return (
        <div className='container mx-auto  h-screen flex flex-col items-center justify-center'>
            <div className='relative w-[90%] h-[400px] rounded-tl-[150px] rounded-2xl dark:bg-gray-600 bg-[#F9F7FE]'>
                <Image className='absolute -top-10 -right-5 ' src={telegram} alt='telegram' width={93} height={93} />
                <p className=' text-center dark:text-white  text-gray-600 py-15 w-[800px] mx-auto text-[30px] font-bold'>{t("Subscribe")}</p>
                <div className='flex  items-center justify-center gap-5'>
                    <div className='relative '>
                        <MdOutlineMail className='scale-130 top-6 left-6 absolute text-gray-600 ' />
                        <input  className=' dark:bg-gray-400  px-14 bg-white w-[400px] h-[65px] py-4 rounded-2xl ' type="text" placeholder={t('Your Email')} />
                    </div>
                    <button className='bg-amber-600 py-4 text-white px-7 rounded '>{t("Sub")}</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe