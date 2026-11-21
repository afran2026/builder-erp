import type { ReactNode } from 'react';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <section className="erp-ui-empty-state" aria-live="polite">
      {icon ? (
        <div className="erp-ui-empty-state__icon" aria-hidden="true">
          {icon}
        </div>
      ) : null}
      <h3 className="erp-ui-empty-state__title">{title}</h3>
      {description ? (
        <p className="erp-ui-empty-state__description">{description}</p>
      ) : null}
      {action ? <div style={{ marginTop: 16 }}>{action}</div> : null}
    </section>
  );
}
