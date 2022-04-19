import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import tokens from './tokens';



function App() {
const MyName = styled.h1`
  color: ${tokens.global.Monza.value};
`;

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyName>Mark Stanley</MyName>
      </header>
    </div>
  );
}

export default App;
