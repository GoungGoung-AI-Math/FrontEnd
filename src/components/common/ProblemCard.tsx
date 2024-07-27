import React from 'react';

import ProblemLabel from './ProblemLabel';

interface ProblemCardProps {
  name: string;
  imgUrl: string;
  difficulty: string;
  createDate: string;
  tags: string[];
  totalSolved: number;
}

function ProblemCard({ name, imgUrl, difficulty, createDate, tags, totalSolved }: ProblemCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <div className="w-full h-48 mb-4">
        <img src={imgUrl} alt={name} className="w-full h-full object-contain"/>
      </div>
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <div className="flex flex-wrap mb-2">
        <ProblemLabel label={`난이도: ${difficulty}`} />
        <ProblemLabel label={`총 풀이 수: ${totalSolved}`} />
      </div>
      <div className="flex flex-wrap mb-2">
        {tags.map((tag, index) => (
          <ProblemLabel key={index} label={tag} />
        ))}
      </div>
      <span className="text-gray-500 text-sm">생성 날짜: {new Date(createDate).toLocaleDateString()}</span>
    </div>
  );
}

export default ProblemCard;
