import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AboutMe from "../components/about-me"
import ConsultBrief from "../components/consult-brief"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
  <Layout>
    <SEO title="Home" />
    <section class="section">
      <div class="container">
    <h1 className="is-size-3">Computer Science Student, Web & Elixir Developer.</h1>
    <AboutMe></AboutMe>
    </div>
    </section>
    <div class="section">
    <div class="container">
    <div class="columns">
      <div class="column">
      <ConsultBrief />
      </div>
      <div class="column">
        <br></br>
        <h1 className="is-size-4">Recent Posts</h1>
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
