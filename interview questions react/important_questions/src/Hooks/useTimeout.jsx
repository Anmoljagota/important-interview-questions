import React, { useEffect, useState } from "react";

const useTimeout = (props) => {
  const [timeout, setShowTimeout] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowTimeout(!timeout);
    }, props);
  }, []);
  return timeout;
};

export default useTimeout;
