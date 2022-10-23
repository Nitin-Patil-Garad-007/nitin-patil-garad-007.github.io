import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationPage from './components/RegistrationPage';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom";
import MovieHomePage from './Pages/MovieHomePage'


function App() {
  return (
  <>
    <Routes>
    <Route path='/' element={<Details />} />
      <Route path='/registration' element={<RegistrationPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<MovieHomePage />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
