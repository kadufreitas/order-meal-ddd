import { apiService } from 'src/infra/apiService';
import { makeCreateMenu } from './useCases/menuUseCases';

const menuUseCases = makeCreateMenu({ apiService });
// const mealUseCases = { getMeal: () => {} };

const container = {
  ...menuUseCases,
  // ...mealUseCases,
};

type Container = typeof container;

export { container };
export type { Container };
