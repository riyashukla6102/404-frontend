//import Navbar from './components/Navbar';
import Home from './pages';
//import SigninPage from './pages/Signin';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './Globalstyles';


import './App.css';

function App() {
  return (
    

      
      
        
      
    <Router>
    <GlobalStyles/>
    <Navbar/>
    <Home/>

  </Router>
  );
}

export default App;
