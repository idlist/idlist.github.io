import m from 'mithril'
import Navbar from './navbar'

class Layout {
  view(vnode) {
    return (
      <>
        <Navbar />
        <article class='container'>
          { vnode.children }
        </article>
      </>
    )
  }
}

export default Layout