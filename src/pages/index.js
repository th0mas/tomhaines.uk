import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AboutMe from "../components/about-me"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="container">
    <div class="columns">
      <div class="column is-one-quarter"><AboutMe /></div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
