import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/signin" Component={Signin} />
          <Route path="/Signup" Component={Signup}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
