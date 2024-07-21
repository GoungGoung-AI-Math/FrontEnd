import React from 'react';

function ProblemCard() {
  return (
    <div className="flex flex-col w-full p-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full" style={{ maxWidth: '1440px' }}>
        <div className="flex flex-row items-center justify-between">
          <div className="w-40 h-40 bg-gray-300 flex justify-center items-center mr-4"> {/* 여기에 margin-right 추가 */}
            <span className="text-2xl">이미지</span>
          </div>
          <div className="flex-grow">
            <h2 className="text-xl font-bold">2024 수능 수학 미적분</h2>
            <p className="text-gray-500">수정 상태 또는 조회수 또는 총 해결된 문제 수?</p>
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

function ProblemCardList() {
  return (
    <div className="overflow-y-auto h-[520px]"> {/* 고정 높이를 주고 overflow-y-auto로 스크롤 활성화 */}
      {Array.from({ length: 10 }, (_, index) => (
        <ProblemCard key={index} />  // 각 카드에 유니크한 key 할당
      ))}
    </div>
  );
}

export default ProblemCardList;
