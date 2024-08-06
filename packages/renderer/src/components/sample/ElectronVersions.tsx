import {versions} from '#preload';
export default function ElectronVersions() {
  return (
    <fieldset>
      <legend>Environment</legend>
      <table id="process-versions">
        <tbody>
          {Object.entries(versions).map(([lib, version]) => (
            <tr key={lib}>
              <th>{lib} :</th>
              <td>v{version}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <code>packages/renderer/src/components/ElectronVersions.tsx</code>
    </fieldset>
  );
}
