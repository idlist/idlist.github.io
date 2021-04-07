import m from 'mithril'
import throttle from 'lodash/throttle'

import './home-card.sass'

class HomeCard {
  constructor() {
    this.open = true
    this.height = 0
    this.duration = 0.25 * 1000

    this.dropdownStyle = 'auto'
    this.heightStyle = 'auto'
    this.contentStyle = {
      display: 'auto',
      opacity: 1,
    }

    this.hrClass = ''
  }
  toggleCard() {
    this.open = !this.open

    if (this.open) {
      this.heightStyle = `calc(${this.height}px - 2rem)`
      this.contentStyle.display = 'auto'
      this.hrClass = ''

      setTimeout(() => {
        this.contentStyle.opacity = 1
        m.redraw()
      }, this.duration)
    } else {
      this.contentStyle.opacity = 0
      this.heightStyle = `calc(${this.height}px - 2rem)`

      setTimeout(() => {
        this.heightStyle = '1.5rem'
        this.contentStyle.display = 'none'
        this.hrClass = 'closed'
        m.redraw()
      }, this.duration)
    }

    this.dropdownStyle = 'none'
    setTimeout(() => {
      this.dropdownStyle = 'auto'
    }, this.duration)
  }
  updateHeight(vnode) {
    if (this.open) {
      this.heightStyle = 'auto'
      this.height = vnode.dom.clientHeight
      m.redraw()
    } else {
      this.toggleCard()
    }
  }
  oncreate(vnode) {
    this.updateHeight(vnode)
    window.addEventListener('resize', throttle(() => {
      this.updateHeight(vnode)
    }, 0.2 * 1000))
  }
  view(vnode) {
    return (
      <div
        class='home-card'
        style={ `height: ${this.heightStyle}` }>
        <h1>
          <span>{ vnode.attrs.cardTitle }</span>
          <img
            class={ 'home-card-dropdown' + (this.open ? '' : ' closed') }
            style={ `pointer-events: ${this.dropdownStyle};` }
            src='/buttons/dropdown.png'
            alt='dropdown'
            onclick={ () => { this.toggleCard(vnode) } } />
        </h1>
        <div class='home-card-divider'>
          <hr class={ this.hrClass } />
        </div>
        <div
          class='home-card-content'
          style={ `display: ${this.contentStyle.display};`
            + `opacity: ${this.contentStyle.opacity};` }>
          { vnode.children }
        </div>
      </div>
    )
  }
}

export default HomeCard