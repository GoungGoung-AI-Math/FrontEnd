'use client';

import React from 'react';

export default function ExamLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full flex justify-center items-start pt-[80px]">
      <div className="w-[1440px] h-[459px] bg-blue-100 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
