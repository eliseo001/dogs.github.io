import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from "./components/landingPage/LandingPage"
import Home from "./components/home/Home"
import CreateDog from "./components/createDog/CreateDog"
import Detail from "./components/detail/Detail"
import Info from "./components/info/Info"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>                                               
    <Route exact path= "/" component= { LandingPage }/>
    <Route path= "/home" component= { Home }/>
    <Route path="/dog" component= { CreateDog } />
    <Route path="/dogs/:id" component= { Detail } />
    <Route path="/info" component= { Info } />

    
   
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
