import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationPage from './components/RegistrationPage';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
// import Details from './Pages/Details';
// import Moviecomponent from './Pages/moviecomponent';
import {Routes,Route} from "react-router-dom";
import MovieHomePage from './Pages/MovieHomePage'
// import MovieData from './MovieData/MovieData';


function App() {
  return (
  <>
    <Routes>
    <Route path='/' element={<Details />} />
      <Route path='/registrationPage' element={<RegistrationPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<MovieHomePage />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
