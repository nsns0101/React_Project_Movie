import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";  //HashRouter은 /#/를 씀 github page 쉬움
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from './components/Navigation';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      {/* exact={true} => 오직 자신의 url에 해당하는 것만 출력 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;