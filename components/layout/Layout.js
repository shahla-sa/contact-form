import React from "react";
import Navbar from "./Navbar";
import styles from "./Layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Layout;
