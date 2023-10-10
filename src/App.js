import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import {auth} from './Firebase'
import Payment from './Payment';
import Orders from './Orders';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './App.css';
const promise = loadStripe(
  'pk_test_51NuzhgDOuF4zBV9n9KRsuNr7whBE8DAIzI3UcHJEDmOIgtgBntufi2tTMvbNbjn8BlZ40Jyh0i4JsJ8DVefSkfub00QQu9uisI'
); 
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((userauth) => {
      // console.log(userauth);
      if (userauth) {
        dispatch({
          type: "SET_USER",
          user: userauth,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        
        <Routes>
        <Route path="/orders" element={ <> <Header/> <Orders/></>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/payment" element={
            <>
              
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
            </>
          }
          />
          <Route path="/"
          element={<><Header/><Home/></>} />
          <Route path="/checkout" element={<><Header /><Checkout/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
