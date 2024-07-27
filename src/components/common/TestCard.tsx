import React from 'react';

interface Problem {
  examName: string;
  createDate: string;
  difficulty: string;
  type: string;
  revisionState: string;
  totalSolveCount: number;
}

interface ProblemCardProps {
  problem: Problem;
}

function TestCard({ problem }: ProblemCardProps) {
  return (
    <div className="flex flex-col w-full p-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full" style={{ maxWidth: '1440px' }}>
        <div className="flex flex-row items-center justify-between">
          <div className="flex-grow">
            <h2 className="text-xl font-bold">{problem.examName}</h2>
            <p className="text-gray-500">생성일: {new Date(problem.createDate).toLocaleDateString()}</p>
            <p className="text-gray-500">난이도: {problem.difficulty} | 유형: {problem.type} | 수정 상태: {problem.revisionState} | 푼 사람 수: {problem.totalSolveCount}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 border rounded text-black border-gray-400">아이콘</button>
            <button className="p-2 border rounded text-black border-gray-400">아이콘</button>
            <button className="p-2 border rounded text-black border-gray-400">아이콘</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
