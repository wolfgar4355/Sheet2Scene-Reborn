'use client';

import * as React from 'react';

type FieldType = 'text' | 'textarea' | 'number' | 'select' | 'checkbox';

type OptionLike =
  | string
  | { value: string | number; label?: string };

type Field = {
  id?: string;
  name?: string;              // label
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  help?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: OptionLike[];     // fallback si pas d’optionsFromSheet
};

type Props = {
  field: Field;
  value?: string | number | boolean | null;
  onChange: (v: string | number | boolean | null) => void;
  world?: unknown;            // passé au resolver d’options si besoin
  optionsFromSheet?: (field: Field, world?: unknown) => OptionLike[] | undefined;
};

export default function FieldInput({
  field,
  value,
  onChange,
  world,
  optionsFromSheet,
}: Props) {
  const id =
    field.id ??
    (field.name
      ? `fld-${field.name.toLowerCase().replace(/\s+/g, '-')}`
      : 'fld');

  const labelText = field.name ?? id;

  // Résolution des options pour <select>
  const resolvedOptions: { value: string | number; label: string }[] = (
    optionsFromSheet?.(field, world) ?? field.options ?? []
  ).map((o) =>
    typeof o === 'string'
      ? { value: o, label: o }
      : { value: o.value, label: String(o.label ?? o.value) }
  );

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1 font-medium">
        {labelText}
        {field.required ? ' *' : ''}
      </label>

      {(() => {
        switch (field.type) {
          case 'textarea':
            return (
              <textarea
                id={id}
                required={field.required}
                placeholder={field.placeholder}
                value={String(value ?? '')}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded border p-2"
                rows={4}
              />
            );

          case 'number':
            return (
              <input
                id={id}
                type="number"
                required={field.required}
                placeholder={field.placeholder}
                min={field.min}
                max={field.max}
                step={field.step}
                value={
                  value === null || value === undefined ? '' : String(value)
                }
                onChange={(e) => onChange(e.target.value === '' ? null : Number(e.target.value))}
                className="w-full rounded border p-2"
              />
            );

          case 'select':
            return (
              <select
                id={id}
                required={field.required}
                value={String(value ?? '')}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded border p-2"
              >
                {/* Option vide si non-required ou placeholder fourni */}
                {!field.required && <option value=""></option>}
                {resolvedOptions.map((opt) => (
                  <option key={String(opt.value)} value={String(opt.value)}>
                    {opt.label}
                  </option>
                ))}
              </select>
            );

          case 'checkbox':
            return (
              <input
                id={id}
                type="checkbox"
                checked={Boolean(value)}
                onChange={(e) => onChange(e.target.checked)}
                className="h-4 w-4 align-middle"
              />
            );

          case 'text':
          default:
            return (
              <input
                id={id}
                type="text"
                required={field.required}
                placeholder={field.placeholder}
                value={String(value ?? '')}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded border p-2"
              />
            );
        }
      })()}

      {field.help && (
        <p id={`${id}-help`} className="mt-1 text-sm text-gray-500">
          {field.help}
        </p>
      )}
    </div>
  );
}
