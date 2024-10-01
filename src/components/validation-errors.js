import React, { useCallback } from "react";
import { useSelector } from "react-redux";

const Validation = () => {
  const Autherror = useSelector((state) => state.auth.error);
  const Editerror = useSelector((state) => state.article.error);

  const combinedError = { ...Autherror, ...Editerror };
  const errormessage = useCallback(() => {
    return Object.keys(combinedError === null ? "" : combinedError).map(
      (name) => {
        const msg = combinedError[name].join(",");
        return msg;
      }
    );
  }, [combinedError]);
  return (
    <div>
      {combinedError !== null &&
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
