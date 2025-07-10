import React from 'react';
import { FormFieldProps } from '../types';

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  options = [],
  rows = 4,
  maxLength
}) => {
  const baseClasses = "w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:opacity-60";
  const borderClasses = error ? "border-red-300" : "border-gray-300";

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            required={required}
            rows={rows}
            placeholder={placeholder}
            className={`${baseClasses} ${borderClasses} resize-none`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            maxLength={maxLength}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        );

      case 'select':
        return (
          <select
            id={name}
            name={name}
            required={required}
            className={`${baseClasses} ${borderClasses}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            aria-describedby={error ? `${name}-error` : undefined}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            id={name}
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            className={`${baseClasses} ${borderClasses}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            maxLength={maxLength}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        );
    }
  };

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderInput()}
      {error && (
        <div id={`${name}-error`} className="text-red-500 text-sm mt-1" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default FormField; 