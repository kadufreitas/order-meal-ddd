import { useStore } from 'src/state/useState';

export const WeekMenu = () => {
  const {
    data: { menu },
    loading,
  } = useStore('menu', 'getThisWeekMenu');

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>TEST</div>
      <div>{menu?.id}</div>
      <div>{menu?.name}</div>
      <div>{menu?.dateStart.toString()}</div>
      <div>{menu?.dateEnd.toString()}</div>
      <div>{menu?.protein}</div>
      <div>{menu?.base}</div>
      <div>{menu?.legumes}</div>
      <div>{menu?.followUp}</div>
    </>
  );
};
