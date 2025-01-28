import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  defaultValue?: string | number;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, value, onChange, required = false, defaultValue = '' }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        required={required}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
      />
    </div>
  );
};

export default InputField;