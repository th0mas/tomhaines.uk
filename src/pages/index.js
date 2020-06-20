import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AboutMe from "../components/about-me"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
  <Layout>
    <SEO title="Home" />
    <div class="section">
    <div class="container">
    <div class="columns">
      <div class="column is-one-quarter"><AboutMe /></div>
      <div class="column">
        <h1 className="title is-3">Recent Posts</h1>
        <ul>
        <hr />
        {posts.map(({node: post}) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2 className="title is-4 has-text-link">{post.frontmatter.title}</h2>
            </Link>
            <p className="subtitle is-6">{post.fields.formattedDate}</p>
            <p>{post.excerpt}</p>
            <hr />
          </li>
        ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
  </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug
            formattedDate
          }
        }
      }
    }
  }
`

export default IndexPage
