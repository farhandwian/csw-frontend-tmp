// Input.tsx
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps {
  fieldName: string;
  placeHolder: string;
  fieldType: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error: string | undefined;
  touched: boolean;
  isDisabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  fieldName,
  fieldType,
  placeHolder,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
  isDisabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const style = `bg-[#F8F8F8] block w-full rounded-lg border p-3 text-gray-900 shadow-sm ring-1 ring-inset ${
    touched && error ? "ring-red-500" : "ring-gray-300"
  } placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
    isDisabled ? "bg-gray-200 text-gray-400" : ""
  }`;

  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-1 relative">
        <input
          className={style}
          placeholder={placeHolder}
          type={
            fieldType === "password"
              ? showPassword
                ? "text"
                : "password"
              : fieldType
          }
          name={fieldName}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={isDisabled}
        />
        {fieldType === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>
      {touched && error && (
        <div className="mt-1" style={{ color: "red" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
