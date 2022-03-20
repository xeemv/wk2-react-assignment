import logo from './logo.svg';
import './App.css';
import MovieList from '../src/components/movieList-container';
import StarContainer from './components/star-container';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body>
        {/* <MovieList /> */}
        <StarContainer />
      </body>
    </div>
  );
}

export default App;