
'use client'
import React from 'react'
import {redirect, usePathname} from '@/i18n/navigation'
const LangSwitch = () => {

    const path = usePathname()

    const switchHandle = (param)=>{
        console.log(param?.target?.value);
        redirect({locale:param?.target?.value, href: path  });

        
    }

  return (
    <div>
        <select onChange={switchHandle}>
            <option value="uz">Uzbek</option>
            <option value="en">English</option>
        </select>
    </div>
  )
}

export default LangSwitch