import React from 'react';
import './App.css';
import {Header} from "./component/Header";
import {Layout, Space} from "antd";
import {Footer} from "./component/Footer";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Layout className="Main">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </Layout>
    </div>
  );
}

export default App;
