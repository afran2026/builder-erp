import type { ReactNode } from 'react';

type DashboardStatusPanelProps = {
  title: string;
  description: string;
  status?: 'pending' | 'loading' | 'empty' | 'error';
  action?: ReactNode;
};

export function DashboardStatusPanel({
  title,
  description,
  status = 'pending',
  action,
}: DashboardStatusPanelProps) {
  return (
    <div className="erp-dashboard-status" data-status={status} role="status">
      <div className="erp-dashboard-status__indicator" aria-hidden="true" />
      <div className="erp-dashboard-status__body">
        <h3>{title}</h3>
        <p>{description}</p>
        {action ? <div className="erp-dashboard-status__action">{action}</div> : null}
      </div>
    </div>
  );
}
