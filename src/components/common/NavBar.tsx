import Link from 'next/link'
import React from 'react'

import Math from '@/assets/math_1411684.svg'

import { Button } from '../ui/button'

export default function NavBar() {
  return (
    <div className="z-20 border-b-2 w-full top-0 bg-white flex h-20 justify-between items-center border-brand-primary-100 px-4">
      <div className="flex items-center text-brand-primary-500 text-base">
        <div className="pr-10">
          <Math width="45" height="45" />
        </div>
        <Link className="px-4 py-1 rounded-md hover:bg-brand-primary-100" href={'/'}>
          {' '}
          홈
        </Link>
        <Link className="px-4 py-1 rounded-md hover:bg-brand-primary-100" href={'/'}>
          {' '}
          교육청 기출
        </Link>
        <Link className="px-4 py-1 rounded-md hover:bg-brand-primary-100" href={'/'}>
          {' '}
          평가원 기출
        </Link>
        <Link className="px-4 py-1 rounded-md hover:bg-brand-primary-100" href={'/'}>
          {' '}
          유형별 문제
        </Link>
      </div>

      <Button variant={'primary'} className="w-24">
        로그인
      </Button>
    </div>
  )
}
