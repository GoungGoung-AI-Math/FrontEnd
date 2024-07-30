'use client'

import React, { useEffect, useRef } from 'react'

import TestCard from '../../common/TestCard'

interface Problem {
  examName: string
  createDate: string
  difficulty: string
  type: string
  revisionState: string
  totalSolveCount: number
}

interface ProblemCardListProps {
  problems: Problem[]
  fetchMore: () => void
  hasMore: boolean
}

function ProblemCardList({ problems, fetchMore, hasMore }: ProblemCardListProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasMore) {
        fetchMore()
      }
    }

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    })

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current)
    }

    return () => {
      if (observerRef.current && loadMoreRef.current) {
        observerRef.current.unobserve(loadMoreRef.current)
      }
    }
  }, [hasMore, fetchMore])

  return (
    <div className="w-full flex flex-col items-center scrollbar-hide">
      {problems.map((problem, index) => (
        <TestCard key={index} problem={problem} />
      ))}
      {hasMore && <div ref={loadMoreRef} className="h-10" />}
    </div>
  )
}

export default ProblemCardList
