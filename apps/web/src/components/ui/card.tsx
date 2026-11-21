import type { HTMLAttributes, ReactNode } from 'react';

export function Card({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`erp-ui-card ${className}`.trim()}
      {...props}
    />
  );
}

export function CardHeader({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`erp-ui-card__header ${className}`.trim()}
      {...props}
    />
  );
}

export function CardContent({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`erp-ui-card__content ${className}`.trim()}
      {...props}
    />
  );
}

export function CardFooter({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`erp-ui-card__footer ${className}`.trim()}
      {...props}
    />
  );
}

export interface CardTitleProps {
  children: ReactNode;
}

export function CardTitle({ children }: CardTitleProps) {
  return <h3>{children}</h3>;
}
