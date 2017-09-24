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
      <svg viewBox="0 0 744.75 953.4">
        <defs>
          <style>
            .cls-1{'{fill:#fff;}'}
          </style>
        </defs>
        <title>
          icogoalРесурс 3
        </title>
        <g ref={ this.linkAs("Слой_2", { 'data-name': "Слой 2" }) } id="Слой_2" >
          <g ref={ this.linkAs("Layer_4", { 'data-name': "Layer 4" }) } id="Layer_4" >
            <path ref={ this.linkAs('path0', { 'className': "cls-1" }) } d="M203.41 845.26l-.9-695.1a77.7 77.7 0 1 0-55.49.07l.9 695.11C64.06 849.56 0 872.12 0 899.24c0 30 78.75 54.29 175.8 54.17s175.7-24.58 175.67-54.62c-.04-27.12-64.19-49.52-148.06-53.53z"  />
            <path ref={ this.linkAs('path1', { 'className': "cls-1" }) } d="M236.58 509.41L744.75 342.2 236.16 176.31l.42 333.1z"  />
          </g>
        </g>
      </svg>
    )
  }
}
