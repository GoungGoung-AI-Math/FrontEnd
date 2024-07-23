'use client'

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';


const TOTAL_ITEMS = 10;  // 총 데이터 개수를 10개로 설정

function ProblemCard() {
  return (
    <div className="flex flex-col w-full p-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full" style={{ maxWidth: '1440px' }}>
        <div className="flex flex-row items-center justify-between">
          <div className="w-40 h-40 flex justify-center items-center mr-4">
            <Image
              src="/assets/image.png"
              alt="이미지"
              width={160}
              height={160}
              className="object-cover"
            />
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
  const [items, setItems] = useState(Array.from({ length: 5 }, (_, index) => index));  // 초기 데이터는 5개만 로드
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && items.length < TOTAL_ITEMS) {
        setItems((prevItems) => [...prevItems, ...Array.from({ length: Math.min(5, TOTAL_ITEMS - prevItems.length) }, (_, index) => prevItems.length + index)]);
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current && loadMoreRef.current) {
        observerRef.current.unobserve(loadMoreRef.current);
      }
    };
  }, [items.length]);

  return (
    <div className="w-full flex flex-col items-center">
      {items.map((_, index) => (
        <ProblemCard key={index} />
      ))}
      {items.length < TOTAL_ITEMS && <div ref={loadMoreRef} className="h-10" />}
    </div>
  );
}

export default ProblemCardList;
