'use client'
import { useTheme } from 'next-themes'
import React from 'react'

const DarkMode = () => {
const { theme, setTheme } = useTheme()

return (
        <div>
            <button onClick={() => {
                if (theme == 'dark') {
                    setTheme('light')
                } else {
                    setTheme('dark')
                }
            }}>{theme == 'light' ? 'TUN' : "KUN" }</button>
        </div>
    )
}

export default DarkMode