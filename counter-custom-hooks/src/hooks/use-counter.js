import { useState, useEffect } from "react";

const useCounter = (isIncrement = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        isIncrement ? prevCounter + 1 : prevCounter - 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [isIncrement]);

  return counter;
};

export default useCounter;
