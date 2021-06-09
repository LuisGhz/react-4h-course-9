import { useState, useCallback } from 'react';

const useUserCounter = (initialValue = 0, modifier = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = useCallback(() => {
    setCounter(counter + modifier);
  }, [counter, modifier]);

  const decrement = useCallback(() => {
    setCounter(counter - modifier)
  }, [counter, modifier]);

  const reset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return [counter, increment, decrement, reset];
}

export default useUserCounter;