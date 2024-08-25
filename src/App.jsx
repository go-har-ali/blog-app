import React from 'react';
import './App.css';
import Navbar from './Navbar'; // Import the Navbar component
import records from './server.json';

function App() {
  return (
    <div>
      <Navbar /> {/* Add the Navbar component */}
      <div className="blog-container">
        {records && records.map(record => {
          return (
            <div key={record.id} className="blog-post">
              <h1 className="blog-title">{record.name}</h1>
              <img 
                src={record.image} 
                alt={record.name} 
                className="blog-image" 
              />
              <p className="blog-description">{record.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App;

