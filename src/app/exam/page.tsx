'use client'

import React, { useState } from 'react'

import EmptyExam from '@/components/feature/exam/EmptyExam'
import FilterComponent from '@/components/feature/exam/FilterComponent'
import ProblemCardList from '@/components/feature/exam/TestCardList'

interface Filters {
  startYear: number
  endYear: number
  months: string[]
  types: string[]
}

interface Problem {
  examName: string
  createDate: string
  difficulty: string
  type: string
  revisionState: string
  totalSolveCount: number
}

export default function ExamPage(): JSX.Element {
  const [problems, setProblems] = useState<Problem[]>([])
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [filters, setFilters] = useState<Filters>({ startYear: 2021, endYear: 2023, months: [], types: [] })
  const [searched, setSearched] = useState(false)

  const fetchProblems = async (newFilters: Filters, page: number = 0) => {
    if (page === 0) {
      setProblems([])
    }
    setFilters(newFilters)
    setSearched(true)
    try {
      const response = await fetch(`https://www.udongrang.com:7070/exam/search?page=${page}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFilters),
      })

      if (response.ok) {
        const data = await response.json()
        setProblems((prevProblems) => (page === 0 ? data.content : [...prevProblems, ...data.content]))
        setPage(data.pageable.pageNumber + 1)
        setHasMore(!data.last)
      } else {
        console.error('Failed to fetch search results')
      }
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  return (
    <div className=" flex flex-col items-center pt-2 ">
      <div className="w-full p-4 border-b border-brand-primary-100 bg-brand-primary-100 rounded-lg text-brand-primary-500">
        <FilterComponent onFilterChange={(newFilters) => fetchProblems(newFilters, 0)} />
      </div>
      <div className="w-full bg-white p-2 mt-4 border-b-4 border-brand-primary-100">
        {searched ? (
          <ProblemCardList problems={problems} fetchMore={() => fetchProblems(filters, page)} hasMore={hasMore} />
        ) : (
          <EmptyExam />
        )}
      </div>
    </div>
  )
}
