import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Conafa from "./components/Conafat";
import Fataer from "./components/Fataer";
import Halawa from "./components/Halawa";
import Offers from "./components/Offers";
import Whats from "./components/Whats";

// State :
const App = () => {
  const [catId, setCatId] = React.useState(null);
  const [totalCount, setTotalCount] = React.useState(0);

  return (
    <div className="App">
      <Header />
      <Categories setCatId={setCatId} />
      {catId === 1 ? <Conafa setTotalCount={setTotalCount} /> : null}
      {catId === 2 ? <Halawa setTotalCount={setTotalCount} /> : null}
      {catId === 3 ? <Fataer setTotalCount={setTotalCount} /> : null}
      {catId === 4 ? <Conafa setTotalCount={setTotalCount} /> : null}
      {catId === 5 ? <Conafa setTotalCount={setTotalCount} /> : null}
      {catId === 6 ? <Conafa setTotalCount={setTotalCount} /> : null}
      {catId === 7 ? <Offers setTotalCount={setTotalCount} /> : null}
      <Whats totalCount={totalCount} />
    </div>
  );
};

export default App;
