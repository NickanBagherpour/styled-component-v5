import { Button } from "components/common";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body{
		background: white;
		min-height: 100vh;
		margin: 0;
		color: black;
		font-family: 'Kaushan Script'
	}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Hello</h1>
      <Button>Test</Button>
    </>
  );
};

export default App;
