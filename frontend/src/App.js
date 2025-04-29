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
import TurnOver from './components/TurnOver/TurnOver';
import AssignmentPage from './pages/AssignmentPage/AssignmentPage';
import './assets/styles/global.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/old' element={<Main />}></Route>
          <Route path='/' element={<AssignmentPage />}></Route>
          <Route path='/add-record' element={<AddRecord />}></Route>
          <Route path='/add-record' element={<AddRecord />}></Route>
          <Route path='/view-info/:id' element={<ViewInfo />}></Route>
          <Route path='/employees' element={<Employees />}></Route>
          <Route path='/devices' element={<DeviceList />}></Route>
          <Route path='/add-device' element={<AddDevice />}></Route>
          <Route path='/device-info/:id' element={<DeviceInfo />}></Route>
          <Route path='/turn-over' element={<TurnOver />}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
