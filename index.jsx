import m from 'mithril'
import './components/fragment-polyfix'

import Navbar from './components/index/navbar'
import HomeContent from './components/index/home'
import DimensionsContent from './components/index/dimensions'
import './index.sass'

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

m.route(document.body, '/home', {
  '/home': {
    render() {
      return (
        <Layout>
          <HomeContent />
        </Layout>
      )
    }
  },
  '/dim': {
    render() {
      return (
        <Layout>
          <DimensionsContent />
        </Layout>
      )
    }
  },
  '/dim/:dim': {
    render() {
      return (
        <Layout>
          <DimensionsContent />
        </Layout>
      )
    }
  }
})