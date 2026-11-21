import type { ReactNode } from 'react';

type DashboardSectionProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function DashboardSection({
  title,
  description,
  action,
  children,
  className = '',
}: DashboardSectionProps) {
  return (
    <section className={`erp-dashboard-section \${className}`.trim()}>
      <header className="erp-dashboard-section__header">
        <div>
          <h2 className="erp-dashboard-section__title">{title}</h2>
          {description ? (
            <p className="erp-dashboard-section__description">{description}</p>
          ) : null}
        </div>
        {action ? <div className="erp-dashboard-section__action">{action}</div> : null}
      </header>
      <div className="erp-dashboard-section__content">{children}</div>
    </section>
  );
}
