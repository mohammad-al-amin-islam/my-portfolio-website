import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navabar/Navbar';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
