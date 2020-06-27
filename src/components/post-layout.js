import React from 'react'
import Layout from './layout'
import SEO from './seo'

import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

import "./post-formatting.scss"

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default ({ data: { mdx } }) => (
  <Layout>
    <SEO title={mdx.frontmatter.title} />
    <div className="section">
      <div className="container">
        
        <h1 className="title">{mdx.frontmatter.title}</h1>
        <p className="subtitle">Posted on: {mdx.fields.formattedDate}</p>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="content">
        <MDXProvider>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        </div>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
      fields {
        formattedDate
      }
    }
  }
`