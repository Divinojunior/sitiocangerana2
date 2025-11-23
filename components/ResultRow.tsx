import React from 'react';

interface ResultRowProps {
  label: string;
  value: string | number;
  highlight?: boolean;
  sub?: boolean;
  colorClass?: string;
  bold?: boolean;
}

export const ResultRow: React.FC<ResultRowProps> = ({ 
  label, 
  value, 
  highlight = false, 
  sub = false,
  colorClass = "text-blue-700",
  bold = false
}) => {
  return (
    <div className={`flex justify-between items-center py-2 border-b border-gray-100 last:border-0 ${
      highlight ? 'bg-blue-50 -mx-4 px-4 rounded-md my-1' : ''
    } ${sub ? 'pl-4 border-l-2 border-gray-200' : ''}`}>
      <span className={`text-sm ${sub ? 'text-gray-500' : 'text-gray-700'} ${bold ? 'font-bold' : ''}`}>
        {label}
      </span>
      <span className={`text-sm font-semibold ${colorClass}`}>
        {value}
      </span>
    </div>
  );
};
