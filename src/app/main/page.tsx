import { fetchTop3Problems, ProblemResponse } from '@/api/mainPage/problemTop3'

import MainLayout from './layout';

interface Top3ProblemsProps {
  problems: ProblemResponse[];
}

function Top3Problems({ problems }: Top3ProblemsProps) {
  if (!problems || problems.length === 0) {
    return <p>No problems found</p>;
  }

  return (
    <div>
      <h2>Top 3 Problems with Lowest Correct Rate</h2>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>
            <h3>{problem.name}</h3>
            <p>Difficulty: {problem.difficulty}</p>
            <p>Correct Rate: {problem.correctRate}</p>
            <p>Total Solved: {problem.totalSolved}</p>
            <p>Tags: {problem.tags.join(', ')}</p>
            <img src={problem.imgUrl} alt={problem.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function Page() {
  const problems = await fetchTop3Problems();

  return (
    <MainLayout>
      <Top3Problems problems={problems} />
    </MainLayout>
  );
}

