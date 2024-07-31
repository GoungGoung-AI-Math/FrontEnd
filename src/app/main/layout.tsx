import React, { ReactNode } from 'react';

import { fetchTop3Problems, ProblemResponse } from '@/api/mainPage/problemTop3';

interface MainLayoutProps {
  children: ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const problems = await fetchTop3Problems();

  return (
    <div>
      {React.cloneElement(children as React.ReactElement, { problems })}
    </div>
  );
}
