import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <footer className="App-footer">
        <p>
          {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
