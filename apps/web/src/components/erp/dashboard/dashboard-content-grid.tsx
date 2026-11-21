import type { ReactNode } from 'react';

type DashboardContentGridProps = {
  primary: ReactNode;
  secondary?: ReactNode;
  fullWidth?: ReactNode;
  className?: string;
};

export function DashboardContentGrid({
  primary,
  secondary,
  fullWidth,
  className = '',
}: DashboardContentGridProps) {
  return (
    <div className={`erp-dashboard-content \${className}`.trim()}>
      <div className="erp-dashboard-content__main">{primary}</div>
      {secondary ? (
        <div className="erp-dashboard-content__secondary">{secondary}</div>
      ) : null}
      {fullWidth ? (
        <div className="erp-dashboard-content__full">{fullWidth}</div>
      ) : null}
    </div>
  );
}
