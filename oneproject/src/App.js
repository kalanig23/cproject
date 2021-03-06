import React from 'react';
import './App.css';
import Form from './component/Form/form';
import List from './component/List/list';
import Header from './component/Header/header';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="form-list">
          <List />
          <Form />      
        </div>
    </div>
  );
}

export default App;
