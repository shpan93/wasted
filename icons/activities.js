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
      <svg  viewBox="0 0 215.27 215.27">
        <defs>
          <style>
            .cls-1{'{fill:#fff;}'}
          </style>
        </defs>
        <title>
          icoactivitiesРесурс 5
        </title>
        <g ref={ this.linkAs("Слой_2", { 'data-name': "Слой 2" }) } id="Слой_2" >
          <g ref={ this.linkAs("Layer_4", { 'data-name': "Layer 4" }) } id="Layer_4" >
            <path ref={ this.linkAs('path0', { 'className': "cls-1" }) } d="M175.23 0H40A40.08 40.08 0 0 0 0 40v135.23a40.08 40.08 0 0 0 40 40h135.23a40.08 40.08 0 0 0 40-40V40a40.08 40.08 0 0 0-40-40zm28.6 175.23a28.63 28.63 0 0 1-28.6 28.6H40a28.63 28.63 0 0 1-28.6-28.6V40A28.63 28.63 0 0 1 40 11.44h135.23A28.63 28.63 0 0 1 203.83 40z"  />
            <path ref={ this.linkAs('path1', { 'className': "cls-1" }) } d="M173.53 49.1H91.35a5.72 5.72 0 0 0 0 11.44h82.17a5.72 5.72 0 0 0 0-11.44zM173.53 101H91.35a5.72 5.72 0 0 0 0 11.44h82.17a5.72 5.72 0 0 0 0-11.44zM173.53 153H91.35a5.72 5.72 0 1 0 0 11.44h82.17a5.72 5.72 0 1 0 0-11.44zM72.75 56.23A5.72 5.72 0 0 0 67 61.95v2.65H47.46v-15a5.72 5.72 0 0 0-11.44 0v20.72A5.72 5.72 0 0 0 41.74 76h31a5.72 5.72 0 0 0 5.72-5.72v-8.33a5.72 5.72 0 0 0-5.71-5.72zM72.75 85.53h-31A5.72 5.72 0 0 0 36 91.25v31a5.72 5.72 0 0 0 5.74 5.75h31a5.72 5.72 0 0 0 5.72-5.72v-31a5.72 5.72 0 0 0-5.71-5.75zm-5.72 31H47.46V97H67zM72.75 137.47h-31a5.72 5.72 0 0 0-5.75 5.72v31a5.72 5.72 0 0 0 5.72 5.72h31a5.72 5.72 0 0 0 5.72-5.72v-31a5.72 5.72 0 0 0-5.69-5.72zm-5.72 31H47.46v-19.56H67z"  />
            <path ref={ this.linkAs('path2', { 'className': "cls-1" }) } d="M78.79 13.1a5.72 5.72 0 0 0-7.47 3.11L60.5 42.45l-5.42-12.23a5.72 5.72 0 0 0-10.46 4.64l10.85 24.45a5.71 5.71 0 0 0 5.23 3.4h.08A5.72 5.72 0 0 0 66 59.17l15.9-38.6a5.72 5.72 0 0 0-3.11-7.47z"  />
          </g>
        </g>
      </svg>
    )
  }
}
