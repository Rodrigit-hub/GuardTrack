import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import { EmpresaPage } from '../pages/EmpresaPage';
import { EmpresaFormPage } from '../pages/EmpresaFormPage';
import { Navigation } from '../components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>

    
    <Routes>
      <Route path='/' element={<Navigate/>}/>
      <Route path='/empresas' element={<EmpresaPage/>}/>
      <Route path='/crear-empresa' element={<EmpresaFormPage/>}/>
      <Route path='/empresas/:id' element={<EmpresaFormPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App