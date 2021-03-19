import m from 'mithril'
import Navbar from './navbar'

class Layout {
  view(vnode) {
    return (
      <>
        <Navbar />
        <article class='main-container'>
          { vnode.children }
        </article>
      </>
    )
  }
}

export default Layout