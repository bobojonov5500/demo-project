import React, { useCallback } from "react";
import { useSelector } from "react-redux";

const Validation = () => {
  const { error } = useSelector((state) => state.auth);
  const errormessage = useCallback(() => {
    return Object.keys(error === null ? "" : error).map((name) => {
      const msg = error[name].join(",");
      return msg;
    });
  }, [error]);
  return (
    <div>
      {error !== null &&
        errormessage().map((error) => (
          <div
            key={error}
            className="mt-2 bg-red-500 text-sm text-white rounded-lg p-4"
            role="alert"
            tabIndex={-1}
            aria-labelledby="hs-solid-color-danger-label"
          >
            {error}
          </div>
        ))}
    </div>
  );
};

export default Validation;
