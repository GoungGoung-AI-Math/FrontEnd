import '../app/globals.css'

import { ReactNode } from 'react'

import NavBar from '@/components/common/NavBar'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex  justify-center items-center bg-white ">
        <div className="w-[80%] bg-white ">
          <div className=" z-20 bg-white w-[80%] fixed">
            <NavBar />
          </div>
          <div className="w-full mt-20 border">{children}</div>
        </div>
      </body>
    </html>
  )
}
