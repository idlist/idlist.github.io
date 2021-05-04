import m from 'mithril'

import './navbar.sass'

const DimRoute = [
  { link: 'frontend-js', display: 'Frontend JS' },
  { link: 'backend-js', display: 'Backend JS' },
  { link: 'drawing', display: 'Drawing' },
  { link: 'graphic-design', display: 'Graphic Design' },
  { link: 'desktop-music', display: 'Desktop Music' },
  { link: 'others', display: 'Others' }
]

const RouteNames = {
  '/home': 'Home',
  '/dim': 'Dimensions',
  '/dim/frontend-js': 'Frontend JS',
  '/dim/backend-js': 'Backend JS',
  '/dim/drawing': 'Drawing',
  '/dim/graphic-design': 'Graphic Design',
  '/dim/desktop-music': 'Desktop Music',
  '/dim/others': 'Others'
}

class Navbar {
  constructor() {
    this.displaySubTag = false
  }
  setTagClass(tag) {
    return 'tag-container'
      + (m.route.get().startsWith(tag) ? ' tag-selected' : '')
  }
  onupdate() {
    let route = m.route.get()
    document.title = 'i\'DLisT' + ' | ' + RouteNames[route]
  }
  view() {
    return (
      <nav>
        <div class='header'>
          <div class='header-container'>
            <img class='header-icon' src='/icons/idlist.svg' alt='icon' />
            <div class='tag-list'>
              <m.route.Link
                href='/home'
                class={ this.setTagClass('/home') }>
                <div class='tag-background' />
                <div class='tag'>Home</div>
              </m.route.Link>
              <m.route.Link
                href='/dim'
                class={ this.setTagClass('/dim') }
                onmouseover={ () => { this.displaySubTag = true } }
                onmouseout={ () => { this.displaySubTag = false } }>
                <div class='tag-background' />
                <div class='tag'>Dimensions</div>
                <img
                  class={ 'header-dropdown '
                    + (this.displaySubTag ? '' : 'rotated') }
                  src='/buttons/dropdown.png'
                  alt='dropdown'/>
              </m.route.Link>
            </div>
          </div>
        </div>
        <div
          class={ 'sub-tag-list ' + (this.displaySubTag ? 'down' : '') }
          onmouseover={ () => { this.displaySubTag = true } }
          onmouseout={ () => { this.displaySubTag = false } }
          onclick={ () => { this.displaySubTag = false } }>
          <div class='sub-tag-list-container'>
            { DimRoute.map((route, index) =>
              <>
                <m.route.Link
                  class='sub-tag-container'
                  href={ '/dim/' + route.link }>
                  <div class='sub-tag'>{ route.display }</div>
                </m.route.Link>
                { index != DimRoute.length - 1 ? <div class='sub-tag-divider'></div> : '' }
              </>
            ) }
          </div>
        </div>
      </nav >
    )
  }
}

export default Navbar