import { MultiSelectUnstyled } from '@mui/base';
import Navbar from './components/Navbar';
import Usestate2cmp from './components/Usestate2cmp';
import logo from './logo.svg';
import Mui from './Mui';
import mui from './Mui';
import Use_state2 from './Use_state2';
;

function App() {
  return (
  <>
 <BrowserRouter>

 
  <Navbar/>
    <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='about' element={<Aboutpage/>}></Route>
          <Route path='contact' element={<Contactpage/>}></Route>
          <Route path='service' element={<Service/>}></Route>
          <Route path='404' element={<Pagenotfound/>}></Route>     
    </Routes>
  <Footer/>
  </BrowserRouter>  
   
{/* <Use_prg/> */}
{/* <Usestate2cmp/> */}
{/* <Mui/> */}
  </>
  );
}

export default App;
