import { Link } from 'react-router-dom';
import './App.css';
import AuthPage from './components/AuthPage/AuthPage';
import CustomRouter from './CustomRouter/CustomRouter';


function App() {
  

  return (

    <div className='container'>
      
      <Link to={'/signin'} > Sign in </Link>
      <Link to={'/login'} > Log in </Link>

     
     
    </div>
  )
}

export default App
