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
      <svg viewBox="0 0 191.26 215.27">
        <defs>
          <style>
            .cls-1{'{fill:#fff;}'}
          </style>
        </defs>
        <title>
          icoprofileРесурс 3
        </title>
        <g ref={ this.linkAs("Слой_2", { 'data-name': "Слой 2" }) } id="Слой_2" >
          <g ref={ this.linkAs("Layer_4", { 'data-name': "Layer 4" }) } id="Layer_4" >
            <path ref={ this.linkAs('path0', { 'className': "cls-1" }) } d="M53.24 87.75C63.39 111.88 82.73 125 95.63 125c12.67 0 30.44-12.69 40.73-36.52a111.09 111.09 0 0 0 6.17-20.4c1.68-5.78 2.61-13.11 2.61-22.47C145.14 20.88 123 0 95.63 0S46.14 20.88 46.14 45.63a108 108 0 0 0 1.15 16.78c1 8.59 2.93 18.25 5.95 25.34zM183.16 158.27c-9.9-10.58-37.72-7.93-51.47-15.2-6.11 11.44-6.2 30.23-16.35 30.23a8.8 8.8 0 0 1-1.36-.11c-15.3-2.29-7.65-41.3-18.36-41.3s-3.06 39-18.35 41.3a8.82 8.82 0 0 1-1.36.11c-10.15 0-10.23-18.8-16.34-30.23-13.75 7.27-41.57 4.62-51.43 15.2C2.78 164 0 199.5 0 215.27h191.26c0-15.77-2.77-51.27-8.1-57z"  />
          </g>
        </g>
      </svg>
    )
  }
}
