// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import loan from './layout/loan';

// import Component from './layout/Component';
// import Header from './layout/Header';
import Loan from "./layout/Loan";
import Pages from "./local/Pages";
import Nav from "./local/Nav";
import Posts from "./local/Posts";
import Details from "./local/Detaleis";
import Error from "./local/Error";
import Materils from "./theam/pages/Materils";
import New from "./todo/New";


// import BasicButtons from "./local/BasicButtons";

// import Bode from './layout/Bode';
// import Tests from "./layout/Tests";
// import Task from './layout/Task';
// import Myself from "./layout/Myself";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* <Header /> */}
      {/* <Bode />
      <Tests />
      <Task />
      <Myself /> */}
      {/* <Component /> */}

      {/* */}
      <Nav />

      <Routes>
        <Route
          path="/about"
          element={
            <div>
              <h1>About Page</h1>
            </div>
          }
        />

        <Route path="/loan" element={<Loan />} />
        <Route path="/sasc" element={<Materils />} />
        <Route path="/new" element={<New />} />
        <Route path="/home" element={<Pages />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
