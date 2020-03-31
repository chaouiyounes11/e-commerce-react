import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUSer } from './redux/user/user.actions'


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
          <Route path='/signin' component = { SignInAndSignUpPage } />
        </Switch>
      </div>
    );
    
  }
}

const mapDispatchToProps = dispatch => ({
setCurrentUSer : user => dispatch(setCurrentUSer(user))
})

export default connect(null, mapDispatchToProps)(App);
