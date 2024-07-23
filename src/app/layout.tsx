import '../app/globals.css'

import { ReactNode } from 'react'

import NavBar from '@/components/common/NavBar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className="flex justify-center items-center bg-white min-h-screen">
    <div className=" w-[1440px] bg-white">
      <NavBar />
      <div className=' h-full'>
        {children}
      </div>
    </div>
    </body>
    </html>
  );
}
