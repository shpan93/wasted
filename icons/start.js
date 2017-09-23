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
      <svg viewBox="0 0 253.07 287.37">
        <defs>
          <style>
            .cls-1{'{fill:#fff;}'}
          </style>
        </defs>
        <title>
          icostartРесурс 6
        </title>
        <g ref={ this.linkAs("Слой_2", { 'data-name': "Слой 2" }) } id="Слой_2" >
          <path ref={ this.linkAs("Layer_4", { 'className': "cls-1", 'data-name': "Layer 4" }) } d="M243.3 130L23.67 3.21C11.61-3.76 1.6 1 .19 13.71A28.7 28.7 0 0 0 0 16.88V270.5c0 15 10.65 21.17 23.66 13.67l215.45-124.42 4.2-2.42c13.01-7.5 13.01-19.81-.01-27.33z" id="Layer_4"  />
        </g>
      </svg>
    )
  }
}
