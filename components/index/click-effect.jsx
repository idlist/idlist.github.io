import m from 'mithril'
import { animate, easeOut } from 'popmotion'

import './click-effect.sass'

class ClickEffect {
  constructor() {
    this.id = 0
    this.Ripples = []

    this.circle = {}
  }
  animateRipple(id) {
    let t = this.Ripples.find(el => el.id == id)
    let duration = 1000

    // radius
    animate({
      from: t.radius,
      to: t.radius + 1000,
      duration: duration,
      ease: [easeOut],
      onUpdate: value => {
        t.radius = value
        m.redraw()
      }
    })

    // stroke
    animate({
      from: t.strokeWidth,
      to: 0,
      duration: duration,
      onUpdate: value => {
        t.strokeWidth = value
        m.redraw()
      }
    })

    // opacity
    animate({
      from: t.opacity,
      to: 0,
      duration: duration,
      onUpdate: value => {
        t.opacity = value
        m.redraw()
      }
    })

    setTimeout(() => {
      this.Ripples = this.Ripples.filter(el => el.id != id)
      m.redraw()
    }, duration)
  }
  animateCircle() {
    let duration = 500

    // radius
    animate({
      from: 100,
      to: 10,
      duration: duration,
      ease: [easeOut],
      onUpdate: value => {
        this.circle.radius = value
        m.redraw()
      }
    })

    // stroke
    animate({
      from: 0,
      to: 2,
      duration: duration,
      onUpdate: value => {
        this.circle.strokeWidth = value
        m.redraw()
      }
    })

    // opacity
    animate({
      from: 0,
      to: 1,
      duration: duration,
      onUpdate: value => {
        this.circle.opacity = value
        m.redraw()
      }
    })
  }
  generateCircle(event) {
    this.circle = {
      id: this.circleId,
      x: event.clientX,
      y: event.clientY,
      radius: 0,
      strokeWidth: 2,
      opacity: 1
    }
    this.animateCircle()
  }
  releaseCircle(event) {
    this.circle = {}

    this.Ripples.push({
      id: this.id,
      x: event.clientX,
      y: event.clientY,
      radius: 0,
      strokeWidth: 2,
      opacity: 1
    })
    this.animateRipple(this.id)
    this.id++
  }
  view(vnode) {
    return (
      <div
        class='click-effect-frame'
        onmousedown={ event => this.generateCircle(event) }
        onmouseup={ event => this.releaseCircle(event) }>
        { vnode.children }
        <div class='click-effect-wrapper'>
          <svg class='click-effect' xmlns='http://www.w3.org/2000/svg' version='1.1'>
            { this.Ripples.map(i => (
              <circle
                stroke='#eee'
                stroke-width={ `${i.strokeWidth}px` }
                fill='transparent'
                cx={ i.x }
                cy={ i.y }
                r={ i.radius / 2 }
                opacity={ i.opacity } />
            )) }
            { this.circle ? (
              <circle
                stroke='#eee'
                stroke-width={ `${this.circle.strokeWidth}px` }
                fill='transparent'
                cx={ this.circle.x }
                cy={ this.circle.y }
                r={ this.circle.radius }
                opacity={ this.circle.opacity } />
            ) : null }
          </svg>
        </div>
      </div>
    )
  }
}

export default ClickEffect