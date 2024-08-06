import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';
import ReactiveHash from '@/components/sample/ReactiveHash';
import userEvent from '@testing-library/user-event';

vi.mock('#preload', () => {
  return {
    sha256sum: vi.fn((s: string) => `${s}:HASHED`),
  };
});

test('ReactiveHash component', async () => {
  render(<ReactiveHash />);
  const user = userEvent.setup();

  const legend = screen.getByRole('group', { name: 'Test Node.js API' });
  expect(legend).toBeInTheDocument();

  const dataInput = within(legend).getByRole('textbox', { name: 'Raw value :' });
  expect(dataInput).toBeInTheDocument();
  const hashInput = within(legend).getByRole('textbox', { name: 'Hashed by node:crypto :' });
  expect(hashInput).toBeInTheDocument();

  const dataToHashed = Math.random().toString(36).slice(2, 7);

  await user.clear(dataInput);
  await user.type(dataInput, dataToHashed);
  expect(hashInput).toHaveValue(`${dataToHashed}:HASHED`);
});
