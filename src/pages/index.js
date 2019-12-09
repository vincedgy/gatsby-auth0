import React from "react"
import Layout from "../components/Layout"
import "../styles/index.scss"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Welcome" />
      <h1>Welcome !</h1>
      <p>This is a free area</p>
    </Layout>
  )
}
