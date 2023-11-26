import './index.css'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Conteac from './pages/Conteac';
import Protfoli from './pages/Protfoli';
import NoPage from './pages/Nopage'
import Navber from './pages/Navbar';

function App() {
  return (
        <>

        <div  id='back'>

        </div>
        <div>
        <BrowserRouter  basename={process.env.PUBLIC_URL}>
        
        <Routes>

          <Route path='/' element={
             <>
             <Navber />
              <Home />
             </>
          }/>
        <Route path='about' element={
          <>
          <Navber />
          <About />
          </>
          
        }/>

        <Route path='conteac' element={
             <>
             <Navber />
            <Conteac />
             </>
        }/>
        <Route path='protfoli' element={
           <>
           <Navber />
          <Protfoli />
           </>
        }/>
        <Route path='*' element={
          <>
          <Navber />
         <NoPage />
          </>
        }/>

        </Routes>


        </BrowserRouter>


        </div>
  
    
        
        </>
      
  );
}

export default App;
