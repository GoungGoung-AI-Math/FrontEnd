import React from 'react';

import { Checkbox } from '@/components/ui/checkbox';

interface LabelProps {
  name: string;
  selectedValues: string[];
  toggleSelection: (item: string, setSelected: React.Dispatch<React.SetStateAction<string[]>>, selectedItems: string[]) => void;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

function Label({ name, selectedValues, toggleSelection, setSelected }: LabelProps) {
  return (
    <label className="flex items-center gap-2">
      <Checkbox
        id={`label-${name}`}
        className="h-5 w-6 border border-[#D9D9D9] bg-white"
        checked={selectedValues.includes(name)}
        onCheckedChange={() => toggleSelection(name, setSelected, selectedValues)}
      />
      <label
        htmlFor={`label-${name}`}
        className={`font-normal text-[14px] ${selectedValues.includes(name) ? 'text-blue-500' : 'text-[#1E1E1E]'}`}
      >
        {name}
      </label>
    </label>
  );
}

export default Label;
