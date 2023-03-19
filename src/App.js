import logo from './logo.svg';
import './App.css';
import Employee from './components/employee.js';
import Dropdown from './components/dropdown.jsx';
import SearchBar from './components/searchbar.jsx';
import NameList from './components/namelist.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        
        <Employee />
        <SearchBar />
        <NameList />
        

        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/DinoBacon?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github Page
        </a>
      
        <Dropdown />
        
        

      </header>
    </div>
  );
}

export default App;
