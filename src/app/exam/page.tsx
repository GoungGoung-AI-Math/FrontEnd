import React from 'react';

import FilterComponent from '@/components/feature/exam/FilterComponent';

import ExamLayout from './layout';

export default function ExamPage() {
  return (
    <ExamLayout>
      <FilterComponent />
    </ExamLayout>
  );
}
