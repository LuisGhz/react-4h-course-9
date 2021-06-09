import useUserCounter from 'customhooks/useUserCounter';

const ComponentA = () => {
  const [counter, increment, decrement, reset] = useUserCounter();

  return (
    <div>
      <p>Counter A: { counter }</p>
      <button onClick={ increment } >Increment</button>
      <button onClick={ decrement } >Decrement</button>
      <button onClick={ reset } >Reset</button>
    </div>
  );
}

export default ComponentA;