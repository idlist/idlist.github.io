import m from 'mithril'

import Navbar from './components/index/navbar'
import ClickEffect from './components/index/click-effect'
import HomeContent from './components/index/home'
import DimensionsContent from './components/index/dimensions'
import './index.sass'

class Layout {
  view(vnode) {
    return (
      <ClickEffect>
        <div class='main-wrapper'>
          <article class='main-container'>
            { vnode.children }
          </article>
        </div>
        <Navbar />
      </ClickEffect>
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