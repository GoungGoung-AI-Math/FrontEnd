'use client'

import React, { ReactNode } from 'react';

interface ExamLayoutProps {
  children: ReactNode;
}

export default function ExamLayout({ children }: ExamLayoutProps): JSX.Element {
  const childrenArray = React.Children.toArray(children);
  console.log('ExamLayout - Children:', childrenArray);

  const header = childrenArray[0] ? childrenArray[0] : <div>기본 헤더</div>;
  const main = childrenArray.length > 1 ? childrenArray.slice(1) : [];
  console.log('ExamLayout - Header:', header);
  console.log('ExamLayout - Main:', main);

  return (
    <div className="relative w-full h-full flex flex-col items-start pt-[80px]">
      <div className=" bg-blue-100 flex items-center justify-center">
        {header}
      </div>
      <div
        className="w-full bg-white flex flex-col items-center justify-start overflow-visible">
        {main.map((child, index) => (
          <div key={index} className="w-full z-10">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
