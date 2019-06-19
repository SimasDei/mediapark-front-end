import React from 'react';
import TopMenu from './components/shared/TopMenu';
import MainHeader from './components/layouts/MainHeader';
import Table from './components/layouts/Table/Table';
import Gallery from './components/layouts/Gallery/Gallery';
import Footer from './components/shared/Footer';
import Form from './components/layouts/Form/Form';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <MainHeader />
      <Table />
      <Gallery />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
