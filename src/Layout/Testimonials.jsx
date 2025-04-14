import React from 'react'
import tochka from '@/assets/images/tochka.svg'
import comment from '@/assets/images/comments.svg'
import axon from '@/assets/images/axon.png'
import jetstar from '@/assets/images/jetstar.png'
import expedia from '@/assets/images/expedia.png'
import qantas from '@/assets/images/qantas.png'
import litalia from '@/assets/images/litalia.png'
import { useTranslations } from 'next-intl';

import Image from 'next/image'

const Testimonials = () => {
const t = useTranslations()

    return (
        <>
            <div className='h-[500px] flex items-center justify-center gap-10 container mx-auto mt-10  '>
                <div className="card flex flex-col  gap-20">
                    <div>
                        <p className='uppercase text-[24px] text-gray-500 '>{t('Testimonials')}</p>
                        <p className='capitalize text-[66px] w-[540px] leading-18  '>{t('What people say about Us')}</p>
                    </div>
                    <Image src={tochka} alt='tochka' className='' width={115} height={15} />
                </div>
                <div className="card   w-[50%] ">
                    <Image src={comment} alt='comment' className='scale-80 dark:bg-gray-300 p-3 rounded-2xl' width={800} height={400} />
                </div>
            </div>
            <div className='container mx-auto  flex items-center justify-around '>
                <Image className='hover:shadow-2xl scale-80 dark:p-2 dark:bg-gray-400 ' src={axon} alt='axon' width={230} height={145} />
                <Image className='hover:shadow-2xl scale-80 dark:p-2 dark:bg-gray-400 ' src={jetstar} alt='jetstar' width={230} height={145} />
                <Image className='hover:shadow-2xl scale-80 dark:p-2 dark:bg-gray-400 ' src={expedia} alt='expedia' width={230} height={145} />
                <Image className='hover:shadow-2xl scale-80 dark:p-2 dark:bg-gray-400 ' src={qantas} alt='qantas' width={230} height={145} />
                <Image className='hover:shadow-2xl scale-80 dark:p-2 dark:bg-gray-400 ' src={litalia} alt='litalia' width={230} height={145} />

            </div>
        </>
    )
}

export default Testimonials