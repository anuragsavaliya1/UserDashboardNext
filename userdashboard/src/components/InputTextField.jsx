"use client";
import React from "react";

const InputTextField = ({ label, name, value, onChange, placeholder = "", required = false, className = "" }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="text-sm text-gray-700 font-medium">
          {label}
        </label>
      )}
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default InputTextField;
