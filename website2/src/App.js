
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
// import Slider from './Components/Slider';
import Homepage from './Pages/Home/Homepage';
// import Routine from './Components/Routine';
// import Header from './Components/Header';

// import "./Pages/Home/Header.css";
import Aboutpage from './Pages/About/Aboutpage';
import Servicepage from './Pages/Services/Servicepage';
import Footer from './Components/Footer';
import Blogpage from './Pages/Bolg/Blogpage';
import Gallerypage from './Pages/Gallery/Gallerypage';
import Contactus from './Pages/Contact/Contactus';

function App() {
  return (
    <>




      <BrowserRouter>

        <Topbar />
        <Navbar />

        <Routes>

          <Route path='/' element={<Homepage />}></Route>
          <Route path='About' element={<Aboutpage />}></Route>
          <Route path='service' element={<Servicepage />}></Route>
          <Route path='blog' element={<Blogpage />}></Route>
          <Route path='gallery' element={<Gallerypage />}></Route>
          <Route path='gallery' element={<Gallerypage />}></Route>
          <Route path='contactus' element={<Contactus />}></Route>

        </Routes>
        <Footer />

      </BrowserRouter>

    </>



  );
}

export default App;
