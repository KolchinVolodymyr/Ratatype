import Container from './components/Container/container';
import { DarkModeProvider } from './context/DarkModeContext';
import './App.scss';

function App() {
  return (
    <>
      <DarkModeProvider>
        <Container />
      </DarkModeProvider>
    </>
  );
}

export default App;
