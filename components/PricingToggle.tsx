'use client';

import { useState } from 'react';

interface PricingToggleProps {
  monthlyLabel: string;
  annualLabel: string;
  saveMessage?: string;
  onToggle: (isAnnual: boolean) => void;
}

export default function PricingToggle({ monthlyLabel, annualLabel, saveMessage, onToggle }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    const newValue = !isAnnual;
    setIsAnnual(newValue);
    onToggle(newValue);
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span className={`text-lg font-semibold transition-colors ${!isAnnual ? 'text-purple-600' : 'text-gray-500'}`}>
        {monthlyLabel}
      </span>
      <button
        onClick={handleToggle}
        className="relative w-16 h-8 bg-gray-200 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        role="switch"
        aria-checked={isAnnual}
        style={{ backgroundColor: isAnnual ? '#9333ea' : '#e5e7eb' }}
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 transform ${
            isAnnual ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
      </button>
      <span className={`text-lg font-semibold transition-colors ${isAnnual ? 'text-purple-600' : 'text-gray-500'}`}>
        {annualLabel}
      </span>
      {isAnnual && saveMessage && (
        <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
          {saveMessage}
        </span>
      )}
    </div>
  );
}
