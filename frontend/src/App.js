import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Main from './pages/main';
import AddRecord from './components/AddRecord/AddRecord';
import ViewInfo from './components/ViewInfo/ViewInfo';
import Employees from './components/Employees/Employees';
import AddDevice from './components/AddDevice/AddDevice';
import DeviceList from './components/DeviceList/DeviceList';
import DeviceInfo from './components/DeviceInfo/DeviceInfo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/add-record' element={<AddRecord />}></Route>
          <Route path='/view-info/:id' element={<ViewInfo />}></Route>
          <Route path='/employees' element={<Employees />}></Route>
          <Route path='/devices' element={<DeviceList />}></Route>
          <Route path='/add-device' element={<AddDevice />}></Route>
          <Route path='/device-info/:id' element={<DeviceInfo />}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
