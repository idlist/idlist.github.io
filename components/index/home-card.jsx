import m from 'mithril'

import './home-card.sass'

class HomeCard {
  view(vnode) {
    return (
      <div class='home-card'>
        <h1>{ vnode.attrs.cardTitle }</h1>
        <hr />
        { vnode.children }
      </div>
    )
  }
}

export default HomeCard