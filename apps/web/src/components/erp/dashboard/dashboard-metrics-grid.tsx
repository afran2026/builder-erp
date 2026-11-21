import type { ReactNode } from 'react';
import { DashboardMetricCard } from './dashboard-metric-card';

export type DashboardMetric = {
  id: string;
  label: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  trend?: string;
  tone?: 'default' | 'success' | 'warning' | 'danger';
};

type DashboardMetricsGridProps = {
  metrics: DashboardMetric[];
  columns?: 2 | 3 | 4 | 5;
  className?: string;
};

export function DashboardMetricsGrid({
  metrics,
  columns = 4,
  className = '',
}: DashboardMetricsGridProps) {
  return (
    <div
      className={`erp-dashboard-metrics-grid \${className}`.trim()}
      data-columns={columns}
    >
      {metrics.map((metric) => (
        <DashboardMetricCard
          key={metric.id}
          label={metric.label}
          value={metric.value}
          description={metric.description}
          icon={metric.icon}
          trend={metric.trend}
          tone={metric.tone}
        />
      ))}
    </div>
  );
}
