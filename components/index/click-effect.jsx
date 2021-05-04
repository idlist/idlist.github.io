import m from 'mithril'
import { animate, easeOut } from 'popmotion'

import './click-effect.sass'

class ClickEffect {
  constructor() {
    this.id = 0
    this.Ripples = []
  }
  animateRipple(id) {
    let t = this.Ripples.find(el => el.id == id)
    let duration = 500

    // size
    animate({
      from: t.size,
      to: t.size + 200 * t.sizeCoef,
      duration: duration,
      ease: [easeOut],
      onUpdate: value => {
        t.size = value
        m.redraw()
      }
    })

    // rotation
    animate({
      from: t.rotate,
      to: t.rotate + 75,
      duration: duration,
      ease: [easeOut],
      onUpdate: value => {
        t.rotate = value
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
  generateRipple(event) {
    let randRotate = Math.random() * 45

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        this.Ripples.push({
          id: this.id,
          x: event.clientX,
          y: event.clientY,
          size: 0,
          sizeCoef: 1 - 0.05 * i,
          rotate: randRotate + i * 15,
          opacity: 1
        })
        this.animateRipple(this.id)
        this.id++
      }, i * 50)
    }
  }
  view(vnode) {
    return (
      <div class='click-effect-frame' onclick={ event => this.generateRipple(event) }>
        { vnode.children }
        <div class='click-effect-wrapper'>
          <svg class='click-effect' xmlns='http://www.w3.org/2000/svg' version='1.1'>
            { this.Ripples.map(i => (
              <rect
                stroke='#eee'
                stroke-width='1px'
                fill='transparent'
                x={ i.x - i.size / 2 }
                y={ i.y - i.size / 2 }
                width={ i.size }
                height={ i.size }
                opacity={ i.opacity }
                transform={ `rotate(${i.rotate}, ${i.x}, ${i.y})` } />
            )) }
          </svg>
        </div>
      </div>
    )
  }
}

export default ClickEffect