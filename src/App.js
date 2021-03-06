import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css';

import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import CheckoutPage from './components/pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUSer } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'




class App extends React.Component {
 

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUSer } = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          setCurrentUSer({
              id : snapShot.id,
              ...snapShot.data()  
        }) 
      })
    }
      setCurrentUSer(userAuth)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  


  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component= { HomePage } />
          <Route path='/shop' component = { ShopPage } />
          <Route exact path = '/checkout' component = { CheckoutPage } />
          <Route exact path='/signin' render = {() => this.props.currentUser ? (<Redirect to ='/'/>) : <SignInAndSignUpPage />} />
        </Switch>
      </div>
    );
    
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
  
})

const mapDispatchToProps = dispatch => ({
setCurrentUSer : user => dispatch(setCurrentUSer(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
