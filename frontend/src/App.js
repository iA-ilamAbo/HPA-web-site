import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from  './components/Home';
import About from './components/About';
import Acceuil from './components/Acceuil';
import Contact from './components/Contact';
import Login from './components/Login';
import Blog from './components/Blog';
import Reparation from './components/Reparation';
import Bag from './components/Bag';
import PiecesA from './components/PiecesA';
import Footer from './components/Footer';
import Categorie from './components/Categorie';
import Catalogue from './components/Catalogue';
import Fournisseurs from './components/Fournisseurs';
import MarquesA from './components/MarquesA';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
 <BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='acceuil' element={<Acceuil/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='about' element={<About/>} />
          <Route path='login' element={<Login/>} />
          <Route path='blog' element={<Blog/>} />
          <Route path='Reparation' element={<Reparation/>} />
          <Route path='bag' element={<Bag/>} />
          <Route path='PiecesA' element={<PiecesA/>} />
          <Route path='Categorie' element={<Categorie/>} />
          <Route path='Catalogue' element={<Catalogue/>}/>
          <Route path='footer' element={<Footer/>} />
          <Route path='Fournisseurs' element={<Fournisseurs/>} />
          <Route path='MarquesA' element={<MarquesA/>} />
          
          
</Route>
</Routes>
    </BrowserRouter>
      
   
  );
}

export default App;
