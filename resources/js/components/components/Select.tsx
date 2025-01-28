import React from "react";

interface SelectProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
    label: string;
}

const Select: React.FC<SelectProps> = ({
    name,
    value,
    onChange,
    options,
    label,
}) => {
    return (
        <div>
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
