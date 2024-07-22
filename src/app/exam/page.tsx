import React from 'react';

import FilterComponent from '@/components/feature/exam/FilterComponent';
import ProblemCardList from '@/components/feature/exam/ProblemCardComponent'

import ExamLayout from './layout';

export default function ExamPage(): JSX.Element {
  return (
    <ExamLayout>
      <>
        <FilterComponent />
        <ProblemCardList />
      </>
    </ExamLayout>
  );
}
