import {useState} from 'react';
export default function ReactiveCounter() {
  const [count, setCount] = useState(0);
  return (
    <fieldset>
      <legend>Test React Reactivity</legend>
      <button onClick={() => setCount(count => count + 1)}>
        count is <span className="count">{count}</span>
      </button>
      <code>packages/renderer/src/components/sampleReactiveCounter.tsx</code>
    </fieldset>
  );
}
