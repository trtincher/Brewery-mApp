import React, { useState, createContext, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Collections from "../Collections/Collections";
import Search from "../Search/Search";
import About from "../About/About";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";

export const DataContext = createContext();

function App() {
  const [breweryData, setBreweryData] = useState([]);
  const [faves, setFaves] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [visited, setVisited] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [activeUser, setActiveUser] = useState({});

  //console.log('App breweryData', breweryData);
  console.log("App faves", faves);
  // console.log('App wishlist', wishlist);
  // console.log('App visited', visited);
  // console.log('filter', filter);

  const makeApiCall = async () => {
    let url =
      "https://api.openbrewerydb.org/breweries/search?per_page=50&query=" +
      search;
    const res = await fetch(url);
    const json = await res.json();
    //console.log('json in makeApiCall', json);
    setBreweryData(json);
  };

  useEffect(() => {
    makeApiCall();
  }, [search]);

  return (
    <div className="App">
      <DataContext.Provider
        value={{
          faves,
          setFaves,
          wishlist,
          setWishlist,
          visited,
          setVisited,
          breweryData,
          setBreweryData,
          filter,
          setFilter,
          search,
          setSearch,
          activeUser,
          setActiveUser,
        }}
      >
        <Header />
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/collections" component={Collections} />
        <Route path="/search" component={Search} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </DataContext.Provider>
    </div>
  );
}

export default App;
