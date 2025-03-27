import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import './App.css'; // si quieres mantenerlo
import AddProductForm from "./components/AddProductForm";
import UpdateProductForm from './components/UpdateProductForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agregar" element={<AddProductForm />} />
        <Route path="/actualizar" element={<UpdateProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
