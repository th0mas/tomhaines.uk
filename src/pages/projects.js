import React from 'react'
import Layout from '../components/layout'
import NadeStack from '../components/projects/nadestack'
import FancyLights from '../components/projects/fancy-lights'

const Projects = () => (
  <Layout>
    <section class="section">
      <div class="container">
    <h1 className="is-size-3">Interesting Projects</h1>
    <p>Below is a list of projects that I personally have found interesting.</p>
    <p>They may not be complete or fully functional.</p>
    </div>
    </section>

    <section class="section">
    <div className="container">
      <div className="box"><FancyLights /></div>
      <div className="box"><NadeStack /></div>
    </div>
    </section>
  </Layout>
)

export default Projects