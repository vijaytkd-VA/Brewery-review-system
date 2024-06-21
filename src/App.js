import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './components/Authdetails';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import BrewerySearch from './components/BrewerySearch';
import BreweryPage from './components/BreweryPage';
import AddReviewForm from './components/AddReviewForm';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/Signup" element={<SignUp/>} />
      <Route path="/search" element={<BrewerySearch/>} />
      <Route path="/brewery/:id" element={<BreweryPage/>} />
      <Route path="/brewery/:id/review" element={<AddReviewForm />} />
    </Routes>  
  </BrowserRouter >
  );
}

export default App;
