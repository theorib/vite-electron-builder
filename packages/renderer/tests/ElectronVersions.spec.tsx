import {render, screen, within} from '@testing-library/react';
import {expect, test, vi} from 'vitest';
import '@testing-library/jest-dom';
import ElectronVersions from '/@/components/sample/ElectronVersions';

vi.mock('#preload', () => {
  return {
    versions: {lib1: 1, lib2: 2},
  };
});

test('ElectronVersions component', async () => {
  render(<ElectronVersions />);

  const legend = screen.getByRole('group', {name: /Environment/i});
  expect(legend).toBeInTheDocument();

  const rows = await screen.findAllByRole('row');
  expect(rows).toHaveLength(2);
  expect(within(rows[0]).getByRole('columnheader')).toHaveTextContent('lib1 :');
  expect(within(rows[0]).getByRole('cell')).toHaveTextContent('v1');
  expect(within(rows[1]).getByRole('columnheader')).toHaveTextContent('lib2 :');
  expect(within(rows[1]).getByRole('cell')).toHaveTextContent('v2');
});
