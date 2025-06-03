import { ContainerProvider } from './context/container';
import { ReduxProvider } from './context/redux';
import { WeekMenu } from './client/weekMenu';
import { container } from 'src/container';
import { store } from 'src/state/store';

function App() {
  return (
    <ContainerProvider value={container}>
      <ReduxProvider store={store}>
        <WeekMenu />
      </ReduxProvider>
    </ContainerProvider>
  );
}

export default App;
