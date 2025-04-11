
import Layout from "@/Layout/Layout";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { NextIntlClientProvider } from "next-intl";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','500','700'], // можно указать нужные веса
  display: 'swap',
})

export default async function RootLayout({ children, params }) {

const {locale} = await params
console.log(locale);


  return (
    <html lang={locale} >
      <body className= {roboto.className} >
          <NextIntlClientProvider>
        <Layout>

        {children}
        </Layout>
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
