import './globals.css'
import { Prata, Readex_Pro } from '@next/font/google'

const prata = Prata({ subsets: ['latin'], weight: '400' })
const readexPro = Readex_Pro({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${prata.style.fontFamily} ${readexPro.style.fontFamily}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-body text-body font-body antialiased">{children}</body>
    </html>
  )
}
