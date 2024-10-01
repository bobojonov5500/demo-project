import React from "react";

const Input = ({ type, label, state, setstate }) => {
  return (
    <div>
      <label className="block my-2 text-sm font-medium">{label}</label>
      <div className="relative flex items-center">
        <input
          onChange={(e) => setstate(e.target.value)}
          value={state}
          name={label}
          type={type}
          required
          className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
          placeholder={label}
        />
      </div>
    </div>
  );
};

export default Input;
