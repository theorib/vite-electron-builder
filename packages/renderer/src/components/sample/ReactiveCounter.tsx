import { useState } from 'react';
export default function ReactiveCounter() {
  const [count, setCount] = useState(0);
  return (
    <fieldset className="border border-solid border-gray-300 p-3 flex flex-col items-center gap-2">
      <legend className="px-2">Test React Reactivity</legend>
      <button
        onClick={() => setCount(count => count + 1)}
        className="btn"
      >
        count is <span className="count">{count}</span>
      </button>
      <code className="text-sm">packages/renderer/src/components/sampleReactiveCounter.tsx</code>
    </fieldset>
  );
}
