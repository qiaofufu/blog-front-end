import React from 'react';
import styles from './App.module.css';
import {Header} from "./component/Header";
import {Layout} from "antd";
import {Footer} from "./component/Footer";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
          <Layout className={styles.Layout}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </Layout>
    </div>
  );
}

export default App;
