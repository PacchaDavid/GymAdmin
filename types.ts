export interface StatMetric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  isNeutral?: boolean;
}

export interface ActivityItem {
  id: string;
  type: 'user' | 'routine' | 'booking' | 'payment';
  title: string;
  description: string;
  timeAgo: string;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: 'Activo' | 'Inactivo' | 'Vencido';
  membership: string;
  startDate: string;
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  weight: number;
  rest: number;
}

export interface Routine {
  id: string;
  name: string;
  exercises: Exercise[];
}
