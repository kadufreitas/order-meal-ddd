import { createContext } from 'react';
import { type Container } from 'src/container';
import { use } from 'react';

const ContainerContext = createContext<Container | null>(null);
const { Provider: ContainerProvider } = ContainerContext;

const useContainer = () => {
  const container = use(ContainerContext);

  if (!container) {
    throw Error('You used useContainer outside a ContainerProvider');
  }

  return container;
};

export { useContainer, ContainerProvider };
