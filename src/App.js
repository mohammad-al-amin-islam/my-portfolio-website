import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navabar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import ProjectDetails from './Pages/Home/ProjectDetails';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      {/* <Routes>
        <Route path='/home' element={}></Route>
        <Route path='projects/:id' element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes> */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
