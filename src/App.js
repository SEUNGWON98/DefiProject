import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import ConnectWallet from "./pages/ConnectWallet";
import ConnectWalletButton from "./components/ConnectWalletButton";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/connect-wallet">Connect Wallet</Link>
      </nav>
      <ConnectWalletButton />
      {/* <Routes> */}
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/connect-wallet" component={ConnectWallet} /> */}
      {/* </Routes> */}
    </Router>
  );
}

export default App;
