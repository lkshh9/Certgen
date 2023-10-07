import CertificateGenerator from './pages/CertificateGenerator'
import LandingPage from './components/LandingPage'
import Product from './components/Product';
import { Router, Routes } from 'react-router-dom';
import Appbar from './components/Appbar';


function App() {
  return (
    <div>
      <LandingPage />
      <CertificateGenerator />
    </div>
  )
}

export default App;
