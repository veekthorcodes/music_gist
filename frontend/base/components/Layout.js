import React from "react";
import Head from "next/head";
import styles from "@/styles/Layout.module.css";

import Header from "./Header";
import Footer from './Footer';

function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title:
    "Musical Events | Find any musical event where you can here musicians and there various instruments have a talk",
  description:
    "Find any musical event where you can here musicians and there various instruments have a talk",
  keywords: "music, instruments, events",
};

export default Layout;
