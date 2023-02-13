import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ThemeContext from '../contexts/ThemeContext';
import ErrorPage from '../ErrorPage';
import useThemeMode from '../hooks/useThemeMode';
import DataManagement from '../screens/DataManagement/DataManagement';
import Home from '../screens/home/home';
import NotesConsultation from '../screens/NoteConsultation/NoteConsultation';
import ThrowAttest from '../screens/ThrowAttest/ThrowAttest';
import GlobalStyle from '../styles/global';
import { darkTheme, lightTheme } from '../styles/themes';

const App: React.FunctionComponent = () => {
  const { theme } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultation" element={<NotesConsultation />} />
          <Route path="/data-management" element={<DataManagement />} />
          <Route path="/throw-attest" element={<ThrowAttest />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </ThemeContext>
  );
};

export default App;
