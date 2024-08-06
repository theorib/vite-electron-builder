import {useState, useMemo} from 'react';
import {sha256sum} from '#preload';

export default function ReactiveHash() {
  const [rawString, setRawString] = useState('Hello World');

  const hashedString = useMemo(() => sha256sum(rawString), [rawString]);

  return (
    <fieldset>
      <legend>Test Node.js API</legend>
      <table>
        <tbody>
          <tr>
            <th>
              <label htmlFor="reactive-hash-raw-value">Raw value :</label>
            </th>
            <td>
              <input
                id="reactive-hash-raw-value"
                value={rawString}
                onChange={e => setRawString(e.target.value)}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="reactive-hash-hashed-value">Hashed by node:crypto :</label>
            </th>
            <td>
              <input
                id="reactive-hash-hashed-value"
                value={hashedString}
                readOnly
                disabled
                type="text"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <code>packages/renderer/src/components/sample/ReactiveHash.tsx</code>
    </fieldset>
  );
}
