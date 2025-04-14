
'use client'
import React from 'react'
import { redirect, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
const LangSwitch = () => {

  const path = usePathname()
  const locale = useLocale()
  const switchHandle = (param) => {
    console.log(param?.target?.value);
    redirect({ locale: param?.target?.value, href: path });


  }

  return (
    <div>
      <select onChange={switchHandle} value={locale}>
        <option value="en">English</option>
        <option value="uz">Uzbek</option>
      </select>
    </div>
  )
}

export default LangSwitch