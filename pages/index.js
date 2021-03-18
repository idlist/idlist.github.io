import m from 'mithril'
import './index.styl'

const Title = {
  view() {
    return [
      m('.', 'Under construction...')
    ]
  }
}

const Layout = {
  view() {
    return m('.main-container', [
      m(Title)
    ])
  }
}

m.mount(document.body, Layout)