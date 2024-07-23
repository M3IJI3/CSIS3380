import React from 'react'
import '../App.css';

import SearchForm from './SearchForm.jsx';
import GifList from './GifList.jsx';

function App() {
  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </div>
        <div className="main-content">
      </div>
    </>
  );
}

export default App

