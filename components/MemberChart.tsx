import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { ChartData } from '../types';

interface MemberChartProps {
  data: ChartData[];
}

const CustomCursor = (props: any) => {
  const { x, y, width, height } = props;
  return (
    <rect 
      x={x} 
      y={y} 
      width={width} 
      height={height} 
      fill="#ffffff" 
      fillOpacity={0.05} 
      rx={4}
    />
  );
};

export const MemberChart: React.FC<MemberChartProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border-dark p-6 bg-surface-dark h-full min-h-[350px]">
      <div className="flex flex-col gap-1">
        <h3 className="text-white text-lg font-semibold">Nuevos Miembros Este Mes</h3>
        <div className="flex items-baseline gap-3">
          <p className="text-white text-4xl font-bold">124</p>
          <p className="text-primary text-sm font-semibold bg-primary/10 px-2 py-0.5 rounded">+15.3%</p>
        </div>
        <p className="text-text-muted text-sm">Últimos 30 días</p>
      </div>

      <div className="flex-1 w-full min-h-[200px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9db9a6', fontSize: 12, dy: 10 }} 
            />
            <Tooltip 
              cursor={<CustomCursor />}
              contentStyle={{ 
                backgroundColor: '#111813', 
                border: '1px solid #3b5443', 
                borderRadius: '8px',
                color: '#fff' 
              }}
              itemStyle={{ color: '#13ec5b' }}
              labelStyle={{ display: 'none' }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={60}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === data.length - 1 ? '#13ec5b' : '#1e3826'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
