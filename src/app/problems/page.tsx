'use client';

import React, { useEffect, useState } from 'react';

import ProblemCardList from '../../../src/components/feature/problem/ProblemCardList';

interface Problem {
  id: number;
  name: string;
  imgUrl: string;
  difficulty: string;
  createDate: string;
  tags: string[];
  totalSolved: number;
}

export default function ProblemsPage() {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    const fetchProblems = async () => {
      const response = await fetch('http://localhost:8080/problem/get-problem-list/1');
      const data = await response.json();
      setProblems(data);
    };

    fetchProblems();
  }, []);

  return <div className="p-20">
    <ProblemCardList problems={problems} />
  </div>;
}
