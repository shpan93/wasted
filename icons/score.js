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
      <svg viewBox="0 0 235.03 215.27">
        <defs>
          <style>
            .cls-1{'{fill:#fff;}'}
          </style>
        </defs>
        <title>
          icoscoreРесурс 4
        </title>
        <g ref={ this.linkAs("Слой_2", { 'data-name': "Слой 2" }) } id="Слой_2" >
          <g ref={ this.linkAs("Layer_4", { 'data-name': "Layer 4" }) } id="Layer_4" >
            <path ref={ this.linkAs('path0', { 'className': "cls-1" }) } d="M235.03 0L134.5 31.4l17.05 8.4L0 128.46l7.89 13.47 152.5-89.21-1.99 19.53L235.03 0z"  />
            <rect ref={ this.linkAs('rect1', { 'className': "cls-1" }) } x="1.45" y="153.35" width="66.56" height="26.62" rx="5.42" ry="5.42"  />
            <rect ref={ this.linkAs('rect2', { 'className': "cls-1" }) } x="1.45" y="188.65" width="66.56" height="26.62" rx="5.42" ry="5.42"  />
            <rect ref={ this.linkAs('rect3', { 'className': "cls-1" }) } x="79.66" y="153.35" width="66.56" height="26.62" rx="5.42" ry="5.42"  />
            <rect ref={ this.linkAs('rect4', { 'className': "cls-1" }) } x="79.66" y="188.65" width="66.56" height="26.62" rx="5.42" ry="5.42"  />
            <rect ref={ this.linkAs('rect5', { 'className': "cls-1" }) } x="79.66" y="118.06" width="66.56" height="26.62" rx="5.42" ry="5.42"  />
            <rect ref={ this.linkAs('rect6', { 'className': "cls-1" }) } x="166.19" y="153.35" width="66.56" height="26.62" rx="5.42" ry="5.42"  />
            <rect ref={ this.linkAs('rect7', { 'className': "cls-1" }) } x="166.19" y="188.65" width="66.56" height="26.62" rx="5.42" ry="5.42"  />
            <rect ref={ this.linkAs('rect8', { 'className': "cls-1" }) } x="166.19" y="118.06" width="66.56" height="26.62" rx="5.42" ry="5.42"  />
            <rect ref={ this.linkAs('rect9', { 'className': "cls-1" }) } x="166.19" y="82.77" width="66.56" height="26.62" rx="5.42" ry="5.42"  />
          </g>
        </g>
      </svg>
    )
  }
}
