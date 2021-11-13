import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/Signup/Signup';
import ExploreProducts from './Components/ExploreProducts/ExploreProducts';
import AuthProvider from './Context/AuthProvider';

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
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
