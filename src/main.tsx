import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import EmptyStaff from './components/Staff.tsx/EmptyStaff.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* checking if the staff will render twice outside of strict mode */}
    <EmptyStaff />
  </>
);
