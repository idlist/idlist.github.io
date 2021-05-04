import m from 'mithril'

import './click-effect.sass'

class ClickEffect {
  generateEffect(vnode) {
    console.log(vnode)
  }
  view(vnode) {
    return (
      <div class='click-effect-wrapper' onclick={ event => this.generateEffect(event) }>
        { vnode.children }
        <svg width='100%' height='100%'>
        </svg>
      </div>
    )
  }
}

export default ClickEffect