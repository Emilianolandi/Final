 import { Routes, Route} from 'react-router-dom';
import './App.css';

import Inicio from './paginas/Inicio';
import Discografia from './paginas/Discografia';
import Historia from './paginas/Historia';
import Contacto from './paginas/Contacto';
import Layout from './paginas/Layout';

// import Footer from './paginas/Inicio';



function App() {
  return (
    <div className="App">
      <Routes>
       
          <Route path="/" element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path="discografia" element={<Discografia/>}/>
          <Route path="historia" element={<Historia/>}/>
          <Route path="contacto" element={<Contacto/>}/>
        

        </Route>
      </Routes>

<header className='App-header'>
  <a
  className="App-link"
  href="https://reacts.org"
  target="_blank"
  rel="noopener noreferrer"
  >
  </a>
</header>
 </div>
  );
}

export default App;
