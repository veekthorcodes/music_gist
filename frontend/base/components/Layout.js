import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import styles from "@/styles/Layout.module.css";

import Header from "./Header";
import Showcase from "./Showcase";
import Footer from './Footer';

function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      {router.pathname==='/' && <Showcase />}
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
