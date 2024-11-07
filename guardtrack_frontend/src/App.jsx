import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { EmpresaPage } from '../pages/EmpresaPage';
import { EmpresaFormPage } from '../pages/EmpresaFormPage';
import { UbicacionPage } from "../pages/UbicacionPage.jsx";
import { UbicacionFormPage } from "../pages/UbicacionFormPage.jsx";
import { TipoNovedadPage } from "../pages/TipoNovedadPage.jsx";
import { TipoNovedadFormPage } from "../pages/TipoNovedadFormPage.jsx";
import { ObjetivoPage } from "../pages/ObjetivoPage.jsx";
import { ObjetivoFormPage } from "../pages/ObjetivoFormPage.jsx"; 
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
          <Route path='/tiponovedad' element={<TipoNovedadPage />} />
          <Route path='/crear-tiponovedad' element={<TipoNovedadFormPage />} />
          <Route path='/tiponovedad/:id' element={<TipoNovedadFormPage />} />
          <Route path='/ubicacion' element={<UbicacionPage />} />
          <Route path='/crear-ubicacion' element={<UbicacionFormPage />} />
          <Route path='/ubicacion/:id' element={<UbicacionFormPage />} />
          <Route path='/objetivo' element={<ObjetivoPage />} />
          <Route path='/crear-objetivo' element={<ObjetivoFormPage />} />
          <Route path='/objetivo/:id' element={<ObjetivoFormPage />} />
          <Route path='/novedad' element={<TipoNovedadPage />} />
          <Route path='/crear-novedad' element={<TipoNovedadFormPage />} />
          <Route path='/novedad/:id' element={<TipoNovedadFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );

}

export default App
