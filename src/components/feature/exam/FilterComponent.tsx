import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const years = [2021, 2022, 2023];
const months = ['전체', '03', '04', '06', '07', '09', '10', '11'];
const types = ['전체', 'a', 'b', 'c'];

interface FilterComponentProps {
  onFilterChange: (filters: { startYear: number, endYear: number, months: string[], types: string[] }) => void;
}

function FilterComponent({ onFilterChange }: FilterComponentProps) {
  const [selectedStartYear, setSelectedStartYear] = useState<number>(2021);
  const [selectedEndYear, setSelectedEndYear] = useState<number>(2023);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

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
      months: selectedMonths.includes('전체') ? [] : selectedMonths,
      types: selectedTypes.includes('전체') ? [] : selectedTypes,
    };
    onFilterChange(filters);
  };

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-end gap-9 w-full">
          <div className="flex flex-col">
            <label className="font-bold text-[14px] text-[#1E1E1E]">연도</label>
            <select
              value={selectedStartYear}
              onChange={(e) => setSelectedStartYear(Number(e.target.value))}
              className="mt-1 w-[120px] h-[40px] p-2 text-lg border border-[#D9D9D9] rounded-lg"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-[14px] text-[#1E1E1E] invisible">연도</label>
            <select
              value={selectedEndYear}
              onChange={(e) => setSelectedEndYear(Number(e.target.value))}
              className="mt-1 w-[120px] h-[40px] p-2 text-lg border border-[#D9D9D9] rounded-lg"
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
          <label className="font-bold text-[14px] text-[#1E1E1E]">시험</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {months.map((month) => (
              <label key={month} className="flex items-center gap-2">
                <Checkbox
                  id={`month-${month}`}
                  className="h-5 w-6 border border-[#D9D9D9] bg-white"
                  checked={selectedMonths.includes(month)}
                  onCheckedChange={() => toggleSelection(month, setSelectedMonths, selectedMonths)}
                />
                <label
                  htmlFor={`month-${month}`}
                  className={`font-normal text-[14px] ${selectedMonths.includes(month) ? 'text-blue-500' : 'text-[#1E1E1E]'}`}
                >
                  {month}
                </label>
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-bold text-[14px] text-[#1E1E1E]">영역</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {types.map((type) => (
              <label key={type} className="flex items-center gap-2">
                <Checkbox
                  id={`type-${type}`}
                  className="h-5 w-6 border border-[#D9D9D9] bg-white"
                  checked={selectedTypes.includes(type)}
                  onCheckedChange={() => toggleSelection(type, setSelectedTypes, selectedTypes)}
                />
                <label
                  htmlFor={`type-${type}`}
                  className={`font-normal text-[14px] ${selectedTypes.includes(type) ? 'text-blue-500' : 'text-[#1E1E1E]'}`}
                >
                  {type}
                </label>
              </label>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="primary"
                  className="w-[54px] h-[40px] rounded-lg flex items-center justify-center cursor-pointer"
                  onClick={handleButtonClick}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
