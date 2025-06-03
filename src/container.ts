import { apiService } from 'src/infra/apiService';
import { makeCreateMenu } from './useCases/menuUseCases';

const menuUseCases = makeCreateMenu({ apiService });

const container = {
  menuUseCases,
};

type Container = typeof container;

export { container };
export type { Container };
