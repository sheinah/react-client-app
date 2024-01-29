import React from "react";
import "./App.css";
import BodyContent from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContent />
      <Footer />
    </div>
  );
}

export default App;
