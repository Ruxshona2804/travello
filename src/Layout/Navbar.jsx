'use client'
import React from 'react'
import DarkMode from './DarkMode'
import Image from 'next/image'
import logo from '../assets/images/travello.svg'
import white from '@/assets/images/white.png'
import black from '@/assets/images/black.png'
import { useTheme } from 'next-themes'
import LangSwitch from './LangSwitch'
import { useTranslations } from 'next-intl';

const Navbar = () => {
const t = useTranslations()
const {theme} = useTheme()

    return (
        <>
        <Image src={theme == 'dark' ? black : white} alt='bg' width={800} height={500} className='absolute  top-0 right-0 -z-10' /> 
        <div className='container dark:text-white mx-auto p-3 flex items-center justify-between mt-4'>
            <div className='dark:bg-gray-500 p-2 rounded-lg '>
                <Image src={logo} alt='travello' width={180} height={50} />
            </div>
            <div className="links">
                <ul className='flex items-center gap-8 '>
                    <li className='hover:underline hover:text-error'>{t('Desitnations')}</li>
                    <li className='hover:underline hover:text-error'>{t('Hotels')}</li>
                    <li className='hover:underline hover:text-error'>{t("Flights")}</li>
                    <li className='hover:underline hover:text-error'>{t("Bookings")}</li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <button className='hover:border rounded-lg px-3 py-1'>Login</button>
                <button className='hover:border rounded-lg px-3 py-1'>Sign up</button>
              
                <DarkMode />
                <LangSwitch />
            </div>
        </div>
        </>
    )
}

export default Navbar