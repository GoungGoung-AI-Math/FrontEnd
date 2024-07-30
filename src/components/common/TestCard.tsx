import React from 'react'

import { Button } from '../ui/button'

interface Problem {
  examName: string
  createDate: string
  difficulty: string
  type: string
  revisionState: string
  totalSolveCount: number
}

interface ProblemCardProps {
  problem: Problem
}

function TestCard({ problem }: ProblemCardProps) {
  return (
    <div className="w-full py-4">
      <div
        className="bg-white p-6 rounded-lg border-b-2 border-brand-primary-200 shadow-sm w-full"
        style={{ maxWidth: '100%' }}
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex-col flex gap-1">
            <h2 className="text-xl font-bold">{problem.examName}</h2>
            <p className="text-gray-500">생성일: {new Date(problem.createDate).toLocaleDateString()}</p>
            <p className="text-gray-500">
              난이도: {problem.difficulty} | 유형: {problem.type} | 수정 상태: {problem.revisionState} | 푼 사람 수:{' '}
              {problem.totalSolveCount}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant={'outline'} size={'lg'} className=" border-brand-primary-300 border px-3 text-base">
              아이콘
            </Button>
            <Button variant={'outline'} size={'lg'} className=" border-brand-primary-300 border px-3 text-base">
              아이콘
            </Button>
            <Button variant={'outline'} size={'lg'} className=" border-brand-primary-300 border px-3 text-base">
              아이콘
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestCard
