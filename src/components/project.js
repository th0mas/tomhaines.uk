import React from 'React'

const ProjectDetail = ({name, desc, link}) => (
  <div>
    <h4 className="is-size-4">{name}</h4>
    <p>{desc}</p>
  </div>
)

export default ProjectDetail