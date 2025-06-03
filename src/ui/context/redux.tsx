import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import type { Store } from 'src/state/store';

type Props = {
  children: ReactNode;
  store: Store;
};

const ReduxProvider = ({ children, store }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export { ReduxProvider };
