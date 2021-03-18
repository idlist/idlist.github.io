import m from 'mithril'
import './index.styl'

const SampleText = {
  view() {
    return [
      m('h1', 'Sample Text'),
      m('p.sample-text', 'Sample Text'),
      m('a', { href: './test/' }, 'Go to test')
    ]
  }
}

m.mount(document.body, SampleText)