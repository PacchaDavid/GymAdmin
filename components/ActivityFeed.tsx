import React from 'react';
import { UserPlus, Edit2, Calendar, DollarSign } from 'lucide-react';
import { ActivityItem } from '../types';

interface ActivityFeedProps {
  items: ActivityItem[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ items }) => {
  const getIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'user': return <UserPlus size={18} />;
      case 'routine': return <Edit2 size={18} />;
      case 'booking': return <Calendar size={18} />;
      case 'payment': return <DollarSign size={18} />;
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border-dark p-6 bg-surface-dark h-full">
      <h3 className="text-white text-lg font-semibold">Actividad Reciente</h3>
      <div className="flex flex-col gap-6 mt-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-start gap-4">
            <div className="bg-primary/20 rounded-full p-2.5 text-primary mt-0.5">
              {getIcon(item.type)}
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-white text-sm font-medium">{item.title}</p>
              <p className="text-text-muted text-sm">{item.description}</p>
              <p className="text-white/40 text-xs mt-1">{item.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
