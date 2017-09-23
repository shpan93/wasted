import React, { Component } from 'react'

export default class GeneratedComponent extends Component {

  linkAs = (key, attrs) => (
    (this.__cb4r3fs || (this.__cb4r3fs = new Map())).get(key) || this.__cb4r3fs.set(key, node => (
      this.refs[key] !== node && (this.refs = Object.assign({}, this.refs, { [key]: node })),
      node && Object.keys(attrs).forEach(attr => node.setAttributeNS(null, attr, attrs[attr]))
    )).get(key)
  )

  render () {

    return (
      <svg viewBox="0 0 213.39 369.37">
        <defs>
          <style>
            .cls-1{'{fill:#fff;}'}
          </style>
        </defs>
        <title>
          icoexitРесурс 1
        </title>
        <g ref={ this.linkAs("Слой_2", { 'data-name': "Слой 2" }) } id="Слой_2" >
          <path ref={ this.linkAs("Icons", { 'className': "cls-1" }) } d="M213.39 0H0v294.31l116.26 75.05v-75.05h97.13zM84.23 224v-55.87h10.3V224zm105.69 38h-73.66V75.05L50.13 32.36h139.79z" id="Icons"  />
        </g>
      </svg>
    )
  }
}
