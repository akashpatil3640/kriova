
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup';
import Forgot from './components/Forgot';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/forgot' exact element={<Forgot />} />
          <Route path='/dashboard' exact element={<Dashboard />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
