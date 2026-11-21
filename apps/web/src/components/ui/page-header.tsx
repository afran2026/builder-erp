import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
}

export function PageHeader({
  title,
  description,
  eyebrow,
  actions,
}: PageHeaderProps) {
  return (
    <header className="erp-ui-page-header">
      <div className="erp-ui-page-header__copy">
        {eyebrow ? (
          <p className="erp-ui-page-header__eyebrow">{eyebrow}</p>
        ) : null}
        <h1 className="erp-ui-page-header__title">{title}</h1>
        {description ? (
          <p className="erp-ui-page-header__description">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? (
        <div className="erp-ui-page-header__actions">{actions}</div>
      ) : null}
    </header>
  );
}
