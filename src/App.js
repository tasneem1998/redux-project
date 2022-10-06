import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
import Card from "./components/Card";
import CardDetails from "./components/CardDetails";
import CssBaseline from '@mui/material/CssBaseline'
import Products from "./components/Products";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <>
    <CssBaseline/>
      <Header />
      <Routes>
        <Route exact path='/' element={<Card/>} />
        <Route exact path='/cart' element={<CardDetails/>} />
        <Route exact path='/products' element={<Products/>} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/about' element={<AboutUs/>} />
        <Route exact path='/contact' element={<ContactUs/>} />
      </Routes>
      </>
  );
}

export default App;
