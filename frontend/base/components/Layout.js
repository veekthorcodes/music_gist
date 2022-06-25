import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";


function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <div className={styles.container}>{children}</div>
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
