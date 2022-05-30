import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import LayoutComponent from './components/LayoutComponent/LayoutComponent';
import UnitsPage from './components/UnitsPage/UnitsPage';

const App = () => {
  return (
    <Routes>
      <Route element={<LayoutComponent/>}>
        <Route index element={null}></Route>
        <Route path="users" element={null}></Route>
        <Route path="companies" element={null}></Route>
        <Route path="units" element={<UnitsPage/>}></Route>
      </Route>
    </Routes>
  )
}

export default App;
