import React from 'react';

import ProblemCard from '../../../components/common/ProblemCard';

interface Problem {
  id: number;
  name: string;
  imgUrl: string;
  difficulty: string;
  createDate: string;
  tags: string[];
  totalSolved: number;
}

interface ProblemCardListProps {
  problems: Problem[];
}

function ProblemCardList({ problems }: ProblemCardListProps) {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {problems.map((problem) => (
        <ProblemCard
          key={problem.id}
          name={problem.name}
          imgUrl={problem.imgUrl}
          difficulty={problem.difficulty}
          createDate={problem.createDate}
          tags={problem.tags}
          totalSolved={problem.totalSolved}
        />
      ))}
    </div>
  );
}

export default ProblemCardList;
