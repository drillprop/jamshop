import React from "react"

import Header from "../components/Header"
import "../styles/global.scss"
import styles from "./Layout.module.scss"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.contentWrapper}>{children}</main>
      <footer />
    </>
  )
}
