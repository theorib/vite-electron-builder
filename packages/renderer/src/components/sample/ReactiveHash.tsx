import { useState, useMemo } from 'react';
import { sha256sum } from '#preload';

export default function ReactiveHash() {
  const [rawString, setRawString] = useState('Hello World');

  const hashedString = useMemo(() => sha256sum(rawString), [rawString]);

  return (
    <fieldset className="border border-solid border-gray-300 p-3">
      <legend className="px-2">Test Node.js API</legend>
      <table className="mx-auto">
        <tbody>
          <tr>
            <th className="text-right">
              <label htmlFor="reactive-hash-raw-value">Raw value :</label>
            </th>
            <td className="text-left">
              <input
                id="reactive-hash-raw-value"
                value={rawString}
                onChange={e => setRawString(e.target.value)}
                type="text"
                className="input input-bordered w-full max-w-xs my-2"
              />
            </td>
          </tr>
          <tr>
            <th className="text-right">
              <label htmlFor="reactive-hash-hashed-value">Hashed by node:crypto :</label>
            </th>
            <td className="text-left">
              <input
                id="reactive-hash-hashed-value"
                value={hashedString}
                readOnly
                disabled
                type="text"
                className="input input-bordered w-full max-w-xs my-2"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <code className="my-2 text-sm">packages/renderer/src/components/sample/ReactiveHash.tsx</code>
    </fieldset>
  );
}
