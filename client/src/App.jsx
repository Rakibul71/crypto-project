import { useState } from "react";
import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Loader,
  Transactions,
} from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar></Navbar>
        <Welcome></Welcome>
      </div>
      <Services></Services>
      <Transactions></Transactions>
      <Footer></Footer>
    </div>
  );
};

export default App;
