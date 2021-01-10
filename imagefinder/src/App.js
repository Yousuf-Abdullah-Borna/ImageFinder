import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

function App() {
  return (
    <MuiThemeProvider>
    <div >
      
      <NavBar/>
      <Search/>
      
    </div>
    </MuiThemeProvider>
  );
}

export default App;
