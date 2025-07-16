import logo from './logo.svg';
import './App.css';
import AddVehicle from './components/AddVehicle';
import SearchVehicle from './components/SearchVehicle';
import DeleteVehicles from './components/DeleteVehicles';
import ViewAllVehicles from './components/ViewAllVehicles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddVehicle/>}/>
        <Route path="/search" element={<SearchVehicle/>}/>
        <Route path="/delete" element={<DeleteVehicles/>}/>
        <Route path="/view" element={<ViewAllVehicles/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
