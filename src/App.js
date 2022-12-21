import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to='/login' />;
  };
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<Login setUser={setUser} />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home email={user?.email} setUser={setUser} />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
