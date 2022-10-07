import "./App.css";
import Login from "./pages/auth/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registre from "./pages/auth/Registre";
import Home from "./pages/home/Home";
import { List } from "./pages/list/list";
import { Single } from "./pages/single/Single";
import { New } from "./pages/new/new";
import { productInputs, userInputs } from "./formSource";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Registre />} exact />
        <Route path="/" element={<Home />} exact />
        <Route path="/users">
          <Route index element={<List/>} />
          <Route path=":iduser"element={<Single/>}/>
          <Route path="new"element={<New inputs= {userInputs} title="Add new user" />}/>
          

        </Route>
        <Route path="/product">
          <Route index element={<List/>} />
          <Route path=":productid"element={<Single/>}/>
          <Route path="new"element={<New inputs={ productInputs} title="Add new product"/>}/>
          

        </Route>
      </Routes>
    </Router>
    /*<div>
      <Login/>
    </div>*/
  );
}

export default App;
