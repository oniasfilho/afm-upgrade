import React from 'react';
import Header from './components/Header';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
