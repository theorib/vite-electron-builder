import {render, screen} from '@testing-library/react';
import {expect, test} from 'vitest';
import userEvent from '@testing-library/user-event';
import ReactiveCounter from '/@/components/sample/ReactiveCounter';

test('ViteSplashScreen component', async () => {
  render(<ReactiveCounter />);

  const user = userEvent.setup();

  const header = screen.getByRole('group', {name: /Test React Reactivity/i});
  const button = screen.getByRole('button', {name: /count is 0/i});
  expect(header).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  await user.click(button);
  await user.click(button);
  expect(button).toHaveTextContent('count is 2');
});
