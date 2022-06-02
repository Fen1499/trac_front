import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LayoutComponent from './components/LayoutComponent/LayoutComponent';
import UnitsPage from './components/Pages/UnitsPage';
import HomePage from './components/Pages/HomePage';
import CompaniesPage from './components/Pages/CompaniesPage';

const AuthComponent = ({ children }) => {

}

const App = () => {
  const [token, setToken] = React.useState(null);

  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });

  const handleLogin = async () => {
    const temp_token = await fakeAuth();

    setToken(temp_token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  //This is nescessary because of first render
  const navigate = useNavigate()
  useEffect(() => {
    if (token === null)
      return navigate("/")

  }, [token])

  return (
    <Routes>
      <Route element={<LayoutComponent token={ token }/>}>
        <Route path="/" element={<HomePage handleLogin={handleLogin} handleLogout={handleLogout}/>}></Route>
        <Route path="users" element={null}></Route>
        <Route path="companies" element={<CompaniesPage/>}></Route>
        <Route path="units" element={<UnitsPage />}></Route>
      </Route>
    </Routes>
  )
}

export default App;
