import '../app/globals.css'

import { ReactNode } from 'react'

import NavBar from '@/components/common/NavBar'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen items-center justify-center bg-white'>
        <div className='w-[1440px] bg-white'>
          <NavBar />
          <div className='h-full'>{children}</div>
        </div>
      </body>
    </html>
  )
}
