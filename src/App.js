import React from 'react';
import TopMenu from './components/shared/TopMenu';
import MainHeader from './components/layouts/MainHeader';
import Table from './components/layouts/Table/Table';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <MainHeader />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
