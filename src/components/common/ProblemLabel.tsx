import React from 'react';

type ProblemLabelProps = {
  label: string;
};

function ProblemLabel({ label }: ProblemLabelProps) {
  return (
    <span className="bg-gray-200 text-gray-700 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
      {label}
    </span>
  );
}

export default ProblemLabel;
