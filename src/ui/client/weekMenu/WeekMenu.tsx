import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/state/store';
import { useContainer } from 'src/ui/context/container';

export const WeekMenu = () => {
  const dispatch = useAppDispatch();
  const {
    menuUseCases: { getThisWeekMenu },
  } = useContainer();
  const { menu, loading } = useAppSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getThisWeekMenu());
  }, [dispatch, getThisWeekMenu]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>TEST{menu?.name}</div>;
};
