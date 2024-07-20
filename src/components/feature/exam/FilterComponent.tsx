'use client'

import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

const years = [2021, 2022, 2023];
const months = ['전체', '3월', '4월', '6월', '7월', '9월', '10월', '11월'];
const subjects = ['전체', '국어', '영어', '수학', '과탐', '사탐', '한국사'];

function FilterComponent() {
  const [selectedStartYear, setSelectedStartYear] = useState<number>(2021);
  const [selectedEndYear, setSelectedEndYear] = useState<number>(2023);
  const [selectedMonths, setSelectedMonths] = useState<string[]>(months);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(subjects);

  const toggleSelection = (item: string, setSelected: React.Dispatch<React.SetStateAction<string[]>>, selectedItems: string[]) => {
    if (item === '전체') {
      setSelected(selectedItems.length === months.length ? [] : months);
    } else {
      if (selectedItems.includes(item)) {
        setSelected(selectedItems.filter(i => i !== item));
      } else {
        setSelected([...selectedItems, item]);
      }
    }
  };

  const handleButtonClick = () => {
    const filters = {
      startYear: selectedStartYear,
      endYear: selectedEndYear,
      months: selectedMonths,
      subjects: selectedSubjects,
    };
    console.log('Selected Filters:', filters);
    // Add your logic to handle the filters here, e.g., fetch filtered data
  };

  return (
    <div className="relative w-[1440px] h-[459px]">
      <div className="absolute w-full h-full "></div>
      <div className="absolute flex flex-col items-end gap-6 p-0 w-[721px] h-[262px] left-[57px] top-[34px]">
        <div className="flex flex-row items-end gap-9 w-full h-[70px]">
          <div className="flex flex-col w-[240px] h-[70px]">
            <label className="font-bold text-lg text-[#1E1E1E]">연도</label>
            <select
              value={selectedStartYear}
              onChange={(e) => setSelectedStartYear(Number(e.target.value))}
              className="mt-1 w-full h-[40px] p-2 text-lg border border-[#D9D9D9] rounded-lg"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-[240px] h-[70px]">
            <label className="font-bold text-lg text-[#1E1E1E]">연도</label>
            <select
              value={selectedEndYear}
              onChange={(e) => setSelectedEndYear(Number(e.target.value))}
              className="mt-1 w-full h-[40px] p-2 text-lg border border-[#D9D9D9] rounded-lg"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-bold text-lg text-[#1E1E1E]">시험</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {months.map((month) => (
              <label key={month} className="flex items-center gap-2">
                <Checkbox
                  className="h-5 w-5 border border-[#D9D9D9] bg-white"
                  checked={selectedMonths.includes(month)}
                  onChange={() => toggleSelection(month, setSelectedMonths, selectedMonths)}
                />
                <span className="font-normal text-lg text-[#1E1E1E]">{month}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-bold text-lg text-[#1E1E1E]">영역</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {subjects.map((subject) => (
              <label key={subject} className="flex items-center gap-2">
                <Checkbox
                  className="h-5 w-5 border border-[#D9D9D9] bg-white"
                  checked={selectedSubjects.includes(subject)}
                  onChange={() => toggleSelection(subject, setSelectedSubjects, selectedSubjects)}
                />
                <span className="font-normal text-lg text-[#1E1E1E]">{subject}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute w-[54px] h-[40px] left-[1349px] top-[391px] bg-[#8DB2EA] border border-[#2C2C2C] rounded-lg flex items-center justify-center cursor-pointer"
        onClick={handleButtonClick}
      >
        <span className="font-normal text-lg text-[#F5F5F5]">확인</span>
      </div>
    </div>
  );
}

export default FilterComponent;
