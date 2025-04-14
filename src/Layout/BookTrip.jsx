import React from 'react'
import choose from '@/assets/images/choose1.svg'
import swim from '@/assets/images/swim.svg'
import car from '@/assets/images/car.svg'
import greese from '@/assets/images/greese.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl';


const BookTrip = () => {
const t = useTranslations()

    return (
        <div className='container mx-auto flex items-center justify-around gap-6  '>
            <div className="card w-[525px]">
                <div className=''>
                    <p className='text-[24px] text-gray-400 '>{t('Easy and Fast')}</p>
                    <h2 className='text-[66px] tracking-tight font-bold mb-3   leading-16 w-[640px]  '> {t('Book Your Yext Trip In 3 Easy Step')}s</h2>
                </div>
                <div className='flex flex-col text-left items-center gap-15 justify-center'>
                    <div className="icon flex items-center gap-5  justify-center  mt-5  text-gray-400  ">
                        <Image src={choose} alt='choose' width={63} height={62} className='dark:brightness-85' />
                        <div>
                            <p className='font-bold text-[21px]'>{t('Destination')}</p>
                            <p className='text-[21px]'>{t('Lorem')} </p>
                        </div>
                    </div>
                    <div className="icon flex items-center gap-5  justify-center   text-gray-400  ">
                        <Image src={swim} alt='swim' width={63} height={62} className='dark:brightness-85' />
                        <div>
                            <p className='font-bold text-[21px]'>{t('Make Payment')}</p>
                            <p className='text-[21px]'>{t('Lorem')} </p>
                        </div>
                    </div>
                    <div className="icon flex items-center gap-5  justify-center   text-gray-400  ">
                        <Image src={car} alt='car' width={63} height={62}  className='dark:brightness-85'/>
                        <div>
                            <p className='font-bold text-[21px]'>{t("Reach")}</p>
                            <p className='text-[21px]'>{t('Lorem')} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card ml-7">
                <Image src={greese} alt='greese' className='dark:brightness-85' width={640} height={610} />
            </div>
        </div>
    )
}

export default BookTrip