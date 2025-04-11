'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
   <ThemeProvider attribute={'class'} defaultTheme='class'>
   <Navbar />
    {children}
    <Footer />
   </ThemeProvider>

  )
}

export default Layout