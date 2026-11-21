import type { ReactNode } from 'react';

type DashboardMetricCardProps = {
  label: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  trend?: string;
  tone?: 'default' | 'success' | 'warning' | 'danger';
};

export function DashboardMetricCard({
  label,
  value,
  description,
  icon,
  trend,
  tone = 'default',
}: DashboardMetricCardProps) {
  return (
    <article className="erp-dashboard-metric" data-tone={tone}>
      <div className="erp-dashboard-metric__top">
        <span className="erp-dashboard-metric__label">{label}</span>
        {icon ? <span className="erp-dashboard-metric__icon">{icon}</span> : null}
      </div>
      <p className="erp-dashboard-metric__value">{value}</p>
      {(description || trend) ? (
        <div className="erp-dashboard-metric__footer">
          {description ? <span>{description}</span> : null}
          {trend ? <span className="erp-dashboard-metric__trend">{trend}</span> : null}
        </div>
      ) : null}
    </article>
  );
}
