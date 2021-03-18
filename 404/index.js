import m from 'mithril'

const Layout = {
  view() {
    return [
      m('p', 'Oh, you found it!')
    ]
  }
}

m.mount(document.body, Layout)