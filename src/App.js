// import "./script";
import React, { useState } from "react";
import "./assets/css/style.css";
import Header from "./parts/Header";
import Main from "./parts/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import SearchPage from "./parts/SearchPage";
import Whislist from "./parts/Whislist";
import Footer from "./parts/Footer";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <UserContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Header> </Header>
        <Switch>
          <Route path="/GDSCmovflix-react/whislist">
            <Whislist></Whislist>
          </Route>
          <Route path="/GDSCmovflix-react/search">
            <SearchPage></SearchPage>
          </Route>
          <Route path="/GDSCmovflix-react">
            <Main></Main>
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
