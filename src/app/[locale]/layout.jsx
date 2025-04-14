
import Layout from "@/Layout/Layout";
import "./globals.css";
import { Roboto, Volkhov } from 'next/font/google'
import { NextIntlClientProvider } from "next-intl";


const volkov = Volkhov({
  subsets:['latin'],
  weight:["400","700"],
  display:'swap',
  variable:'-font-volkov'
})

export default async function RootLayout({ children, params }) {

  const { locale } = await params
  console.log(locale);


  return (
    <html lang={locale} >
      <body className={volkov.className} >
        <NextIntlClientProvider>
          <Layout>
            {children}
          </Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
