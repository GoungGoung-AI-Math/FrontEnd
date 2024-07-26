'use client'

import React, { useState } from 'react';

import FilterComponent from '@/components/feature/exam/FilterComponent';
import ProblemCardList from '@/components/feature/exam/ProblemCardComponent';

interface Filters {
  startYear: number;
  endYear: number;
  months: string[];
  types: string[];
}

export default function ExamPage(): JSX.Element {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState<Filters>({ startYear: 2021, endYear: 2023, months: [], types: [] });

  const fetchProblems = async (newFilters: Filters, page: number = 0) => {
    if (page === 0) {
      setProblems([]);
    }
    setFilters(newFilters);
    try {
      const response = await fetch(`https://test.udongrang.com:7070/exam/search?page=${page}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFilters),
      });

      if (response.ok) {
        const data = await response.json();
        setProblems((prevProblems) => page === 0 ? data.content : [...prevProblems, ...data.content]);
        setPage(data.pageable.pageNumber + 1);
        setHasMore(!data.last);
      } else {
        console.error('Failed to fetch search results');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-20">
      <div className="w-full max-w-[1440px] bg-white p-4 shadow-lg">
        <FilterComponent onFilterChange={(newFilters) => fetchProblems(newFilters, 0)} />
      </div>
      <div className="w-full max-w-[1440px] bg-white p-4 mt-4 shadow-lg">
        <ProblemCardList problems={problems} fetchMore={() => fetchProblems(filters, page)} hasMore={hasMore} />
      </div>
    </div>
  );
}
