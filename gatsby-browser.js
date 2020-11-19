import React from "react"
import Layout from "./src/layouts"

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
