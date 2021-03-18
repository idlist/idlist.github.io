import m from 'mithril'

const RouteMain = [
  { link: 'home', display: 'Home' },
  { link: 'aspect', display: 'Aspects' }
]

const RouteAspect = [
  { link: 'frontend-js', display: 'Frontend JS' },
  { link: 'backend-js', display: 'Backend JS' },
  { link: 'drawing', display: 'drawing' },
  { link: 'graphic-design', display: 'Graphic Design' },
  { link: 'desktop-music', display: 'Desktop Music' },
  { link: 'others', display: 'others' }
]

const Navbar = {
  view() {
    return [
      m('nav', [
        m('.header', 'i\'DLisT'),
        m('.tag-container', RouteMain.map(route => m(m.route.Link, {
          class: 'tag',
          href: '/' + route.link
        }, route.display))),
        m('.sub-tag-container', RouteAspect.map(route => m(m.route.Link, {
          class: 'sub-tag',
          href: '/aspect/' + route.link
        }, route.display)))
      ])
    ]
  }
}

export default Navbar