import React from 'react'

import { Checkbox } from '@/components/ui/checkbox'

interface LabelProps {
  name: string
  selectedValues: string[]
  toggleSelection: (
    item: string,
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    selectedItems: string[],
  ) => void
  setSelected: React.Dispatch<React.SetStateAction<string[]>>
}

function Label({ name, selectedValues, toggleSelection, setSelected }: LabelProps) {
  return (
    <label className="flex items-center gap-2">
      <Checkbox
        id={`label-${name}`}
        className="h-5 w-6 border border-brand-primary-200 bg-white text-brand-primary-400"
        checked={selectedValues.includes(name)}
        onCheckedChange={() => toggleSelection(name, setSelected, selectedValues)}
      />
      <label
        htmlFor={`label-${name}`}
        className={`text-lg ${selectedValues.includes(name) ? 'font-semibold' : 'text-brand-primary-500'}`}
      >
        {name}
      </label>
    </label>
  )
}

export default Label
