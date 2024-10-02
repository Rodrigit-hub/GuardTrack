import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { EmpresaPage } from '../pages/EmpresaPage';
import { EmpresaFormPage } from '../pages/EmpresaFormPage';
import { Navigation } from '../components/Navigation';
import { Toaster } from "react-hot-toast";
  

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Navigate />} />
          <Route path='/empresas' element={<EmpresaPage />} />
          <Route path='/crear-empresa' element={<EmpresaFormPage />} />
          <Route path='/empresas/:id' element={<EmpresaFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App