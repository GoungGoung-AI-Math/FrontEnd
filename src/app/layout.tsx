import '../app/globals.css'

import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className="flex justify-center items-center bg-white min-h-screen">
    <div className="w-[1440px] h-[1275px] bg-white">
      {children}
    </div>
    </body>
    </html>
  );
}
