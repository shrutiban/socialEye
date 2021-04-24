// import logo from './logo.svg';
import './App.css';
import Home from './home';
// import Register from './register';
// import Login from './Login'
// import Header from "./Header";
// import NotFound from "./NotFound"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { AccountBox } from "./components/accountBox";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  // return (
    return (
      <Router>
        <switch>
          <Route exact path="/">
      <AppContainer>
      
      
        <AccountBox />
        
        </AppContainer></Route>
        <Route path="/home" component={Home}></Route>
        
        
      
      </switch>
      </Router>
    );
  //   <Router>

  //   <div className="app">
  //   {/* <h1>Come together to help each other!!</h1> */}
  //   <Header/>
  //   <switch>
  //   <Route path="/home" component={Home}></Route>
  //   {/* <Route path="/register" component={Register}></Route>
  //    */}
  //    <Route exact path="/" component={Register}></Route>
  //   <Route path="/login" component={Login}></Route>
  //   {/* Login/Register */}
  //   {/* footer */}
  //   {/* <Route component={NotFound}></Route> */}
  //   </switch>
  //   </div>
  //   </Router>
  // );
}

export default App;
