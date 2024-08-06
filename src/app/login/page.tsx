import dynamic from 'next/dynamic'

import Math from '@/assets/noun-math-2385659.svg'
import Math2 from '@/assets/noun-math-6757624.svg'
import School from '@/assets/silverMedal.svg'

const LoginButton = dynamic(() => import('../../components/feature/login/LoginButton'), { ssr: false })

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg">
        <div className="w-full md:w-3/5 bg-brand-primary-500 p-10 flex flex-col justify-center items-center ">
          <Math width="200" color="#fe9999 " className="" />
          {/* <Math2 color="#fe9999 " className="" /> */}
          <h2 className="text-white text-lg mb-4">로그인을 하고</h2>
          <p className="text-white text-lg mb-4">문제를 풀어보세요</p>
          <p className="text-white text-sm">
            단지 내 쉼터를 점령
            <a href="#" className="underline">
              {' '}
              한곡
            </a>{' '}
            시원하게 <a href="#" className="underline"></a>기관 절제술
          </p>
        </div>
        <div className="w-full md:w-3/5 p-10">
          <h2 className="text-2xl mb-6">로그인</h2>
          <LoginButton />
        </div>
      </div>
    </div>
  )
}
