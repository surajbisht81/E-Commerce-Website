import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

 const [{}, dispatch] = useStateValue();

  useEffect( () => {
    // it will run only once after app component loads
    
    auth.onAuthStateChanged( authUser => {
       console.log('The User is -> ', authUser);

       if(authUser){
            dispatch( {
               type: 'SET_USER',
               user: authUser
            })
       }
       else{
             dispatch( {
                type: 'SET_USER',
                user: null
             })
       }
    })

  }, [])

  return (
    <Router>
       <div className="app">
         <Switch>
            <Route exact path="/">
               <Header/>
               <Home/>
            </Route>

            <Route exact path="/Checkout">
               <Header/>
               <Checkout/>
            </Route>

            <Route exact path="/Login">
               <Login />
            </Route>

            <Route exact path="/Payment">
                  <Header/>
                  <Payment/>
            </Route>
         </Switch>
       </div>
    </Router>
  );
}

export default App;
