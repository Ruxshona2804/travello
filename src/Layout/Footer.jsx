import logo from '@/assets/images/travello.svg'
import googleplay from '@/assets/images/googleplay.svg'
import applestore from '@/assets/images/playstore.svg'
import facebook from '@/assets/images/facebook.svg'
import instagram from '@/assets/images/instagram.svg'
import twitter from '@/assets/images/twitter.svg'
import { useTranslations } from 'next-intl';


import Image from 'next/image';
export default function Footer() {
   const t = useTranslations()
  return (
    <footer className=" py-10 container mx-auto px-5 border-t border-gray-200">
      <div className="max-w-7xl dark:text-white mx-auto h-[400px] flex flex-col md:flex-row justify-between items-center">

        <div className="flex flex-col items-start justify-start">
          <Image src={logo} alt='logo'  className='mb-15 dark:text-white mx-auto p-3 dark:bg-gray-500 rounded-2xl ' width={180} height={50} />
          <p className="text-center w-[270px] text-[17px] md:text-left text-sm text-gray-500 mt-2">
           {t('Book')} 
          </p>
        </div>

 
        <div className="flex items-center justify-center  gap-20">
          <div>
            <h3 className="text-[27px] font-semibold text-black dark:text-white  ">{t("Company")}</h3>
            <ul className="text-[23px] text-gray-500 space-y-2 mt-2 dark:text-white">
              <li>{t("About")}</li>
              <li>{t("Careers")}</li>
              <li>{t("Mobile")}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[27px] font-semibold text-black dark:text-white  ">{t("Contact")}</h3>
            <ul className="text-[23px] text-gray-500 space-y-2 mt-2 dark:text-white ">
              <li>{t("Help/FAQ")}</li>
              <li>{t("Press")}</li>
              <li>{t("Affiliates")}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[27px] font-semibold text-black dark:text-white  ">{t("More")}</h3>
            <ul className="text-[23px] text-gray-500 space-y-2 mt-2 dark:text-white ">
              <li>{t("Airlinefees")}</li>
              <li>{t("Airline")}</li>
              <li>{t("Low fare tips")}</li>
            </ul>
          </div>
        </div>

   
        <div className="flex flex-col gap-5 items-center  ">
          <div className='flex items-center gap-3'>
            <Image src={facebook} alt='facebook' width={54} height={54} />
            <Image src={instagram} alt='instagram' width={54} height={54} />
            <Image src={twitter} alt='twitter' width={54} height={54} />

          </div>
          <p className='text-[26px] font-bold text-gray-600'>{t("Discover our app")}</p>
          <div className='flex items-center gap-1'>
            <Image src={googleplay} alt='playmarket' height={46} width={142} />
            <Image src={applestore} alt='applestore' height={46} width={142} />
          </div>
        </div>
      </div>
      <div className="text-center  px-2 py-4 text-sm text-gray-500 mt-6">
       {t("rights")} 
      </div>
    </footer>
  );
}
