//import Navbar from './components/Navbar';
import Home from './pages';
//import SigninPage from './pages/Signin';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './Globalstyles';


import './App.css';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Routes>
      <GlobalStyles/>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
