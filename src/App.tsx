import React from 'react'
import HomePage from './homepage.components'
import HatsPage from './pages/hatsPage'
import { Route } from 'react-router-dom'
import TopicDetailPage from './pages/topicsDetail';
import ShopPage from './pages/shop/shopPage';
import Header from './components/header/header';
import './App.styles.scss'
import SignInUpPage from './pages/sign-in-up/sign-in-up';


function App() {
  return (
    <>
    <Header/>
    <div className='siteMargin'>
      <Route exact path='/' component={HomePage}/>
      <Route path='/signin' component={SignInUpPage}/>
      <Route path='/hats' component={HatsPage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/topics/:id' component={TopicDetailPage}/>
    </div>
    </>
  );
}

export default App;
