import logo from './logo.svg';
import './App.css';
import AddVehicle from './components/AddVehicle';
import SearchVehicle from './components/SearchVehicle';
import DeleteVehicles from './components/DeleteVehicles';
import ViewAllVehicles from './components/ViewAllVehicles';

function App() {
  return (
    <div >
      <AddVehicle/>
      <SearchVehicle/>
      <DeleteVehicles/>
      <ViewAllVehicles/>
    </div>
  );
}

export default App;
