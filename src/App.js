import "./App.scss"
import "bootstrap/dist/js/bootstrap.bundle"
import React, { useState } from 'react';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';

function App() {
  const [page, setPage] = useState('login');
  const [message, setMessage] = useState('');

  const renderPage = () => {
      switch (page) {
          case 'login':
              return <Login setPage={setPage} setMessage={setMessage} />;
          case 'register':
              return <Register setPage={setPage} setMessage={setMessage} />;
          case 'forgotPassword':
              return <ForgotPassword setPage={setPage} setMessage={setMessage} />;
          default:
              return <Login setPage={setPage} setMessage={setMessage} />;
      }
  };

  return (
     
      <div className="app">
          {message && <div className="message">{message}</div>}
          {renderPage()}
         
      </div>
  );
}
export default App;

