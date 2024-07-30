import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className=" h-72 w-full bg-brand-primary-500 mt-0 flex flex-col justify-center align-middle gap-4 ">
        <div className="text-center text-white">
          <p className="font-base text-2xl">Be The Math Mater</p>
          <div className="border-b-4 rounded-full border-brand-secondary w-[11%] mx-auto my-4"></div>
          <p className=" ">온라인 수학 풀이 사이트입니다 </p>
          <p className="">문제를 풀고, 채점받고, 의견을 공유해보세요 </p>
        </div>
      </div>
      <div className=" h-48 w-full bg-brand-primary-100 mt-0 flex flex-col justify-center align-middle gap-4 ">
        <div className="flex justify-around">
          <div className="w-[15%] border-2 border-brand-primary-500 h-32 rounded-lg text-center text-2xl font-medium inline-flex flex-col items-center justify-center text-brand-primary-500 ">
            <p className=" text-lg">전체 문제</p>
            <p>100000개</p>
          </div>
          <div className="w-[15%] border-2 border-brand-primary-500 h-32 rounded-lg text-center text-2xl font-medium inline-flex flex-col items-center justify-center text-brand-primary-500 ">
            <p className=" text-lg">전체 문제</p>
            <p>100000개</p>
          </div>
          <div className="w-[15%] border-2 border-brand-primary-500 h-32 rounded-lg text-center text-2xl font-medium inline-flex flex-col items-center justify-center text-brand-primary-500 ">
            <p className=" text-lg">전체 문제</p>
            <p>100000개</p>
          </div>
        </div>
      </div>
      {/* <div className=" mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
