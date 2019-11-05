import React, { useState } from 'react';
import Header from './components/Header/Header';
import PageContainer from './components/PageContainer/PageContainer';
import './styles.scss';
import './media.scss';

const App = () => {

  const [openNav, toggleOpenNav] = useState(false);

  const toggleOpenHandler = e => {
    e.preventDefault();
    toggleOpenNav(!openNav);
  };

  return (
    <>
      <Header toggleOpenHandler={toggleOpenHandler}/>
      <PageContainer openNav={openNav}/>
    </>
  );
};

export default App;
