import m from 'mithril'
import './index.sass'
import Navbar from './components/index/navbar'

const TestContent = {
  view() {
    return m('p', 'Sample text')
  }
}

const Layout = {
  view(vnode) {
    return m('.main-container', [
      m(Navbar),
      m('article', vnode.children)
    ])
  }
}

m.route(document.body, '/home', {
  '/home': {
    render() {
      return m(Layout, m(TestContent))
    }
  },
  '/aspect': {
    render() {
      return m(Layout, m(TestContent))
    }
  },
  '/aspect/:aspect': {
    render() {
      return m(Layout, m(TestContent))
    }
  }
})