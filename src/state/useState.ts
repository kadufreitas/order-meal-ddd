import { useEffect } from 'react';
import type { Container } from 'src/container';
import { useAppDispatch, useAppSelector, type RootState } from 'src/state/store';
import { useContainer } from 'src/ui/context/container';

export const useStore = (field: keyof RootState, useCase: keyof Container) => {
  const dispatch = useAppDispatch();
  const container = useContainer();
  const currentUseCase = container[useCase];

  const { loading, error, ...data } = useAppSelector((state) => state[field]);

  useEffect(() => {
    dispatch(currentUseCase());
  }, [currentUseCase, dispatch]);

  return { error, loading, data };
};
