import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/Signup/Signup';
import ExploreProducts from './Components/ExploreProducts/ExploreProducts';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BuyProduct from './Components/Home/Products/BuyProduct/BuyProduct';

function App() {
  return (
    <div className="App">
      {/* wrapped with auth context  */}
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/explore-products"><ExploreProducts /></Route>
            <PrivateRoute path="/product/:id"><BuyProduct /></PrivateRoute>
            <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
