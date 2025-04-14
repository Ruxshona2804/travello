import Image from 'next/image'
import React from 'react'

import decore from '@/assets/images/Decore.svg'
import italy from '@/assets/images/kolizey.svg'
import london from '@/assets/images/london.svg'
import europe from '@/assets/images/europe.svg'
import { useTranslations } from 'next-intl';

const Dastination = () => {
const t = useTranslations()
    return (
        <div className="container flex flex-col items-center mx-auto relative h-screen ">
            <div className="text-center mb-12">
                <p className="text-xl dark:text-white text-gray-500">{t("Top Selling")}</p>
                <p className="text-4xl dark:text-white md:text-5xl font-bold text-gray-800">{t("Top Destinations")}</p>
            </div>

            <div className="grid grid-cols-3 p-5">
                <Image className='scale-115 mt-10  dark:brightness-85' src={italy} alt='italy'  />
                <Image className='scale-115 mt-10  dark:brightness-85' src={london} alt='london'  />
                <Image className='scale-115 mt-10  z-10 dark:brightness-85' src={europe} alt='europe'  />
            </div>

            <div className="absolute z-0 bottom-40 -right-1">
                <Image className='scale-70' src={decore} alt="decore" />
            </div>
        </div>
    )
}

export default Dastination
