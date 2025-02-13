import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Main from './pages/main';
import AddRecord from './components/AddRecord/AddRecord';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/add-record' element={<AddRecord />}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
