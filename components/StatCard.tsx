import React from 'react';
import { StatMetric } from '../types';

export const StatCard: React.FC<StatMetric> = ({ label, value, change, isPositive, isNeutral }) => {
  let changeColor = 'text-primary';
  if (!isPositive && !isNeutral) changeColor = 'text-accent-red';
  if (isNeutral) changeColor = 'text-text-muted';

  return (
    <div className="flex flex-col gap-2 rounded-xl p-6 border border-border-dark bg-surface-dark shadow-sm">
      <p className="text-white text-base font-medium opacity-90">{label}</p>
      <p className="text-white text-3xl font-bold tracking-tight">{value}</p>
      <p className={`${changeColor} text-sm font-semibold`}>{change}</p>
    </div>
  );
};
