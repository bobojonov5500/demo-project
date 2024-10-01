import React from "react";

const TextArea = ({ label, type, state, setstate }) => {
  return (
    <div>
      <label className="block  my-2 text-sm font-medium">{label}</label>
      <div className=" space-y-3">
        <textarea
          className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
          rows={5}
          type={type}
          placeholder={label}
          value={state}
          onChange={(e) => setstate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextArea;
