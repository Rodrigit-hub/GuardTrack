import { BrowserRouter, Route, Routes, Navigate, Switch } from 'react-router-dom'
import { EmpresaPage } from '../pages/EmpresaPage';
import { EmpresaFormPage } from '../pages/EmpresaFormPage';
import { Navigation } from '../components/Navigation';
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from "./context/AuthContext"
import Homepage from "../views/Homepage"
import Registerpage from "../views/Registerpage"
import Loginpage from "../views/Loginpage"
import Dashboard from "../views/Dashboard"
import Navbar from "../views/Navbar"

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />

        <Routes>
          <AuthProvider>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          < Navbar/>
          <Route component={Loginpage} path="/login" />
          <Route component={Registerpage} path="/register" exact />
          <Route component={Homepage} path="/home" exact />
          <Route path='/' element={<Navigate />} />
          <Route path='/empresas' element={<EmpresaPage />} />
          <Route path='/crear-empresa' element={<EmpresaFormPage />} />
          <Route path='/empresas/:id' element={<EmpresaFormPage />} />
          </AuthProvider>
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App