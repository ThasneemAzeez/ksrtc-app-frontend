import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addbus from './components/Addbus';

function App() {
  return (
    <div>
     <Signup/> 
     <Signin/>
     <Addbus/>
    </div>
  );
}

export default App;
