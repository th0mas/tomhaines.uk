import React from 'react'

export default () => (
  <>
  <h1 className="title">Fancy Lights</h1>
  <p className="subtitle">IKEA Dioder Light controller for the Raspberry Pi.</p>

  <p>Allows a user to control IKEA Dioder lights through a real-time web interface. Lights can be turned on and off, as well as have the colour changed.</p>
  <p>Written in Elixir using the Nerves Project, the firmware is soft real-time and allows for the coordination and supervision of multiple processes.</p>
  <p>Challenges include implementing Websockets on the Raspberry Pi and actually soldering wires.</p>
  <br />
  <a href="https://github.com/th0mas/Fancy-Lights">View on GitHub.</a>
  </>
)