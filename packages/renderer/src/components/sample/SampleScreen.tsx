import '@/components/sample/SampleScreen.css';
import ReactiveHash from '@/components/sample/ReactiveHash';
import ElectronVersions from '@/components/sample/ElectronVersions';
import ReactiveCounter from '@/components/sample/ReactiveCounter';

const APP_VERSION = import.meta.env.VITE_APP_VERSION;

export default function SampleScreen() {
  return (
    <>
      <img
        alt="Vue logo"
        src="../assets/logo.svg"
        width="150"
      />

      <p>App version: {APP_VERSION}</p>

      <p>
        For a guide and recipes on how to configure / customize this project,
        <br />
        check out the
        <a
          href="https://github.com/cawa-93/vite-electron-builder"
          target="_blank"
          rel="noreferrer"
        >
          vite-electron-builder documentation
        </a>
        .
      </p>
      <ReactiveCounter />
      <ReactiveHash />
      <ElectronVersions />
      <p>
        Edit <code>packages/renderer/src/sample/ViteSplashScreen.tsx</code> to test hot module
        replacement.
      </p>
    </>
  );
}
