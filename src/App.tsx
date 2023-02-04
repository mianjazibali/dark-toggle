import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import { toggleTheme } from './reducers/theme.slice';
import { StoreType } from './store';
import Button from './components/common/button';

export const backgroundColor = theme('theme', {
  light: '#fff',
  dark: '#2d2d2d',
});

export const textColor = theme('theme', {
  light: '#000',
  dark: '#fff',
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;

  background-color: ${backgroundColor};
  color: ${textColor};
`;

function App() {
  const theme = useSelector((state: StoreType) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={{ theme }}>
      <Container>
        <h1>My Dark Theme Is Better Than Yours</h1>
        <p>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={() => dispatch(toggleTheme())}
          />
          Use Dark Theme
        </p>
        <Button></Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
