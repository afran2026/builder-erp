import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

interface FieldProps {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

export function Field({
  label,
  hint,
  error,
  required,
  children,
}: FieldProps) {
  return (
    <div className="erp-ui-field">
      <span className="erp-ui-field__label">
        {label}
        {required ? (
          <span className="erp-ui-field__required"> *</span>
        ) : null}
      </span>
      {children}
      {error ? (
        <span className="erp-ui-field__error" role="alert">
          {error}
        </span>
      ) : hint ? (
        <span className="erp-ui-field__hint">{hint}</span>
      ) : null}
    </div>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`erp-ui-input ${props.className ?? ''}`.trim()} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`erp-ui-select ${props.className ?? ''}`.trim()} />;
}

export function Textarea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  return <textarea {...props} className={`erp-ui-textarea ${props.className ?? ''}`.trim()} />;
}
