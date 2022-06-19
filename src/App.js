
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
