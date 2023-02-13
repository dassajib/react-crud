import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Create from './components/Create/Create';
import Header from './components/Header/Header';
import Read from './components/Read/Read';
import Update from './components/Update/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Create></Create>
          </Route>
          <Route exact path="/create">
            <Create></Create>
          </Route>
          <Route exact path="/read">
            <Read></Read>
          </Route>
          <Route exact path="/update">
            <Update></Update>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
