import { versions } from '#preload';
export default function ElectronVersions() {
  return (
    <fieldset className="border border-solid border-gray-300 p-3">
      <legend className="px-2">Environment</legend>
      <table
        id="process-versions"
        className="mx-auto"
      >
        <tbody>
          {Object.entries(versions).map(([lib, version]) => (
            <tr key={lib}>
              <th className="text-right">{lib} :</th>
              <td className="text-left">v{version}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <code className="text-sm">packages/renderer/src/components/ElectronVersions.tsx</code>
    </fieldset>
  );
}
